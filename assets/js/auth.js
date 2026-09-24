/**
 * SpidyWeb Tours & Travels - Centralized Authentication & Session Manager
 * Handles: Login, Registration, Password Reset, Database Connectivity,
 * Client-Side Persistence, Navbar User Profile Sync, and Route Gating.
 */

// Global User Accounts Storage Key for offline/demo persistence
const AUTH_USER_KEY = 'spidey_auth_user';
const REGISTERED_USERS_KEY = 'spidey_registered_users';

// Pre-seeded User Accounts (Strictly 2 accounts: Krrish Modi and Hiten Patil)
const DEFAULT_ACCOUNTS = [
  {
    id: 1,
    full_name: 'Krrish Modi',
    email: 'modik3654@gmail.com',
    password: 'user123',
    role: 'customer',
    phone: '+91 98765 43210',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 2,
    full_name: 'Hiten Patil',
    email: 'hiten@gmail.com',
    password: '12345',
    role: 'customer',
    phone: '+91 98221 44556',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  }
];

// Initialize local registered accounts if not present
function getRegisteredUsers() {
  try {
    let stored = JSON.parse(localStorage.getItem(REGISTERED_USERS_KEY) || '[]');
    if (!Array.isArray(stored) || stored.length === 0) {
      localStorage.setItem(REGISTERED_USERS_KEY, JSON.stringify(DEFAULT_ACCOUNTS));
      return DEFAULT_ACCOUNTS;
    }

    // Purge unwanted old dummy accounts from localStorage
    stored = stored.filter(u =>
      u.email !== 'hiten.patel@gmail.com'
    );

    // Fix Patil spelling on hiten account
    stored.forEach(u => {
      if (u.email && u.email.toLowerCase() === 'hiten@gmail.com') {
        u.full_name = 'Hiten Patil';
      }
    });

    // Ensure default 2 accounts are present
    DEFAULT_ACCOUNTS.forEach(defAcc => {
      if (!stored.some(u => u.email.toLowerCase() === defAcc.email.toLowerCase())) {
        stored.push(defAcc);
      }
    });

    // Number of IDs matches exactly the created accounts (re-indexed 1, 2, ...)
    stored.forEach((u, i) => { u.id = i + 1; });
    localStorage.setItem(REGISTERED_USERS_KEY, JSON.stringify(stored));
    return stored;
  } catch (e) {
    return DEFAULT_ACCOUNTS;
  }
}

function saveRegisteredUser(newUser) {
  const users = getRegisteredUsers();
  // Check if exists and update, else add
  const idx = users.findIndex(u => u.email.toLowerCase() === newUser.email.toLowerCase());
  if (idx >= 0) {
    users[idx] = { ...users[idx], ...newUser };
  } else {
    newUser.id = users.length + 1;
    users.push(newUser);
  }
  localStorage.setItem(REGISTERED_USERS_KEY, JSON.stringify(users));
  return newUser;
}

// Current logged-in user session
function getAuthUser() {
  try {
    const raw = localStorage.getItem(AUTH_USER_KEY);
    if (!raw) return null;
    const user = JSON.parse(raw);
    if (user && user.email && user.email.toLowerCase() === 'hiten@gmail.com' && user.full_name !== 'Hiten Patil') {
      user.full_name = 'Hiten Patil';
      localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
    }
    return user;
  } catch (e) {
    return null;
  }
}

function setAuthUser(user) {
  try {
    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
  } catch (e) {
    console.error('Error saving user session', e);
  }
}

function logoutUser() {
  try {
    localStorage.removeItem(AUTH_USER_KEY);
    sessionStorage.removeItem(AUTH_USER_KEY);
  } catch (e) { }

  try {
    if (navigator.sendBeacon) {
      navigator.sendBeacon('api/auth.php', new URLSearchParams({ action: 'logout' }));
    } else {
      fetch('api/auth.php', {
        method: 'POST',
        body: new URLSearchParams({ action: 'logout' })
      }).catch(() => { });
    }
  } catch (e) { }

  // Immediately redirect to login with explicit logout parameter, replacing history
  window.location.replace('login.html?logout=1');
}

/**
 * Route Gating: Ensures user enters ID and Password before accessing the website
 */
function requireAuth() {
  const currentPage = window.location.pathname.split('/').pop().toLowerCase();
  const isLoginPage = currentPage === 'login.html' || currentPage === 'login.php' || currentPage === 'login';

  const user = getAuthUser();

  // If user is on login page and explicit logout flag is present, force clear session
  if (isLoginPage) {
    const params = new URLSearchParams(window.location.search);
    if (params.get('logout') || params.get('logged_out')) {
      localStorage.removeItem(AUTH_USER_KEY);
      sessionStorage.removeItem(AUTH_USER_KEY);
      return true;
    }
    // Never auto-redirect away from login page to prevent bouncing loops
    return true;
  }

  // Protected pages require an active authenticated user
  if (!user) {
    const redirectUrl = encodeURIComponent(window.location.pathname.split('/').pop() + window.location.search);
    window.location.replace(`login.html?redirect=${redirectUrl}`);
    return false;
  }

  return true;
}

/**
 * Synchronize User Identity across Top Navigation Bar and Dropdowns
 */
