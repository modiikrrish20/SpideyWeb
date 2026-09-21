<?php
/**
 * Wanderlust Voyage - Admin Portal: Dashboard & Analytics Overview
 */
require_once __DIR__ . '/../config/db.php';

$db = getDB();
$currentUser = getLoggedInUser();

// Total KPIs
$totalBookings  = $db->query("SELECT COUNT(*) as count FROM bookings")->fetch()['count'];
$totalRevenue   = $db->query("SELECT SUM(total_amount) as total FROM bookings WHERE payment_status = 'paid'")->fetch()['total'] ?? 0;
$activePackages = $db->query("SELECT COUNT(*) as count FROM packages WHERE status = 'active'")->fetch()['count'];
$unreadInq      = $db->query("SELECT COUNT(*) as count FROM inquiries WHERE status = 'unread'")->fetch()['count'];

// Recent Bookings
$recentBookings = $db->query("
  SELECT b.*, p.title as package_title, u.full_name as user_name, u.email as user_email 
  FROM bookings b 
  JOIN packages p ON b.package_id = p.id 
  JOIN users u ON b.user_id = u.id 
  ORDER BY b.created_at DESC 
  LIMIT 5
")->fetchAll();

// Recent Inquiries
$recentInquiries = $db->query("
  SELECT * FROM inquiries 
  ORDER BY created_at DESC 
  LIMIT 4
")->fetchAll();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin Dashboard | Wanderlust Management</title>
  
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
      <a href="index.php" class="admin-nav-item active">
        <i class="fas fa-chart-pie"></i>
        <span>Dashboard</span>
      </a>
      <a href="packages.php" class="admin-nav-item">
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
        <?php if ($unreadInq > 0): ?>
          <span class="badge badge-coral" style="margin-left: auto;"><?php echo $unreadInq; ?></span>
        <?php endif; ?>
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
        <h1>Overview & Analytics</h1>
        <p>Real-time booking revenue, package activity, and customer demand metrics.</p>
      </div>

      <div class="admin-top-actions">
        <div class="admin-user-pill">
          <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80" alt="Admin">
          <span style="font-size: 0.9rem; font-weight: 700;">Administrator</span>
        </div>
      </div>
    </div>

    <!-- KPI Summary Grid -->
    <div class="kpi-grid">
      <div class="kpi-card">
        <div class="kpi-info">
          <h3>Total Gross Revenue</h3>
          <div class="kpi-val">₹<?php echo number_format($totalRevenue, 2); ?></div>
        </div>
        <div class="kpi-icon green">
          <i class="fas fa-rupee-sign"></i>
        </div>
      </div>

      <div class="kpi-card">
        <div class="kpi-info">
          <h3>Total Reservations</h3>
          <div class="kpi-val"><?php echo $totalBookings; ?></div>
        </div>
        <div class="kpi-icon coral">
          <i class="fas fa-ticket-alt"></i>
        </div>
      </div>

      <div class="kpi-card">
        <div class="kpi-info">
          <h3>Active Tour Packages</h3>
          <div class="kpi-val"><?php echo $activePackages; ?></div>
        </div>
        <div class="kpi-icon teal">
          <i class="fas fa-globe"></i>
        </div>
      </div>

      <div class="kpi-card">
        <div class="kpi-info">
          <h3>Customer Inquiries</h3>
          <div class="kpi-val"><?php echo $unreadInq; ?></div>
        </div>
        <div class="kpi-icon gold">
          <i class="fas fa-comment-dots"></i>
        </div>
      </div>
    </div>

    <!-- Charts Row -->
    <div class="charts-grid">
      <div class="admin-card">
        <div class="admin-card-header">
          <h2 class="admin-card-title"><i class="fas fa-chart-line" style="color: var(--admin-accent);"></i> Monthly Revenue Performance</h2>
          <span class="badge badge-teal">Year 2026</span>
        </div>
        <div class="chart-canvas-wrap">
          <canvas id="revenueChartCanvas"></canvas>
        </div>
      </div>

      <div class="admin-card">
        <div class="admin-card-header">
          <h2 class="admin-card-title"><i class="fas fa-chart-pie" style="color: var(--accent-gold);"></i> Popular Hotspots</h2>
        </div>
        <div class="chart-canvas-wrap">
          <canvas id="destShareChartCanvas"></canvas>
        </div>
      </div>
    </div>

    <!-- Recent Bookings Table -->
    <div class="admin-card">
      <div class="admin-card-header">
        <h2 class="admin-card-title"><i class="fas fa-calendar-check" style="color: var(--admin-accent);"></i> Recent Bookings</h2>
        <a href="bookings.php" class="btn btn-outline-dark btn-sm">View All Bookings</a>
      </div>

      <table class="data-table">
        <thead>
          <tr>
            <th>Reference</th>
            <th>Customer</th>
            <th>Tour Package</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <?php foreach ($recentBookings as $rb): ?>
            <tr>
              <td>
                <span style="font-family: monospace; font-weight: 700; color: var(--accent-coral);">
                  <?php echo htmlspecialchars($rb['booking_ref']); ?>
                </span>
              </td>
              <td>
                <strong style="color: var(--admin-primary);"><?php echo htmlspecialchars($rb['user_name']); ?></strong>
                <div style="font-size: 0.75rem; color: var(--admin-muted);"><?php echo htmlspecialchars($rb['user_email']); ?></div>
              </td>
              <td><?php echo htmlspecialchars($rb['package_title']); ?></td>
              <td><?php echo date('M d, Y', strtotime($rb['travel_date'])); ?></td>
              <td><strong>₹<?php echo number_format($rb['total_amount'], 2); ?></strong></td>
              <td>
                <span class="status-badge status-<?php echo htmlspecialchars($rb['booking_status']); ?>">
                  <?php echo ucfirst(htmlspecialchars($rb['booking_status'])); ?>
                </span>
              </td>
            </tr>
          <?php endforeach; ?>
        </tbody>
      </table>
    </div>

  </main>

  <script src="../assets/js/admin.js"></script>
</body>
</html>
