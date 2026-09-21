/**
 * ============================================================================
 * SpidyWeb Tours & Travels - Dynamic Package Details & Destination Stack Engine
 * (package-details.js)
 * ============================================================================
 */

let currentPackage = null;
let selectedHotelTier = 'deluxe'; // 'standard', 'deluxe', 'luxury'
let currentAdults = 1;
let currentChildren = 0;
let selectedAddons = [];

document.addEventListener('DOMContentLoaded', () => {
  renderPackageDetailsPage();
  initStackTabs();
  initDynamicCalculator();
  initLightbox();
});

/**
 * Main Render Function
 */
function renderPackageDetailsPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const rawId = urlParams.get('id');
  const slugParam = urlParams.get('slug');
  
  const dataset = (typeof window !== 'undefined' && window.TOUR_DESTINATIONS_DATA) ? window.TOUR_DESTINATIONS_DATA : (typeof TOUR_DESTINATIONS_DATA !== 'undefined' ? TOUR_DESTINATIONS_DATA : {});
  
  let pkg = null;
  if (rawId && dataset[rawId]) {
    pkg = dataset[rawId];
  } else if (slugParam) {
    pkg = Object.values(dataset).find(p => p.slug === slugParam);
  }
  
  if (!pkg) {
    const pkgId = parseInt(rawId || '1', 10);
    pkg = dataset[pkgId] || dataset[1] || Object.values(dataset)[0];
  }

  if (!pkg) {
    console.error('Package data not found for ID/slug:', rawId || slugParam);
    return;
  }

  currentPackage = pkg;

  // 1. Page Title & Meta
  document.title = `${pkg.title} | SpidyWeb Tours & Travels`;

  // 2. Hero Section
  renderHero(pkg);

  // 3. Quick Facts Bar
  renderQuickFacts(pkg);

  // 4. Photo Gallery
  renderGallery(pkg);

  // 5. Tab 1: Overview & Highlights
  renderOverviewTab(pkg);

  // 6. Tab 2: Attractions (Places Stack)
  renderAttractionsTab(pkg);

  // 7. Tab 3: Hotels & Accommodations (Stay Stack)
  renderHotelsTab(pkg);

  // 8. Tab 4: Day-by-Day Itinerary (Schedule Stack)
  renderItineraryTab(pkg);

  // 9. Tab 5: Activities & Experiences
  renderActivitiesTab(pkg);

  // 10. Tab 6: Regional Cuisine Guide
  renderCuisineTab(pkg);

  // 11. Tab 7: Travel Essentials & Packing
  renderEssentialsTab(pkg);

  // 12. Tab 8: Inclusions & Transport
  renderInclusionsTab(pkg);

  // 13. Tab 9: Customer Reviews
  renderReviewsTab(pkg);

  // 14. Sticky Booking Widget & Calculator
  renderBookingWidget(pkg);

  // 15. Related Destination Stacks Recommendations
  renderRelatedStacks(dataset, pkg.id);
}

/**
 * Render Hero Header
 */
function renderHero(pkg) {
  const heroTitle = document.querySelector('.details-title');
  if (heroTitle) heroTitle.innerText = pkg.title;

  const heroMeta = document.querySelector('.details-meta-top');
  if (heroMeta) {
    heroMeta.innerHTML = `
      <span class="badge badge-coral"><i class="fas fa-fire"></i> ${pkg.badge}</span>
      <span class="badge badge-teal"><i class="fas fa-map-marker-alt"></i> ${pkg.region}</span>
      <span class="badge badge-gold"><i class="fas fa-star"></i> ${pkg.rating} (${pkg.reviewCount} Verified Reviews)</span>
    `;
  }

  const heroSub = document.querySelector('.details-header-content div[style*="display: flex"]');
  if (heroSub) {
    heroSub.innerHTML = `
      <div><i class="fas fa-location-arrow" style="color: var(--accent-coral);"></i> ${pkg.placeName}, ${pkg.state} (${pkg.country})</div>
      <div><i class="far fa-clock" style="color: var(--accent-teal);"></i> ${pkg.durationText}</div>
      <div><i class="fas fa-users" style="color: var(--accent-gold);"></i> Max ${pkg.maxGuests}</div>
      <div><i class="fas fa-shield-alt" style="color: var(--accent-green);"></i> 100% INR Price Guarantee</div>
    `;
  }
}

