# 🎓 Faculty Presentation & Viva Defense Guide
## Project: SpidyWeb - Tour & Travel Management System
**Student / Developer:** Krrish Modi  
**Email:** krrish@spideyweb.travel  
**Tech Stack:** HTML5, CSS3, Vanilla JavaScript, PHP 8 / 7.4+, MySQL (via PDO)  
**Currency System:** Indian Rupees (₹) & Global Standard

---

## 📌 1. Project Introduction (30-Second Elevator Pitch)
> **What you should say to Mam / Faculty:**
>
> *"Good morning/afternoon Mam. My name is **Krrish Modi (krrish@spideyweb.travel)** and my project is **SpidyWeb**, a full-stack **Tour & Travel Management System** developed using **HTML5, CSS3, Vanilla JavaScript, and PHP with a MySQL database**.*
>
> *SpidyWeb allows travelers to discover and book tour packages across **Incredible India (Kerala Backwaters, Ladakh Himalayan Passes, Goa Beaches, Kashmir Valley, Rajasthan Royal Palaces, and Varanasi Spiritual Ghats)** as well as global destinations with real-time pricing in **Indian Rupees (₹)**. Customers can filter by duration and budget, view detailed day-by-day itineraries, and complete multi-step reservations with instant travel voucher generation. On the backend, SpidyWeb provides a comprehensive administrative dashboard for managing tour packages, tracking booking revenues, and handling customer inquiries."*

---

## 🏛️ 2. System Architecture (How it Works)

This project follows the industry-standard **3-Tier Client-Server Architecture**:

```
+-------------------------------------------------------------------+
|                        1. PRESENTATION TIER                       |
|   HTML5 (Semantic Layout) + CSS3 (Design System) + Vanilla JS     |
|   - Responsive Tour Catalog (index.php / index.html)              |
|   - Day-by-Day Interactive Itinerary (package-details.php)        |
|   - Multi-Step Booking Modal & Receipt Pass (booking.js in ₹)     |
|   - Customer Portal (my-bookings.php) & Admin Portal (admin/)     |
+---------------------------------+---------------------------------+
                                  |
                   AJAX / JSON / HTTP POST Form
                                  |
+---------------------------------v---------------------------------+
|                        2. APPLICATION TIER                        |
|                     PHP 8 Backend Controllers                     |
|   - Session & Role-Based Auth Engine (api/auth.php)               |
|   - Package Catalog & Filter API (api/packages.php)               |
|   - Booking Engine & INR Cost Calculator (api/bookings.php)       |
|   - Administrative CRUD & Analytics (api/admin.php)               |
|   - Security Layer: PDO Prepared Statements, BCrypt, XSS Clean    |
+---------------------------------+---------------------------------+
                                  |
                             PDO Drivers
                                  |
+---------------------------------v---------------------------------+
|                          3. DATA TIER                             |
|                Relational Database (MySQL / MariaDB)              |
|   - Tables: users, categories, packages, itineraries, bookings,   |
|             reviews, inquiries                                    |
|   - Enforced Foreign Key Constraints with ON DELETE CASCADE       |
+-------------------------------------------------------------------+
```

---

## 📂 3. Where is Everything? (File & Directory Map)

If Mam asks: *"Where is the code for X?"*, here is your instant reference:

