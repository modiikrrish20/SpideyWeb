/**
 * SpidyWeb Tours & Travels - Main Client-Side JavaScript Engine (main.js)
 * Handles navigation, search filters, destination stacks, quick stack modal, wishlist, and auth
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileNav();
  initDestinationCardsRenderer();
  initCategoryFilters();
  initNavbarSeasons();
  initSearchEngine();
  initMmtDatePicker();
  initWishlist();
  initFaqAccordion();
  initAuthModals();
  initAvatarManager();
  initQuickStackModal();
});

/**
 * Sticky Navbar styling on scroll
 */
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

/**
 * Mobile Navigation Drawer Toggle
 */
function initMobileNav() {
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const navbar = document.querySelector('.navbar');
  if (!mobileBtn || !navbar) return;

  mobileBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    navbar.classList.toggle('nav-open');
    const icon = mobileBtn.querySelector('i');
    if (icon) {
      if (navbar.classList.contains('nav-open')) {
        icon.className = 'fas fa-times';
      } else {
        icon.className = 'fas fa-bars';
      }
    }
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && navbar.classList.contains('nav-open')) {
      navbar.classList.remove('nav-open');
      const icon = mobileBtn.querySelector('i');
      if (icon) icon.className = 'fas fa-bars';
    }
  });

  // Close when clicking a nav-link (except dropdown triggers)
  navbar.querySelectorAll('.nav-link:not(.nav-dropdown-btn)').forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('nav-open');
      const icon = mobileBtn.querySelector('i');
      if (icon) icon.className = 'fas fa-bars';
    });
  });
}

/**
 * Render all 16 Destination Stacks into #packages-container on Home
 */
function initDestinationCardsRenderer() {
  const container = document.getElementById('packages-container');
  const dataset = (typeof window !== 'undefined' && window.TOUR_DESTINATIONS_DATA) ? window.TOUR_DESTINATIONS_DATA : null;

  if (!container || !dataset) return;

  const stackKeys = Object.keys(dataset);
  
  // Render cards dynamically
  let html = '';
  stackKeys.forEach(slug => {
    const pkg = dataset[slug];
    const isBestseller = pkg.badge === 'Best Seller India' || pkg.badge === 'Best Seller Global';
    const ratingDisplay = pkg.rating || 4.9;
    const reviewCountDisplay = pkg.reviewCount || pkg.reviewsCount || 45;
    const cardImg = (pkg.images && pkg.images.main) ? pkg.images.main : (pkg.heroImage || '');
    const seasonsList = (pkg.seasons && Array.isArray(pkg.seasons)) ? pkg.seasons.join(' ') : 'spring-summer monsoon autumn winter all';

    html += `
      <article class="package-card" data-category="${pkg.categorySlug}" data-seasons="${seasonsList}" data-destination="${pkg.placeName}, ${pkg.country}" data-title="${pkg.title}" data-duration="${pkg.durationDays}" data-price="${pkg.pricing.deluxePrice}">
        <div class="card-img-wrap">
          <img src="${cardImg}" alt="${pkg.title}" loading="lazy">
          <div class="card-badges">
            ${isBestseller ? '<span class="badge badge-bestseller"><i class="fas fa-fire"></i> Best Seller</span>' : ''}
            <span class="badge badge-featured">${pkg.badge || 'Curated'}</span>
          </div>
          <button class="card-wishlist-btn" data-id="${pkg.id}" title="Save to Wishlist">
            <i class="far fa-heart"></i>
          </button>
          <div class="card-duration"><i class="far fa-clock"></i> ${pkg.durationText}</div>
        </div>
        
        <div class="card-content">
          <div class="card-meta">
            <span class="card-location"><i class="fas fa-map-marker-alt"></i> ${pkg.placeName}, ${pkg.state ? pkg.state + ', ' : ''}${pkg.country}</span>
            <div class="card-rating">
              <i class="fas fa-star"></i>
              <span>${ratingDisplay}</span>
              <span class="reviews-count">(${reviewCountDisplay})</span>
            </div>
          </div>
          
          <h3 class="card-title">
            <a href="package-details.html?id=${pkg.id}&slug=${pkg.slug}">${pkg.title}</a>
          </h3>
          
          <p class="card-desc">${pkg.summary}</p>
          
          <div class="card-footer">
            <div class="card-price">
              <span class="price-label">Starting from</span>
              <div class="price-val">₹${pkg.pricing.deluxePrice.toLocaleString('en-IN')} <span>/ person</span></div>
            </div>
            <div class="card-actions">
              <button class="btn btn-outline btn-sm btn-quick-view" data-slug="${pkg.slug}">Details</button>
              <button class="btn btn-primary btn-sm btn-open-booking" data-id="${pkg.id}" data-title="${pkg.title}" data-price="${pkg.pricing.deluxePrice}" data-destination="${pkg.placeName}" data-duration="${pkg.durationText}">Book</button>
            </div>
          </div>
        </div>
      </article>
    `;
  });

  container.innerHTML = html;
}