/**
 * Render Quick Facts Bar
 */
function renderQuickFacts(pkg) {
  const container = document.getElementById('pkg-quick-facts');
  if (!container) return;

  container.innerHTML = `
    <div class="quick-fact-item">
      <div class="quick-fact-icon"><i class="fas fa-mountain"></i></div>
      <div>
        <div class="quick-fact-label">Altitude</div>
        <div class="quick-fact-val">${pkg.geo.altitude}</div>
      </div>
    </div>
    <div class="quick-fact-item">
      <div class="quick-fact-icon"><i class="fas fa-calendar-check"></i></div>
      <div>
        <div class="quick-fact-label">Best Season</div>
        <div class="quick-fact-val">${pkg.geo.bestTimeToVisit}</div>
      </div>
    </div>
    <div class="quick-fact-item">
      <div class="quick-fact-icon"><i class="fas fa-cloud-sun"></i></div>
      <div>
        <div class="quick-fact-label">Climate</div>
        <div class="quick-fact-val">${pkg.geo.climate}</div>
      </div>
    </div>
    <div class="quick-fact-item">
      <div class="quick-fact-icon"><i class="fas fa-language"></i></div>
      <div>
        <div class="quick-fact-label">Languages</div>
        <div class="quick-fact-val">${pkg.geo.language}</div>
      </div>
    </div>
  `;
}

/**
 * Render Gallery Grid with Clickable Lightbox
 */
function renderGallery(pkg) {
  const galleryMain = document.querySelector('.gallery-main img');
  if (galleryMain) {
    galleryMain.src = pkg.images.main;
    galleryMain.alt = pkg.title;
    galleryMain.onclick = () => openLightbox(pkg.images.main, `${pkg.title} - Main View`);
  }

  const galleryThumbs = document.querySelector('.gallery-thumbs');
  if (galleryThumbs && pkg.images.gallery) {
    galleryThumbs.innerHTML = pkg.images.gallery.slice(1, 3).map((item, idx) => `
      <div style="position: relative; overflow: hidden; border-radius: var(--radius-sm); cursor: pointer;" onclick="openLightbox('${item.url}', '${item.caption}')">
        <img src="${item.url}" alt="${item.caption}" style="width: 100%; height: 100%; object-fit: cover; transition: var(--transition);">
        <span style="position: absolute; bottom: 8px; left: 8px; background: rgba(10,25,47,0.8); color: #fff; font-size: 0.75rem; font-weight: 700; padding: 2px 8px; border-radius: var(--radius-full);">${item.tag}</span>
      </div>
    `).join('');
  }
}

/**
 * Tab 1: Overview & Highlights
 */
function renderOverviewTab(pkg) {
  const overviewP = document.getElementById('pkg-overview-text');
  if (overviewP) overviewP.innerText = pkg.overview;

  const subtitleEl = document.getElementById('pkg-subtitle-text');
  if (subtitleEl) subtitleEl.innerText = pkg.subtitle;

  const highlightsContainer = document.getElementById('pkg-highlights-list');
  if (highlightsContainer) {
    highlightsContainer.innerHTML = pkg.highlights.map(h => `
      <li style="display: flex; gap: 12px; margin-bottom: 14px; font-size: 0.95rem; color: var(--text-main); line-height: 1.6;">
        <i class="fas fa-check-circle" style="color: var(--accent-green); font-size: 1.1rem; margin-top: 3px; flex-shrink: 0;"></i>
        <span>${h}</span>
      </li>
    `).join('');
  }

  const connectivityBox = document.getElementById('pkg-connectivity-box');
  if (connectivityBox) {
    connectivityBox.innerHTML = `
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; background: var(--bg-main); padding: 18px; border-radius: var(--radius-md); border: 1px solid var(--border-light); margin-top: 20px;">
        <div style="display: flex; align-items: center; gap: 10px;">
          <i class="fas fa-plane-departure" style="color: var(--accent-coral); font-size: 1.2rem;"></i>
          <div>
            <strong style="font-size: 0.85rem; color: var(--text-muted); display: block;">Nearest Airport</strong>
            <span style="font-size: 0.9rem; font-weight: 700; color: var(--primary-navy);">${pkg.geo.airport}</span>
          </div>
        </div>
        <div style="display: flex; align-items: center; gap: 10px;">
          <i class="fas fa-train" style="color: var(--accent-teal); font-size: 1.2rem;"></i>
          <div>
            <strong style="font-size: 0.85rem; color: var(--text-muted); display: block;">Nearest Railway / Transit</strong>
            <span style="font-size: 0.9rem; font-weight: 700; color: var(--primary-navy);">${pkg.geo.railway}</span>
          </div>
        </div>
      </div>
    `;
  }
}