| Feature / Concept | Exact File Path | What to Explain |
|---|---|---|
| **Database Connection & Auto-Setup** | [`config/db.php`](file:///Users/krrish/antigravity/config/db.php) | Uses PHP PDO singleton with Prepared Statements and error modes. |
| **Database SQL Schema & Seeds** | [`database.sql`](file:///Users/krrish/antigravity/database.sql) | DDL scripts with primary keys, foreign keys, and seed records for Indian & Global tours in INR (₹). |
| **Main Landing Page & Catalog** | [`index.php`](file:///Users/krrish/antigravity/index.php) / [`index.html`](file:///Users/krrish/antigravity/index.html) | Hero search engine, category tabs, and package cards with Rupee pricing. |
| **Package Details & Itinerary** | [`package-details.php`](file:///Users/krrish/antigravity/package-details.php) | Day-wise timeline, what's included, reviews, and sticky widget. |
| **Customer Dashboard & Vouchers** | [`my-bookings.php`](file:///Users/krrish/antigravity/my-bookings.php) / [`my-bookings.html`](file:///Users/krrish/antigravity/my-bookings.html) | View active trips for Krrish Modi, download printable pass with QR code, cancel. |
| **User Sign In / Registration** | [`login.php`](file:///Users/krrish/antigravity/login.php) / [`login.html`](file:///Users/krrish/antigravity/login.html) | Secure auth with 1-click demo login buttons for Krrish Modi. |
| **Admin Analytics Dashboard** | [`admin/index.php`](file:///Users/krrish/antigravity/admin/index.php) / [`admin/index.html`](file:///Users/krrish/antigravity/admin/index.html) | Revenue KPI cards in ₹ Lakhs, interactive HTML5 Canvas revenue charts. |
| **Admin Package CRUD** | [`admin/packages.php`](file:///Users/krrish/antigravity/admin/packages.php) | Add new packages, edit details/pricing in Rupees, delete records. |
| **Admin Bookings Manager** | [`admin/bookings.php`](file:///Users/krrish/antigravity/admin/bookings.php) | View all reservations, change status (Confirmed/Pending/Cancelled). |
| **Admin Inquiries Inbox** | [`admin/inquiries.php`](file:///Users/krrish/antigravity/admin/inquiries.php) | View messages from contact form and resolve customer inquiries. |
| **Core CSS Design System** | [`assets/css/style.css`](file:///Users/krrish/antigravity/assets/css/style.css) | Custom variables (`:root`), Flexbox, Grid, Glassmorphism, animations. |
| **Admin Stylesheet** | [`assets/css/admin.css`](file:///Users/krrish/antigravity/assets/css/admin.css) | Modern admin sidebar, data tables, badges, and modal styles. |
| **Client-side Search & Wishlist** | [`assets/js/main.js`](file:///Users/krrish/antigravity/assets/js/main.js) | DOM event listeners, live keyword & budget filtering, `localStorage`. |
| **Interactive Booking Engine** | [`assets/js/booking.js`](file:///Users/krrish/antigravity/assets/js/booking.js) | Multi-step progress tracker, Rupee (₹) calculation, voucher builder. |
| **Admin Canvas Charts** | [`assets/js/admin.js`](file:///Users/krrish/antigravity/assets/js/admin.js) | Custom Canvas API line chart for monthly revenue & doughnut chart. |

---

## 🔒 4. Key Security Features to Highlight

If Mam asks about **Security**, explain these 4 pillars:

1. **SQL Injection Prevention**:
   - We **never** concatenate raw `$_POST` variables into SQL queries.
   - All queries use **PDO Prepared Statements** with parameter binding (`$stmt->prepare()` and `$stmt->execute([$param])`), rendering SQL injection attacks impossible.

2. **Password Security (BCrypt Hashing)**:
   - Plain text passwords are **never** stored in the database.
   - We use PHP's cryptographic `password_hash($password, PASSWORD_BCRYPT)` and verify it securely using `password_verify($password, $hash)`.

3. **Cross-Site Scripting (XSS) Mitigation**:
   - All user inputs are sanitized with `htmlspecialchars($data, ENT_QUOTES, 'UTF-8')` before being rendered into HTML.

4. **Session Security & Fixation Protection**:
   - When a user logs in, we invoke `session_regenerate_id(true)` to assign a brand-new session token, preventing Session Hijacking/Fixation.

---

## 💡 5. Step-by-Step Live Demonstration Script

Follow this sequence when showing the project to Mam:

### Step 1: The Public Landing Page (`index.html` / `index.php`)
- **Show**: The SpidyWeb hero section with live search filters and prices in **Indian Rupees (₹)**.
- **Say**: *"Mam, here is our homepage for SpidyWeb. Notice the curated Indian destinations — Kerala backwaters at ₹24,999, Ladakh at ₹38,500, Goa at ₹18,999, Kashmir at ₹29,500, and Rajasthan at ₹48,000. If a user selects budget or category, JavaScript instantly filters the cards without page reload."*

### Step 2: Detailed Tour Itinerary (`package-details.html`)
- **Show**: Click "Details" on *Kerala Backwaters Luxury Houseboat*.
- **Say**: *"Here is the dedicated package view showing the day-wise itinerary, inclusions, exclusions, and sticky booking widget in Rupees."*

### Step 3: Interactive Multi-Step Booking Flow (`booking.js`)
- **Show**: Click "Book This Tour Now".
- **Say**: *"This launches our 3-step interactive booking modal with live Rupee pricing and 5% GST calculation. When confirmed, SpidyWeb generates an official travel voucher with a QR code stamp for Krrish Modi."*

### Step 4: Customer Dashboard (`my-bookings.html`)
- **Show**: Click on "My Trips" showing **Krrish Modi (krrish@spideyweb.travel)**.
- **Say**: *"Customers can log in anytime to review their booked trips, download printable vouchers, or request a cancellation."*

### Step 5: Admin Management Portal (`admin/index.html`)
- **Show**: Navigate to `admin/index.html` (logged in as **Krrish Modi** / `krrish@spideyweb.travel`).
- **Say**: *"Here is the administrative control center with total gross revenue in ₹ Lakhs, active tours, confirmed bookings, and monthly revenue analytics using the HTML5 Canvas API."*

---

## 🎯 6. Demonstration Accounts

| Role | Name | Email | Password | Access Level |
|---|---|---|---|---|
| **System Administrator** | Krrish Modi | `krrish@spideyweb.travel` | `admin123` | Full Admin Portal (`admin/index.html`) & Package CRUD |
| **Customer Account** | Krrish Modi | `krrish@spideyweb.travel` | `user123` | Customer Trips (`my-bookings.html`) & Booking Engine |
