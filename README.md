# 🌍 Wanderlust - Tour & Travel Management System

A full-stack, responsive web application for exploring tour packages, viewing day-by-day itineraries, reserving vacations with instant printable travel passes, and managing operations via an Administrative Control Suite.

Built with **HTML5, CSS3, Vanilla JavaScript, and PHP with MySQL (PDO)**.

---

## 🚀 Quick Setup Instructions

### Option 1: Running with XAMPP / WAMP / MAMP (Recommended for College Submissions)
1. Copy this entire `wanderlust` project folder into your server directory:
   - **XAMPP**: `C:\xampp\htdocs\wanderlust` (Windows) or `/Applications/XAMPP/htdocs/wanderlust` (macOS)
   - **WAMP**: `C:\wamp64\www\wanderlust`
2. Start **Apache** and **MySQL** from the XAMPP / WAMP Control Panel.
3. Open phpMyAdmin at `http://localhost/phpmyadmin/`.
4. Create a new database named `travel_db` and click **Import** $\rightarrow$ select [`database.sql`](file:///Users/krrish/antigravity/database.sql). *(Note: Even if you skip this step, [`config/db.php`](file:///Users/krrish/antigravity/config/db.php) will automatically create and seed the tables on first launch!)*
5. Open your web browser and navigate to:
   ```
   http://localhost/wanderlust/
   ```

### Option 2: Running with PHP Built-in Server
Open your terminal inside the project directory and run:
```bash
php -S localhost:8000
```
Then open `http://localhost:8000/` in your browser.

---

## 🔑 Demo Login Accounts

| Role | Email | Password | Access Area |
|---|---|---|---|
| **System Administrator** | `admin@wanderlust.com` | `admin123` | [Admin Portal](file:///Users/krrish/antigravity/admin/index.php) |
| **Demo Customer** | `alex@example.com` | `user123` | [Customer Dashboard](file:///Users/krrish/antigravity/my-bookings.php) |

---

## 📖 Faculty Presentation & Viva Guide
For your viva voce, project demonstration, and faculty explanation, refer to:
- **[`FACULTY_EXPLANATION_GUIDE.md`](file:///Users/krrish/antigravity/FACULTY_EXPLANATION_GUIDE.md)**: 15+ Viva questions & answers, system architecture breakdown, security explanations, and live demonstration script.
- **[`PROJECT_DOCUMENTATION.md`](file:///Users/krrish/antigravity/PROJECT_DOCUMENTATION.md)**: Complete academic project report with ER Diagram, DFDs (Level 0 & 1), and Test Cases.

---

## 📁 Key File Structure
- `index.php` - Homepage, live search engine, category tabs, and tour package cards.
- `package-details.php` - Day-by-day interactive itinerary timeline, inclusions/exclusions, gallery, and reviews.
- `my-bookings.php` - Customer bookings dashboard with printable QR travel vouchers and cancellation.
- `contact.php` - Contact inquiries form & FAQ accordion.
- `about.php` - About the company, team members, and sustainability pledge.
- `login.php` - Dedicated authentication portal with 1-click demo login buttons.
- `admin/index.php` - Admin dashboard with revenue metrics and HTML5 canvas charts.
- `admin/packages.php` - Full CRUD management for tour packages.
- `admin/bookings.php` - Booking verification and status controls.
- `admin/inquiries.php` - Customer support messages inbox.
- `api/` - Modular JSON backend endpoints for authentication, packages, bookings, reviews, and admin actions.
- `config/db.php` - PDO Database connection manager with auto-table initialization.
- `assets/css/style.css` - Custom CSS design system with variables, flexbox, and grid.
- `assets/css/admin.css` - Administrative console styling.
- `assets/js/main.js` - Client-side search filters, wishlist, and toast notifications.
- `assets/js/booking.js` - Interactive multi-step checkout and voucher generator.
- `assets/js/admin.js` - Admin canvas analytics and modal controllers.
- `database.sql` - Ready-to-import MySQL database dump.