/**
 * Tab 2: Attractions (Places Stack)
 */
function renderAttractionsTab(pkg) {
  const container = document.getElementById('pkg-attractions-container');
  if (!container || !pkg.attractions) return;

  container.innerHTML = pkg.attractions.map(attr => `
    <div class="attraction-card">
      <div class="attraction-img-wrap">
        <img src="${attr.image}" alt="${attr.name}" loading="lazy" onclick="openLightbox('${attr.image}', '${attr.name}')">
        <span class="attraction-type-badge">${attr.type}</span>
      </div>
      <div class="attraction-body">
        <h4 class="attraction-title">${attr.name}</h4>
        <div class="attraction-meta-pills">
          <span class="attraction-pill"><i class="far fa-clock"></i> ${attr.timings}</span>
          <span class="attraction-pill"><i class="fas fa-ticket-alt"></i> ${attr.entryFee}</span>
          <span class="attraction-pill"><i class="fas fa-hourglass-half"></i> ${attr.duration}</span>
        </div>
        <p class="attraction-desc">${attr.description}</p>
        <div class="attraction-tip">
          <i class="fas fa-lightbulb"></i> <strong>Insider Tip:</strong> ${attr.tip}
        </div>
      </div>
    </div>
  `).join('');
}

/**
 * Tab 3: Hotels & Accommodations (Stay Stack)
 */
