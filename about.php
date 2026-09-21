<?php
/**
 * Wanderlust Voyage - About Us & Company Story
 */
$pageTitle = 'About Us - Our Mission & Story';
require_once __DIR__ . '/includes/header.php';
?>

<!-- About Hero -->
<section class="details-hero" style="text-align: center; padding: 130px 0 70px;">
  <div class="container" style="max-width: 750px;">
    <span class="badge badge-coral" style="margin-bottom: 16px;">Since 2018</span>
    <h1 style="font-size: 3rem; color: #ffffff; margin-bottom: 16px;">We Craft Extraordinary Journeys</h1>
    <p style="color: rgba(255, 255, 255, 0.85); font-size: 1.15rem; line-height: 1.6;">
      Wanderlust Voyage was founded with a single purpose: to connect curious travelers with authentic local cultures, pristine landscapes, and unforgettable adventures across the world.
    </p>
  </div>
</section>

<!-- Company Values & Stats -->
<section class="section" style="background: #ffffff;">
  <div class="container">
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; margin-bottom: 80px;">
      <div>
        <span class="section-subtitle">Our Vision</span>
        <h2 class="section-title" style="text-align: left; margin-bottom: 20px;">Redefining What It Means To Travel Responsibly</h2>
        <p style="color: var(--text-muted); font-size: 1rem; line-height: 1.7; margin-bottom: 16px;">
          We believe true travel is more than just checking sightseeing spots off a bucket list. It's about genuine human connections, sharing traditional meals with village elders in Bali, admiring the silent majesty of the Swiss Alps, and ensuring that our journeys support local indigenous communities.
        </p>
        <p style="color: var(--text-muted); font-size: 1rem; line-height: 1.7;">
          Every Wanderlust tour is carbon-offset, guided by licensed native hosts, and operates under strict safety and fair-wage protocols.
        </p>
      </div>

      <div>
        <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80" alt="Travelers in Mountains" style="border-radius: var(--radius-lg); box-shadow: var(--shadow-xl); width: 100%;">
      </div>
    </div>

    <!-- Stats Grid -->
    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; padding: 40px; background: var(--bg-main); border-radius: var(--radius-lg); border: 1px solid var(--border-light); text-align: center;">
      <div>
        <div style="font-size: 2.6rem; font-weight: 800; color: var(--primary-navy); font-family: var(--font-heading);">40+</div>
        <p style="color: var(--text-muted); font-size: 0.9rem; font-weight: 600;">Countries Explored</p>
      </div>
      <div>
        <div style="font-size: 2.6rem; font-weight: 800; color: var(--accent-coral); font-family: var(--font-heading);">12,500+</div>
        <p style="color: var(--text-muted); font-size: 0.9rem; font-weight: 600;">Happy Adventurers</p>
      </div>
      <div>
        <div style="font-size: 2.6rem; font-weight: 800; color: var(--accent-teal); font-family: var(--font-heading);">150+</div>
        <p style="color: var(--text-muted); font-size: 0.9rem; font-weight: 600;">Verified Local Guides</p>
      </div>
      <div>
        <div style="font-size: 2.6rem; font-weight: 800; color: var(--accent-green); font-family: var(--font-heading);">100%</div>
        <p style="color: var(--text-muted); font-size: 0.9rem; font-weight: 600;">Carbon Offset</p>
      </div>
    </div>
  </div>
</section>

<!-- Leadership & Founding Team -->
<section class="section" style="background: #f8fafc;">
  <div class="container">
    <div class="section-header">
      <span class="section-subtitle">The Visionaries</span>
      <h2 class="section-title">Meet Our Global Team</h2>
      <p class="section-desc">Passionate travel architects, mountaineers, and hospitality pioneers.</p>
    </div>

    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px;">
      <div style="background: #ffffff; border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-sm); border: 1px solid var(--border-light); text-align: center; padding-bottom: 24px;">
        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80" alt="Founder" style="width: 100%; height: 260px; object-fit: cover;">
        <div style="padding: 20px 20px 0;">
          <h3 style="font-size: 1.25rem; margin-bottom: 4px;">Sophia Montgomery</h3>
          <p style="color: var(--accent-coral); font-size: 0.85rem; font-weight: 700; text-transform: uppercase;">Founder & Chief Explorer</p>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 10px;">Former National Geographic photojournalist with 70+ countries under her belt.</p>
        </div>
      </div>

      <div style="background: #ffffff; border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-sm); border: 1px solid var(--border-light); text-align: center; padding-bottom: 24px;">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80" alt="Operations" style="width: 100%; height: 260px; object-fit: cover;">
        <div style="padding: 20px 20px 0;">
          <h3 style="font-size: 1.25rem; margin-bottom: 4px;">Arjun Mehta</h3>
          <p style="color: var(--accent-teal); font-size: 0.85rem; font-weight: 700; text-transform: uppercase;">Head of Global Expeditions</p>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 10px;">Alpine mountaineering veteran and certified rescue expedition leader.</p>
        </div>
      </div>

      <div style="background: #ffffff; border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-sm); border: 1px solid var(--border-light); text-align: center; padding-bottom: 24px;">
        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80" alt="Customer Experience" style="width: 100%; height: 260px; object-fit: cover;">
        <div style="padding: 20px 20px 0;">
          <h3 style="font-size: 1.25rem; margin-bottom: 4px;">Chloe Dupond</h3>
          <p style="color: var(--accent-gold); font-size: 0.85rem; font-weight: 700; text-transform: uppercase;">Director of Luxury Hospitality</p>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 10px;">Curates our Michelin-star culinary experiences and private villa partnerships.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
