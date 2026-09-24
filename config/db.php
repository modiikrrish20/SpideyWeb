<?php
/**
 * Wanderlust Tour & Travel Management System
 * Database Configuration & Connection Manager (PDO)
 * 
 * Features:
 * - MySQL / MariaDB connection via PDO with Prepared Statements
 * - Automatic database & table initialization if missing
 * - Resilient SQLite fallback for zero-configuration testing
 * - Helper functions for security, sessions, and response formatting
 */

// Start session securely if not already active
if (session_status() === PHP_SESSION_NONE) {
    ini_set('session.cookie_httponly', 1);
    ini_set('session.use_only_cookies', 1);
    session_start();
}

// Database Credentials (Standard for XAMPP / WAMP / MAMP)
define('DB_HOST', '127.0.0.1');
define('DB_PORT', '3306');
define('DB_NAME', 'travel_db');
define('DB_USER', 'root');
define('DB_PASS', '');

// Application Constants
define('APP_NAME', 'SpidyWeb Tours & Travels');
define('APP_TAGLINE', 'Weaving Unforgettable Journeys Across India & The Globe');
define('APP_URL', ''); // Auto-detected or relative
define('ADMIN_EMAIL', 'krrish@spideyweb.travel');
define('CURRENCY_SYMBOL', '₹');

/**
 * Get PDO Database Connection Singleton
 * @return PDO
 */
function getDB() {
    static $pdo = null;
    if ($pdo !== null) {
        return $pdo;
    }

    $driver = 'mysql';

    try {
        // First try MySQL connection
        $dsn = "mysql:host=" . DB_HOST . ";port=" . DB_PORT . ";dbname=" . DB_NAME . ";charset=utf8mb4";
        $options = [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ];
        $pdo = new PDO($dsn, DB_USER, DB_PASS, $options);
        return $pdo;
    } catch (PDOException $e) {
        // If travel_db database is missing on MySQL, try connecting to server and creating it
        try {
            $rootDsn = "mysql:host=" . DB_HOST . ";port=" . DB_PORT . ";charset=utf8mb4";
            $rootPdo = new PDO($rootDsn, DB_USER, DB_PASS, [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
            ]);
            $rootPdo->exec("CREATE DATABASE IF NOT EXISTS `" . DB_NAME . "` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci");
            
            // Reconnect to newly created database
            $pdo = new PDO("mysql:host=" . DB_HOST . ";port=" . DB_PORT . ";dbname=" . DB_NAME . ";charset=utf8mb4", DB_USER, DB_PASS, [
                PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES   => false,
            ]);
            initializeDatabaseTables($pdo, 'mysql');
            return $pdo;
        } catch (Exception $innerException) {
            // If MySQL is completely unavailable, gracefully fallback to SQLite database
            $sqlitePath = __DIR__ . '/../travel_db.sqlite';
            $isNewDb = !file_exists($sqlitePath);
            $pdo = new PDO("sqlite:" . $sqlitePath, null, null, [
                PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            ]);
            if ($isNewDb || filesize($sqlitePath) < 100) {
                initializeDatabaseTables($pdo, 'sqlite');
            }
            return $pdo;
        }
    }
}

/**
 * Initialize Tables and Seed Initial Data
 */
