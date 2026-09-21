<?php
/**
 * Wanderlust Voyage - Tour Package Details & Itinerary Page
 */
require_once __DIR__ . '/config/db.php';

$slug = $_GET['slug'] ?? '';
$id   = $_GET['id'] ?? null;

$db = getDB();

if ($id) {
    $stmt = $db->prepare("
        SELECT p.*, c.name as category_name, c.slug as category_slug 
        FROM packages p 
        JOIN categories c ON p.category_id = c.id 
        WHERE p.id = ? 
        LIMIT 1
    ");
    $stmt->execute([(int)$id]);
} else {
    $stmt = $db->prepare("
        SELECT p.*, c.name as category_name, c.slug as category_slug 
        FROM packages p 
        JOIN categories c ON p.category_id = c.id 
        WHERE p.slug = ? 
        LIMIT 1
    ");
    $stmt->execute([$slug]);
}

$pkg = $stmt->fetch();

if (!$pkg) {
    header("Location: index.php");
    exit;
}

$pageTitle = $pkg['title'];

// Fetch Itinerary Days
$itStmt = $db->prepare("SELECT * FROM itineraries WHERE package_id = ? ORDER BY day_number ASC");
$itStmt->execute([$pkg['id']]);
$itineraries = $itStmt->fetchAll();

// Fetch Reviews
$revStmt = $db->prepare("
    SELECT r.*, u.full_name as user_name, u.avatar as user_avatar 
    FROM reviews r 
    JOIN users u ON r.user_id = u.id 
    WHERE r.package_id = ? 
    ORDER BY r.created_at DESC
");
$revStmt->execute([$pkg['id']]);
$reviews = $revStmt->fetchAll();

// Parse Gallery Images
$gallery = array_filter(explode(',', $pkg['gallery_images'] ?? ''));

// Inclusions & Exclusions Arrays
$inclusions = array_map('trim', explode(',', $pkg['inclusions']));
$exclusions = array_map('trim', explode(',', $pkg['exclusions']));

require_once __DIR__ . '/includes/header.php';
?>

<!-- Details Hero -->
<section class="details-hero">
  <div class="container">
    <div class="details-breadcrumb">
      <a href="index.php">Home</a>
      <i class="fas fa-chevron-right" style="font-size: 0.7rem;"></i>
      <a href="index.php#featured-tours"><?php echo htmlspecialchars($pkg['category_name']); ?></a>
      <i class="fas fa-chevron-right" style="font-size: 0.7rem;"></i>
      <span><?php echo htmlspecialchars($pkg['destination']); ?></span>
    </div>

    <h1 class="details-title"><?php echo htmlspecialchars($pkg['title']); ?></h1>

    <div class="details-meta-bar">
      <span><i class="fas fa-map-marker-alt"></i> <?php echo htmlspecialchars($pkg['destination']); ?>, <?php echo htmlspecialchars($pkg['country']); ?></span>
      <span><i class="far fa-clock"></i> <?php echo $pkg['duration_days']; ?> Days / <?php echo $pkg['duration_nights']; ?> Nights</span>
      <span><i class="fas fa-star" style="color: var(--accent-gold);"></i> <?php echo number_format($pkg['rating'], 2); ?> (<?php echo $pkg['reviews_count']; ?> verified reviews)</span>
      <span><i class="fas fa-users"></i> Max Group: <?php echo $pkg['max_group_size']; ?> travelers</span>
    </div>

    <!-- Photo Gallery Showcase -->
    <div class="gallery-grid">
      <div class="gallery-item gallery-item-main">
        <img src="<?php echo htmlspecialchars($pkg['featured_image']); ?>" alt="<?php echo htmlspecialchars($pkg['title']); ?>">
      </div>
      <?php foreach ($gallery as $imgUrl): ?>
        <div class="gallery-item">
          <img src="<?php echo htmlspecialchars($imgUrl); ?>" alt="Gallery Image">
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- Details Main Content Layout -->
<section class="section" style="padding-top: 50px;">
  <div class="container details-layout">
    <!-- Left Column: Itinerary, Story, Inclusions, Reviews -->
    <div class="details-content">
      <!-- Tour Overview -->
      <div class="details-block">
        <h2 class="details-heading"><i class="fas fa-info-circle"></i> Journey Overview</h2>
        <p style="font-size: 1.05rem; color: var(--text-main); line-height: 1.7; margin-bottom: 20px;">
          <?php echo nl2br(htmlspecialchars($pkg['description'])); ?>
        </p>
      </div>

      <!-- Day-by-Day Itinerary Timeline -->
      <div class="details-block">
        <h2 class="details-heading"><i class="fas fa-map-marked-alt"></i> Day-by-Day Itinerary</h2>
        
        <?php if (!empty($itineraries)): ?>
          <div class="timeline">
            <?php foreach ($itineraries as $it): ?>
              <div class="timeline-item">
                <div class="timeline-dot"><?php echo $it['day_number']; ?></div>
                <h3 class="timeline-title">Day <?php echo $it['day_number']; ?>: <?php echo htmlspecialchars($it['title']); ?></h3>
                <p class="timeline-desc"><?php echo nl2br(htmlspecialchars($it['description'])); ?></p>
                <div class="timeline-tags">
                  <span class="timeline-tag"><i class="fas fa-utensils"></i> <?php echo htmlspecialchars($it['meals']); ?></span>
                  <span class="timeline-tag"><i class="fas fa-bed"></i> <?php echo htmlspecialchars($it['stay']); ?></span>
                </div>
              </div>
            <?php endforeach; ?>
          </div>
        <?php else: ?>
          <p style="color: var(--text-muted);">A personalized detailed itinerary schedule will be supplied by your tour concierge upon booking.</p>
        <?php endif; ?>
      </div>

      <!-- Inclusions & Exclusions -->
      <div class="details-block">
        <h2 class="details-heading"><i class="fas fa-clipboard-check"></i> What's Included & Excluded</h2>
        
        <div class="inclusions-grid">
          <div>
            <h3 style="font-size: 1.1rem; color: var(--accent-green); margin-bottom: 14px;">
              <i class="fas fa-check-circle"></i> Included in Price
            </h3>
            <ul class="inclusion-list">
              <?php foreach ($inclusions as $inc): ?>
                <li><i class="fas fa-check"></i> <span><?php echo htmlspecialchars($inc); ?></span></li>
              <?php endforeach; ?>
            </ul>
          </div>

          <div>
            <h3 style="font-size: 1.1rem; color: var(--accent-coral); margin-bottom: 14px;">
              <i class="fas fa-times-circle"></i> Excluded
            </h3>
            <ul class="exclusion-list">
              <?php foreach ($exclusions as $exc): ?>
                <li><i class="fas fa-times"></i> <span><?php echo htmlspecialchars($exc); ?></span></li>
              <?php endforeach; ?>
            </ul>
          </div>
        </div>
      </div>

      <!-- Reviews Section -->
      <div class="details-block" id="reviews">
        <h2 class="details-heading"><i class="fas fa-star"></i> Traveler Reviews (<?php echo count($reviews); ?>)</h2>

        <?php if (!empty($reviews)): ?>
          <div style="display: flex; flex-direction: column; gap: 20px; margin-bottom: 36px;">
            <?php foreach ($reviews as $rev): ?>
              <div style="padding: 20px; background: var(--bg-main); border-radius: var(--radius-md); border: 1px solid var(--border-light);">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px;">
                  <div style="display: flex; align-items: center; gap: 12px;">
                    <img src="<?php echo htmlspecialchars($rev['user_avatar']); ?>" alt="User" style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover;">
                    <div>
                      <h4 style="font-size: 0.95rem;"><?php echo htmlspecialchars($rev['user_name']); ?></h4>
                      <span style="font-size: 0.75rem; color: var(--text-muted);"><?php echo date('F d, Y', strtotime($rev['created_at'])); ?></span>
                    </div>
                  </div>
                  <div style="color: var(--accent-gold); font-size: 0.9rem;">
                    <?php for ($i = 1; $i <= 5; $i++): ?>
                      <i class="<?php echo ($i <= $rev['rating']) ? 'fas' : 'far'; ?> fa-star"></i>
                    <?php endfor; ?>
                  </div>
                </div>
                <p style="color: var(--text-main); font-size: 0.95rem;"><?php echo htmlspecialchars($rev['comment']); ?></p>
              </div>
            <?php endforeach; ?>
          </div>
        <?php else: ?>
          <p style="color: var(--text-muted); margin-bottom: 24px;">No reviews submitted yet. Be the first explorer to review this tour!</p>
        <?php endif; ?>

        <!-- Write Review Box -->
        <div style="background: #ffffff; padding: 24px; border: 1px solid var(--border-light); border-radius: var(--radius-md);">
          <h3 style="font-size: 1.1rem; margin-bottom: 14px;">Leave Your Review</h3>
          <form id="form-add-review" onsubmit="handleReviewSubmit(event, <?php echo $pkg['id']; ?>)">
            <div style="margin-bottom: 14px;">
              <label class="widget-label">Your Star Rating</label>
              <select name="rating" class="widget-input" style="cursor: pointer;" required>
                <option value="5">⭐⭐⭐⭐⭐ 5 Stars - Exceptional</option>
                <option value="4">⭐⭐⭐⭐ 4 Stars - Very Good</option>
                <option value="3">⭐⭐⭐ 3 Stars - Average</option>
                <option value="2">⭐⭐ 2 Stars - Below Expectations</option>
                <option value="1">⭐ 1 Star - Disappointing</option>
              </select>
            </div>
            <div style="margin-bottom: 16px;">
              <label class="widget-label">Your Detailed Review & Tips</label>
              <textarea name="comment" class="widget-input" rows="3" placeholder="Tell fellow travelers what made this journey special..." required></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-sm">
              <i class="fas fa-paper-plane"></i> Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Right Column: Sticky Booking Widget -->
    <div class="details-sidebar">
      <aside class="booking-widget">
        <div class="widget-price-head">
          <div>
            <span class="card-price-label">Starting Price</span>
            <div class="widget-price">₹<?php echo number_format($pkg['discount_price'] ?? $pkg['price'], 0); ?></div>
          </div>
          <?php if (!empty($pkg['discount_price'])): ?>
            <span class="badge badge-gold">Special Deal</span>
          <?php endif; ?>
        </div>

        <button class="btn btn-primary btn-block btn-lg btn-open-booking"
                data-id="<?php echo $pkg['id']; ?>"
                data-title="<?php echo htmlspecialchars($pkg['title']); ?>"
                data-price="<?php echo $pkg['discount_price'] ?? $pkg['price']; ?>"
                data-destination="<?php echo htmlspecialchars($pkg['destination']); ?>"
                data-duration="<?php echo $pkg['duration_days']; ?> Days">
          <i class="fas fa-calendar-check"></i> Book This Tour Now
        </button>

        <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid var(--border-light); font-size: 0.85rem; color: var(--text-muted); display: flex; flex-direction: column; gap: 10px;">
          <div><i class="fas fa-check text-success" style="color: var(--accent-green); margin-right: 6px;"></i> Free cancellation up to 7 days before departure</div>
          <div><i class="fas fa-check text-success" style="color: var(--accent-green); margin-right: 6px;"></i> Instant booking confirmation voucher</div>
          <div><i class="fas fa-check text-success" style="color: var(--accent-green); margin-right: 6px;"></i> 24/7 dedicated trip concierge support</div>
        </div>
      </aside>
    </div>
  </div>
</section>

<script>
async function handleReviewSubmit(e, packageId) {
  e.preventDefault();
  const form = document.getElementById('form-add-review');
  const fd = new FormData(form);
  fd.append('package_id', packageId);

  try {
    const res = await fetch('api/reviews.php', {
      method: 'POST',
      body: fd
    });
    const data = await res.json();
    if (data.success) {
      showToast('Thank you! Your review has been added.', 'success');
      setTimeout(() => window.location.reload(), 800);
    } else {
      showToast(data.error || 'Failed to submit review.', 'error');
    }
  } catch (err) {
    showToast('Network error while posting review.', 'error');
  }
}
</script>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
