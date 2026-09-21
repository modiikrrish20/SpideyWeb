<?php
/**
 * Wanderlust Voyage - Admin: Customer Inquiries Inbox
 */
require_once __DIR__ . '/../config/db.php';

$db = getDB();
$inquiries = $db->query("SELECT * FROM inquiries ORDER BY created_at DESC")->fetchAll();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Customer Inquiries | Wanderlust Admin</title>
  
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
      <a href="bookings.php" class="admin-nav-item">
        <i class="fas fa-calendar-check"></i>
        <span>Bookings</span>
      </a>
      <a href="inquiries.php" class="admin-nav-item active">
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
        <h1>Customer Inquiries & Messages</h1>
        <p>Manage customer questions, custom tour requests, and support tickets.</p>
      </div>
    </div>

    <div class="admin-card">
      <table class="data-table">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Subject</th>
            <th>Message</th>
            <th>Date Received</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <?php foreach ($inquiries as $inq): ?>
            <tr>
              <td>
                <strong style="color: var(--admin-primary);"><?php echo htmlspecialchars($inq['name']); ?></strong>
                <div style="font-size: 0.8rem; color: var(--admin-muted);"><?php echo htmlspecialchars($inq['email']); ?></div>
                <div style="font-size: 0.75rem; color: var(--admin-muted);"><?php echo htmlspecialchars($inq['phone'] ?? 'N/A'); ?></div>
              </td>
              <td><strong><?php echo htmlspecialchars($inq['subject']); ?></strong></td>
              <td style="max-width: 320px; font-size: 0.9rem; color: var(--text-muted);">
                <?php echo htmlspecialchars($inq['message']); ?>
              </td>
              <td><?php echo date('M d, Y h:i A', strtotime($inq['created_at'])); ?></td>
              <td>
                <span class="badge inquiry-status-pill <?php echo $inq['status'] === 'unread' ? 'badge-coral' : 'badge-green'; ?>">
                  <?php echo ucfirst(htmlspecialchars($inq['status'])); ?>
                </span>
              </td>
              <td>
                <?php if ($inq['status'] === 'unread'): ?>
                  <button class="btn btn-primary btn-sm btn-resolve-inquiry" data-id="<?php echo $inq['id']; ?>">
                    <i class="fas fa-check"></i> Mark Replied
                  </button>
                <?php else: ?>
                  <span style="font-size: 0.85rem; color: var(--accent-green);"><i class="fas fa-check-double"></i> Resolved</span>
                <?php endif; ?>
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
