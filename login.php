<?php
/**
 * Wanderlust Voyage - Dedicated Login & Registration Portal
 */
require_once __DIR__ . '/config/db.php';

// Handle Logout
if (isset($_GET['logout'])) {
    $_SESSION = [];
    if (ini_get("session.use_cookies")) {
        $params = session_get_cookie_params();
        setcookie(session_name(), '', time() - 42000,
            $params["path"], $params["domain"],
            $params["secure"], $params["httponly"]
        );
    }
    session_destroy();
    header("Location: index.php");
    exit;
}

$pageTitle = 'Sign In or Join Wanderlust';
require_once __DIR__ . '/includes/header.php';
?>

<div style="min-height: 85vh; display: flex; align-items: center; justify-content: center; padding: 120px 20px 60px; background: linear-gradient(135deg, #0a192f 0%, #172a45 100%);">
  <div style="width: 100%; max-width: 500px; background: #ffffff; border-radius: var(--radius-lg); box-shadow: var(--shadow-xl); overflow: hidden; padding: 40px 36px;">
    
    <div style="text-align: center; margin-bottom: 28px;">
      <a href="index.php" class="logo" style="color: var(--primary-navy); justify-content: center; margin-bottom: 8px;">
        <i class="fas fa-spider" style="color: var(--accent-coral);"></i>
        <span>SpidyWeb</span>
      </a>
      <p style="color: var(--text-muted); font-size: 0.9rem;">Sign in to access your bookings and travel vouchers</p>
    </div>

    <!-- Toggle Buttons -->
    <div style="display: flex; gap: 8px; margin-bottom: 24px; background: var(--bg-main); padding: 4px; border-radius: var(--radius-full);">
      <button type="button" id="tab-btn-signin" class="btn btn-sm btn-block active" style="background: var(--primary-navy); color: #fff;" onclick="switchAuthTab('login')">
        Sign In
      </button>
      <button type="button" id="tab-btn-signup" class="btn btn-sm btn-block" style="background: transparent; color: var(--text-muted);" onclick="switchAuthTab('register')">
        Create Account
      </button>
    </div>

    <!-- Sign In Form -->
    <form id="page-login-form" onsubmit="handleAuthSubmit(event, 'login')">
      <div class="widget-form-group">
        <label class="widget-label">Email Address</label>
        <input type="email" id="login-email" name="email" class="widget-input" placeholder="alex@example.com" value="alex@example.com" required>
      </div>

      <div class="widget-form-group">
        <label class="widget-label">Password</label>
        <input type="password" id="login-password" name="password" class="widget-input" placeholder="••••••••" value="user123" required>
      </div>

      <button type="submit" id="btn-login-submit" class="btn btn-primary btn-block btn-lg" style="margin-top: 10px;">
        <i class="fas fa-sign-in-alt"></i> Sign In
      </button>
    </form>

    <!-- Sign Up Form -->
    <form id="page-register-form" style="display: none;" onsubmit="handleAuthSubmit(event, 'register')">
      <div class="widget-form-group">
        <label class="widget-label">Full Name</label>
        <input type="text" name="full_name" class="widget-input" placeholder="Eleanor Vance" required>
      </div>

      <div class="widget-form-group">
        <label class="widget-label">Email Address</label>
        <input type="email" name="email" class="widget-input" placeholder="eleanor@example.com" required>
      </div>

      <div class="widget-form-group">
        <label class="widget-label">Phone Number</label>
        <input type="tel" name="phone" class="widget-input" placeholder="+1 555 0192">
      </div>

      <div class="widget-form-group">
        <label class="widget-label">Password</label>
        <input type="password" name="password" class="widget-input" placeholder="Min 6 characters" required>
      </div>

      <button type="submit" id="btn-register-submit" class="btn btn-primary btn-block btn-lg" style="margin-top: 10px;">
        <i class="fas fa-user-plus"></i> Complete Registration
      </button>
    </form>
  </div>
</div>

<script>
function switchAuthTab(type) {
  const loginForm = document.getElementById('page-login-form');
  const registerForm = document.getElementById('page-register-form');
  const btnLogin = document.getElementById('tab-btn-signin');
  const btnRegister = document.getElementById('tab-btn-signup');

  if (type === 'login') {
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
    btnLogin.style.background = 'var(--primary-navy)';
    btnLogin.style.color = '#fff';
    btnRegister.style.background = 'transparent';
    btnRegister.style.color = 'var(--text-muted)';
  } else {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
    btnRegister.style.background = 'var(--primary-navy)';
    btnRegister.style.color = '#fff';
    btnLogin.style.background = 'transparent';
    btnLogin.style.color = 'var(--text-muted)';
  }
}

function fillCredentials(email, pass) {
  document.getElementById('login-email').value = email;
  document.getElementById('login-password').value = pass;
  showToast('Filled credentials for ' + email, 'info');
}

async function handleAuthSubmit(e, action) {
  e.preventDefault();
  const form = document.getElementById(action === 'login' ? 'page-login-form' : 'page-register-form');
  const fd = new FormData(form);
  fd.append('action', action);

  try {
    const res = await fetch('api/auth.php', {
      method: 'POST',
      body: fd
    });
    const data = await res.json();
    if (data.success) {
      showToast(data.message || 'Authentication successful!', 'success');
      if (data.user && data.user.role === 'admin') {
        setTimeout(() => window.location.href = 'admin/index.php', 700);
      } else {
        setTimeout(() => window.location.href = 'my-bookings.php', 700);
      }
    } else {
      showToast(data.error || 'Authentication error.', 'error');
    }
  } catch (err) {
    showToast('Network error.', 'error');
  }
}
</script>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
