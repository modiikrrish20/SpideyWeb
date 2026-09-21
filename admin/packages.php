<?php
/**
 * Wanderlust Voyage - Admin: Tour Packages CRUD Management
 */
require_once __DIR__ . '/../config/db.php';

$db = getDB();

// Fetch all packages with categories
$packages = $db->query("
  SELECT p.*, c.name as category_name 
  FROM packages p 
  JOIN categories c ON p.category_id = c.id 
  ORDER BY p.id DESC
")->fetchAll();

$categories = $db->query("SELECT * FROM categories ORDER BY id ASC")->fetchAll();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Manage Tour Packages | Wanderlust Admin</title>
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  
  <link rel="stylesheet" href="../assets/css/style.css">
  <link rel="stylesheet" href="../assets/css/admin.css">
</head>
<body class="admin-body">

  <!-- Admin Sidebar -->
  <aside class="admin-sidebar">
    <div class="admin-brand">
      <i class="fas fa-compass"></i>
      <span>Wanderlust Admin</span>
    </div>

    <nav class="admin-nav">
      <a href="index.php" class="admin-nav-item">
        <i class="fas fa-chart-pie"></i>
        <span>Dashboard</span>
      </a>
      <a href="packages.php" class="admin-nav-item active">
        <i class="fas fa-map-marked-alt"></i>
        <span>Tour Packages</span>
      </a>
      <a href="bookings.php" class="admin-nav-item">
        <i class="fas fa-calendar-check"></i>
        <span>Bookings</span>
      </a>
      <a href="inquiries.php" class="admin-nav-item">
        <i class="fas fa-envelope-open-text"></i>
        <span>Inquiries</span>
      </a>
      <a href="../index.php" class="admin-nav-item" target="_blank">
        <i class="fas fa-external-link-alt"></i>
        <span>Live Website</span>
      </a>
    </nav>

    <div class="admin-sidebar-footer">
      <a href="../login.php?logout=1" class="btn btn-outline btn-block btn-sm" style="border-color: rgba(255,255,255,0.2);">
        <i class="fas fa-sign-out-alt"></i> Sign Out
      </a>
    </div>
  </aside>

  <!-- Admin Main Workspace -->
  <main class="admin-main">
    <div class="admin-topbar">
      <div class="admin-title-area">
        <h1>Tour Packages Management</h1>
        <p>Create, edit, price, and customize itineraries for world travel experiences.</p>
      </div>

      <div class="admin-top-actions">
        <button id="btn-add-package" class="btn btn-primary btn-sm">
          <i class="fas fa-plus"></i> Add New Package
        </button>
      </div>
    </div>

    <div class="admin-card">
      <table class="data-table">
        <thead>
          <tr>
            <th>Package</th>
            <th>Category</th>
            <th>Duration</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <?php foreach ($packages as $p): ?>
            <tr>
              <td>
                <div class="table-pkg-info">
                  <img src="<?php echo htmlspecialchars($p['featured_image']); ?>" alt="Tour" class="table-pkg-thumb">
                  <div>
                    <strong style="color: var(--admin-primary); display: block;"><?php echo htmlspecialchars($p['title']); ?></strong>
                    <span style="font-size: 0.8rem; color: var(--admin-muted);">
                      <i class="fas fa-map-marker-alt" style="color: var(--admin-accent);"></i> <?php echo htmlspecialchars($p['destination']); ?>, <?php echo htmlspecialchars($p['country']); ?>
                    </span>
                  </div>
                </div>
              </td>
              <td><span class="badge badge-teal"><?php echo htmlspecialchars($p['category_name']); ?></span></td>
              <td><?php echo $p['duration_days']; ?> Days</td>
              <td>
                <strong>₹<?php echo number_format($p['discount_price'] ?? $p['price'], 0); ?></strong>
                <?php if (!empty($p['discount_price'])): ?>
                  <span style="font-size: 0.75rem; text-decoration: line-through; color: var(--admin-muted);">₹<?php echo number_format($p['price'], 0); ?></span>
                <?php endif; ?>
              </td>
              <td>
                <i class="fas fa-star" style="color: var(--accent-gold);"></i> <?php echo number_format($p['rating'], 2); ?>
              </td>
              <td>
                <div style="display: flex; gap: 8px;">
                  <button class="action-btn action-edit btn-edit-package" data-id="<?php echo $p['id']; ?>" title="Edit Package">
                    <i class="fas fa-edit"></i>
                  </button>
                  <button class="action-btn action-delete btn-delete-package" data-id="<?php echo $p['id']; ?>" title="Delete Package">
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </div>
              </td>
            </tr>
          <?php endforeach; ?>
        </tbody>
      </table>
    </div>
  </main>

  <!-- Add / Edit Tour Package Modal -->
  <div class="modal-backdrop" id="admin-package-modal">
    <div class="modal-card" style="max-width: 750px;">
      <div class="modal-header">
        <h3 class="modal-title" id="modal-package-title">Add New Tour Package</h3>
        <button class="modal-close">&times;</button>
      </div>

      <div class="modal-body">
        <form id="admin-package-form">
          <input type="hidden" id="pkg-id-input" name="id">

          <div class="widget-form-group">
            <label class="form-label">Package Title *</label>
            <input type="text" id="pkg-title-input" name="title" class="form-control" placeholder="e.g. Bali Tropical Island Escape & Nusa Penida" required>
          </div>

          <div class="form-row">
            <div class="widget-form-group">
              <label class="form-label">Destination (City/Region) *</label>
              <input type="text" id="pkg-dest-input" name="destination" class="form-control" placeholder="e.g. Bali & Nusa Penida" required>
            </div>
            <div class="widget-form-group">
              <label class="form-label">Country *</label>
              <input type="text" id="pkg-country-input" name="country" class="form-control" placeholder="e.g. Indonesia" required>
            </div>
          </div>

          <div class="form-row">
            <div class="widget-form-group">
              <label class="form-label">Category *</label>
              <select id="pkg-cat-input" name="category_id" class="form-control" required>
                <?php foreach ($categories as $cat): ?>
                  <option value="<?php echo $cat['id']; ?>"><?php echo htmlspecialchars($cat['name']); ?></option>
                <?php endforeach; ?>
              </select>
            </div>
            <div class="widget-form-group">
              <label class="form-label">Duration (Days & Nights)</label>
              <div style="display: flex; gap: 8px;">
                <input type="number" id="pkg-days-input" name="duration_days" class="form-control" placeholder="Days" value="7" min="1" required>
                <input type="number" id="pkg-nights-input" name="duration_nights" class="form-control" placeholder="Nights" value="6" min="0" required>
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="widget-form-group">
              <label class="form-label">Regular Price (₹ INR) *</label>
              <input type="number" step="0.01" id="pkg-price-input" name="price" class="form-control" placeholder="24999.00" required>
            </div>
            <div class="widget-form-group">
              <label class="form-label">Discount Price (₹ INR, Optional)</label>
              <input type="number" step="0.01" id="pkg-disc-input" name="discount_price" class="form-control" placeholder="19999.00">
            </div>
          </div>

          <div class="widget-form-group">
            <label class="form-label">Featured Image URL</label>
            <input type="url" id="pkg-img-input" name="featured_image" class="form-control" placeholder="https://images.unsplash.com/photo-..." required>
          </div>

          <div class="widget-form-group">
            <label class="form-label">Short Summary (1-2 sentences for catalog cards)</label>
            <textarea id="pkg-summary-input" name="summary" class="form-control" rows="2" placeholder="Brief enticing overview of highlights..." required></textarea>
          </div>

          <div class="widget-form-group">
            <label class="form-label">Full Tour Description</label>
            <textarea id="pkg-desc-input" name="description" class="form-control" rows="4" placeholder="Comprehensive background of the journey..." required></textarea>
          </div>

          <div class="form-row">
            <div class="widget-form-group">
              <label class="form-label">Inclusions (Comma separated)</label>
              <textarea id="pkg-inc-input" name="inclusions" class="form-control" rows="2" placeholder="4-star Resort, Guided tours, Breakfast, Transfers"></textarea>
            </div>
            <div class="widget-form-group">
              <label class="form-label">Exclusions (Comma separated)</label>
              <textarea id="pkg-exc-input" name="exclusions" class="form-control" rows="2" placeholder="Flights, Personal expenses, Visa"></textarea>
            </div>
          </div>

          <div style="display: flex; justify-content: flex-end; gap: 12px; margin-top: 24px;">
            <button type="button" class="btn btn-outline-dark" onclick="document.getElementById('admin-package-modal').classList.remove('active')">Cancel</button>
            <button type="submit" class="btn btn-primary"><i class="fas fa-save"></i> Save Tour Package</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <script src="../assets/js/admin.js"></script>
</body>
</html>