/**
 * Filter Packages by Category Pills
 */
function initCategoryFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-category');
      const packageCards = document.querySelectorAll('.package-card');

      packageCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat === category) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/**
 * Season Filter via Navbar Dropdown & Dynamic Season Badges
 */
function initNavbarSeasons() {
  const seasonItems = document.querySelectorAll('.dropdown-season-item');
  const seasonBtn = document.getElementById('seasons-nav-btn');
  const seasonWrap = document.getElementById('seasons-nav-wrap');
  const navbar = document.querySelector('.navbar');

  if (seasonBtn && seasonWrap) {
    seasonBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      seasonWrap.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!seasonWrap.contains(e.target)) {
        seasonWrap.classList.remove('active');
      }
    });
  }

  if (!seasonItems.length) return;

  const seasonNames = {
    'all': 'All Seasons',
    'spring-summer': 'Spring & Summer Sun',
    'monsoon': 'Monsoon Lush Greenery',
    'autumn': 'Golden Autumn & Festivals',
    'winter': 'Crisp Winter & Snow'
  };

  const seasonIcons = {
    'all': 'fa-globe-asia',
    'spring-summer': 'fa-sun',
    'monsoon': 'fa-cloud-showers-heavy',
    'autumn': 'fa-leaf',
    'winter': 'fa-snowflake'
  };

  seasonItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const season = item.getAttribute('data-season') || 'all';
      if (seasonWrap) seasonWrap.classList.remove('active');
      if (navbar) navbar.classList.remove('nav-open');
      filterToursBySeason(season);
    });
  });

  window.filterToursBySeason = function(season) {
    const cards = document.querySelectorAll('.package-card');
    let matchCount = 0;

    cards.forEach(card => {
      const cardSeasons = (card.getAttribute('data-seasons') || '').toLowerCase();
      if (season === 'all' || cardSeasons.includes(season)) {
        card.style.display = 'flex';
        matchCount++;
      } else {
        card.style.display = 'none';
      }
    });

    // Display active filter bar or update category buttons
    let indicator = document.getElementById('active-season-banner');
    const container = document.querySelector('.category-filter-wrap') || document.getElementById('featured-tours');

    if (!indicator && container) {
      indicator = document.createElement('div');
      indicator.id = 'active-season-banner';
      indicator.style.cssText = 'background: #eff6ff; border: 1px solid #bfdbfe; border-radius: var(--radius-md); padding: 12px 18px; margin: 16px 0; display: flex; align-items: center; justify-content: space-between; font-size: 0.9rem; color: #1e40af; box-shadow: var(--shadow-sm);';
      container.insertAdjacentElement('afterend', indicator);
    }

    if (indicator) {
      if (season === 'all') {
        indicator.style.display = 'none';
      } else {
        indicator.style.display = 'flex';
        indicator.innerHTML = `
          <div style="display: flex; align-items: center; gap: 10px;">
            <i class="fas ${seasonIcons[season] || 'fa-calendar-alt'}" style="color: var(--accent-coral); font-size: 1.2rem;"></i>
            <span>Filtering by Season: <strong>${seasonNames[season] || season}</strong> &bull; (${matchCount} Tour Packages Available)</span>
          </div>
          <button onclick="window.filterToursBySeason('all')" class="btn btn-outline-dark btn-sm" style="padding: 4px 10px; font-size: 0.78rem; background: #fff;">
            <i class="fas fa-times"></i> Clear Filter
          </button>
        `;
      }
    }

    // Scroll smoothly to featured tours
    const toursSec = document.getElementById('featured-tours');
    if (toursSec) {
      toursSec.scrollIntoView({ behavior: 'smooth' });
    }
  };
}

