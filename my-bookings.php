<?php
/**
 * Wanderlust Voyage - Customer Dashboard: My Bookings & Vouchers
 */
$pageTitle = 'My Bookings & Travel Vouchers';
require_once __DIR__ . '/includes/header.php';

$db = getDB();
$currentUser = getLoggedInUser();

// For seamless presentation demo, if user is not logged in, auto-show demo customer (Alex Morgan, id: 2)
$userId = $currentUser ? $currentUser['id'] : 2;

$stmt = $db->prepare("
    SELECT b.*, p.title as package_title, p.destination, p.country, p.featured_image, p.duration_days, p.slug as package_slug 
    FROM bookings b 
    JOIN packages p ON b.package_id = p.id 
    WHERE b.user_id = ? 
    ORDER BY b.created_at DESC
");
$stmt->execute([$userId]);
$bookings = $stmt->fetchAll();
?>

<div class="dashboard-wrap">
  <div class="container">
    <div class="dashboard-header">
      <div class="user-welcome">
        <h2>My Travel Bookings</h2>
        <p style="color: var(--text-muted);">
          Manage your upcoming dream adventures, download printable travel vouchers, and review reservation statuses.
        </p>
      </div>

      <a href="index.php#featured-tours" class="btn btn-primary btn-sm">
        <i class="fas fa-plus"></i> Book Another Tour
      </a>
    </div>

    <?php if (!empty($bookings)): ?>
      <div class="bookings-table-wrap">
        <table class="data-table">
          <thead>
            <tr>
              <th>Booking Ref</th>
              <th>Tour Package</th>
              <th>Departure Date</th>
              <th>Guests</th>
              <th>Total Paid</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <?php foreach ($bookings as $b): ?>
              <tr>
                <td>
                  <span style="font-family: monospace; font-weight: 700; color: var(--accent-coral); background: rgba(255, 90, 95, 0.08); padding: 4px 8px; border-radius: 4px;">
                    <?php echo htmlspecialchars($b['booking_ref']); ?>
                  </span>
                </td>
                <td>
                  <div class="table-pkg-info">
                    <img src="<?php echo htmlspecialchars($b['featured_image']); ?>" alt="Tour" class="table-pkg-thumb">
                    <div>
                      <a href="package-details.php?slug=<?php echo urlencode($b['package_slug']); ?>" style="font-weight: 700; color: var(--primary-navy); display: block;">
                        <?php echo htmlspecialchars($b['package_title']); ?>
                      </a>
                      <span style="font-size: 0.8rem; color: var(--text-muted);">
                        <i class="fas fa-map-marker-alt" style="color: var(--accent-coral);"></i> <?php echo htmlspecialchars($b['destination']); ?>
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <strong><?php echo date('M d, Y', strtotime($b['travel_date'])); ?></strong>
                  <div style="font-size: 0.75rem; color: var(--text-muted);"><?php echo $b['duration_days']; ?> Days Journey</div>
                </td>
                <td>
                  <?php echo $b['adults']; ?> Adult(s)<?php echo ($b['children'] > 0) ? ', ' . $b['children'] . ' Child' : ''; ?>
                </td>
                <td>
                  <strong style="color: var(--primary-navy); font-size: 1.05rem;">₹<?php echo number_format($b['total_amount']); ?></strong>
                  <div style="font-size: 0.75rem; color: var(--accent-green);"><i class="fas fa-check-circle"></i> Paid</div>
                </td>
                <td>
                  <span class="status-badge status-<?php echo htmlspecialchars($b['booking_status']); ?>">
                    <?php echo ucfirst(htmlspecialchars($b['booking_status'])); ?>
                  </span>
                </td>
                <td>
                  <div style="display: flex; gap: 8px;">
                    <button class="btn btn-outline-dark btn-sm" onclick='showVoucherModal(<?php echo json_encode($b); ?>)'>
                      <i class="fas fa-receipt"></i> Voucher
                    </button>
                    <button class="btn btn-outline btn-sm" style="color: #1a73e8; border-color: #93c5fd;" onclick='showDirectionsModal(<?php echo json_encode($b); ?>)'>
                      <i class="fas fa-location-arrow"></i> Directions
                    </button>
                    <?php if ($b['booking_status'] !== 'cancelled'): ?>
                      <button class="btn btn-sm btn-outline" style="color: #ef4444; border-color: #fca5a5;" onclick="cancelBooking(<?php echo $b['id']; ?>)">
                        Cancel
                      </button>
                    <?php endif; ?>
                  </div>
                </td>
              </tr>
            <?php endforeach; ?>
          </tbody>
        </table>
      </div>
    <?php else: ?>
      <div style="text-align: center; padding: 80px 20px; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px dashed var(--border-light);">
        <i class="fas fa-passport" style="font-size: 4rem; color: var(--accent-coral); margin-bottom: 20px;"></i>
        <h3 style="font-size: 1.5rem; margin-bottom: 8px;">No active travel bookings found</h3>
        <p style="color: var(--text-muted); margin-bottom: 24px;">You haven't reserved any holiday packages yet. Explore our handcrafted destinations today!</p>
        <a href="index.php#featured-tours" class="btn btn-primary">
          <i class="fas fa-compass"></i> Explore Featured Tours
        </a>
      </div>
    <?php endif; ?>
  </div>
</div>

<!-- Standalone Voucher & Directions View Modal -->
<div class="modal-backdrop" id="view-voucher-modal">
  <div class="modal-card" style="max-width: 650px;">
    <div class="modal-header">
      <h3 class="modal-title">Trip Confirmation & Directions</h3>
      <button class="modal-close" onclick="document.getElementById('view-voucher-modal').classList.remove('active')">&times;</button>
    </div>
    <div class="modal-body" id="voucher-modal-content">
      <!-- Dynamic content -->
    </div>
  </div>
</div>

<script>
function showVoucherModal(b) {
  const modal = document.getElementById('view-voucher-modal');
  const container = document.getElementById('voucher-modal-content');

  const dataset = window.TOUR_DESTINATIONS_DATA || {};
  const pkg = dataset[b.package_id] || dataset[1] || {};
  const resort = (pkg.hotels && pkg.hotels[0]) ? pkg.hotels[0] : {
    name: 'Tea Valley Luxury Mountain Resort',
    tier: 'Deluxe 4-Star Resort',
    location: b.destination + ', ' + b.country,
    image: b.featured_image || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    checkIn: '2:00 PM'
  };

  const lat = (pkg.geo && pkg.geo.lat) ? pkg.geo.lat : 10.0889;
  const lng = (pkg.geo && pkg.geo.lng) ? pkg.geo.lng : 77.0595;
  const airport = (pkg.geo && pkg.geo.airport) ? pkg.geo.airport : 'Nearest International Airport';
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving`;

  container.innerHTML = `
    <div class="voucher-card">
      <div class="voucher-header">
        <div>
          <span class="badge badge-green"><i class="fas fa-check-circle"></i> Confirmed Booking</span>
          <h3 style="margin-top: 6px; font-size: 1.3rem;">SpidyWeb Official Travel Pass</h3>
        </div>
        <div class="voucher-ref">${b.booking_ref}</div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px; font-size: 0.9rem;">
        <div>
          <strong style="color: var(--text-muted);">Package Title:</strong>
          <p style="font-weight: 700; font-size: 1.05rem; color: var(--primary-navy);">${b.package_title}</p>
        </div>
        <div>
          <strong style="color: var(--text-muted);">Destination:</strong>
          <p style="font-weight: 600;">${b.destination}, ${b.country}</p>
        </div>
        <div>
          <strong style="color: var(--text-muted);">Departure Date:</strong>
          <p style="font-weight: 600;">${b.travel_date}</p>
        </div>
        <div>
          <strong style="color: var(--text-muted);">Travelers:</strong>
          <p style="font-weight: 600;">${b.adults} Adult(s) ${b.children > 0 ? ', ' + b.children + ' Child' : ''}</p>
        </div>
        <div>
          <strong style="color: var(--text-muted);">Payment Method:</strong>
          <p style="font-weight: 600;">${b.payment_method} (Verified Paid)</p>
        </div>
        <div>
          <strong style="color: var(--text-muted);">Amount Paid:</strong>
          <p style="font-weight: 800; color: var(--accent-green); font-size: 1.15rem;">₹${Math.round(parseFloat(b.total_amount)).toLocaleString('en-IN')}</p>
        </div>
      </div>

      <!-- POST-PAYMENT RESORT DIRECTIONS -->
      <div class="resort-directions-card" style="margin: 20px 0;">
        <div class="resort-directions-header">
          <div style="display: flex; align-items: center; gap: 14px;">
            <img src="${resort.image}" alt="${resort.name}" class="resort-thumb-img">
            <div>
              <span class="badge badge-teal" style="font-size: 0.72rem; padding: 2px 8px;"><i class="fas fa-hotel"></i> ${resort.tier}</span>
              <h4 style="font-size: 1.15rem; color: var(--primary-navy); margin-top: 4px; margin-bottom: 2px;">${resort.name}</h4>
              <p style="font-size: 0.82rem; color: var(--text-muted);"><i class="fas fa-map-marker-alt" style="color: var(--accent-coral);"></i> ${resort.location}</p>
            </div>
          </div>
          <div style="text-align: right;">
            <span style="font-size: 0.78rem; color: var(--text-muted); display: block;">Check-in</span>
            <strong style="font-size: 0.95rem; color: var(--primary-navy);">${resort.checkIn || '2:00 PM'}</strong>
          </div>
        </div>

        <div class="route-map-visual">
          <div class="route-step-row">
            <div class="route-node">
              <div class="route-node-icon"><i class="fas fa-plane-arrival"></i></div>
              <div class="route-node-label">Pickup Point</div>
              <div class="route-node-sub">${airport.split('-')[0].trim()}</div>
            </div>
            <div class="route-line-connector"></div>
            <div class="route-node">
              <div class="route-node-icon"><i class="fas fa-car-side"></i></div>
              <div class="route-node-label">Private Transit</div>
              <div class="route-node-sub">Dedicated Chauffeur</div>
            </div>
            <div class="route-line-connector"></div>
            <div class="route-node">
              <div class="route-node-icon hotel"><i class="fas fa-bed"></i></div>
              <div class="route-node-label">Resort Porch</div>
              <div class="route-node-sub">${resort.name.split(' ')[0]} Reception</div>
            </div>
          </div>
        </div>

        <div class="directions-action-bar">
          <div class="directions-travel-time">
            <i class="fas fa-route"></i>
            <span>GPS: ${lat.toFixed(4)}° N, ${lng.toFixed(4)}° E</span>
          </div>
          <a href="${googleMapsUrl}" target="_blank" rel="noopener" class="btn-google-maps">
            <i class="fab fa-google"></i> Open in Google Maps
          </a>
        </div>

        <div class="driver-helper-box">
          <i class="fas fa-taxi"></i>
          <div>
            <strong>Driver & Taxi Navigation Note:</strong>
            <p style="margin-top: 2px; margin-bottom: 0;">Show this pass to your assigned chauffeur or airport cab. The Google Maps GPS route leads right to the resort check-in porch.</p>
          </div>
        </div>
      </div>

      <div style="display: flex; align-items: center; justify-content: space-between; background: var(--bg-main); padding: 14px; border-radius: var(--radius-sm); margin-bottom: 20px;">
        <div style="font-size: 0.85rem; color: var(--text-muted);">
          <i class="fas fa-qrcode" style="font-size: 2.2rem; vertical-align: middle; margin-right: 10px; color: var(--primary-navy);"></i>
          <span>Scan at Airport / Resort Check-In Desk</span>
        </div>
        <span class="status-badge status-${b.booking_status}">${b.booking_status.toUpperCase()}</span>
      </div>

      <div style="display: flex; gap: 12px; justify-content: flex-end; flex-wrap: wrap;">
        <a href="${googleMapsUrl}" target="_blank" rel="noopener" class="btn btn-outline-dark">
          <i class="fas fa-location-arrow"></i> Google Maps GPS
        </a>
        <button class="btn btn-outline-dark" onclick="window.print()">
          <i class="fas fa-print"></i> Print Voucher
        </button>
        <button class="btn btn-primary" onclick="document.getElementById('view-voucher-modal').classList.remove('active')">
          Done
        </button>
      </div>
    </div>
  `;

  modal.classList.add('active');
}

function showDirectionsModal(b) {
  const modal = document.getElementById('view-voucher-modal');
  const container = document.getElementById('voucher-modal-content');

  const dataset = window.TOUR_DESTINATIONS_DATA || {};
  const pkg = dataset[b.package_id] || dataset[1] || {};
  const resort = (pkg.hotels && pkg.hotels[0]) ? pkg.hotels[0] : {
    name: 'Tea Valley Luxury Mountain Resort',
    tier: 'Deluxe 4-Star Resort',
    location: b.destination + ', ' + b.country,
    image: b.featured_image || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    checkIn: '2:00 PM'
  };

  const lat = (pkg.geo && pkg.geo.lat) ? pkg.geo.lat : 10.0889;
  const lng = (pkg.geo && pkg.geo.lng) ? pkg.geo.lng : 77.0595;
  const airport = (pkg.geo && pkg.geo.airport) ? pkg.geo.airport : 'Nearest International Airport';
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving`;

  container.innerHTML = `
    <div class="resort-directions-card" style="border: none; box-shadow: none; padding: 0;">
      <div class="resort-directions-header">
        <div style="display: flex; align-items: center; gap: 14px;">
          <img src="${resort.image}" alt="${resort.name}" class="resort-thumb-img" style="width: 80px; height: 80px;">
          <div>
            <span class="badge badge-teal" style="font-size: 0.72rem; padding: 2px 8px;"><i class="fas fa-hotel"></i> ${resort.tier}</span>
            <h3 style="font-size: 1.25rem; color: var(--primary-navy); margin-top: 4px; margin-bottom: 2px;">${resort.name}</h3>
            <p style="font-size: 0.84rem; color: var(--text-muted);"><i class="fas fa-map-marker-alt" style="color: var(--accent-coral);"></i> ${resort.location}</p>
          </div>
        </div>
        <div style="text-align: right;">
          <span style="font-size: 0.78rem; color: var(--text-muted); display: block;">Check-in Time</span>
          <strong style="font-size: 1rem; color: var(--primary-navy);">${resort.checkIn || '2:00 PM'}</strong>
        </div>
      </div>

      <div class="route-map-visual" style="margin: 20px 0;">
        <div class="route-step-row">
          <div class="route-node">
            <div class="route-node-icon"><i class="fas fa-plane-arrival"></i></div>
            <div class="route-node-label">Arrival Hub</div>
            <div class="route-node-sub">${airport.split('-')[0].trim()}</div>
          </div>
          <div class="route-line-connector"></div>
          <div class="route-node">
            <div class="route-node-icon"><i class="fas fa-car-side"></i></div>
            <div class="route-node-label">Chauffeur Transfer</div>
            <div class="route-node-sub">Private AC Sedan</div>
          </div>
          <div class="route-line-connector"></div>
          <div class="route-node">
            <div class="route-node-icon hotel"><i class="fas fa-bed"></i></div>
            <div class="route-node-label">Resort Entrance</div>
            <div class="route-node-sub">${resort.name.split(' ')[0]} Reception</div>
          </div>
        </div>
      </div>

      <div class="directions-action-bar">
        <div class="directions-travel-time">
          <i class="fas fa-route"></i>
          <span>GPS Coordinates: ${lat.toFixed(4)}° N, ${lng.toFixed(4)}° E</span>
        </div>
        <a href="${googleMapsUrl}" target="_blank" rel="noopener" class="btn-google-maps">
          <i class="fab fa-google"></i> Start GPS Navigation
        </a>
      </div>

      <div class="driver-helper-box" style="margin-bottom: 20px;">
        <i class="fas fa-taxi"></i>
        <div>
          <strong>Driver & Cab Navigation Card:</strong>
          <p style="margin-top: 2px; margin-bottom: 0;">Show this screen to your taxi or chauffeur upon airport arrival. Turn-by-turn route guide leads right to the hotel lobby reception.</p>
        </div>
      </div>

      <div style="display: flex; gap: 12px; justify-content: flex-end;">
        <button class="btn btn-outline-dark" onclick="document.getElementById('view-voucher-modal').classList.remove('active');">
          Close
        </button>
        <a href="${googleMapsUrl}" target="_blank" rel="noopener" class="btn btn-primary">
          <i class="fas fa-location-arrow"></i> Open Google Maps
        </a>
      </div>
    </div>
  `;

  modal.classList.add('active');
}

async function cancelBooking(id) {
  if (!confirm('Are you sure you want to cancel this booking? Refund policy will apply.')) return;

  const fd = new FormData();
  fd.append('action', 'cancel');
  fd.append('id', id);

  try {
    const res = await fetch('api/bookings.php', {
      method: 'POST',
      body: fd
    });
    const data = await res.json();
    if (data.success) {
      showToast('Booking cancelled successfully.', 'info');
      setTimeout(() => window.location.reload(), 700);
    } else {
      showToast(data.error || 'Failed to cancel booking.', 'error');
    }
  } catch (err) {
    showToast('Server error.', 'error');
  }
}
</script>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
