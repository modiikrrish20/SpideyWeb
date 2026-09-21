<?php
/**
 * SpidyWeb Tours & Travels - Common Semantic Header & Navigation Bar
 */
require_once __DIR__ . '/../config/db.php';
$currentUser = getLoggedInUser();
$currentPage = basename($_SERVER['PHP_SELF'], '.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="SpidyWeb Tours & Travels - Premier Tour & Travel Management System. Explore Incredible India, Kerala Backwaters, Ladakh, Goa, Kashmir, Rajasthan, and luxury global holiday packages.">
  <meta name="keywords" content="SpidyWeb, travel, tour management system, India tour packages, Kerala houseboat, Ladakh safari, Goa beaches, holiday booking">
  <title><?php echo isset($pageTitle) ? $pageTitle . ' | ' . APP_NAME : APP_NAME . ' - ' . APP_TAGLINE; ?></title>

  <!-- Google Fonts & Font Awesome Icons -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

  <!-- Core Stylesheet -->
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>

  <!-- Navigation Bar -->
  <header class="navbar">
    <div class="container navbar-inner">
      <a href="index.php" class="logo">
        <i class="fas fa-spider" style="color: var(--accent-coral);"></i>
        <span>SpidyWeb</span>
      </a>

      <nav class="nav-links">
        <a href="index.php" class="nav-link <?php echo ($currentPage === 'index') ? 'active' : ''; ?>">Home</a>
        <a href="index.php#featured-tours" class="nav-link">Packages <span class="nav-count-badge">16</span></a>

        <!-- Travel Seasons Dropdown Menu in Navbar -->
        <div class="nav-dropdown-wrap" id="seasons-nav-wrap">
          <button type="button" class="nav-link nav-dropdown-btn" id="seasons-nav-btn" aria-haspopup="true" aria-expanded="false">
            <i class="far fa-calendar-alt" style="color: var(--accent-gold);"></i> Seasons <i class="fas fa-chevron-down nav-caret"></i>
          </button>
          <div class="nav-dropdown-panel" id="seasons-nav-menu">
            <div class="dropdown-header-tag">Explore by Weather & Best Time</div>
            <a href="javascript:void(0)" class="dropdown-season-item" data-season="all">
              <span class="season-badge-icon" style="background: rgba(10,25,47,0.08); color: var(--primary-navy);"><i class="fas fa-globe-americas"></i></span>
              <div class="season-info-text">
                <span class="season-name">All Seasons (16 Stacks)</span>
                <span class="season-hint">Every iconic destination across India & Global</span>
              </div>
            </a>
            <a href="javascript:void(0)" class="dropdown-season-item" data-season="spring-summer">
              <span class="season-badge-icon" style="background: #fef3c7; color: #d97706;">🌸</span>
              <div class="season-info-text">
                <span class="season-name">Spring & Summer (Mar – Jun)</span>
                <span class="season-hint">Manali, Ooty, Bali, Swiss Alps, Ladakh</span>
              </div>
            </a>
            <a href="javascript:void(0)" class="dropdown-season-item" data-season="monsoon">
              <span class="season-badge-icon" style="background: #e0f2fe; color: #0284c7;">🌧️</span>
              <div class="season-info-text">
                <span class="season-name">Monsoon Greens (Jul – Sep)</span>
                <span class="season-hint">Kerala backwaters, Meghalaya falls & Bali</span>
              </div>
            </a>
            <a href="javascript:void(0)" class="dropdown-season-item" data-season="autumn">
              <span class="season-badge-icon" style="background: #ffedd5; color: #ea580c;">🍁</span>
              <div class="season-info-text">
                <span class="season-name">Festive Autumn (Oct – Nov)</span>
                <span class="season-hint">Rajasthan, Varanasi, Dubai & Darjeeling</span>
              </div>
            </a>
            <a href="javascript:void(0)" class="dropdown-season-item" data-season="winter">
              <span class="season-badge-icon" style="background: #eff6ff; color: #2563eb;">❄️</span>
              <div class="season-info-text">
                <span class="season-name">Winter Snow & Sun (Dec – Feb)</span>
                <span class="season-hint">Kashmir Gulmarg snow, Goa & Andaman beaches</span>
              </div>
            </a>
          </div>
        </div>

        <a href="index.php#destinations" class="nav-link">Destinations</a>
        <a href="about.php" class="nav-link <?php echo ($currentPage === 'about') ? 'active' : ''; ?>">About</a>
        <a href="contact.php" class="nav-link <?php echo ($currentPage === 'contact') ? 'active' : ''; ?>">Contact</a>
        <?php if ($currentUser): ?>
          <a href="my-bookings.php" class="nav-link <?php echo ($currentPage === 'my-bookings') ? 'active' : ''; ?>"><i class="fas fa-suitcase-rolling" style="font-size: 0.8rem;"></i> My Trips</a>
        <?php endif; ?>
      </nav>

      <div class="nav-actions">
        <?php if ($currentUser): ?>
          <div class="user-profile-menu">
            <div class="user-avatar-btn">
              <img src="<?php echo htmlspecialchars($currentUser['avatar']); ?>" alt="Avatar">
              <span><?php echo htmlspecialchars(explode(' ', $currentUser['full_name'])[0]); ?></span>
              <i class="fas fa-chevron-down" style="font-size: 0.7rem; opacity: 0.75;"></i>
            </div>
            <div class="user-dropdown">
              <div style="padding: 10px 18px; border-bottom: 1px solid var(--border-light);">
                <p style="font-weight: 700; font-size: 0.9rem;"><?php echo htmlspecialchars($currentUser['full_name']); ?></p>
                <p style="font-size: 0.75rem; color: var(--text-muted);"><?php echo htmlspecialchars($currentUser['email']); ?></p>
              </div>
              <a href="my-bookings.php" class="dropdown-item">
                <i class="fas fa-suitcase-rolling"></i> My Bookings
              </a>
              <a href="javascript:void(0)" onclick="openAvatarModal()" class="dropdown-item">
                <i class="fas fa-camera"></i> Change Profile Photo (DP)
              </a>
              <?php if ($currentUser['role'] === 'admin'): ?>
                <a href="admin/index.php" class="dropdown-item">
                  <i class="fas fa-chart-line"></i> Admin Dashboard
                </a>
              <?php endif; ?>
              <div class="dropdown-divider"></div>
              <a href="login.php?logout=1" class="dropdown-item" style="color: #ef4444;">
                <i class="fas fa-sign-out-alt"></i> Logout
              </a>
            </div>
          </div>
        <?php else: ?>
          <a href="login.php" class="btn btn-outline btn-sm">Sign In</a>
          <button class="btn btn-primary btn-sm btn-open-auth">Join Free</button>
        <?php endif; ?>

        <a href="admin/index.php" class="nav-admin-btn" title="Admin Portal">
          <i class="fas fa-shield-alt"></i> <span>Admin Portal</span>
        </a>

        <button class="mobile-menu-btn" aria-label="Toggle Menu">
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </div>
  </header>