/**
 * Live Search Engine (Keyword, Destination, Duration, Budget)
 */
function initSearchEngine() {
  const searchInput = document.getElementById('search-destination');
  const durationSelect = document.getElementById('search-duration');
  const budgetSelect = document.getElementById('search-budget');
  const searchBtn = document.getElementById('btn-hero-search');

  if (!searchBtn && !searchInput && !durationSelect) return;

  const performFilter = () => {
    const keyword = (searchInput ? searchInput.value : '').toLowerCase().trim();
    const duration = durationSelect ? durationSelect.value : 'all';
    const exactDays = durationSelect ? parseInt(durationSelect.getAttribute('data-exact-days') || '0', 10) : 0;
    const maxBudget = budgetSelect ? parseFloat(budgetSelect.value) || Infinity : Infinity;
    const packageCards = document.querySelectorAll('.package-card');

    let matchCount = 0;

    packageCards.forEach(card => {
      const title = (card.getAttribute('data-title') || '').toLowerCase();
      const dest = (card.getAttribute('data-destination') || '').toLowerCase();
      const cardDuration = parseInt(card.getAttribute('data-duration') || '0', 10);
      const cardPrice = parseFloat(card.getAttribute('data-price') || '0');

      let matchesKeyword = !keyword || title.includes(keyword) || dest.includes(keyword);
      let matchesDuration = true;
      if (exactDays > 0) {
        // Match exact days (+/- 1 day) or category threshold
        matchesDuration = Math.abs(cardDuration - exactDays) <= 1 ||
                          (exactDays <= 5 && cardDuration <= 5) ||
                          (exactDays >= 6 && exactDays <= 8 && cardDuration >= 6 && cardDuration <= 8) ||
                          (exactDays >= 9 && cardDuration >= 9);
      } else if (duration === 'short') {
        matchesDuration = cardDuration <= 5;
      } else if (duration === 'medium') {
        matchesDuration = cardDuration >= 6 && cardDuration <= 8;
      } else if (duration === 'long') {
        matchesDuration = cardDuration >= 9;
      }

      let matchesBudget = cardPrice <= maxBudget;

      if (matchesKeyword && matchesDuration && matchesBudget) {
        card.style.display = 'flex';
        matchCount++;
      } else {
        card.style.display = 'none';
      }
    });

    const noResults = document.getElementById('no-search-results');
    if (noResults) {
      noResults.style.display = matchCount === 0 ? 'block' : 'none';
    }
  };

  // Expose filter function globally so MakeMyTrip date picker can trigger live results
  window.performTourFilter = performFilter;

  if (searchBtn) {
    searchBtn.addEventListener('click', (e) => {
      e.preventDefault();
      performFilter();
      const toursSection = document.getElementById('featured-tours');
      if (toursSection) {
        toursSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        performFilter();
      }
    });
  }
}

/**
 * Quick Stack Preview Modal
 */
function initQuickStackModal() {
  const modal = document.getElementById('quick-stack-modal');
  if (!modal) return;

  const closeBtn = modal.querySelector('.modal-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeQuickStackModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeQuickStackModal();
  });
}