function renderHotelsTab(pkg) {
  const container = document.getElementById('pkg-hotels-container');
  if (!container || !pkg.hotels) return;

  container.innerHTML = pkg.hotels.map(hotel => `
    <div class="hotel-card">
      <div class="hotel-img-wrap">
        <img src="${hotel.image}" alt="${hotel.name}" loading="lazy" onclick="openLightbox('${hotel.image}', '${hotel.name}')">
        <span class="hotel-tier-badge"><i class="fas fa-crown"></i> ${hotel.tier}</span>
      </div>
      <div class="hotel-body">
        <h4 class="hotel-name">${hotel.name}</h4>
        <div class="hotel-location"><i class="fas fa-map-pin" style="color: var(--accent-coral);"></i> ${hotel.location}</div>
        <div class="hotel-highlight">"${hotel.highlight}"</div>
        <div class="hotel-amenities-list">
          ${hotel.amenities.map(a => `<span class="hotel-amenity-chip"><i class="fas fa-check" style="color: var(--accent-green);"></i> ${a}</span>`).join('')}
        </div>
        <div class="hotel-footer">
          <div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">Stay Package Rate</div>
            <div class="hotel-price">${hotel.pricePerNight}</div>
          </div>
          <div style="font-size: 0.8rem; color: var(--text-muted); text-align: right;">
            <div><i class="far fa-clock"></i> ${hotel.checkIn}</div>
            <div>${hotel.checkOut}</div>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

/**
 * Tab 4: Day-by-Day Itinerary (Schedule Stack)
 */
function renderItineraryTab(pkg) {
  const container = document.querySelector('.itinerary-timeline');
  if (!container || !pkg.itinerary) return;

  container.innerHTML = pkg.itinerary.map(item => `
    <div class="itinerary-item">
      <div class="itinerary-node">${item.day}</div>
      <div class="itinerary-content">
        <div class="itinerary-day-tag">Day ${item.day} of ${pkg.durationDays}</div>
        <h4 class="itinerary-title">${item.title}</h4>
        <p class="itinerary-desc">${item.desc}</p>
        
        ${item.timeSlots ? `
          <div style="background: var(--bg-main); padding: 14px; border-radius: var(--radius-sm); margin: 12px 0; font-size: 0.88rem; line-height: 1.6;">
            ${item.timeSlots.morning ? `<div style="margin-bottom: 6px;"><strong style="color: var(--primary-navy);"><i class="fas fa-sun" style="color: var(--accent-gold);"></i> Morning:</strong> ${item.timeSlots.morning}</div>` : ''}
            ${item.timeSlots.afternoon ? `<div style="margin-bottom: 6px;"><strong style="color: var(--primary-navy);"><i class="fas fa-cloud-sun" style="color: var(--accent-teal);"></i> Afternoon:</strong> ${item.timeSlots.afternoon}</div>` : ''}
            ${item.timeSlots.evening ? `<div><strong style="color: var(--primary-navy);"><i class="fas fa-moon" style="color: var(--accent-purple);"></i> Evening:</strong> ${item.timeSlots.evening}</div>` : ''}
          </div>
        ` : ''}

        <div class="itinerary-badges">
          <span class="itinerary-badge"><i class="fas fa-utensils"></i> ${item.meals}</span>
          <span class="itinerary-badge"><i class="fas fa-hotel"></i> ${item.stay}</span>
          <span class="itinerary-badge"><i class="fas fa-car-side"></i> ${item.transport}</span>
        </div>
      </div>
    </div>
  `).join('');
}

/**
 * Tab 5: Activities & Experiences
 */
function renderActivitiesTab(pkg) {
  const container = document.getElementById('pkg-activities-container');
  if (!container || !pkg.activities) return;

  container.innerHTML = pkg.activities.map(act => `
    <div class="activity-card">
      <div class="activity-img-wrap">
        <img src="${act.image}" alt="${act.name}" loading="lazy" onclick="openLightbox('${act.image}', '${act.name}')">
        <span class="activity-badge">${act.type}</span>
      </div>
      <div class="activity-body">
        <h4 class="activity-title">${act.name}</h4>
        <div class="activity-meta">
          <span><i class="fas fa-tachometer-alt" style="color: var(--accent-coral);"></i> ${act.difficulty}</span>
          <span><i class="far fa-clock" style="color: var(--accent-teal);"></i> ${act.duration}</span>
          <span><i class="fas fa-check-circle" style="color: ${act.included ? 'var(--accent-green)' : 'var(--text-muted)'};"></i> ${act.included ? 'Included in Tour' : 'Optional Add-on'}</span>
        </div>
        <p class="activity-desc">${act.description}</p>
      </div>
    </div>
  `).join('');
}

/**
 * Tab 6: Regional Cuisine Guide
 */
function renderCuisineTab(pkg) {
  const container = document.getElementById('pkg-cuisine-container');
  if (!container || !pkg.cuisine) return;

  container.innerHTML = pkg.cuisine.map(item => `
    <div class="cuisine-card">
      <h4>${item.name}</h4>
      <div class="cuisine-type">${item.type}</div>
      <p class="cuisine-desc">${item.description}</p>
      <div class="cuisine-spot"><i class="fas fa-utensils" style="color: var(--accent-gold);"></i> <strong>Top Spot:</strong> ${item.topSpots}</div>
    </div>
  `).join('');
}

/**
 * Tab 7: Travel Essentials & Packing
 */
function renderEssentialsTab(pkg) {
  const container = document.getElementById('pkg-essentials-container');
  if (!container || !pkg.travelEssentials) return;

  const es = pkg.travelEssentials;
  container.innerHTML = `
    <div class="essential-card">
      <h4 class="essential-title"><i class="fas fa-suitcase-rolling" style="color: var(--accent-coral);"></i> What to Pack</h4>
      <div class="essential-list">
        ${(es.packingList || []).map(p => `
          <div class="essential-item">
            <i class="fas fa-check-circle" style="color: var(--accent-coral);"></i>
            <span>${p}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="essential-card">
      <h4 class="essential-title"><i class="fas fa-heartbeat" style="color: var(--accent-teal);"></i> Health & Altitude Safety</h4>
      <div class="essential-list">
        ${(es.healthAndSafety || []).map(h => `
          <div class="essential-item">
            <i class="fas fa-shield-alt" style="color: var(--accent-teal);"></i>
            <span>${h}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="essential-card">
      <h4 class="essential-title"><i class="fas fa-id-card" style="color: var(--accent-green);"></i> Permits & Documents</h4>
      <div class="essential-list">
        ${(es.permitsAndDocuments || []).map(doc => `
          <div class="essential-item">
            <i class="fas fa-file-alt" style="color: var(--accent-green);"></i>
            <span>${doc}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="essential-card">
      <h4 class="essential-title"><i class="fas fa-wifi" style="color: var(--accent-purple);"></i> Connectivity & ATMs</h4>
      <div class="essential-list">
        ${(es.connectivityAndAtm || []).map(c => `
          <div class="essential-item">
            <i class="fas fa-signal" style="color: var(--accent-purple);"></i>
            <span>${c}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

/**
 * Tab 8: Inclusions, Exclusions & Transport
 */
function renderInclusionsTab(pkg) {
  const incList = document.getElementById('pkg-inclusions-list');
  if (incList) {
    incList.innerHTML = pkg.inclusions.map(inc => `
      <li style="display: flex; gap: 10px; margin-bottom: 12px; font-size: 0.95rem; line-height: 1.5;">
        <i class="fas fa-check" style="color: var(--accent-green); margin-top: 3px; flex-shrink: 0;"></i>
        <span>${inc}</span>
      </li>
    `).join('');
  }

  const excList = document.getElementById('pkg-exclusions-list');
  if (excList) {
    excList.innerHTML = pkg.exclusions.map(exc => `
      <li style="display: flex; gap: 10px; margin-bottom: 12px; font-size: 0.95rem; color: var(--text-muted); line-height: 1.5;">
        <i class="fas fa-times" style="color: #ef4444; margin-top: 3px; flex-shrink: 0;"></i>
        <span>${exc}</span>
      </li>
    `).join('');
  }

  const transportBox = document.getElementById('pkg-transport-specs');
  if (transportBox && pkg.transportation) {
    const t = pkg.transportation;
    transportBox.innerHTML = `
      <div style="background: var(--bg-main); padding: 22px; border-radius: var(--radius-md); border: 1px solid var(--border-light); margin-top: 24px;">
        <h4 style="font-size: 1.1rem; color: var(--primary-navy); margin-bottom: 14px;"><i class="fas fa-car" style="color: var(--accent-coral);"></i> Vehicle & Transport Standards</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 14px; font-size: 0.88rem;">
          <div><strong>Vehicle Class:</strong> <span style="color: var(--text-muted);">${t.vehicleType}</span></div>
          <div><strong>Airport Assistance:</strong> <span style="color: var(--text-muted);">${t.airportTransfers}</span></div>
          <div><strong>Chauffeur:</strong> <span style="color: var(--text-muted);">${t.chaufferAssistance}</span></div>
          <div><strong>Luggage Capacity:</strong> <span style="color: var(--text-muted);">${t.luggageAllowance}</span></div>
        </div>
      </div>
    `;
  }
}

/**
 * Tab 9: Verified Traveler Reviews
 */
function renderReviewsTab(pkg) {
  const container = document.getElementById('pkg-reviews-container');
  if (!container || !pkg.reviews) return;

  container.innerHTML = pkg.reviews.map(rev => `
    <div style="background: var(--bg-main); padding: 22px; border-radius: var(--radius-md); border: 1px solid var(--border-light); margin-bottom: 16px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <div style="display: flex; align-items: center; gap: 14px;">
          <img src="${rev.avatar}" alt="${rev.author}" style="width: 46px; height: 46px; border-radius: 50%; object-fit: cover; border: 2px solid var(--accent-coral);">
          <div>
            <strong style="font-size: 0.95rem; color: var(--primary-navy);">${rev.author}</strong>
            <div style="font-size: 0.75rem; color: var(--text-muted);"><i class="fas fa-check-circle" style="color: var(--accent-green);"></i> Verified Traveler &bull; ${rev.location} &bull; ${rev.date}</div>
          </div>
        </div>
        <div style="color: var(--accent-gold); font-size: 0.9rem;">
          ${Array(rev.rating).fill('<i class="fas fa-star"></i>').join('')}
        </div>
      </div>
      <p style="color: var(--text-main); font-size: 0.92rem; line-height: 1.6;">"${rev.comment}"</p>
    </div>
  `).join('');
}

/**
 * Sticky Booking Widget & Live Price Calculator
 */
function renderBookingWidget(pkg) {
  const widgetPrice = document.querySelector('.widget-price-val');
  if (widgetPrice) widgetPrice.innerText = `₹${pkg.pricing.deluxePrice.toLocaleString('en-IN')}`;

  const widgetOrigPrice = document.querySelector('.widget-price-orig');
  if (widgetOrigPrice) widgetOrigPrice.innerText = `₹${pkg.pricing.originalPrice.toLocaleString('en-IN')}`;

  const widgetDest = document.getElementById('widget-destination-name');
  if (widgetDest) widgetDest.innerText = `${pkg.placeName} (${pkg.country})`;

  const emiText = document.getElementById('widget-emi-text');
  if (emiText) emiText.innerText = `No-cost EMI starts at ${pkg.pricing.emiStartsAt}`;

  // Update Tier Selector Prices
  const stdPriceEl = document.getElementById('tier-price-standard');
  if (stdPriceEl) stdPriceEl.innerText = `₹${pkg.pricing.standardPrice.toLocaleString('en-IN')}`;

  const delPriceEl = document.getElementById('tier-price-deluxe');
  if (delPriceEl) delPriceEl.innerText = `₹${pkg.pricing.deluxePrice.toLocaleString('en-IN')}`;

  const luxPriceEl = document.getElementById('tier-price-luxury');
  if (luxPriceEl) luxPriceEl.innerText = `₹${pkg.pricing.luxuryPrice.toLocaleString('en-IN')}`;

  // Tour Escort Director
  const escortContainer = document.getElementById('pkg-tour-escort');
  if (escortContainer && pkg.tourEscort) {
    const esc = pkg.tourEscort;
    escortContainer.innerHTML = `
      <div class="tour-escort-card">
        <div class="escort-avatar-icon"><i class="fas fa-user-tie"></i></div>
        <div>
          <strong style="font-size: 0.9rem; color: var(--primary-navy); display: block;">${esc.name}</strong>
          <span style="font-size: 0.75rem; color: var(--text-muted); display: block;">${esc.role} &bull; ${esc.experience}</span>
          <span style="font-size: 0.75rem; color: var(--accent-teal); font-weight: 600;"><i class="fas fa-award"></i> ${esc.badge}</span>
        </div>
      </div>
    `;
  }

  // Update Main Booking Button
  const btnBook = document.getElementById('btn-details-book');
  if (btnBook) {
    btnBook.setAttribute('data-id', pkg.id);
    btnBook.setAttribute('data-title', pkg.title);
    btnBook.setAttribute('data-price', pkg.pricing.deluxePrice);
    btnBook.setAttribute('data-destination', pkg.placeName);
    btnBook.setAttribute('data-duration', pkg.durationText);
  }

  updateLiveCalculator();
}

/**
 * Dynamic Live Price Calculator
 */
function initDynamicCalculator() {
  // Hotel Tier buttons
  const tierBtns = document.querySelectorAll('.tier-btn');
  tierBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tierBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedHotelTier = btn.getAttribute('data-tier');
      updateLiveCalculator();
    });
  });

  // Adult counter
  const adultDec = document.getElementById('calc-adult-dec');
  const adultInc = document.getElementById('calc-adult-inc');
  const adultVal = document.getElementById('calc-adult-val');

  if (adultDec && adultInc && adultVal) {
    adultDec.addEventListener('click', () => {
      if (currentAdults > 1) {
        currentAdults--;
        adultVal.innerText = currentAdults;
        updateLiveCalculator();
      }
    });
    adultInc.addEventListener('click', () => {
      if (currentAdults < 12) {
        currentAdults++;
        adultVal.innerText = currentAdults;
        updateLiveCalculator();
      }
    });
  }

  // Child counter
  const childDec = document.getElementById('calc-child-dec');
  const childInc = document.getElementById('calc-child-inc');
  const childVal = document.getElementById('calc-child-val');

  if (childDec && childInc && childVal) {
    childDec.addEventListener('click', () => {
      if (currentChildren > 0) {
        currentChildren--;
        childVal.innerText = currentChildren;
        updateLiveCalculator();
      }
    });
    childInc.addEventListener('click', () => {
      if (currentChildren < 8) {
        currentChildren++;
        childVal.innerText = currentChildren;
        updateLiveCalculator();
      }
    });
  }
}

function updateLiveCalculator() {
  if (!currentPackage) return;

  let unitPrice = currentPackage.pricing.deluxePrice;
  if (selectedHotelTier === 'standard') unitPrice = currentPackage.pricing.standardPrice;
  if (selectedHotelTier === 'luxury') unitPrice = currentPackage.pricing.luxuryPrice;

  // Children get 25% discount on base price
  const childUnitPrice = unitPrice * 0.75;
  const subtotal = (currentAdults * unitPrice) + (currentChildren * childUnitPrice);
  const taxes = Math.round(subtotal * 0.05); // 5% GST
  const grandTotal = subtotal + taxes;

  const totalEl = document.getElementById('calc-grand-total');
  if (totalEl) totalEl.innerText = `₹${grandTotal.toLocaleString('en-IN')}`;

  const breakdownEl = document.getElementById('calc-breakdown-text');
  if (breakdownEl) {
    breakdownEl.innerText = `${currentAdults} Adult(s)${currentChildren > 0 ? ` + ${currentChildren} Child` : ''} (${selectedHotelTier.toUpperCase()} Stay) + 5% GST`;
  }

  // Update Book Now button price
  const btnBook = document.getElementById('btn-details-book');
  if (btnBook) {
    btnBook.setAttribute('data-price', unitPrice);
  }
}

/**
 * Interactive Tab Switching Logic
 */
function initStackTabs() {
  const tabBtns = document.querySelectorAll('.stack-tab-btn');
  const tabPanes = document.querySelectorAll('.stack-tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPane = document.getElementById(`tab-pane-${targetTab}`);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });
}

/**
 * Related Destination Stacks Recommendations
 */
function renderRelatedStacks(dataset, currentId) {
  const container = document.getElementById('related-stacks-grid');
  if (!container) return;

  const allKeys = Object.keys(dataset).map(k => parseInt(k, 10)).filter(k => k !== currentId);
  const relatedKeys = allKeys.slice(0, 3);

  container.innerHTML = relatedKeys.map(k => {
    const item = dataset[k];
    return `
      <article class="package-card" style="flex: 1;">
        <div class="card-img-wrap">
          <img src="${item.images.main}" alt="${item.title}" loading="lazy">
          <div class="card-badges">
            <span class="badge badge-coral">${item.badge}</span>
          </div>
          <div class="card-duration"><i class="far fa-clock"></i> ${item.durationText}</div>
        </div>
        <div class="card-body">
          <div class="card-location"><i class="fas fa-map-marker-alt"></i> ${item.placeName} (${item.country})</div>
          <h3 class="card-title"><a href="package-details.html?id=${item.id}">${item.title}</a></h3>
          <p class="card-summary">${item.subtitle}</p>
          <div class="card-footer">
            <div class="card-price-wrap">
              <span class="card-price-label">From</span>
              <span class="card-price">₹${item.pricing.deluxePrice.toLocaleString('en-IN')}</span>
            </div>
            <a href="package-details.html?id=${item.id}" class="btn btn-outline-dark btn-sm">Explore Stack</a>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/**
 * Lightbox Photo Viewer
 */
function initLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const closeBtn = document.getElementById('lightbox-close-btn');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }
}

function openLightbox(imgUrl, caption) {
  const modal = document.getElementById('lightbox-modal');
  const img = document.getElementById('lightbox-target-img');
  const cap = document.getElementById('lightbox-target-caption');

  if (modal && img) {
    img.src = imgUrl;
    if (cap) cap.innerText = caption || 'Destination Photo';
    modal.classList.add('active');
  }
}
