/**
 * Wanderlust Voyage - Admin Portal JavaScript
 * Handles Canvas Analytics Charts, Package CRUD Modals, Booking Status Management
 */

document.addEventListener('DOMContentLoaded', () => {
  initRevenueChart();
  initDestinationShareChart();
  initPackageModalHandlers();
  initBookingStatusHandlers();
  initInquiryHandlers();
});

/**
 * Custom Canvas-based Revenue Analytics Line & Bar Chart
 */
function initRevenueChart() {
  const canvas = document.getElementById('revenueChartCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);

  const months = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
  const revenue = [14200, 18500, 24800, 31200, 42000, 39500, 48900, 56400];
  const maxVal = 60000;

  const paddingLeft = 50;
  const paddingBottom = 30;
  const paddingTop = 20;
  const paddingRight = 20;
  const chartW = rect.width - paddingLeft - paddingRight;
  const chartH = rect.height - paddingTop - paddingBottom;

  // Draw Grid Lines & Labels
  ctx.strokeStyle = '#e2e8f0';
  ctx.lineWidth = 1;
  ctx.fillStyle = '#64748b';
  ctx.font = '11px sans-serif';

  const gridSteps = 4;
  for (let i = 0; i <= gridSteps; i++) {
    const y = paddingTop + (chartH / gridSteps) * i;
    const val = maxVal - (maxVal / gridSteps) * i;
    
    ctx.beginPath();
    ctx.moveTo(paddingLeft, y);
    ctx.lineTo(rect.width - paddingRight, y);
    ctx.stroke();

    ctx.fillText('₹' + (val / 1000) + 'k', 10, y + 4);
  }

  // Draw Gradient Area under Line
  const gradient = ctx.createLinearGradient(0, paddingTop, 0, paddingTop + chartH);
  gradient.addColorStop(0, 'rgba(255, 90, 95, 0.35)');
  gradient.addColorStop(1, 'rgba(255, 90, 95, 0.0)');

  const points = [];
  const stepX = chartW / (months.length - 1);

  for (let i = 0; i < months.length; i++) {
    const x = paddingLeft + i * stepX;
    const y = paddingTop + chartH - (revenue[i] / maxVal) * chartH;
    points.push({ x, y });

    // Draw Month Label
    ctx.fillStyle = '#64748b';
    ctx.fillText(months[i], x - 10, rect.height - 10);
  }

  // Draw Area Path
  ctx.beginPath();
  ctx.moveTo(points[0].x, paddingTop + chartH);
  points.forEach(p => ctx.lineTo(p.x, p.y));
  ctx.lineTo(points[points.length - 1].x, paddingTop + chartH);
  ctx.closePath();
  ctx.fillStyle = gradient;
  ctx.fill();

  // Draw Line
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(points[i].x, points[i].y);
  }
  ctx.strokeStyle = '#ff5a5f';
  ctx.lineWidth = 3;
  ctx.stroke();

  // Draw Point Circles
  points.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 5, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#ff5a5f';
    ctx.stroke();
  });
}

/**
 * Custom Canvas Doughnut Chart for Popular Destinations
 */
function initDestinationShareChart() {
  const canvas = document.getElementById('destShareChartCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();

  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);

  const data = [
    { label: 'Bali', share: 0.35, color: '#ff5a5f' },
    { label: 'Swiss Alps', share: 0.25, color: '#00b4d8' },
    { label: 'Santorini', share: 0.20, color: '#ffb703' },
    { label: 'Kyoto', share: 0.12, color: '#7209b7' },
    { label: 'Others', share: 0.08, color: '#94a3b8' }
  ];

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const radius = Math.min(centerX, centerY) - 20;
  const innerRadius = radius * 0.6;

  let currentAngle = -0.5 * Math.PI;

  data.forEach(segment => {
    const sliceAngle = segment.share * 2 * Math.PI;

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
    ctx.arc(centerX, centerY, innerRadius, currentAngle + sliceAngle, currentAngle, true);
    ctx.closePath();
    ctx.fillStyle = segment.color;
    ctx.fill();

    currentAngle += sliceAngle;
  });

  // Center Text
  ctx.fillStyle = '#0a192f';
  ctx.font = 'bold 16px Outfit, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('100%', centerX, centerY - 6);
  ctx.font = '11px sans-serif';
  ctx.fillStyle = '#64748b';
  ctx.fillText('Capacity', centerX, centerY + 12);
}

/**
 * Package CRUD Modal Handlers (Add, Edit, Delete)
 */