function initializeDatabaseTables(PDO $db, string $driver) {
    if ($driver === 'sqlite') {
        $schema = "
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            full_name TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL,
            phone TEXT,
            role TEXT DEFAULT 'customer',
            avatar TEXT DEFAULT 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS categories (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            slug TEXT NOT NULL UNIQUE,
            icon TEXT DEFAULT 'fa-compass',
            description TEXT
        );

        CREATE TABLE IF NOT EXISTS packages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            category_id INTEGER NOT NULL,
            title TEXT NOT NULL,
            slug TEXT NOT NULL UNIQUE,
            destination TEXT NOT NULL,
            country TEXT NOT NULL,
            duration_days INTEGER NOT NULL,
            duration_nights INTEGER NOT NULL,
            price REAL NOT NULL,
            discount_price REAL,
            featured_image TEXT NOT NULL,
            gallery_images TEXT,
            summary TEXT NOT NULL,
            description TEXT NOT NULL,
            inclusions TEXT NOT NULL,
            exclusions TEXT NOT NULL,
            max_group_size INTEGER DEFAULT 15,
            rating REAL DEFAULT 4.85,
            reviews_count INTEGER DEFAULT 0,
            is_featured INTEGER DEFAULT 0,
            is_bestseller INTEGER DEFAULT 0,
            status TEXT DEFAULT 'active',
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (category_id) REFERENCES categories(id)
        );

        CREATE TABLE IF NOT EXISTS itineraries (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            package_id INTEGER NOT NULL,
            day_number INTEGER NOT NULL,
            title TEXT NOT NULL,
            description TEXT NOT NULL,
            meals TEXT DEFAULT 'Breakfast',
            stay TEXT DEFAULT '4-Star Resort / Hotel',
            FOREIGN KEY (package_id) REFERENCES packages(id)
        );

        CREATE TABLE IF NOT EXISTS bookings (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            booking_ref TEXT NOT NULL UNIQUE,
            user_id INTEGER NOT NULL,
            package_id INTEGER NOT NULL,
            travel_date DATE NOT NULL,
            adults INTEGER NOT NULL DEFAULT 1,
            children INTEGER NOT NULL DEFAULT 0,
            total_amount REAL NOT NULL,
            payment_method TEXT DEFAULT 'Credit Card',
            payment_status TEXT DEFAULT 'paid',
            booking_status TEXT DEFAULT 'confirmed',
            special_requests TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id),
            FOREIGN KEY (package_id) REFERENCES packages(id)
        );

        CREATE TABLE IF NOT EXISTS reviews (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            package_id INTEGER NOT NULL,
            user_id INTEGER NOT NULL,
            rating INTEGER NOT NULL,
            comment TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (package_id) REFERENCES packages(id),
            FOREIGN KEY (user_id) REFERENCES users(id)
        );

        CREATE TABLE IF NOT EXISTS inquiries (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            phone TEXT,
            subject TEXT NOT NULL,
            message TEXT NOT NULL,
            status TEXT DEFAULT 'unread',
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );
        ";
        $db->exec($schema);
    } else {
        // MySQL Schema
        $sqlFile = __DIR__ . '/../database.sql';
        if (file_exists($sqlFile)) {
            $sql = file_get_contents($sqlFile);
            $db->exec($sql);
            return;
        }
    }

    // Seed default records if table is empty
    $check = $db->query("SELECT COUNT(*) as cnt FROM users")->fetch();
    if ($check['cnt'] == 0) {
        seedInitialData($db);
    }
}

/**
 * Seed Realistic Demo Data for Tours, Admin, and Itineraries
 */