function syncNavbarUser() {
  const user = getAuthUser();
  if (!user) return;

  // Name elements across headers, dropdowns, dashboards, and profile cards
  document.querySelectorAll(
    '.user-avatar-btn span, #nav-user-name, .user-name-display, ' +
    '.user-dropdown div > p:first-child, .user-dropdown p[style*="font-weight: 700"], ' +
    '#dashboard-user-name, #avatar-modal .modal-body p[style*="font-weight: 700"], ' +
    '.profile-name-display'
  ).forEach(el => {
    el.innerText = user.full_name;
  });

  // Email elements
  document.querySelectorAll(
    '.user-dropdown p[style*="font-size: 0.75rem"], #nav-user-email, .user-email-display, .profile-email-display'
  ).forEach(el => {
    el.innerText = user.email;
  });

  // Phone elements
  if (user.phone) {
    document.querySelectorAll('.user-phone-display, #nav-user-phone').forEach(el => {
      el.innerText = user.phone;
    });
  }

  // Dashboard Welcome Header (my-bookings.html)
  const welcomeHeading = document.getElementById('dashboard-welcome-heading') ||
    document.querySelector('h1[style*="color: var(--primary-navy)"]');
  if (welcomeHeading && welcomeHeading.innerText.includes('Welcome,')) {
    welcomeHeading.innerHTML = `Welcome, <span class="user-name-display">${user.full_name}</span>`;
  }

  const welcomeSub = document.getElementById('dashboard-welcome-sub');
  if (welcomeSub) {
    welcomeSub.innerHTML = `<i class="fas fa-envelope"></i> <span class="user-email-display">${user.email}</span> &bull; <i class="fas fa-phone"></i> <span class="user-phone-display">${user.phone || '+91 98765 43210'}</span>`;
  }

  // Avatar Image elements - prioritize custom avatar saved in localStorage
  const savedAvatar = (user.email && localStorage.getItem('userAvatar_' + user.email.toLowerCase())) ||
                      localStorage.getItem('userAvatar') ||
                      user.avatar ||
                      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80';

  // Keep session user.avatar synchronized with effective avatar
  if (user.avatar !== savedAvatar) {
    user.avatar = savedAvatar;
    try {
      localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
    } catch (e) { }
  }

  document.querySelectorAll('#header-dp, #dashboard-dp, .user-avatar-img, .user-avatar-btn img, #avatar-modal .modal-body img.user-avatar-img').forEach(img => {
    img.src = savedAvatar;
    if (user.full_name) img.alt = user.full_name;
  });

  // Logout links - trigger immediate logout with zero delay or blocking alerts
  document.querySelectorAll('a[href*="login.html"], .logout-trigger-btn').forEach(btn => {
    if (btn.innerText.includes('Logout') || btn.innerText.includes('Sign Out')) {
      btn.href = 'javascript:void(0)';
      btn.onclick = (e) => {
        e.preventDefault();
        logoutUser();
      };
    }
  });
}

/**
 * Update and propagate Profile Photo (DP) globally across sessions, storage, and DOM
 */
function updateUserAvatar(newAvatarSrc) {
  if (!newAvatarSrc) return;

  const user = getAuthUser();
  if (user) {
    user.avatar = newAvatarSrc;
    setAuthUser(user);

    // Update in registered users database so it persists across re-login
    try {
      const users = getRegisteredUsers();
      const idx = users.findIndex(u => u.email && u.email.toLowerCase() === user.email.toLowerCase());
      if (idx >= 0) {
        users[idx].avatar = newAvatarSrc;
        localStorage.setItem(REGISTERED_USERS_KEY, JSON.stringify(users));
      }
    } catch (e) { }

    // Account-scoped avatar key
    try {
      localStorage.setItem('userAvatar_' + user.email.toLowerCase(), newAvatarSrc);
    } catch (e) { }
  }

  // Global fallback key for immediate sync across components
  try {
    localStorage.setItem('userAvatar', newAvatarSrc);
  } catch (e) { }

  // Update all current DOM elements immediately
  document.querySelectorAll('#header-dp, #dashboard-dp, .user-avatar-img, .user-avatar-btn img, #avatar-modal .modal-body img.user-avatar-img').forEach(img => {
    img.src = newAvatarSrc;
    if (user && user.full_name) img.alt = user.full_name;
  });

  // Notify any other active scripts on the page
  try {
    window.dispatchEvent(new CustomEvent('spidey_avatar_changed', { detail: { avatar: newAvatarSrc } }));
  } catch (e) { }
}

// Real-time Cross-Tab & Cross-Page Synchronization:
// When DP is changed in another tab (e.g. My Bookings), the Home Page navbar updates immediately!
window.addEventListener('storage', (e) => {
  if (e.key === 'userAvatar' || (e.key && e.key.startsWith('userAvatar_')) || e.key === AUTH_USER_KEY) {
    syncNavbarUser();
  }
});

// Automatically enforce auth gating and header sync on script load
document.addEventListener('DOMContentLoaded', () => {
  requireAuth();
  syncNavbarUser();
});

// Export globally for browser scripts
window.SpideyAuth = {
  getAuthUser,
  setAuthUser,
  logoutUser,
  requireAuth,
  syncNavbarUser,
  updateUserAvatar,
  getRegisteredUsers,
  saveRegisteredUser
};
