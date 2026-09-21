<?php
/**
 * Wanderlust Voyage - Dedicated Admin Login Portal
 */
require_once __DIR__ . '/../config/db.php';

$error = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email    = cleanInput($_POST['email'] ?? '');
    $password = $_POST['password'] ?? '';

    $db = getDB();
    $stmt = $db->prepare("SELECT * FROM users WHERE email = ? AND role = 'admin' LIMIT 1");
    $stmt->execute([$email]);
    $admin = $stmt->fetch();

    if ($admin && password_verify($password, $admin['password'])) {
        session_regenerate_id(true);
        $_SESSION['user_id']     = $admin['id'];
        $_SESSION['user_name']   = $admin['full_name'];
        $_SESSION['user_email']  = $admin['email'];
        $_SESSION['user_role']   = 'admin';
        $_SESSION['user_avatar'] = $admin['avatar'];

        header("Location: index.php");
        exit;
    } else {
        $error = 'Invalid administrator credentials. Try admin@wanderlust.com / admin123';
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin Sign In | Wanderlust Portal</title>
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  
  <link rel="stylesheet" href="../assets/css/style.css">
  <link rel="stylesheet" href="../assets/css/admin.css">
</head>
<body style="background: linear-gradient(135deg, #07111e 0%, #0a192f 100%); min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 20px;">

  <div style="width: 100%; max-width: 440px; background: #ffffff; border-radius: var(--radius-lg); box-shadow: var(--shadow-xl); padding: 40px 36px;">
    <div style="text-align: center; margin-bottom: 28px;">
      <div style="width: 60px; height: 60px; border-radius: 50%; background: rgba(255, 90, 95, 0.12); color: var(--accent-coral); display: inline-flex; align-items: center; justify-content: center; font-size: 1.8rem; margin-bottom: 14px;">
        <i class="fas fa-shield-alt"></i>
      </div>
      <h2 style="font-size: 1.6rem; color: var(--primary-navy); font-weight: 800;">Staff & Admin Portal</h2>
      <p style="color: var(--text-muted); font-size: 0.85rem; margin-top: 4px;">Authorized operations personnel only</p>
    </div>

    <?php if (!empty($error)): ?>
      <div style="background: #fee2e2; border-left: 4px solid #ef4444; color: #b91c1c; padding: 12px; border-radius: var(--radius-sm); font-size: 0.85rem; margin-bottom: 20px;">
        <?php echo htmlspecialchars($error); ?>
      </div>
    <?php endif; ?>

    <form method="POST" action="login.php">
      <div class="widget-form-group">
        <label class="form-label">Admin Email</label>
        <input type="email" name="email" class="form-control" value="admin@wanderlust.com" required>
      </div>

      <div class="widget-form-group">
        <label class="form-label">Password</label>
        <input type="password" name="password" class="form-control" value="admin123" required>
      </div>

      <button type="submit" class="btn btn-primary btn-block btn-lg" style="margin-top: 10px;">
        <i class="fas fa-lock"></i> Access Control Center
      </button>

      <div style="text-align: center; margin-top: 20px;">
        <a href="../index.php" style="font-size: 0.85rem; color: var(--text-muted);"><i class="fas fa-arrow-left"></i> Return to Main Website</a>
      </div>
    </form>
  </div>

</body>
</html>
