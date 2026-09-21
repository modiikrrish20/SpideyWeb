<?php
/**
 * Wanderlust Voyage - Admin: Bookings & Reservations Management
 */
require_once __DIR__ . '/../config/db.php';

$db = getDB();

$statusFilter = $_GET['status'] ?? 'all';
$sql = "
  SELECT b.*, p.title as package_title, p.destination, u.full_name as user_name, u.email as user_email, u.phone as user_phone 
  FROM bookings b 
  JOIN packages p ON b.package_id = p.id 
  JOIN users u ON b.user_id = u.id 
";

if ($statusFilter !== 'all') {
    $sql .= " WHERE b.booking_status = " . $db->quote($statusFilter);
}

$sql .= " ORDER BY b.created_at DESC";
$bookings = $db->query($sql)->fetchAll();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Manage Bookings | Wanderlust Admin</title>
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  
  <link rel="stylesheet" href="../assets/css/style.css">
  <link rel="stylesheet" href="../assets/css/admin.css">
</head>
<body class="admin-body">

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
      <a href="packages.php" class="admin-nav-item">
        <i class="fas fa-map-marked-alt"></i>
        <span>Tour Packages</span>
      </a>
      <a href="bookings.php" class="admin-nav-item active">
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

  <main class="admin-main">
    <div class="admin-topbar">
      <div class="admin-title-area">
        <h1>Customer Bookings & Reservations</h1>
        <p>Review reservations, verify payments, and update fulfillment statuses.</p>
      </div>

      <div class="admin-top-actions">
        <div style="display: flex; gap: 8px;">
          <a href="bookings.php?status=all" class="btn btn-sm <?php echo $statusFilter === 'all' ? 'btn-primary' : 'btn-outline-dark'; ?>">All</a>
          <a href="bookings.php?status=confirmed" class="btn btn-sm <?php echo $statusFilter === 'confirmed' ? 'btn-primary' : 'btn-outline-dark'; ?>">Confirmed</a>
          <a href="bookings.php?status=pending" class="btn btn-sm <?php echo $statusFilter === 'pending' ? 'btn-primary' : 'btn-outline-dark'; ?>">Pending</a>
          <a href="bookings.php?status=cancelled" class="btn btn-sm <?php echo $statusFilter === 'cancelled' ? 'btn-primary' : 'btn-outline-dark'; ?>">Cancelled</a>
        </div>
      </div>
    </div>

    <div class="admin-card">
      <table class="data-table">
        <thead>
          <tr>
            <th>Reference</th>
            <th>Customer Info</th>
            <th>Package & Destination</th>
            <th>Travel Date</th>
            <th>Guests</th>
            <th>Total Amount</th>
            <th>Status (Change Live)</th>
          </tr>
        </thead>
        <tbody>
          <?php foreach ($bookings as $b): ?>
            <tr>
              <td>
                <span style="font-family: monospace; font-weight: 700; color: var(--accent-coral); background: rgba(255,90,95,0.08); padding: 4px 8px; border-radius: 4px;">
                  <?php echo htmlspecialchars($b['booking_ref']); ?>
                </span>
              </td>
              <td>
                <strong style="color: var(--admin-primary);"><?php echo htmlspecialchars($b['user_name']); ?></strong>
                <div style="font-size: 0.8rem; color: var(--admin-muted);"><?php echo htmlspecialchars($b['user_email']); ?></div>
                <div style="font-size: 0.75rem; color: var(--admin-muted);"><?php echo htmlspecialchars($b['user_phone'] ?? 'N/A'); ?></div>
              </td>
              <td>
                <strong style="color: var(--admin-primary); display: block;"><?php echo htmlspecialchars($b['package_title']); ?></strong>
                <span style="font-size: 0.8rem; color: var(--admin-muted);"><i class="fas fa-map-marker-alt"></i> <?php echo htmlspecialchars($b['destination']); ?></span>
              </td>
              <td><?php echo date('M d, Y', strtotime($b['travel_date'])); ?></td>
              <td><?php echo $b['adults']; ?> Ad / <?php echo $b['children']; ?> Ch</td>
              <td>
                <strong style="color: var(--accent-green); font-size: 1.05rem;">₹<?php echo number_format($b['total_amount'], 2); ?></strong>
                <div style="font-size: 0.75rem; color: var(--admin-muted);"><?php echo htmlspecialchars($b['payment_method']); ?></div>
              </td>
              <td>
                <select class="select-booking-status status-badge status-<?php echo htmlspecialchars($b['booking_status']); ?>" data-id="<?php echo $b['id']; ?>" style="cursor: pointer; border: none; outline: none; font-weight: 700;">
                  <option value="confirmed" <?php echo $b['booking_status'] === 'confirmed' ? 'selected' : ''; ?>>Confirmed</option>
                  <option value="pending" <?php echo $b['booking_status'] === 'pending' ? 'selected' : ''; ?>>Pending</option>
                  <option value="completed" <?php echo $b['booking_status'] === 'completed' ? 'selected' : ''; ?>>Completed</option>
                  <option value="cancelled" <?php echo $b['booking_status'] === 'cancelled' ? 'selected' : ''; ?>>Cancelled</option>
                </select>
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