function initPackageModalHandlers() {
  const pkgModal = document.getElementById('admin-package-modal');
  const addPkgBtn = document.getElementById('btn-add-package');
  const closePkgBtn = pkgModal ? pkgModal.querySelector('.modal-close') : null;
  const pkgForm = document.getElementById('admin-package-form');

  if (addPkgBtn && pkgModal) {
    addPkgBtn.addEventListener('click', () => {
      document.getElementById('modal-package-title').innerText = 'Add New Tour Package';
      if (pkgForm) pkgForm.reset();
      document.getElementById('pkg-id-input').value = '';
      pkgModal.classList.add('active');
    });
  }

  if (closePkgBtn && pkgModal) {
    closePkgBtn.addEventListener('click', () => {
      pkgModal.classList.remove('active');
    });
  }

  // Edit Package Button Clicks
  document.querySelectorAll('.btn-edit-package').forEach(btn => {
    btn.addEventListener('click', async () => {
      const pkgId = btn.getAttribute('data-id');
      try {
        const res = await fetch(`../api/packages.php?id=${pkgId}`);
        const data = await res.json();
        if (data.success && data.package) {
          const p = data.package;
          document.getElementById('modal-package-title').innerText = 'Edit Tour Package';
          document.getElementById('pkg-id-input').value = p.id;
          document.getElementById('pkg-title-input').value = p.title;
          document.getElementById('pkg-dest-input').value = p.destination;
          document.getElementById('pkg-country-input').value = p.country;
          document.getElementById('pkg-cat-input').value = p.category_id;
          document.getElementById('pkg-days-input').value = p.duration_days;
          document.getElementById('pkg-nights-input').value = p.duration_nights;
          document.getElementById('pkg-price-input').value = p.price;
          document.getElementById('pkg-disc-input').value = p.discount_price || '';
          document.getElementById('pkg-img-input').value = p.featured_image;
          document.getElementById('pkg-summary-input').value = p.summary;
          document.getElementById('pkg-desc-input').value = p.description;
          document.getElementById('pkg-inc-input').value = p.inclusions;
          document.getElementById('pkg-exc-input').value = p.exclusions;

          pkgModal.classList.add('active');
        }
      } catch (err) {
        alert('Could not fetch package details.');
      }
    });
  });

  // Save/Update Package AJAX
  if (pkgForm) {
    pkgForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(pkgForm);
      formData.append('action', 'save_package');

      try {
        const res = await fetch('../api/admin.php', {
          method: 'POST',
          body: formData
        });
        const data = await res.json();
        if (data.success) {
          alert('Package saved successfully!');
          window.location.reload();
        } else {
          alert(data.error || 'Failed to save package.');
        }
      } catch (err) {
        alert('Error saving package data.');
      }
    });
  }

  // Delete Package Clicks
  document.querySelectorAll('.btn-delete-package').forEach(btn => {
    btn.addEventListener('click', async () => {
      const pkgId = btn.getAttribute('data-id');
      if (confirm(`Are you sure you want to delete package #${pkgId}? This action cannot be undone.`)) {
        const fd = new FormData();
        fd.append('action', 'delete_package');
        fd.append('id', pkgId);

        try {
          const res = await fetch('../api/admin.php', {
            method: 'POST',
            body: fd
          });
          const data = await res.json();
          if (data.success) {
            alert('Package deleted.');
            window.location.reload();
          } else {
            alert(data.error || 'Failed to delete.');
          }
        } catch (err) {
          alert('Server error.');
        }
      }
    });
  });
}

/**
 * Booking Status Update Handlers
 */
function initBookingStatusHandlers() {
  document.querySelectorAll('.select-booking-status').forEach(select => {
    select.addEventListener('change', async () => {
      const bookingId = select.getAttribute('data-id');
      const newStatus = select.value;

      const fd = new FormData();
      fd.append('action', 'update_booking_status');
      fd.append('id', bookingId);
      fd.append('status', newStatus);

      try {
        const res = await fetch('../api/admin.php', {
          method: 'POST',
          body: fd
        });
        const data = await res.json();
        if (data.success) {
          // Status updated
          select.className = `select-booking-status status-badge status-${newStatus}`;
        } else {
          alert(data.error || 'Failed to update status.');
        }
      } catch (err) {
        alert('Failed to connect to server.');
      }
    });
  });
}

/**
 * Inquiry Action Handlers
 */
function initInquiryHandlers() {
  document.querySelectorAll('.btn-resolve-inquiry').forEach(btn => {
    btn.addEventListener('click', async () => {
      const inqId = btn.getAttribute('data-id');
      const fd = new FormData();
      fd.append('action', 'resolve_inquiry');
      fd.append('id', inqId);

      try {
        const res = await fetch('../api/admin.php', {
          method: 'POST',
          body: fd
        });
        const data = await res.json();
        if (data.success) {
          btn.closest('tr').querySelector('.inquiry-status-pill').innerText = 'Replied';
          btn.remove();
        }
      } catch (err) {}
    });
  });
}