function openQuickStackModal(pkgId) {
  const dataset = (typeof window !== 'undefined' && window.TOUR_DESTINATIONS_DATA) ? window.TOUR_DESTINATIONS_DATA : {};
  const pkg = dataset[pkgId];
  if (!pkg) return;

  const modal = document.getElementById('quick-stack-modal');
  const body = document.getElementById('quick-stack-body');
  if (!modal || !body) return;

  body.innerHTML = `
    <div style="position: relative; height: 240px; overflow: hidden; border-radius: var(--radius-lg) var(--radius-lg) 0 0;">
      <img src="${pkg.images.banner}" alt="${pkg.title}" style="width: 100%; height: 100%; object-fit: cover;">
      <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(transparent, rgba(10,25,47,0.9)); padding: 24px; color: #ffffff;">
        <span class="badge badge-coral" style="margin-bottom: 6px;">${pkg.badge}</span>
        <h2 style="color: #ffffff; font-size: 1.5rem; font-family: var(--font-heading);">${pkg.title}</h2>
        <div style="font-size: 0.85rem; color: rgba(255,255,255,0.85);">
          <i class="fas fa-map-marker-alt"></i> ${pkg.placeName}, ${pkg.state} (${pkg.country}) &bull; <i class="far fa-clock"></i> ${pkg.durationText}
        </div>
      </div>
    </div>

    <div style="padding: 24px;">
      <div class="quick-facts-bar" style="margin-bottom: 20px;">
        <div class="quick-fact-item">
          <div class="quick-fact-icon"><i class="fas fa-mountain"></i></div>
          <div><div class="quick-fact-label">Altitude</div><div class="quick-fact-val">${pkg.geo.altitude}</div></div>
        </div>
        <div class="quick-fact-item">
          <div class="quick-fact-icon"><i class="fas fa-cloud-sun"></i></div>
          <div><div class="quick-fact-label">Climate</div><div class="quick-fact-val">${pkg.geo.climate}</div></div>
        </div>
        <div class="quick-fact-item">
          <div class="quick-fact-icon"><i class="fas fa-calendar-check"></i></div>
          <div><div class="quick-fact-label">Best Time</div><div class="quick-fact-val">${pkg.geo.bestTimeToVisit}</div></div>
        </div>
      </div>

      <h4 style="font-size: 1.1rem; color: var(--primary-navy); margin-bottom: 10px;"><i class="fas fa-hotel" style="color: var(--accent-gold);"></i> Handpicked Accommodations (Stay Stack)</h4>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; margin-bottom: 20px;">
        ${(pkg.hotels || []).map(h => `
          <div style="background: var(--bg-main); padding: 12px; border-radius: var(--radius-sm); border: 1px solid var(--border-light);">
            <strong style="font-size: 0.9rem; color: var(--primary-navy); display: block;">${h.name}</strong>
            <span style="font-size: 0.75rem; color: var(--accent-coral); font-weight: 700;">${h.tier}</span>
            <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 4px;">${h.location}</div>
          </div>
        `).join('')}
      </div>

      <h4 style="font-size: 1.1rem; color: var(--primary-navy); margin-bottom: 10px;"><i class="fas fa-landmark" style="color: var(--accent-teal);"></i> Top Attractions (Places Stack)</h4>
      <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 24px;">
        ${(pkg.attractions || []).map(a => `
          <span style="background: rgba(0, 180, 216, 0.1); color: var(--accent-teal); font-size: 0.82rem; font-weight: 700; padding: 4px 10px; border-radius: var(--radius-full);">
            <i class="fas fa-map-pin"></i> ${a.name}
          </span>
        `).join('')}
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-light); padding-top: 18px;">
        <div>
          <span style="font-size: 0.8rem; color: var(--text-muted);">Starting Package Price</span>
          <div style="font-size: 1.35rem; font-weight: 800; color: var(--primary-navy);">₹${pkg.pricing.deluxePrice.toLocaleString('en-IN')} <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 400;">/ person</span></div>
        </div>
        <div style="display: flex; gap: 10px;">
          <button class="btn btn-outline-dark" onclick="closeQuickStackModal()">Close</button>
          <a href="package-details.html?id=${pkg.id}" class="btn btn-primary">Open Full 12-Layer Stack <i class="fas fa-arrow-right"></i></a>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
}

function closeQuickStackModal() {
  const modal = document.getElementById('quick-stack-modal');
  if (modal) modal.classList.remove('active');
}

/**
 * Wishlist Toggle (Local Storage)
 */
function initWishlist() {
  const wishlistButtons = document.querySelectorAll('.card-wishlist');
  let savedWishlist = JSON.parse(localStorage.getItem('wanderlust_wishlist') || '[]');

  wishlistButtons.forEach(btn => {
    const pkgId = btn.getAttribute('data-id');
    if (savedWishlist.includes(pkgId)) {
      btn.classList.add('active');
      btn.innerHTML = '<i class="fas fa-heart"></i>';
    }

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      if (savedWishlist.includes(pkgId)) {
        savedWishlist = savedWishlist.filter(id => id !== pkgId);
        btn.classList.remove('active');
        btn.innerHTML = '<i class="far fa-heart"></i>';
        showToast('Removed from your saved bucket list', 'info');
      } else {
        savedWishlist.push(pkgId);
        btn.classList.add('active');
        btn.innerHTML = '<i class="fas fa-heart"></i>';
        showToast('Saved to your dream bucket list!', 'success');
      }
      localStorage.setItem('wanderlust_wishlist', JSON.stringify(savedWishlist));
    });
  });
}

/**
 * Interactive FAQ Accordion
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isOpen) {
        item.classList.add('active');
      }
    });
  });
}

/**
 * Toast Notification Dispatcher
 */
function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  let icon = 'info-circle';
  if (type === 'success') icon = 'check-circle';
  if (type === 'error') icon = 'exclamation-triangle';

  toast.innerHTML = `
    <i class="fas fa-${icon}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

/**
 * Authentication Modal Triggers & AJAX
 */
function initAuthModals() {
  const authModal = document.getElementById('auth-modal');
  if (!authModal) return;

  const openAuthBtns = document.querySelectorAll('.btn-open-auth');
  const closeAuthBtn = authModal.querySelector('.modal-close');
  const tabLogin = document.getElementById('tab-login');
  const tabRegister = document.getElementById('tab-register');
  const formLogin = document.getElementById('form-modal-login');
  const formRegister = document.getElementById('form-modal-register');

  openAuthBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      authModal.classList.add('active');
    });
  });

  if (closeAuthBtn) {
    closeAuthBtn.addEventListener('click', () => {
      authModal.classList.remove('active');
    });
  }

  authModal.addEventListener('click', (e) => {
    if (e.target === authModal) {
      authModal.classList.remove('active');
    }
  });

  if (tabLogin && tabRegister) {
    tabLogin.addEventListener('click', () => {
      tabLogin.classList.add('active');
      tabRegister.classList.remove('active');
      formLogin.style.display = 'block';
      formRegister.style.display = 'none';
    });

    tabRegister.addEventListener('click', () => {
      tabRegister.classList.add('active');
      tabLogin.classList.remove('active');
      formRegister.style.display = 'block';
      formLogin.style.display = 'none';
    });
  }
}

