<?php
/**
 * Wanderlust Voyage - Contact Us & Support FAQ
 */
$pageTitle = 'Contact Our Concierge & FAQs';
require_once __DIR__ . '/includes/header.php';
?>

<!-- Contact Hero -->
<section class="details-hero" style="text-align: center; padding: 130px 0 60px;">
  <div class="container" style="max-width: 700px;">
    <span class="badge badge-coral" style="margin-bottom: 14px;">We're Here For You</span>
    <h1 style="font-size: 2.8rem; color: #ffffff; margin-bottom: 14px;">Let's Plan Your Next Adventure</h1>
    <p style="color: rgba(255, 255, 255, 0.85); font-size: 1.1rem;">
      Have a custom itinerary request, group booking questions, or need visa recommendations? Our global travel architects are ready to assist you.
    </p>
  </div>
</section>

<!-- Contact Info & Form Section -->
<section class="section" style="background: #ffffff;">
  <div class="container">
    <div style="display: grid; grid-template-columns: 1fr 1.5fr; gap: 48px; margin-bottom: 80px;">
      <!-- Contact Info Cards -->
      <div>
        <h2 class="details-heading" style="margin-bottom: 24px;"><i class="fas fa-map-marked-alt"></i> Global Headquarters</h2>

        <div style="display: flex; flex-direction: column; gap: 20px; margin-bottom: 32px;">
          <div style="padding: 20px; background: var(--bg-main); border-radius: var(--radius-md); border: 1px solid var(--border-light); display: flex; gap: 16px; align-items: flex-start;">
            <div style="width: 44px; height: 44px; border-radius: 50%; background: rgba(255, 90, 95, 0.12); color: var(--accent-coral); display: flex; align-items: center; justify-content: center; font-size: 1.2rem; flex-shrink: 0;">
              <i class="fas fa-building"></i>
            </div>
            <div>
              <h4 style="font-size: 1rem; margin-bottom: 4px;">New York Hub</h4>
              <p style="font-size: 0.85rem; color: var(--text-muted);">452 5th Avenue, Suite 1800, New York, NY 10018, USA</p>
              <span style="font-size: 0.85rem; font-weight: 600; color: var(--primary-navy); margin-top: 4px; display: block;">+1 (800) 555-0199</span>
            </div>
          </div>

          <div style="padding: 20px; background: var(--bg-main); border-radius: var(--radius-md); border: 1px solid var(--border-light); display: flex; gap: 16px; align-items: flex-start;">
            <div style="width: 44px; height: 44px; border-radius: 50%; background: rgba(0, 180, 216, 0.12); color: var(--accent-teal); display: flex; align-items: center; justify-content: center; font-size: 1.2rem; flex-shrink: 0;">
              <i class="fas fa-envelope-open-text"></i>
            </div>
            <div>
              <h4 style="font-size: 1rem; margin-bottom: 4px;">Email Inquiries</h4>
              <p style="font-size: 0.85rem; color: var(--text-muted);">concierge@wanderlust.com</p>
              <span style="font-size: 0.8rem; color: var(--accent-green); font-weight: 600;">Average response time: Under 2 hours</span>
            </div>
          </div>

          <div style="padding: 20px; background: var(--bg-main); border-radius: var(--radius-md); border: 1px solid var(--border-light); display: flex; gap: 16px; align-items: flex-start;">
            <div style="width: 44px; height: 44px; border-radius: 50%; background: rgba(16, 185, 129, 0.12); color: var(--accent-green); display: flex; align-items: center; justify-content: center; font-size: 1.2rem; flex-shrink: 0;">
              <i class="fas fa-clock"></i>
            </div>
            <div>
              <h4 style="font-size: 1rem; margin-bottom: 4px;">Concierge Hours</h4>
              <p style="font-size: 0.85rem; color: var(--text-muted);">Monday – Sunday: 24/7 Global Trip Assistance</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Inquiries Form -->
      <div style="background: var(--bg-card); padding: 36px; border-radius: var(--radius-lg); box-shadow: var(--shadow-md); border: 1px solid var(--border-light);">
        <h3 style="font-size: 1.5rem; margin-bottom: 6px;">Send Us a Message</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 24px;">
          Fill out your contact details and our travel planners will reply promptly.
        </p>

        <form id="contact-form" onsubmit="handleContactSubmit(event)">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div class="widget-form-group">
              <label class="widget-label">Your Full Name *</label>
              <input type="text" name="name" class="widget-input" placeholder="Eleanor Vance" required>
            </div>

            <div class="widget-form-group">
              <label class="widget-label">Email Address *</label>
              <input type="email" name="email" class="widget-input" placeholder="eleanor@example.com" required>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div class="widget-form-group">
              <label class="widget-label">Phone / WhatsApp</label>
              <input type="tel" name="phone" class="widget-input" placeholder="+1 555 019 4482">
            </div>

            <div class="widget-form-group">
              <label class="widget-label">Subject</label>
              <input type="text" name="subject" class="widget-input" placeholder="e.g. Custom Family Tour to Japan" required>
            </div>
          </div>

          <div class="widget-form-group">
            <label class="widget-label">Your Message & Requirements *</label>
            <textarea name="message" class="widget-input" rows="4" placeholder="Tell us about your expected travel dates, group size, and favorite destinations..." required></textarea>
          </div>

          <button type="submit" id="btn-submit-contact" class="btn btn-primary btn-lg btn-block">
            <i class="fas fa-paper-plane"></i> Send Travel Inquiry
          </button>
        </form>
      </div>
    </div>

    <!-- FAQ Accordion -->
    <div id="faq" style="max-width: 850px; margin: 0 auto;">
      <div class="section-header">
        <span class="section-subtitle">Common Questions</span>
        <h2 class="section-title">Frequently Asked Questions</h2>
      </div>

      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div class="faq-item active" style="background: var(--bg-main); border: 1px solid var(--border-light); border-radius: var(--radius-md); overflow: hidden;">
          <button class="faq-question" type="button" style="width: 100%; text-align: left; padding: 20px; background: transparent; font-weight: 700; font-size: 1.05rem; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
            <span>What is your cancellation and refund policy?</span>
            <i class="fas fa-chevron-down" style="color: var(--accent-coral);"></i>
          </button>
          <div class="faq-answer" style="padding: 0 20px 20px; color: var(--text-muted); font-size: 0.95rem; line-height: 1.6;">
            All our standard tour packages offer a 100% full refund if cancelled at least 7 days prior to your scheduled departure date. Optional comprehensive travel insurance is available during booking to cover last-minute emergencies.
          </div>
        </div>

        <div class="faq-item" style="background: var(--bg-main); border: 1px solid var(--border-light); border-radius: var(--radius-md); overflow: hidden;">
          <button class="faq-question" type="button" style="width: 100%; text-align: left; padding: 20px; background: transparent; font-weight: 700; font-size: 1.05rem; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
            <span>Can I customize the day-by-day itinerary?</span>
            <i class="fas fa-chevron-down" style="color: var(--accent-coral);"></i>
          </button>
          <div class="faq-answer" style="padding: 0 20px 20px; color: var(--text-muted); font-size: 0.95rem; line-height: 1.6;">
            Yes! We specialize in bespoke private tours. Simply send us an inquiry with your preferred additions (extra days, helicopter tours, private culinary classes) and our concierge will adjust the package.
          </div>
        </div>

        <div class="faq-item" style="background: var(--bg-main); border: 1px solid var(--border-light); border-radius: var(--radius-md); overflow: hidden;">
          <button class="faq-question" type="button" style="width: 100%; text-align: left; padding: 20px; background: transparent; font-weight: 700; font-size: 1.05rem; display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
            <span>Are international flights included in the package price?</span>
            <i class="fas fa-chevron-down" style="color: var(--accent-coral);"></i>
          </button>
          <div class="faq-answer" style="padding: 0 20px 20px; color: var(--text-muted); font-size: 0.95rem; line-height: 1.6;">
            Package prices cover all internal destination transport, airport chauffeur transfers, luxury accommodations, excursions, and domestic ferries/bullet trains. International long-haul flights from your home country can be arranged upon request.
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<script>
async function handleContactSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('contact-form');
  const btn = document.getElementById('btn-submit-contact');
  btn.disabled = true;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending message...';

  const fd = new FormData(form);

  try {
    const res = await fetch('api/contact.php', {
      method: 'POST',
      body: fd
    });
    const data = await res.json();
    if (data.success) {
      showToast(data.message, 'success');
      form.reset();
    } else {
      showToast(data.error || 'Failed to submit inquiry.', 'error');
    }
  } catch (err) {
    showToast('Network error.', 'error');
  } finally {
    btn.disabled = false;
    btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Travel Inquiry';
  }
}
</script>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
