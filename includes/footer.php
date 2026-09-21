<?php
/**
 * Wanderlust Voyage - Common Semantic Footer & Global Modals
 */
?>
  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.php" class="logo">
            <i class="fas fa-spider" style="color: var(--accent-coral);"></i>
            <span>SpidyWeb</span>
          </a>
          <p>
            Weaving luxury expeditions, incredible India heritage tours, pristine Himalayan treks, and bespoke vacation experiences tailored to create lifelong memories.
          </p>
          <div style="margin-top: 20px; display: flex; gap: 10px;">
            <span class="badge badge-gold"><i class="fas fa-award"></i> Best Tour Operator 2026</span>
          </div>
        </div>

        <div>
          <h4 class="footer-title">Explore Tours</h4>
          <ul class="footer-links">
            <li><a href="index.php?cat=incredible-india#featured-tours">Incredible India</a></li>
            <li><a href="index.php?cat=tropical-beach#featured-tours">Tropical & Beach</a></li>
            <li><a href="index.php?cat=himalayan-trekking#featured-tours">Himalayan & Trekking</a></li>
            <li><a href="index.php?cat=cultural-heritage#featured-tours">Cultural & Heritage</a></li>
            <li><a href="index.php?cat=romantic-honeymoon#featured-tours">Romantic Honeymoon</a></li>
          </ul>
        </div>

        <div>
          <h4 class="footer-title">Quick Links</h4>
          <ul class="footer-links">
            <li><a href="about.php">About SpidyWeb</a></li>
            <li><a href="contact.php">Contact Concierge</a></li>
            <li><a href="my-bookings.php">Manage My Bookings</a></li>
            <li><a href="admin/login.php">Staff / Admin Portal</a></li>
            <li><a href="contact.php#faq">Frequently Asked Questions</a></li>
          </ul>
        </div>

        <div>
          <h4 class="footer-title">Travel Inspiration</h4>
          <p style="font-size: 0.9rem; margin-bottom: 14px;">Subscribe to get private member deals and early-bird seasonal discounts.</p>
          <form class="footer-newsletter" onsubmit="event.preventDefault(); showToast('Thank you for subscribing to SpidyWeb Newsletter!', 'success');">
            <input type="email" placeholder="Enter your email address" required>
            <button type="submit" class="btn btn-primary btn-block btn-sm">
              <i class="fas fa-paper-plane"></i> Subscribe Now
            </button>
          </form>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; <?php echo date('Y'); ?> SpidyWeb Tours & Travels Inc. All rights reserved.</p>
        <div class="social-links">
          <a href="#" class="social-icon" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="social-icon" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="#" class="social-icon" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
          <a href="#" class="social-icon" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
    </div>
  </footer>

  <!-- ========================================================================= -->
  <!-- Global Multi-Step Booking Modal                                           -->
  <!-- ========================================================================= -->
  <div class="modal-backdrop" id="booking-modal">
    <div class="modal-card">
      <div class="modal-header">
        <div>
          <h3 class="modal-title" id="modal-pkg-title">Reserve Tour Package</h3>
          <p style="font-size: 0.85rem; color: var(--text-muted);" id="modal-pkg-dest">Destination</p>
        </div>
        <button class="modal-close" aria-label="Close Modal">&times;</button>
      </div>

      <div class="modal-body">
        <!-- Progress Stepper -->
        <div class="step-progress">
          <div class="step-item active">
            <div class="step-bubble">1</div>
            <span class="step-name">Dates & Guests</span>
          </div>
          <div class="step-item">
            <div class="step-bubble">2</div>
            <span class="step-name">Custom Add-ons</span>
          </div>
          <div class="step-item">
            <div class="step-bubble">3</div>
            <span class="step-name">Payment</span>
          </div>
        </div>

        <!-- Step 1: Dates & Guests -->
        <div class="step-section" id="step-section-1">
          <div class="widget-form-group">
            <label class="widget-label"><i class="fas fa-calendar-alt"></i> Select Travel Departure Date</label>
            <input type="date" class="widget-input" id="book-date" required>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
            <div>
              <label class="widget-label">Adults (Age 12+)</label>
              <div class="guest-counter">
                <button type="button" class="counter-btn" id="modal-adult-dec">-</button>
                <span class="counter-val" id="modal-adult-val">1</span>
                <button type="button" class="counter-btn" id="modal-adult-inc">+</button>
              </div>
            </div>

            <div>
              <label class="widget-label">Children (Age 2-11, 25% Off)</label>
              <div class="guest-counter">
                <button type="button" class="counter-btn" id="modal-child-dec">-</button>
                <span class="counter-val" id="modal-child-val">0</span>
                <button type="button" class="counter-btn" id="modal-child-inc">+</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 2: Custom Add-ons -->
        <div class="step-section" id="step-section-2" style="display: none;">
          <h4 style="font-size: 1.05rem; margin-bottom: 14px;">Enhance Your Vacation Experience</h4>
          
          <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 20px;">
            <label style="display: flex; align-items: center; justify-content: space-between; padding: 14px; border: 1px solid var(--border-light); border-radius: var(--radius-md); cursor: pointer; background: var(--bg-main);">
              <div style="display: flex; align-items: center; gap: 12px;">
                <input type="checkbox" class="addon-checkbox" data-name="Comprehensive Medical & Travel Insurance" data-price="2500" data-per-person="true" style="width: 18px; height: 18px; accent-color: var(--accent-coral);">
                <div>
                  <strong style="font-size: 0.95rem;">Comprehensive Travel & Medical Insurance</strong>
                  <p style="font-size: 0.8rem; color: var(--text-muted);">100% trip cancellation and medical emergency protection.</p>
                </div>
              </div>
              <span style="font-weight: 700; color: var(--primary-navy);">+₹2,500 / person</span>
            </label>

            <label style="display: flex; align-items: center; justify-content: space-between; padding: 14px; border: 1px solid var(--border-light); border-radius: var(--radius-md); cursor: pointer; background: var(--bg-main);">
              <div style="display: flex; align-items: center; gap: 12px;">
                <input type="checkbox" class="addon-checkbox" data-name="Airport VIP Fast-Track & Lounge Access" data-price="3500" data-per-person="false" style="width: 18px; height: 18px; accent-color: var(--accent-coral);">
                <div>
                  <strong style="font-size: 0.95rem;">Airport VIP Fast-Track & Lounge Access</strong>
                  <p style="font-size: 0.8rem; color: var(--text-muted);">Priority baggage handling & luxury arrival lounge buffet.</p>
                </div>
              </div>
              <span style="font-weight: 700; color: var(--primary-navy);">+₹3,500 / trip</span>
            </label>

            <label style="display: flex; align-items: center; justify-content: space-between; padding: 14px; border: 1px solid var(--border-light); border-radius: var(--radius-md); cursor: pointer; background: var(--bg-main);">
              <div style="display: flex; align-items: center; gap: 12px;">
                <input type="checkbox" class="addon-checkbox" data-name="Vacation Photographer & Drone Session" data-price="8500" data-per-person="false" style="width: 18px; height: 18px; accent-color: var(--accent-coral);">
                <div>
                  <strong style="font-size: 0.95rem;">Vacation Photographer & Drone Session</strong>
                  <p style="font-size: 0.8rem; color: var(--text-muted);">2-hour private photoshoot with 30 high-res edited pictures.</p>
                </div>
              </div>
              <span style="font-weight: 700; color: var(--primary-navy);">+₹8,500 / group</span>
            </label>
          </div>

          <div class="widget-form-group">
            <label class="widget-label">Special Requests & Dietary Preferences (Optional)</label>
            <textarea class="widget-input" id="special-requests" rows="2" placeholder="e.g. Vegetarian diet, honeymoon bed decoration, wheelchair assistance"></textarea>
          </div>
        </div>

        <!-- Step 3: Payment Selection -->
        <div class="step-section" id="step-section-3" style="display: none;">
          <h4 style="font-size: 1.05rem; margin-bottom: 14px;">Select Secure Payment Method</h4>

          <div class="payment-methods-grid">
            <div class="payment-option selected" data-method="Credit Card">
              <i class="fas fa-credit-card"></i>
              <span style="font-weight: 600; font-size: 0.85rem;">Credit / Debit Card</span>
            </div>
            <div class="payment-option" data-method="UPI / QR Code">
              <i class="fas fa-qrcode"></i>
              <span style="font-weight: 600; font-size: 0.85rem;">Instant UPI / QR</span>
            </div>
            <div class="payment-option" data-method="Net Banking">
              <i class="fas fa-university"></i>
              <span style="font-weight: 600; font-size: 0.85rem;">Net Banking</span>
            </div>
          </div>

          <div id="card-payment-fields">
            <div class="widget-form-group">
              <label class="widget-label">Card Number</label>
              <input type="text" class="widget-input" placeholder="4532 •••• •••• 8892" value="4532 8921 7734 8892">
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
              <div>
                <label class="widget-label">Expiry (MM/YY)</label>
                <input type="text" class="widget-input" placeholder="12/28" value="08/28">
              </div>
              <div>
                <label class="widget-label">CVV / CVC</label>
                <input type="password" class="widget-input" placeholder="888" value="888">
              </div>
            </div>
          </div>

          <div id="upi-payment-fields" style="display: none; text-align: center; padding: 20px; background: var(--bg-main); border-radius: var(--radius-md);">
            <i class="fas fa-qrcode" style="font-size: 4rem; color: var(--primary-navy); margin-bottom: 10px;"></i>
            <p style="font-weight: 700; font-size: 0.95rem;">Scan QR code with any UPI app</p>
            <p style="font-size: 0.8rem; color: var(--text-muted);">GPay, PhonePe, Paytm, or ApplePay</p>
          </div>
        </div>

        <!-- Dynamic Price Summary Box -->
        <div class="price-breakdown">
          <div class="breakdown-row">
            <span>Tour Package Subtotal:</span>
            <span id="summary-subtotal">₹0</span>
          </div>
          <div class="breakdown-row">
            <span>Estimated Taxes & Port Fees (5%):</span>
            <span id="summary-taxes">₹0</span>
          </div>
          <div class="breakdown-row">
            <span>Custom Upgrades & Add-ons:</span>
            <span id="summary-addons">₹0</span>
          </div>
          <div class="breakdown-row total">
            <span>Total Payable Amount (INR):</span>
            <span id="summary-grand-total" style="color: var(--accent-coral);">₹0</span>
          </div>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 24px;" class="modal-footer-nav">
          <button type="button" class="btn btn-outline-dark" id="btn-step-prev" style="display: none;">
            <i class="fas fa-arrow-left"></i> Back
          </button>
          <button type="button" class="btn btn-primary" id="btn-step-next" style="margin-left: auto;">
            Continue <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- ========================================================================= -->
  <!-- Global Auth Modal (Login / Sign Up)                                      -->
  <!-- ========================================================================= -->
  <div class="modal-backdrop" id="auth-modal">
    <div class="modal-card" style="max-width: 480px;">
      <div class="modal-header">
        <h3 class="modal-title">Welcome to Wanderlust</h3>
        <button class="modal-close" aria-label="Close Modal">&times;</button>
      </div>

      <div class="modal-body">
        <div style="display: flex; gap: 8px; margin-bottom: 24px; border-bottom: 1px solid var(--border-light); padding-bottom: 12px;">
          <button class="btn btn-sm btn-outline-dark active" id="tab-login" style="flex: 1;">Sign In</button>
          <button class="btn btn-sm btn-outline-dark" id="tab-register" style="flex: 1;">Create Account</button>
        </div>

        <!-- Login Form -->
        <form id="form-modal-login">
          <div class="widget-form-group">
            <label class="widget-label">Email Address</label>
            <input type="email" name="email" class="widget-input" placeholder="alex@example.com" value="alex@example.com" required>
          </div>
          <div class="widget-form-group">
            <label class="widget-label">Password</label>
            <input type="password" name="password" class="widget-input" placeholder="••••••••" value="user123" required>
          </div>
          <button type="submit" class="btn btn-primary btn-block" style="margin-top: 10px;">
            <i class="fas fa-sign-in-alt"></i> Sign In to Wanderlust
          </button>
          <div style="text-align: center; margin-top: 14px; font-size: 0.85rem; color: var(--text-muted);">
            Demo account: <code>alex@example.com</code> / <code>user123</code>
          </div>
        </form>

        <!-- Register Form -->
        <form id="form-modal-register" style="display: none;">
          <div class="widget-form-group">
            <label class="widget-label">Full Name</label>
            <input type="text" name="full_name" class="widget-input" placeholder="Johnathan Doe" required>
          </div>
          <div class="widget-form-group">
            <label class="widget-label">Email Address</label>
            <input type="email" name="email" class="widget-input" placeholder="john@example.com" required>
          </div>
          <div class="widget-form-group">
            <label class="widget-label">Phone Number</label>
            <input type="tel" name="phone" class="widget-input" placeholder="+1 555 0192">
          </div>
          <div class="widget-form-group">
            <label class="widget-label">Choose Password</label>
            <input type="password" name="password" class="widget-input" placeholder="Min 6 characters" required>
          </div>
          <button type="submit" class="btn btn-primary btn-block" style="margin-top: 10px;">
            <i class="fas fa-user-plus"></i> Create My Account
          </button>
        </form>
      </div>
    </div>
  </div>

  <!-- Toast Message Container -->
  <div class="toast-container"></div>

  <!-- Scripts -->
  <script src="assets/js/tour-dataset.js"></script>
  <script src="assets/js/main.js"></script>
  <script src="assets/js/booking.js"></script>
</body>
</html>