/**
 * Avatar / DP Profile Photo Manager
 */
function initAvatarManager() {
  const savedAvatar = localStorage.getItem('userAvatar');
  if (savedAvatar) {
    applyAvatarToAllElements(savedAvatar);
  }

  const fileInput = document.getElementById('avatar-file-input');
  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const base64Img = event.target.result;
          localStorage.setItem('userAvatar', base64Img);
          applyAvatarToAllElements(base64Img);
          showToast('Profile photo (DP) updated successfully!', 'success');
          closeAvatarModal();
        };
        reader.readAsDataURL(file);
      }
    });
  }
}

function applyAvatarToAllElements(imgSrc) {
  document.querySelectorAll('.user-avatar-img, .user-avatar-btn img, .admin-user-pill img, #dashboard-dp, #header-dp').forEach(img => {
    img.src = imgSrc;
  });
}

function openAvatarModal() {
  const modal = document.getElementById('avatar-modal');
  if (modal) modal.classList.add('active');
}

function closeAvatarModal() {
  const modal = document.getElementById('avatar-modal');
  if (modal) modal.classList.remove('active');
}

function selectPresetAvatar(src) {
  localStorage.setItem('userAvatar', src);
  applyAvatarToAllElements(src);
  showToast('Profile photo updated!', 'success');
  closeAvatarModal();
}

/**
 * MakeMyTrip Style Stay Date & Duration Dual-Month Calendar Engine
 */