function seedInitialData(PDO $db) {
    $hashedAdmin = password_hash('admin123', PASSWORD_BCRYPT);
    $hashedUser  = password_hash('user123', PASSWORD_BCRYPT);

    // Users
    $stmt = $db->prepare("INSERT INTO users (id, full_name, email, password, phone, role) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->execute([1, 'Krrish Modi (Admin)', 'krrish@spideyweb.travel', $hashedAdmin, '+91 98000 00000', 'admin']);
    $stmt->execute([2, 'Krrish Modi', 'krrish@spideyweb.travel', $hashedUser, '+91 98000 00000', 'customer']);

    // Categories
    $catStmt = $db->prepare("INSERT INTO categories (id, name, slug, icon, description) VALUES (?, ?, ?, ?, ?)");
    $categories = [
        [1, 'Tropical & Beach', 'tropical-beach', 'fa-umbrella-beach', 'Sun-soaked white sands, crystal-clear turquoise waters, and private island vibes.'],
        [2, 'Mountain & Trekking', 'mountain-trekking', 'fa-mountain', 'Majestic peaks, alpine hikes, and scenic wilderness adventures.'],
        [3, 'Cultural & Heritage', 'cultural-heritage', 'fa-monument', 'Ancient temples, historic castles, rich traditional ceremonies, and local delicacies.'],
        [4, 'Wildlife & Safari', 'wildlife-safari', 'fa-paw', 'Untamed savannah game drives, rare wildlife encounters, and eco-lodges.'],
        [5, 'Romantic Honeymoon', 'romantic-honeymoon', 'fa-heart', 'Secluded villas, candlelit beach dinners, and luxury couples retreats.'],
        [6, 'City Breaks & Luxury', 'city-luxury', 'fa-city', 'Skyline views, Michelin-star dining, premium shopping, and bespoke urban escapes.']
    ];
    foreach ($categories as $cat) {
        $catStmt->execute($cat);
    }

    // Packages
    $pkgStmt = $db->prepare("INSERT INTO packages (id, category_id, title, slug, destination, country, duration_days, duration_nights, price, discount_price, featured_image, gallery_images, summary, description, inclusions, exclusions, max_group_size, rating, reviews_count, is_featured, is_bestseller) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    
    $packages = [
        [
            1, 1, 'Bali Tropical Island Escape & Nusa Penida', 'bali-tropical-island-escape', 'Bali & Nusa Penida', 'Indonesia', 7, 6, 68000.00, 58000.00,
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1552733407-5d5c46c3bb35?auto=format&fit=crop&w=600&q=80,https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=600&q=80,https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80',
            'Experience lush Ubud rice terraces, majestic waterfalls, temple blessings, and the world-famous Kelingking Cliff in Nusa Penida.',
            'Immerse yourself in the Island of the Gods. This 7-day handcrafted journey takes you from the tranquil jungles and spiritual heart of Ubud to the pristine turquoise coastlines of Nusa Penida and Seminyak. Indulge in authentic Balinese cuisine, catch golden sunsets over Tanah Lot, and snorkel with manta rays in crystal clear lagoons.',
            'Airport transfers in private AC vehicle, 6 nights in 4-star boutique luxury resorts, Daily gourmet breakfast & 4 authentic Balinese dinners, Fast boat transfers to Nusa Penida, English speaking certified tour guide, All temple entrance tickets and snorkeling gear',
            'International flight tickets, Personal travel insurance, Alcoholic beverages and optional spa sessions, Gratuities and tips',
            12, 4.95, 48, 1, 1
        ],
        [
            2, 2, 'Swiss Alps Majestic Glacier & Interlaken Adventure', 'swiss-alps-glacier-interlaken', 'Interlaken & Zermatt', 'Switzerland', 8, 7, 195000.00, 175000.00,
            'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=600&q=80,https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=600&q=80,https://images.unsplash.com/photo-1491557345352-5929e343eb89?auto=format&fit=crop&w=600&q=80',
            'Marvel at snow-capped summits, ride the Jungfraujoch Top of Europe cogwheel railway, and cruise pristine Lake Brienz.',
            'Discover the breathtaking grandeur of the Swiss Alps. Journey through alpine meadows, glacier grottos, and storybook villages. Experience the world-famous Jungfraujoch railway, the iconic pyramid of the Matterhorn in Zermatt, and serene fjord-like lake cruises surrounded by tumbling waterfalls.',
            '7 nights in premier Alpine chalets and Swiss hotels, 1st Class Swiss Travel Pass for all trains and boats, Jungfraujoch railway excursion ticket, Daily alpine breakfast and 3 fondue dinner experiences, Mountain guide for scenic panoramic hikes',
            'International flights, Swiss visa processing fees, Ski equipment rental and private lessons, Lunches and extra alcoholic drinks',
            10, 4.92, 34, 1, 1
        ],
        [
            3, 3, 'Kyoto Autumn Heritage & Mount Fuji Discovery', 'kyoto-heritage-mount-fuji', 'Kyoto, Hakone & Tokyo', 'Japan', 9, 8, 158000.00, 142000.00,
            'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80,https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=600&q=80,https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=600&q=80',
            'Stroll through Arashiyama bamboo forest, admire the Golden Pavilion, cruise Lake Ashi under Mount Fuji, and explore vibrant Tokyo.',
            'Step into timeless elegance and ultra-modern wonder. From ancient Shinto shrines and Geisha districts in Gion to the tranquil zen gardens of Kyoto and hot spring onsens of Hakone facing Mount Fuji, this Japan adventure is a masterclass in culture, tradition, and culinary excellence.',
            '8 nights in traditional Ryokan & 4-star city hotels with onsen access, 7-day JR Shinkansen Bullet Train Pass, Tea ceremony masterclass and Gion cultural evening, Mount Fuji cable car & Lake Ashi private cruise, Daily breakfast and 4 Kaiseki multi-course dinners',
            'International flights to/from Tokyo, Japan tourist visa fees, Personal shopping and pocket WiFi, Baggage courier fees between cities',
            14, 4.88, 56, 1, 0
        ],
        [
            4, 5, 'Santorini Sunset Romance & Aegean Island Cruise', 'santorini-sunset-romance-aegean', 'Santorini & Mykonos', 'Greece', 6, 5, 135000.00, 119000.00,
            'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80,https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80,https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80',
            'Stay in cliffside whitewashed suites overlooking the Aegean caldera, sail on private catamarans, and enjoy world-class sunsets.',
            'Indulge in the ultimate romantic getaway. Watch the sunset in Oia with private champagne, swim in volcanic hot springs, sample crisp Assyrtiko wines at cliffside vineyards, and relax on the vibrant beaches of Mykonos.',
            '5 nights in cliffside caldera view suites with private plunge pool, Semi-private sunset catamaran cruise with BBQ & open bar, High-speed ferry between Santorini and Mykonos, Wine tasting tour at 3 premier volcanic wineries, All private airport and port transfers',
            'International flights, Greek climate crisis resilience tax (paid at hotel), Lunches and personal expenses',
            8, 4.97, 62, 1, 1
        ],
        [
            5, 4, 'Serengeti Great Migration & Ngorongoro Safari', 'serengeti-great-migration-safari', 'Serengeti & Ngorongoro', 'Tanzania', 6, 5, 235000.00, 215000.00,
            'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=600&q=80,https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=600&q=80,https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
            'Witness the Big Five in their natural habitat, explore the UNESCO Ngorongoro Crater, and stay in luxury tented safari camps.',
            'An extraordinary expedition across East Africa’s most iconic landscapes. Watch thousands of wildebeest and zebras traverse the vast golden savannah, track pride of lions and elusive leopards with expert Maasai trackers, and dine under a canopy of billion stars.',
            '5 nights in luxury eco-tented lodges with panoramic views, All national park fees and Ngorongoro conservation entry, Custom 4x4 Land Cruiser with pop-up roof and guaranteed window seat, Professional English speaking safari guide & tracker, All meals (Breakfast, Lunch, Dinner) and purified water during game drives',
            'International flights to Kilimanjaro (JRO), Tanzania entry visa, Hot air balloon safari upgrade (optional), Tips for guide and lodge staff',
            6, 4.96, 29, 0, 1
        ],
        [
            6, 3, 'Majestic Rajasthan Palaces, Forts & Desert Dunes', 'majestic-rajasthan-palaces-forts', 'Jaipur, Jodhpur & Udaipur', 'India', 8, 7, 48000.00, 39999.00,
            'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=600&q=80,https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80,https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80',
            'Live like royalty in heritage Havelis, marvel at the Amber Fort, take a sunset boat ride on Lake Pichola, and ride camels in Thar desert.',
            'Immerse yourself in royal heritage, vibrant bazaars, colorful turbans, and monumental fortresses. From the Pink City of Jaipur to the Blue City of Jodhpur and the romantic Lake City of Udaipur, witness India’s most opulent architecture and warm hospitality.',
            '7 nights in authentic Heritage Palaces and 4-star Havelis, Chauffeur-driven private AC vehicle for all transfers and sightseeing, Private boat ride on Lake Pichola in Udaipur, Desert camel safari with traditional Rajasthani folk dance & dinner, Licensed monument guides and all entrance passes',
            'International and domestic flights, Camera and video permits at monuments, Personal shopping, laundry, and beverage expenses',
            15, 4.85, 41, 0, 0
        ]
    ];

    foreach ($packages as $pkg) {
        $pkgStmt->execute($pkg);
    }

    // Itineraries for Bali
    $itStmt = $db->prepare("INSERT INTO itineraries (package_id, day_number, title, description, meals, stay) VALUES (?, ?, ?, ?, ?, ?)");
    $itineraries = [
        [1, 1, 'Arrival in Denpasar & Transfer to Ubud Jungle Resort', 'Arrive at Ngurah Rai International Airport. Meet our friendly private chauffeur with a traditional flower garland. Transfer to your luxury Ubud jungle resort. Unwind with a welcome herbal drink.', 'Dinner', 'Ubud Tropical Boutique Resort'],
        [1, 2, 'Tegallalang Rice Terraces, Sacred Monkey Forest & Waterfall', 'Morning visit to Tegallalang rice terraces. Experience the iconic jungle swing. Afternoon stroll through the Sacred Monkey Forest and a refreshing swim at Tegenungan Waterfall.', 'Breakfast, Lunch', 'Ubud Tropical Boutique Resort'],
        [1, 3, 'Holy Water Purification at Tirta Empul & Coffee Plantation', 'Participate in a traditional spiritual cleansing ritual at Tirta Empul temple. Afternoon tasting of authentic Luwak coffee and spice plantations with panoramic volcano views.', 'Breakfast, Dinner', 'Ubud Tropical Boutique Resort'],
        [1, 4, 'Speedboat to Nusa Penida & Kelingking T-Rex Cliff', 'Board morning fast boat to Nusa Penida Island. Explore Kelingking Cliff, Broken Beach, and Angel\'s Billabong natural infinity pool. Sunset at Crystal Bay.', 'Breakfast, Lunch', 'Nusa Penida Oceanview Villa'],
        [1, 5, 'Snorkeling with Giant Manta Rays & Transfer to Seminyak', 'Embark on a private boat to Manta Point for an unforgettable swim alongside gentle manta rays. Afternoon ferry back to main island and check-in to Seminyak beachfront hotel.', 'Breakfast', 'Seminyak Beach Resort & Spa'],
        [1, 6, 'Tanah Lot Sunset Temple & Seafood Farewell Dinner', 'Relax on Seminyak beach. Afternoon excursion to the majestic ocean temple of Tanah Lot. Conclude with a candlelit fresh seafood feast at Jimbaran Bay on the sand.', 'Breakfast, Dinner', 'Seminyak Beach Resort & Spa'],
        [1, 7, 'Souvenir Shopping & Airport Departure', 'Enjoy leisure breakfast, last-minute artisanal souvenir shopping in Seminyak, followed by private transfer to Denpasar Airport for your return flight.', 'Breakfast', 'Departure']
    ];
    foreach ($itineraries as $it) {
        $itStmt->execute($it);
    }

    // Initial Bookings
    $bkStmt = $db->prepare("INSERT INTO bookings (booking_ref, user_id, package_id, travel_date, adults, children, total_amount, payment_method, payment_status, booking_status, special_requests) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $bkStmt->execute(['WL-2026-7821', 2, 1, '2026-09-15', 2, 0, 116000.00, 'Credit Card', 'paid', 'confirmed', 'Honeymoon couple, high floor room requested.']);
    $bkStmt->execute(['WL-2026-9043', 2, 4, '2026-10-05', 2, 0, 238000.00, 'UPI / NetBanking', 'paid', 'confirmed', 'Vegetarian meal preference for caldera sunset cruise.']);

    // Initial Reviews
    $revStmt = $db->prepare("INSERT INTO reviews (package_id, user_id, rating, comment) VALUES (?, ?, ?, ?)");
    $revStmt->execute([1, 2, 5, 'Our Bali trip was absolutely magical! The tour guide Ketut was so polite, and the sunrise at Kelingking cliff was out of this world. Highly recommend Wanderlust!']);
    $revStmt->execute([4, 2, 5, 'Santorini was pure paradise. The private catamaran cruise and wine tasting in Pyrgos made this the best anniversary trip ever.']);

    // Initial Inquiries
    $inqStmt = $db->prepare("INSERT INTO inquiries (name, email, phone, subject, message, status) VALUES (?, ?, ?, ?, ?, ?)");
    $inqStmt->execute(['Sarah Jenkins', 'sarah.j@gmail.com', '+1 415 889 0122', 'Custom Group Tour to Japan in November', 'Hello team, we are a group of 8 friends planning a trip to Kyoto and Tokyo for autumn foliage. Can we customize the 9-day itinerary with extra private cooking classes?', 'unread']);
    $inqStmt->execute(['David Chen', 'david.chen@outlook.com', '+65 9123 4567', 'Swiss Alps Pass Queries', 'Hi, is the 1st class Swiss rail pass included for high altitude cable cars like Matterhorn Glacier Paradise as well?', 'read']);
}

/**
 * Sanitization & Security Helper
 */
function cleanInput($data) {
    if (is_array($data)) {
        return array_map('cleanInput', $data);
    }
    return htmlspecialchars(trim($data), ENT_QUOTES, 'UTF-8');
}

/**
 * JSON Response Helper for REST APIs
 */
function jsonResponse($data, int $statusCode = 200) {
    http_response_code($statusCode);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
    exit;
}

/**
 * Check if user is currently logged in
 */
function getLoggedInUser() {
    if (isset($_SESSION['user_id']) && !empty($_SESSION['user_id'])) {
        return [
            'id'        => $_SESSION['user_id'],
            'full_name' => $_SESSION['user_name'] ?? 'Traveler',
            'email'     => $_SESSION['user_email'] ?? '',
            'role'      => $_SESSION['user_role'] ?? 'customer',
            'avatar'    => $_SESSION['user_avatar'] ?? 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80'
        ];
    }
    return null;
}

/**
 * Verify if current session user has Admin Privileges
 */
function isAdmin() {
    $user = getLoggedInUser();
    return $user && $user['role'] === 'admin';
}

/**
 * Format currency nicely in Indian Rupees (₹)
 */
function formatCurrency($amount) {
    return '₹' . number_format((float)$amount, 0);
}
?>
