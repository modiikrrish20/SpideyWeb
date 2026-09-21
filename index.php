<?php
/**
 * SpidyWeb Tours & Travels - Home Page & Tour Catalog
 */
$pageTitle = 'Luxury Tour Packages Across India & The World';
require_once __DIR__ . '/includes/header.php';

$db = getDB();

// Fetch all active categories
$categories = $db->query("SELECT * FROM categories ORDER BY id ASC")->fetchAll();

// Fetch packages
$packages = $db->query("
  SELECT p.*, c.name as category_name, c.slug as category_slug 
  FROM packages p 
  JOIN categories c ON p.category_id = c.id 
  WHERE p.status = 'active' 
  ORDER BY p.is_featured DESC, p.created_at DESC
")->fetchAll();
?>

<!-- Hero Section -->
<section class="hero">
  <div class="container">
    <div class="hero-content">
      <div class="hero-tagline">
        <i class="fas fa-spider" style="color: var(--accent-coral);"></i> SpidyWeb Premier Travel Network
      </div>
      <h1 class="hero-title">
        Explore <span>Incredible India</span> & World Wonders
      </h1>
      <p class="hero-desc">
        Weaving unforgettable travel stories — from Kerala's tranquil backwaters and Ladakh's high-altitude passes to the Swiss Alps and Bali's tropical cliffs.
      </p>
    </div>

    <!-- Interactive Search Bar -->
    <div class="search-card">
      <div class="search-field">
        <label class="search-label"><i class="fas fa-map-marker-alt"></i> Where to in India or Global?</label>
        <input type="text" id="search-destination" class="search-input" placeholder="e.g. Kerala, Bali, Dubai, Meghalaya, Ooty, Ladakh, Goa, Kashmir">
      </div>

      <!-- MakeMyTrip Style Date & Duration Picker Trigger -->
      <div class="search-field date-picker-field" id="mmt-date-picker-wrap">
        <label class="search-label"><i class="fas fa-calendar-alt"></i> Stay Dates & Duration</label>
        <div class="date-trigger-box" id="mmt-date-trigger" tabindex="0" role="button" aria-haspopup="dialog" aria-expanded="false" title="Click to select stay dates like MakeMyTrip">
          <div class="date-val-wrap">
            <span class="date-val-primary" id="mmt-date-display">Select Stay Dates</span>
            <span class="date-val-sub" id="mmt-duration-sub">Months & All Dates</span>
          </div>
          <span class="mmt-duration-pill" id="mmt-duration-pill" style="display: none;">0 Nights</span>
        </div>
        <!-- Hidden input for search filter engine compatibility -->
        <input type="hidden" id="search-duration" value="all">
        <input type="hidden" id="checkin-date" value="">
        <input type="hidden" id="checkout-date" value="">
      </div>

      <div class="search-field">
        <label class="search-label"><i class="fas fa-rupee-sign"></i> Max Budget (INR)</label>
        <select id="search-budget" class="search-input" style="cursor: pointer;">
          <option value="9999999">Any Budget</option>
          <option value="20000">Under ₹20,000</option>
          <option value="30000">Under ₹30,000</option>
          <option value="50000">Under ₹50,000</option>
          <option value="100000">Under ₹1,00,000</option>
          <option value="200000">Under ₹2,00,000</option>
        </select>
      </div>

      <div class="search-field">
        <label class="search-label"><i class="fas fa-calendar-alt"></i> Travel Season</label>
        <select class="search-input" style="cursor: pointer;">
          <option>Festive Autumn 2026</option>
          <option>Winter Snow Season 2026</option>
          <option>Spring / Summer 2027</option>
        </select>
      </div>

      <button id="btn-hero-search" class="btn btn-primary btn-lg">
        <i class="fas fa-search"></i> Search Tours
      </button>

      <!-- MakeMyTrip Style Dual-Month Calendar Popover -->
      <div class="mmt-calendar-popover" id="mmt-calendar-popover" role="dialog" aria-label="MakeMyTrip Stay Date Picker" style="display: none;">
        <div class="mmt-popover-header">
          <div class="mmt-header-title">
            <i class="fas fa-calendar-alt"></i>
            <div>
              <h4>Select Dates & Duration</h4>
              <p>Pick check-in & check-out dates to calculate duration</p>
            </div>
          </div>
          <div class="mmt-nav-group">
            <button type="button" class="mmt-nav-arrow" id="mmt-prev-month" aria-label="Previous Month">
              <i class="fas fa-chevron-left"></i>
            </button>
            <button type="button" class="mmt-nav-arrow" id="mmt-next-month" aria-label="Next Month">
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        <!-- Dual Month Container -->
        <div class="mmt-dual-months" id="mmt-dual-months">
          <!-- Dynamically rendered via JS -->
        </div>

        <!-- Calendar Popover Footer -->
        <div class="mmt-popover-footer">
          <div class="mmt-footer-info">
            <div class="mmt-date-chips">
              <div class="mmt-chip" id="mmt-checkin-chip">
                <span class="chip-label">Check-in</span>
                <span class="chip-date" id="mmt-chip-in-val">Select date</span>
              </div>
              <i class="fas fa-arrow-right chip-arrow"></i>
              <div class="mmt-chip" id="mmt-checkout-chip">
                <span class="chip-label">Check-out</span>
                <span class="chip-date" id="mmt-chip-out-val">Select date</span>
              </div>
            </div>
            <div class="mmt-footer-nights" id="mmt-nights-summary">
              <i class="fas fa-moon"></i> <span>Pick check-in date</span>
            </div>
          </div>
          <div class="mmt-footer-actions">
            <button type="button" class="btn btn-sm btn-outline" id="mmt-clear-btn">Reset</button>
            <button type="button" class="btn btn-sm btn-primary" id="mmt-apply-btn" disabled>Apply Dates</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Key Platform Stats -->
    <div class="hero-stats">
      <div class="stat-item">
        <div class="stat-number">25,000+</div>
        <div class="stat-label">Happy Explorers</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">28+</div>
        <div class="stat-label">Indian States & UTs</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">40+</div>
        <div class="stat-label">Global Destinations</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">99.6%</div>
        <div class="stat-label">Five-Star Reviews</div>
      </div>
    </div>
  </div>
</section>

<!-- Featured Tours Section -->
<section class="section" id="featured-tours">
  <div class="container">
    <div class="section-header">
      <span class="section-subtitle">Handcrafted by SpidyWeb</span>
      <h2 class="section-title">Popular Vacation Packages</h2>
      <p class="section-desc">
        Choose from authentic Indian cultural journeys, luxury backwater houseboats, Himalayan mountain expeditions, and world-class island retreats.
      </p>
    </div>

    <!-- Category Filter Pills -->
    <div class="category-filter-wrap">
      <button class="filter-btn active" data-category="all">
        <i class="fas fa-globe-americas"></i> All Experiences
      </button>
      <?php foreach ($categories as $cat): ?>
        <button class="filter-btn" data-category="<?php echo htmlspecialchars($cat['slug']); ?>">
          <i class="fas <?php echo htmlspecialchars($cat['icon']); ?>"></i> <?php echo htmlspecialchars($cat['name']); ?>
        </button>
      <?php endforeach; ?>
    </div>

    <!-- Packages Grid -->
    <div class="packages-grid" id="packages-container">
      <?php foreach ($packages as $pkg): ?>
        <article class="package-card" 
                 data-category="<?php echo htmlspecialchars($pkg['category_slug']); ?>"
                 data-destination="<?php echo htmlspecialchars($pkg['destination']); ?>"
                 data-title="<?php echo htmlspecialchars($pkg['title']); ?>"
                 data-duration="<?php echo $pkg['duration_days']; ?>"
                 data-price="<?php echo $pkg['discount_price'] ?? $pkg['price']; ?>">
          
          <div class="card-img-wrap">
            <img src="<?php echo htmlspecialchars($pkg['featured_image']); ?>" alt="<?php echo htmlspecialchars($pkg['title']); ?>" loading="lazy">
            
            <div class="card-badges">
              <?php if ($pkg['is_bestseller']): ?>
                <span class="badge badge-coral"><i class="fas fa-fire"></i> Best Seller</span>
              <?php endif; ?>
              <?php if (!empty($pkg['discount_price'])): ?>
                <?php 
                  $savingPct = round((($pkg['price'] - $pkg['discount_price']) / $pkg['price']) * 100);
                ?>
                <span class="badge badge-gold"><i class="fas fa-tag"></i> Save <?php echo $savingPct; ?>%</span>
              <?php endif; ?>
            </div>

            <button class="card-wishlist" data-id="<?php echo $pkg['id']; ?>" aria-label="Save to Wishlist">
              <i class="far fa-heart"></i>
            </button>

            <div class="card-duration">
              <i class="far fa-clock"></i> <?php echo $pkg['duration_days']; ?> Days / <?php echo $pkg['duration_nights']; ?> Nights
            </div>
          </div>

          <div class="card-body">
            <div class="card-location">
              <i class="fas fa-map-marker-alt"></i> <?php echo htmlspecialchars($pkg['destination']); ?>, <?php echo htmlspecialchars($pkg['country']); ?>
            </div>

            <h3 class="card-title">
              <a href="package-details.php?slug=<?php echo urlencode($pkg['slug']); ?>">
                <?php echo htmlspecialchars($pkg['title']); ?>
              </a>
            </h3>

            <p class="card-summary">
              <?php echo htmlspecialchars($pkg['summary']); ?>
            </p>

            <div class="card-meta">
              <div class="card-rating">
                <i class="fas fa-star"></i> <?php echo number_format($pkg['rating'], 2); ?>
                <span>(<?php echo $pkg['reviews_count']; ?> reviews)</span>
              </div>
              <div class="card-group-size">
                <i class="fas fa-user-friends"></i> Max <?php echo $pkg['max_group_size']; ?> Guests
              </div>
            </div>

            <div class="card-footer">
              <div class="card-price-wrap">
                <span class="card-price-label">From</span>
                <div>
                  <span class="card-price">₹<?php echo number_format($pkg['discount_price'] ?? $pkg['price'], 0); ?></span>
                  <?php if (!empty($pkg['discount_price'])): ?>
                    <span class="card-price-original">₹<?php echo number_format($pkg['price'], 0); ?></span>
                  <?php endif; ?>
                </div>
              </div>

              <div style="display: flex; gap: 8px;">
                <a href="package-details.php?slug=<?php echo urlencode($pkg['slug']); ?>" class="btn btn-outline-dark btn-sm">
                  Details
                </a>
                <button class="btn btn-primary btn-sm btn-open-booking" 
                        data-id="<?php echo $pkg['id']; ?>"
                        data-title="<?php echo htmlspecialchars($pkg['title']); ?>"
                        data-price="<?php echo $pkg['discount_price'] ?? $pkg['price']; ?>"
                        data-destination="<?php echo htmlspecialchars($pkg['destination']); ?>"
                        data-duration="<?php echo $pkg['duration_days']; ?> Days">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </article>
      <?php endforeach; ?>
    </div>

    <!-- No Results Warning Banner -->
    <div id="no-search-results" style="display: none; text-align: center; padding: 60px 20px; background: var(--bg-card); border-radius: var(--radius-lg); margin-top: 30px; border: 1px dashed var(--border-light);">
      <i class="fas fa-search-location" style="font-size: 3.5rem; color: var(--accent-coral); margin-bottom: 16px;"></i>
      <h3 style="font-size: 1.4rem; margin-bottom: 8px;">No packages match your search filters</h3>
      <p style="color: var(--text-muted); margin-bottom: 20px;">Try searching for Kerala, Ladakh, Goa, Kashmir, Rajasthan, Varanasi, Bali, or Swiss Alps.</p>
      <button class="btn btn-outline-dark" onclick="window.location.reload();">Reset All Filters</button>
    </div>
  </div>
</section>

<!-- Popular Indian & Global Destinations Showcase -->
<section class="section" id="destinations" style="background: #f8fafc;">
  <div class="container">
    <div class="section-header">
      <span class="section-subtitle">Must-Visit Hotspots</span>
      <h2 class="section-title">Trending Destinations in India & Beyond</h2>
      <p class="section-desc">
        From the majestic Himalayas and tranquil Kerala backwaters to golden Thar deserts and Mediterranean coastlines.
      </p>
    </div>

    <div class="destinations-grid">
      <!-- 1. Kerala -->
      <div class="dest-card">
        <img src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=700&q=80" alt="Kerala Backwaters">
        <div class="dest-overlay">
          <span class="dest-country">India - God's Own Country</span>
          <h3 class="dest-name">Kerala & Munnar Hills</h3>
          <p class="dest-tours"><i class="fas fa-water"></i> Houseboat Cruises & Tea Plantations</p>
        </div>
      </div>

      <!-- 2. Ladakh -->
      <div class="dest-card">
        <img src="https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=700&q=80" alt="Ladakh Pangong">
        <div class="dest-overlay">
          <span class="dest-country">India - Land of High Passes</span>
          <h3 class="dest-name">Ladakh & Pangong Lake</h3>
          <p class="dest-tours"><i class="fas fa-mountain"></i> Khardung La Pass & Nubra Dunes</p>
        </div>
      </div>

      <!-- 3. Goa -->
      <div class="dest-card">
        <img src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=700&q=80" alt="Goa Beach">
        <div class="dest-overlay">
          <span class="dest-country">India - Coastal Paradise</span>
          <h3 class="dest-name">Goa Beaches & Churches</h3>
          <p class="dest-tours"><i class="fas fa-umbrella-beach"></i> Water Sports & Sunset Cruises</p>
        </div>
      </div>

      <!-- 4. Kashmir -->
      <div class="dest-card">
        <img src="https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=700&q=80" alt="Kashmir Dal Lake">
        <div class="dest-overlay">
          <span class="dest-country">India - Heaven on Earth</span>
          <h3 class="dest-name">Kashmir & Gulmarg</h3>
          <p class="dest-tours"><i class="fas fa-snowflake"></i> Dal Lake Shikaras & Gondola Cable Car</p>
        </div>
      </div>

      <!-- 5. Rajasthan -->
      <div class="dest-card">
        <img src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=700&q=80" alt="Rajasthan Forts">
        <div class="dest-overlay">
          <span class="dest-country">India - Land of Kings</span>
          <h3 class="dest-name">Rajasthan Royal Heritage</h3>
          <p class="dest-tours"><i class="fas fa-monument"></i> Jaipur Forts, Lake Pichola & Thar Dunes</p>
        </div>
      </div>

      <!-- 6. Swiss Alps -->
      <div class="dest-card">
        <img src="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=700&q=80" alt="Swiss Alps">
        <div class="dest-overlay">
          <span class="dest-country">Switzerland</span>
          <h3 class="dest-name">Swiss Alps & Interlaken</h3>
          <p class="dest-tours"><i class="fas fa-mountain"></i> Glacier Hiking & Scenic Trains</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Why Choose SpidyWeb Section -->
<section class="section features-section">
  <div class="container">
    <div class="section-header">
      <span class="section-subtitle">Why Travel With Us</span>
      <h2 class="section-title">The SpidyWeb Advantage</h2>
      <p class="section-desc">
        We prioritize comfort, authentic local immersion, and peace of mind at every step of your voyage.
      </p>
    </div>

    <div class="features-grid">
      <div class="feature-card">
        <div class="feature-icon coral">
          <i class="fas fa-shield-alt"></i>
        </div>
        <h3 class="feature-title">100% Verified Stays</h3>
        <p class="feature-desc">Every boutique hotel, luxury tent, and houseboat is personally inspected for top comfort and service.</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon teal">
          <i class="fas fa-user-tie"></i>
        </div>
        <h3 class="feature-title">Native Tour Guides</h3>
        <p class="feature-desc">Passionate local experts who unlock historic secrets and hidden viewpoints.</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon gold">
          <i class="fas fa-rupee-sign"></i>
        </div>
        <h3 class="feature-title">Best Price Guarantee</h3>
        <p class="feature-desc">Direct wholesale partner pricing with zero hidden fees and transparent pricing.</p>
      </div>

      <div class="feature-card">
        <div class="feature-icon green">
          <i class="fas fa-headset"></i>
        </div>
        <h3 class="feature-title">24/7 Travel Concierge</h3>
        <p class="feature-desc">Round-the-clock emergency support, flight tracking, and instant on-trip assistance.</p>
      </div>
    </div>
  </div>
</section>

<!-- Testimonials Section -->
<section class="section" style="background: #ffffff;">
  <div class="container">
    <div class="section-header">
      <span class="section-subtitle">Guest Reviews</span>
      <h2 class="section-title">Stories From SpidyWeb Explorers</h2>
      <p class="section-desc">
        Read real feedback from adventurers who booked their dream vacation through SpidyWeb.
      </p>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 28px;">
      <div style="background: var(--bg-main); padding: 32px; border-radius: var(--radius-lg); border: 1px solid var(--border-light);">
        <div style="color: var(--accent-gold); margin-bottom: 16px; font-size: 1.1rem;">
          <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
        </div>
        <p style="font-style: italic; margin-bottom: 20px; color: var(--text-main); line-height: 1.6;">
          "The Alleppey houseboat booked through SpidyWeb was heavenly! Waking up to misty canals and hot South Indian breakfast was unforgettable."
        </p>
        <div style="display: flex; align-items: center; gap: 12px;">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Priya" style="width: 44px; height: 44px; border-radius: 50%; object-fit: cover;">
          <div>
            <h4 style="font-size: 0.95rem;">Priya Sharma</h4>
            <span style="font-size: 0.8rem; color: var(--text-muted);">Traveled to Kerala Backwaters</span>
          </div>
        </div>
      </div>

      <div style="background: var(--bg-main); padding: 32px; border-radius: var(--radius-lg); border: 1px solid var(--border-light);">
        <div style="color: var(--accent-gold); margin-bottom: 16px; font-size: 1.1rem;">
          <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
        </div>
        <p style="font-style: italic; margin-bottom: 20px; color: var(--text-main); line-height: 1.6;">
          "SpidyWeb made our Ladakh expedition seamless. The oxygen support in the vehicle and cozy tents right on Pangong Lake made it 10/10."
        </p>
        <div style="display: flex; align-items: center; gap: 12px;">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Rohan" style="width: 44px; height: 44px; border-radius: 50%; object-fit: cover;">
          <div>
            <h4 style="font-size: 0.95rem;">Rohan Mathur</h4>
            <span style="font-size: 0.8rem; color: var(--text-muted);">Traveled to Ladakh Himalayan Passes</span>
          </div>
        </div>
      </div>

      <div style="background: var(--bg-main); padding: 32px; border-radius: var(--radius-lg); border: 1px solid var(--border-light);">
        <div style="color: var(--accent-gold); margin-bottom: 16px; font-size: 1.1rem;">
          <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
        </div>
        <p style="font-style: italic; margin-bottom: 20px; color: var(--text-main); line-height: 1.6;">
          "The Swiss Alps tour was spectacular. Booking on SpidyWeb took less than 2 minutes and our passes were ready instantly."
        </p>
        <div style="display: flex; align-items: center; gap: 12px;">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Elena" style="width: 44px; height: 44px; border-radius: 50%; object-fit: cover;">
          <div>
            <h4 style="font-size: 0.95rem;">Elena Rostova</h4>
            <span style="font-size: 0.8rem; color: var(--text-muted);">Traveled to Swiss Alps Adventure</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