function initMmtDatePicker() {
  const triggerWrap = document.getElementById('mmt-date-picker-wrap');
  const triggerBtn = document.getElementById('mmt-date-trigger');
  const popover = document.getElementById('mmt-calendar-popover');
  const dualMonthsContainer = document.getElementById('mmt-dual-months');
  const prevBtn = document.getElementById('mmt-prev-month');
  const nextBtn = document.getElementById('mmt-next-month');
  const chipInVal = document.getElementById('mmt-chip-in-val');
  const chipOutVal = document.getElementById('mmt-chip-out-val');
  const nightsSummary = document.getElementById('mmt-nights-summary');
  const clearBtn = document.getElementById('mmt-clear-btn');
  const applyBtn = document.getElementById('mmt-apply-btn');
  const dateDisplay = document.getElementById('mmt-date-display');
  const durationSub = document.getElementById('mmt-duration-sub');
  const durationPill = document.getElementById('mmt-duration-pill');
  const hiddenDuration = document.getElementById('search-duration');
  const hiddenCheckIn = document.getElementById('checkin-date');
  const hiddenCheckOut = document.getElementById('checkout-date');

  if (!triggerBtn || !popover || !dualMonthsContainer) return;

  const now = new Date();
  const minDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let currentViewDate = new Date(now.getFullYear(), now.getMonth(), 1);
  let checkInDate = null;
  let checkOutDate = null;
  let hoverDate = null;

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const shortWeekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  function formatDateKey(d) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }

  function parseDateKey(str) {
    const parts = str.split('-');
    return new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
  }

  function isSameDay(d1, d2) {
    if (!d1 || !d2) return false;
    return d1.getFullYear() === d2.getFullYear() &&
           d1.getMonth() === d2.getMonth() &&
           d1.getDate() === d2.getDate();
  }

  function renderMonth(targetDate) {
    const year = targetDate.getFullYear();
    const month = targetDate.getMonth();
    const firstDayIndex = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const monthBlock = document.createElement('div');
    monthBlock.className = 'mmt-month-block';

    const monthHeader = document.createElement('div');
    monthHeader.className = 'mmt-month-name';
    monthHeader.innerText = `${monthNames[month]} ${year}`;
    monthBlock.appendChild(monthHeader);

    const weekdaysRow = document.createElement('div');
    weekdaysRow.className = 'mmt-weekdays-row';
    shortWeekdays.forEach(day => {
      const th = document.createElement('span');
      th.innerText = day;
      weekdaysRow.appendChild(th);
    });
    monthBlock.appendChild(weekdaysRow);

    const daysGrid = document.createElement('div');
    daysGrid.className = 'mmt-days-grid';

    // Blank slots for days before 1st of month
    for (let i = 0; i < firstDayIndex; i++) {
      const emptyCell = document.createElement('div');
      emptyCell.className = 'mmt-day-empty';
      daysGrid.appendChild(emptyCell);
    }

    // Days in current month
    for (let d = 1; d <= daysInMonth; d++) {
      const cellDate = new Date(year, month, d);
      const dateKey = formatDateKey(cellDate);
      const cell = document.createElement('div');
      cell.className = 'mmt-day-cell';
      cell.setAttribute('data-date', dateKey);
      cell.innerText = d;

      const isPast = cellDate.getTime() < minDate.getTime();
      if (isPast) {
        cell.classList.add('is-past');
      } else {
        if (isSameDay(cellDate, minDate)) {
          cell.classList.add('is-today');
        }

        const isCheckIn = isSameDay(cellDate, checkInDate);
        const isCheckOut = isSameDay(cellDate, checkOutDate);

        if (isCheckIn) {
          cell.classList.add('is-checkin');
          if (!checkOutDate || isSameDay(checkInDate, checkOutDate)) {
            cell.classList.add('is-single');
          }
        }

        if (isCheckOut) {
          cell.classList.add('is-checkout');
          if (isSameDay(checkInDate, checkOutDate)) {
            cell.classList.add('is-single');
          }
        }

        if (checkInDate && checkOutDate) {
          if (cellDate > checkInDate && cellDate < checkOutDate) {
            cell.classList.add('is-in-range');
          }
        } else if (checkInDate && !checkOutDate && hoverDate) {
          if (cellDate > checkInDate && cellDate <= hoverDate) {
            cell.classList.add('is-hover-range');
          }
        }
      }

      daysGrid.appendChild(cell);
    }

    monthBlock.appendChild(daysGrid);
    return monthBlock;
  }

  function renderCalendar() {
    dualMonthsContainer.innerHTML = '';

    // Month 1
    const month1 = new Date(currentViewDate.getFullYear(), currentViewDate.getMonth(), 1);
    dualMonthsContainer.appendChild(renderMonth(month1));

    // Month 2
    const month2 = new Date(currentViewDate.getFullYear(), currentViewDate.getMonth() + 1, 1);
    dualMonthsContainer.appendChild(renderMonth(month2));

    // Navigation state
    if (prevBtn) {
      const isCurrentMonth = currentViewDate.getFullYear() === now.getFullYear() &&
                             currentViewDate.getMonth() <= now.getMonth();
      prevBtn.disabled = isCurrentMonth;
    }

    // Update Chips & Summary in footer
    if (checkInDate) {
      chipInVal.innerText = `${dayNames[checkInDate.getDay()]}, ${checkInDate.getDate()} ${shortMonths[checkInDate.getMonth()]}`;
    } else {
      chipInVal.innerText = 'Select date';
    }

    if (checkOutDate) {
      chipOutVal.innerText = `${dayNames[checkOutDate.getDay()]}, ${checkOutDate.getDate()} ${shortMonths[checkOutDate.getMonth()]}`;
    } else {
      chipOutVal.innerText = 'Select date';
    }

    if (checkInDate && checkOutDate) {
      const diffTime = checkOutDate.getTime() - checkInDate.getTime();
      const nights = Math.max(1, Math.round(diffTime / (1000 * 60 * 60 * 24)));
      const days = nights + 1;
      nightsSummary.innerHTML = `<i class="fas fa-moon"></i> <span><strong>${nights} Nights</strong> / ${days} Days Stay</span>`;
      if (applyBtn) applyBtn.disabled = false;
    } else if (checkInDate && hoverDate && hoverDate > checkInDate) {
      const diffTime = hoverDate.getTime() - checkInDate.getTime();
      const nights = Math.max(1, Math.round(diffTime / (1000 * 60 * 60 * 24)));
      const days = nights + 1;
      nightsSummary.innerHTML = `<i class="fas fa-moon"></i> <span>${nights} Nights / ${days} Days (preview)</span>`;
      if (applyBtn) applyBtn.disabled = true;
    } else if (checkInDate) {
      nightsSummary.innerHTML = `<i class="fas fa-calendar-day"></i> <span>Select Check-Out Date</span>`;
      if (applyBtn) applyBtn.disabled = true;
    } else {
      nightsSummary.innerHTML = `<i class="fas fa-moon"></i> <span>Pick Check-In Date</span>`;
      if (applyBtn) applyBtn.disabled = true;
    }
  }

  function applyDatesSelection() {
    if (!checkInDate || !checkOutDate) return;

    const diffTime = checkOutDate.getTime() - checkInDate.getTime();
    const nights = Math.max(1, Math.round(diffTime / (1000 * 60 * 60 * 24)));
    const days = nights + 1;

    const inStr = `${checkInDate.getDate()} ${shortMonths[checkInDate.getMonth()]}`;
    const outStr = `${checkOutDate.getDate()} ${shortMonths[checkOutDate.getMonth()]} '${String(checkOutDate.getFullYear()).slice(-2)}`;

    dateDisplay.innerText = `${inStr} – ${outStr}`;
    durationSub.innerText = `${nights} Nights / ${days} Days Stay`;
    
    if (durationPill) {
      durationPill.innerText = `${nights}N / ${days}D`;
      durationPill.style.display = 'inline-flex';
    }

    // Set hidden inputs
    if (hiddenDuration) {
      hiddenDuration.value = days <= 5 ? 'short' : (days <= 8 ? 'medium' : 'long');
      hiddenDuration.setAttribute('data-exact-days', String(days));
    }
    if (hiddenCheckIn) hiddenCheckIn.value = formatDateKey(checkInDate);
    if (hiddenCheckOut) hiddenCheckOut.value = formatDateKey(checkOutDate);

    // Sync with booking modal travel date if user books later
    const bookingDateInput = document.getElementById('book-date');
    if (bookingDateInput) {
      bookingDateInput.value = formatDateKey(checkInDate);
    }

    closePopover();

    // Trigger live package filter
    if (typeof window.performTourFilter === 'function') {
      window.performTourFilter();
    }
  }

  function resetDatesSelection() {
    checkInDate = null;
    checkOutDate = null;
    hoverDate = null;

    dateDisplay.innerText = 'Select Stay Dates';
    durationSub.innerText = 'Months & All Dates';
    if (durationPill) durationPill.style.display = 'none';

    if (hiddenDuration) {
      hiddenDuration.value = 'all';
      hiddenDuration.removeAttribute('data-exact-days');
    }
    if (hiddenCheckIn) hiddenCheckIn.value = '';
    if (hiddenCheckOut) hiddenCheckOut.value = '';

    renderCalendar();

    if (typeof window.performTourFilter === 'function') {
      window.performTourFilter();
    }
  }

  function openPopover() {
    popover.classList.add('active');
    triggerBtn.setAttribute('aria-expanded', 'true');
    renderCalendar();
  }

  function closePopover() {
    popover.classList.remove('active');
    triggerBtn.setAttribute('aria-expanded', 'false');
  }

  // Event Listeners
  triggerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (popover.classList.contains('active')) {
      closePopover();
    } else {
      openPopover();
    }
  });

  triggerBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      popover.classList.contains('active') ? closePopover() : openPopover();
    }
  });

  popover.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  document.addEventListener('click', (e) => {
    if (!triggerWrap.contains(e.target) && !popover.contains(e.target)) {
      closePopover();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && popover.classList.contains('active')) {
      closePopover();
    }
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentViewDate.setMonth(currentViewDate.getMonth() - 1);
      renderCalendar();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentViewDate.setMonth(currentViewDate.getMonth() + 1);
      renderCalendar();
    });
  }

  // Delegated clicks on calendar day cells
  dualMonthsContainer.addEventListener('click', (e) => {
    const cell = e.target.closest('.mmt-day-cell');
    if (!cell || cell.classList.contains('is-past')) return;

    const dateKey = cell.getAttribute('data-date');
    if (!dateKey) return;
    const clickedDate = parseDateKey(dateKey);

    if (!checkInDate || (checkInDate && checkOutDate)) {
      checkInDate = clickedDate;
      checkOutDate = null;
      hoverDate = null;
      renderCalendar();
    } else {
      if (clickedDate.getTime() < checkInDate.getTime()) {
        checkInDate = clickedDate;
        checkOutDate = null;
        hoverDate = null;
        renderCalendar();
      } else if (isSameDay(clickedDate, checkInDate)) {
        const nextDay = new Date(clickedDate);
        nextDay.setDate(nextDay.getDate() + 1);
        checkOutDate = nextDay;
        hoverDate = null;
        renderCalendar();
        setTimeout(applyDatesSelection, 240);
      } else {
        checkOutDate = clickedDate;
        hoverDate = null;
        renderCalendar();
        setTimeout(applyDatesSelection, 240);
      }
    }
  });

  // Delegated mouse hover for live range preview
  dualMonthsContainer.addEventListener('mouseover', (e) => {
    const cell = e.target.closest('.mmt-day-cell');
    if (!cell || cell.classList.contains('is-past')) return;

    if (checkInDate && !checkOutDate) {
      const dateKey = cell.getAttribute('data-date');
      if (dateKey) {
        const hover = parseDateKey(dateKey);
        if (!isSameDay(hover, hoverDate)) {
          hoverDate = hover;
          renderCalendar();
        }
      }
    }
  });

  dualMonthsContainer.addEventListener('mouseleave', () => {
    if (checkInDate && !checkOutDate && hoverDate) {
      hoverDate = null;
      renderCalendar();
    }
  });

  if (applyBtn) {
    applyBtn.addEventListener('click', () => {
      applyDatesSelection();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      resetDatesSelection();
    });
  }

  // Initial render
  renderCalendar();
}

