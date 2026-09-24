-- ==========================================================
-- SpidyWeb Tour & Travel Management System (database.sql)
-- Complete Database Schema & Seed Data (12 Comprehensive Destination Stacks)
-- Customer Profiles: Krrish Modi, Hiten Patil, Shubham Sharma, Yug Shah, Yakshraj Jadeja, Dhyani Joshi
-- All Prices in Indian Rupees (₹) with 100% Unique Data per Stack
-- ==========================================================

CREATE DATABASE IF NOT EXISTS `travel_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `travel_db`;

DROP TABLE IF EXISTS `reviews`;
DROP TABLE IF EXISTS `bookings`;
DROP TABLE IF EXISTS `activities`;
DROP TABLE IF EXISTS `attractions`;
DROP TABLE IF EXISTS `hotels`;
DROP TABLE IF EXISTS `itineraries`;
DROP TABLE IF EXISTS `packages`;
DROP TABLE IF EXISTS `categories`;
DROP TABLE IF EXISTS `inquiries`;
DROP TABLE IF EXISTS `users`;

-- 1. Users Table
CREATE TABLE `users` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `full_name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(150) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(20) DEFAULT NULL,
  `role` ENUM('admin', 'customer') DEFAULT 'customer',
  `avatar` VARCHAR(255) DEFAULT 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 2. Categories Table
CREATE TABLE `categories` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(100) NOT NULL,
  `slug` VARCHAR(100) NOT NULL UNIQUE,
  `icon` VARCHAR(50) DEFAULT 'fa-compass',
  `description` TEXT DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 3. Packages / Destination Stacks Master Table
CREATE TABLE `packages` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `category_id` INT NOT NULL,
  `title` VARCHAR(200) NOT NULL,
  `slug` VARCHAR(220) NOT NULL UNIQUE,
  `subtitle` VARCHAR(255) NOT NULL,
  `place_name` VARCHAR(150) NOT NULL,
  `state` VARCHAR(100) NOT NULL,
  `country` VARCHAR(100) NOT NULL,
  `region` VARCHAR(100) NOT NULL,
  `badge` VARCHAR(80) DEFAULT 'Best Seller',
  `duration_days` INT NOT NULL,
  `duration_nights` INT NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `original_price` DECIMAL(10,2) NOT NULL,
  `discount_percent` INT DEFAULT 15,
  `standard_price` DECIMAL(10,2) NOT NULL,
  `deluxe_price` DECIMAL(10,2) NOT NULL,
  `luxury_price` DECIMAL(10,2) NOT NULL,
  `featured_image` TEXT NOT NULL,
  `banner_image` TEXT NOT NULL,
  `gallery_images` LONGTEXT DEFAULT NULL,
  `summary` TEXT NOT NULL,
  `overview` LONGTEXT NOT NULL,
  `highlights` LONGTEXT NOT NULL,
  `inclusions` LONGTEXT NOT NULL,
  `exclusions` LONGTEXT NOT NULL,
  `max_group_size` INT DEFAULT 15,
  `rating` DECIMAL(3,2) DEFAULT 4.90,
  `reviews_count` INT DEFAULT 0,
  `altitude` VARCHAR(100) DEFAULT NULL,
  `best_time` VARCHAR(100) DEFAULT 'October to March',
  `climate` VARCHAR(100) DEFAULT 'Pleasant',
  `language` VARCHAR(150) DEFAULT 'Hindi, English',
  `airport` VARCHAR(150) DEFAULT NULL,
  `railway` VARCHAR(150) DEFAULT NULL,
  `is_featured` TINYINT(1) DEFAULT 1,
  `is_bestseller` TINYINT(1) DEFAULT 0,
  `status` ENUM('active', 'inactive') DEFAULT 'active',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 4. Hotels Stack Table
CREATE TABLE `hotels` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `package_id` INT NOT NULL,
  `name` VARCHAR(200) NOT NULL,
  `tier` VARCHAR(100) NOT NULL,
  `star_rating` DECIMAL(2,1) DEFAULT 4.8,
  `location` VARCHAR(200) NOT NULL,
  `price_per_night` VARCHAR(100) NOT NULL,
  `image` TEXT NOT NULL,
  `amenities` TEXT NOT NULL,
  `room_types` VARCHAR(255) NOT NULL,
  `check_in` VARCHAR(50) DEFAULT '2:00 PM',
  `check_out` VARCHAR(50) DEFAULT '11:00 AM',
  `highlight` TEXT DEFAULT NULL,
  FOREIGN KEY (`package_id`) REFERENCES `packages`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 5. Attractions Stack Table
CREATE TABLE `attractions` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `package_id` INT NOT NULL,
  `name` VARCHAR(200) NOT NULL,
  `type` VARCHAR(150) NOT NULL,
  `timings` VARCHAR(100) NOT NULL,
  `entry_fee` VARCHAR(100) NOT NULL,
  `distance` VARCHAR(100) DEFAULT NULL,
  `duration` VARCHAR(100) DEFAULT '2 - 3 Hours',
  `image` TEXT NOT NULL,
  `description` TEXT NOT NULL,
  `insider_tip` TEXT DEFAULT NULL,
  FOREIGN KEY (`package_id`) REFERENCES `packages`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 6. Activities Stack Table
CREATE TABLE `activities` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `package_id` INT NOT NULL,
  `name` VARCHAR(200) NOT NULL,
  `type` VARCHAR(100) NOT NULL,
  `difficulty` VARCHAR(50) DEFAULT 'Easy',
  `duration` VARCHAR(50) DEFAULT '2 Hours',
  `included` TINYINT(1) DEFAULT 1,
  `image` TEXT NOT NULL,
  `description` TEXT NOT NULL,
  FOREIGN KEY (`package_id`) REFERENCES `packages`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 7. Itineraries Stack Table
CREATE TABLE `itineraries` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `package_id` INT NOT NULL,
  `day_number` INT NOT NULL,
  `title` VARCHAR(200) NOT NULL,
  `morning_desc` TEXT DEFAULT NULL,
  `afternoon_desc` TEXT DEFAULT NULL,
  `evening_desc` TEXT DEFAULT NULL,
  `description` TEXT NOT NULL,
  `meals` VARCHAR(100) DEFAULT 'Breakfast',
  `stay` VARCHAR(150) DEFAULT '4-Star Resort / Hotel',
  `transport` VARCHAR(150) DEFAULT 'Private AC Sedan',
  FOREIGN KEY (`package_id`) REFERENCES `packages`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 8. Bookings Table
CREATE TABLE `bookings` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `booking_ref` VARCHAR(30) NOT NULL UNIQUE,
  `user_id` INT NOT NULL,
  `package_id` INT NOT NULL,
  `travel_date` DATE NOT NULL,
  `adults` INT NOT NULL DEFAULT 1,
  `children` INT NOT NULL DEFAULT 0,
  `hotel_tier` VARCHAR(50) DEFAULT 'Deluxe',
  `total_amount` DECIMAL(10,2) NOT NULL,
  `payment_method` VARCHAR(50) DEFAULT 'UPI / GPay',
  `payment_status` ENUM('paid', 'pending', 'refunded') DEFAULT 'paid',
  `booking_status` ENUM('confirmed', 'pending', 'cancelled', 'completed') DEFAULT 'confirmed',
  `special_requests` TEXT DEFAULT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`package_id`) REFERENCES `packages`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 9. Reviews Table
CREATE TABLE `reviews` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `package_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `rating` INT NOT NULL CHECK (`rating` BETWEEN 1 AND 5),
  `comment` TEXT NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`package_id`) REFERENCES `packages`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 10. Inquiries Table
CREATE TABLE `inquiries` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(150) NOT NULL,
  `phone` VARCHAR(30) DEFAULT NULL,
  `destination_id` INT DEFAULT NULL,
  `subject` VARCHAR(200) NOT NULL,
  `message` TEXT NOT NULL,
  `status` ENUM('unread', 'read', 'replied') DEFAULT 'unread',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ==========================================================
-- SEED DATA (Authentic Users, Categories & 12 Destination Stacks)
-- ==========================================================

-- Seed Users
INSERT INTO `users` (`id`, `full_name`, `email`, `password`, `phone`, `role`) VALUES
(1, 'Krrish Modi (Admin)', 'modik3654@gmail.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '+91 98765 43210', 'admin'),
(2, 'Krrish Modi', 'krrish.modi@gmail.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '+91 98765 43210', 'customer'),
(3, 'Hiten Patil', 'hiten@gmail.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '+91 98221 44556', 'customer'),
(4, 'Shubham Sharma', 'shubham.sharma@gmail.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '+91 98332 55667', 'customer'),
(5, 'Yug Shah', 'yug.shah@gmail.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '+91 98443 66778', 'customer'),
(6, 'Yakshraj Jadeja', 'yakshraj.jadeja@gmail.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '+91 98554 77889', 'customer'),
(7, 'Dhyani Joshi', 'dhyani.joshi@gmail.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '+91 98665 88990', 'customer');

-- Seed Categories
INSERT INTO `categories` (`id`, `name`, `slug`, `icon`, `description`) VALUES
(1, 'Incredible India', 'incredible-india', 'fa-om', 'Heritage palaces, sacred spiritual ghats, misty hill stations, and tropical backwaters.'),
(2, 'Tropical & Beach', 'tropical-beach', 'fa-umbrella-beach', 'Sun-soaked golden sands, turquoise ocean waters, and private island vibes.'),
(3, 'Himalayan & Trekking', 'himalayan-trekking', 'fa-mountain', 'Majestic snow peaks, high-altitude passes, and scenic alpine wilderness.'),
(4, 'Cultural & Heritage', 'cultural-heritage', 'fa-monument', 'Ancient temples, historic castles, rich traditional ceremonies, and local delicacies.'),
(5, 'Wildlife & Safari', 'wildlife-safari', 'fa-paw', 'Untamed tiger reserves, national parks, and eco-lodges.'),
(6, 'Romantic Honeymoon', 'romantic-honeymoon', 'fa-heart', 'Secluded hill villas, candlelit houseboats, and luxury couples retreats.');

-- Seed 12 Complete Packages
INSERT INTO `packages` (`id`, `category_id`, `title`, `slug`, `subtitle`, `place_name`, `state`, `country`, `region`, `badge`, `duration_days`, `duration_nights`, `price`, `original_price`, `discount_percent`, `standard_price`, `deluxe_price`, `luxury_price`, `featured_image`, `banner_image`, `gallery_images`, `summary`, `overview`, `highlights`, `inclusions`, `exclusions`, `max_group_size`, `rating`, `reviews_count`, `altitude`, `best_time`, `climate`, `language`, `airport`, `railway`, `is_featured`, `is_bestseller`) VALUES
-- 1. Kerala
(1, 1, 'Kerala Backwaters Luxury Houseboat & Munnar Tea Hills', 'kerala-backwaters-munnar-tea-hills', 'God\'s Own Country - Private Houseboats & Rolling Green Hills', 'Munnar, Thekkady & Alleppey', 'Kerala', 'India', 'South India', 'Best Seller India', 6, 5, 24999.00, 29999.00, 17, 19999.00, 24999.00, 34999.00, 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1400&q=85', '["https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1000&q=80", "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=1000&q=80"]', 'Cruise through serene palm-fringed backwaters on a private AC houseboat and wander aromatic Munnar tea plantations.', 'Discover God\'s Own Country in complete luxury. 6 days across Munnar tea hills, Thekkady spice plantations, and an overnight private deluxe houseboat cruise in Alleppey.', 'Private AC Deluxe Houseboat stay with on-board chef, Munnar Tata Tea museum visit, Periyar Lake wildlife boat safari, Live Kathakali show, Private AC luxury sedan', '5 Nights accommodation (Resorts + 1 Night Houseboat), Daily breakfast & full-board houseboat meals, Private AC vehicle, Periyar boat safari tickets, Guide escort', 'Airfare to Kochi, Personal spa, Monument camera permits', 12, 4.96, 68, '1,600m (Munnar)', 'September to March', 'Misty & Pleasant (15°C - 26°C)', 'Malayalam, English, Hindi', 'Cochin Airport (COK)', 'Ernakulam Jn (ERS)', 1, 1),

-- 2. Ladakh
(2, 3, 'Ladakh Himalayan Passes, Pangong Lake & Nubra Dunes', 'ladakh-himalayan-passes-pangong-lake', 'Land of High Passes - Khardung La (17,982 ft) & Turquoise Pangong Tso', 'Leh, Nubra & Pangong', 'Ladakh', 'India', 'North India', 'Top Adventure India', 7, 6, 38500.00, 44000.00, 12, 31999.00, 38500.00, 52000.00, 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1400&q=85', '["https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1000&q=80", "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1000&q=80"]', 'Cross Khardung La pass, ride double-humped camels in Nubra desert sand dunes, and camp at Pangong Lake.', 'Epic journey to the roof of the world. Marvel at surreal landscapes, ancient monasteries in Thiksey, Magnetic Hill, and the turquoise waters of Pangong Tso.', 'Drive across Khardung La (17,982 ft), Overnight Pangong Tso glamping, Bactrian camel ride at Hunder, Thiksey Monastery tour, Onboard emergency oxygen support', '6 Nights in Swiss luxury tents and Leh hotels, 4x4 vehicle with oxygen cylinder, Inner Line Permits, Camel safari, All breakfasts and dinners', 'Flights to Leh (IXL), River rafting fees, Personal warm clothing rental', 10, 4.98, 74, '3,500m to 5,359m', 'May to October', 'Crisp & Sunny (-2°C to 20°C)', 'Ladakhi, Hindi, English', 'Leh Airport (IXL)', 'None (Road via Manali)', 1, 1),

-- 3. Goa
(3, 2, 'Goa Sun, Sand, Heritage Latin Quarter & Water Sports', 'goa-sun-sand-water-sports-escape', 'Tropical Coastal Escape - Golden Beaches & Portuguese Heritage', 'North & South Goa', 'Goa', 'India', 'West Coast', 'Best Beach Escape', 5, 4, 18999.00, 22500.00, 16, 14999.00, 18999.00, 27999.00, 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1400&q=85', '["https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1587922546307-776227941871?auto=format&fit=crop&w=1000&q=80", "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1000&q=80"]', 'Relax on golden beaches of Baga & Palolem, explore Portuguese Latin Quarters in Fontainhas, and enjoy parasailing.', 'The ultimate coastal vacation. Beach shacks, Portuguese architecture, Basilica of Bom Jesus, jet ski, parasailing, and sunset catamaran cruises on the Mandovi River.', 'Full 5-in-1 Water Sports package, Fontainhas heritage walking tour, Mandovi River sunset cruise, Beach hopping from Baga to Palolem', '4 Nights in beachfront resort with pool, Daily buffet breakfast, Water sports package, Mandovi sunset cruise tickets, Private AC cab', 'Flights to Goa, Scuba video package, Personal club entries', 15, 4.89, 52, 'Sea Level', 'October to April', 'Warm & Tropical (24°C - 32°C)', 'Konkani, English, Hindi', 'Goa MOPA / Dabolim', 'Madgaon Jn (MAO)', 1, 1),

-- 4. Kashmir
(4, 1, 'Kashmir Heaven on Earth, Gulmarg Gondola & Dal Lake', 'kashmir-heaven-gulmarg-dal-lake', 'Paradise on Earth - Dal Lake Shikaras, Cedar Houseboats & Gondola', 'Srinagar, Gulmarg & Pahalgam', 'Jammu & Kashmir', 'India', 'North India', 'Romantic Choice', 6, 5, 29500.00, 34000.00, 13, 23999.00, 29500.00, 42000.00, 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1400&q=85', '["https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=1000&q=80"]', 'Glide on wooden Shikaras on Dal Lake, stay in carved houseboats, ride the Gulmarg Gondola cable car.', 'Experience paradise on earth. Admire blooming saffron gardens, snow peaks of Apharwat in Gulmarg, pine forests of Pahalgam, and floating markets at dawn.', 'Sunset Shikara ride on Dal Lake, Stay in carved cedar houseboat, Gulmarg Gondola Phase-1 pass, Betaab Valley excursion', '5 Nights (Resorts + 1 Night Houseboat), Shikara ride with Kashmiri Kahwa, Gulmarg Gondola ticket, Daily breakfast & dinner, AC cab', 'Airfare to Srinagar, Pony rides in Pahalgam, Ski rentals', 12, 4.94, 61, '1,585m to 3,950m', 'All Year', 'Crisp Alpine (0°C - 22°C)', 'Kashmiri, Urdu, Hindi, English', 'Srinagar Airport (SXR)', 'Jammu Tawi (290 km)', 1, 0),

-- 5. Rajasthan
(5, 4, 'Majestic Rajasthan Palaces, Forts & Thar Desert Safari', 'majestic-rajasthan-palaces-forts', 'Land of Maharajas - Amber Fort, Jodhpur Blue City & Lake Pichola', 'Jaipur, Jodhpur & Udaipur', 'Rajasthan', 'India', 'North-West India', 'Royal Heritage Choice', 8, 7, 48000.00, 56000.00, 14, 39999.00, 48000.00, 68000.00, 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1400&q=85', '["https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=80"]', 'Live like royalty in heritage Havelis, marvel at Amber Fort, boat on Lake Pichola, and ride camels in Thar desert.', 'Royal heritage, vibrant bazaars, and monumental fortresses. From the Pink City of Jaipur to the Blue City of Jodhpur and Lake City of Udaipur.', 'Lake Pichola boat cruise in Udaipur, Amber Fort ascent & Sheesh Mahal, Desert camp glamping with royal dinner, Mehrangarh Fort tour', '7 Nights in Heritage Palaces and 4-star Havelis, Private AC cab, Boat ride on Lake Pichola, Camel safari, All breakfasts & dinners', 'Flights, Camera permits at monuments, Personal shopping expenses', 15, 4.88, 41, '431m (Jaipur)', 'October to March', 'Sunny & Pleasant (12°C - 28°C)', 'Hindi, Rajasthani, English', 'Jaipur Airport (JAI)', 'Jaipur Jn (JP)', 1, 1),

-- 6. Varanasi
(6, 1, 'Varanasi Spiritual Ganges Ganga Aarti & Sarnath Heritage', 'varanasi-spiritual-ganges-sarnath', 'Spiritual Heart of India - Sunrise Ganges Boat Ride & Sarnath Stupa', 'Varanasi & Sarnath', 'Uttar Pradesh', 'India', 'North-Central India', 'Spiritual Soul', 4, 3, 15500.00, 18500.00, 16, 11999.00, 15500.00, 24500.00, 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1400&q=85', '["https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1000&q=80"]', 'Witness evening Maha Ganga Aarti at Dashashwamedh Ghat, sunrise boat ride on the holy Ganges, and Sarnath stupas.', 'Step into the world\'s oldest living city. Walk through ancient sacred alleys, witness Ganga Aarti rituals, visit Kashi Vishwanath corridor, and explore Sarnath.', 'Private sunrise Ganges boat ride, Reserved front-row Maha Ganga Aarti boat, Kashi Vishwanath corridor darshan, Sarnath Dhamek Stupa tour', '3 Nights in 5-star hotel near Ganges, Private sunrise boat ride, Reserved VIP boat seating for evening Maha Aarti, Daily breakfasts & dinners', 'Train/Air tickets to Varanasi, Temple VIP darshan passes, Banarasi silk shopping', 14, 4.91, 38, '81m', 'October to March', 'Mild & Sunny (14°C - 26°C)', 'Hindi, Bhojpuri, English', 'Varanasi Airport (VNS)', 'Varanasi Jn (BSB)', 1, 0),

-- 7. Himachal Pradesh
(7, 3, 'Himachal Snow Valley, Manali Solang & Shimla Pines', 'himachal-manali-solang-shimla', 'Mountain Wonderland - Rohtang Pass, Solang Valley & Shimla Mall', 'Shimla, Kullu & Manali', 'Himachal Pradesh', 'India', 'North India', 'Himalayan Snow Choice', 6, 5, 22500.00, 26000.00, 13, 17999.00, 22500.00, 32000.00, 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1400&q=85', '["https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1000&q=80"]', 'Enjoy snow adventures at Solang Valley, Rohtang Pass, stroll Mall Road in Shimla, and explore Kullu river rafting.', 'The quintessential mountain escape in North India. Pine forests, apple orchards, snow-clad mountain passes, Hadimba temple, and peaceful hot springs at Vashisht.', 'Solang Valley snow adventures, Drive through Atal Tunnel (9.02 km), Shimla Mall Road & Ridge walk, Ancient Hadimba temple visit', '5 Nights in 4-star mountain view resorts, Private AC cab for Chandigarh pickup & tours, Daily buffet breakfast & dinner, Solang excursion', 'Train/Flight to Chandigarh, Paragliding and river rafting fees', 15, 4.93, 56, '2,050m (Manali)', 'All Year', 'Alpine & Cool (2°C - 20°C)', 'Hindi, Pahari, English', 'Bhuntar (KUU) / Chandigarh', 'Kalka / Chandigarh', 1, 0),

-- 8. Andaman Islands
(8, 2, 'Andaman Coral Islands, Radhanagar Beach & Scuba Safari', 'andaman-coral-islands-scuba', 'Emerald Island Paradise - Asia\'s Best Radhanagar Beach & Scuba', 'Port Blair & Havelock Island', 'Andaman & Nicobar', 'India', 'Bay of Bengal', 'Pristine Island Paradise', 6, 5, 36000.00, 42000.00, 14, 29999.00, 36000.00, 51000.00, 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1400&q=85', '["https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1000&q=80"]', 'Explore Asia’s best Radhanagar beach, dive into crystal-clear coral reefs, and visit historic Cellular Jail.', 'Pristine white sand islands, emerald waters, scuba diving with sea turtles, and luxury catamaran cruises across Andaman Sea.', 'Premium Makruzz catamaran ferry tickets, Sunset at Radhanagar Beach, Snorkeling at Elephant Beach, Cellular Jail Light & Sound show', '5 Nights in beachside luxury cottages, Premium Makruzz catamaran transfers, Snorkeling session at Elephant Beach, Cellular Jail show passes', 'Flights to Port Blair (IXZ), Deep sea scuba diving video package', 12, 4.97, 49, 'Sea Level', 'October to May', 'Tropical & Breezy (24°C - 31°C)', 'Hindi, Bengali, English', 'Port Blair (IXZ)', 'Catamaran Ferry', 1, 1),

-- 9. Uttarakhand
(9, 3, 'Uttarakhand Rishikesh Ganga Rafting & Mussoorie Hills', 'uttarakhand-rishikesh-mussoorie', 'Yoga Capital & Queen of Hills - 16km White Water Rafting & Aarti', 'Rishikesh, Haridwar & Mussoorie', 'Uttarakhand', 'India', 'North India', 'Adventure & Spiritual', 5, 4, 24500.00, 29000.00, 15, 19500.00, 24500.00, 35000.00, 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1400&q=85', '["https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1000&q=80"]', 'Experience thrilling 16km river rafting on the Ganges, riverside yoga, Haridwar Ganga Aarti, and Kempty Falls.', 'Yoga capital of the world meets queen of the hills. Riverside luxury camping, cliff jumping, Triveni Ghat evening aarti, and scenic cable car rides in Mussoorie.', '16 KM Grade-III White Water River Rafting, Luxury riverside glamping with bonfire, Haridwar & Triveni Ganga Aarti, Mussoorie Kempty Falls tour', '4 Nights in luxury riverside camp and Mussoorie hill resort, 16KM Rafting with cliff jump, Ganga Aarti tour, All breakfasts & dinners', 'Transportation to/from Delhi, Bungee jumping fees at Jumpin Heights', 16, 4.90, 44, '372m to 2,005m', 'September to June', 'Crisp & Mountain Fresh (10°C - 26°C)', 'Hindi, Garhwali, English', 'Dehradun Airport (DED)', 'Haridwar Jn (HW)', 1, 0),

-- 10. Darjeeling & Sikkim
(10, 1, 'Darjeeling Queen of Hills & Gangtok Sikkim Monasteries', 'darjeeling-gangtok-sikkim', 'Eastern Himalayan Shangri-La - Kanchenjunga Sunrise & Toy Train', 'Darjeeling & Gangtok', 'West Bengal & Sikkim', 'India', 'North-East India', 'Scenic Panorama', 6, 5, 28000.00, 32000.00, 12, 22999.00, 28000.00, 41000.00, 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1400&q=85', '["https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80"]', 'Witness sunrise over Kanchenjunga from Tiger Hill, ride the Darjeeling Himalayan toy train, and visit Tsomgo Lake.', 'Misty tea estates, Tibetan Buddhist prayer flags, high-altitude alpine Tsomgo Lake at 12,400 ft, and panoramic Himalayan vistas in Sikkim.', 'Tiger Hill sunrise view of Mt. Kanchenjunga, UNESCO Darjeeling Steam Toy Train ride, High-altitude Tsomgo Lake excursion, Rumtek Monastery tour', '5 Nights in 4-star boutique Himalayan hotels, Private AC cab for all transfers, Tiger Hill sunrise pass, Tsomgo Lake & Baba Mandir permit', 'Flights to Bagdogra (IXB), Toy Train joyride tickets, Personal woolens', 12, 4.92, 39, '2,042m (Darjeeling)', 'March to June / Oct to Dec', 'Misty & Alpine (6°C - 19°C)', 'Nepali, Hindi, Bengali, English', 'Bagdogra Airport (IXB)', 'New Jalpaiguri (NJP)', 1, 0),

-- 11. Agra & Golden Triangle
(11, 4, 'Agra & Golden Triangle - Taj Mahal Sunrise & Mughal Forts', 'agra-golden-triangle-taj-mahal', 'Wonder of the World - Taj Mahal Dawn, Agra Fort & Fatehpur Sikri', 'Agra, Fatehpur Sikri & Delhi', 'Uttar Pradesh & Delhi', 'India', 'North India', 'World Wonder', 4, 3, 17500.00, 21000.00, 16, 13999.00, 17500.00, 28000.00, 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1400&q=85', '["https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?auto=format&fit=crop&w=1000&q=80"]', 'Gaze upon the white marble wonder of the Taj Mahal at sunrise and tour monumental red sandstone Mughal fortresses.', 'Built by Shah Jahan in memory of Mumtaz Mahal. Experience the Taj Mahal at dawn, the imperial Agra Fort, deserted Fatehpur Sikri, and master marble artisans.', 'Sunrise VIP entry to Taj Mahal, Architectural tour of Agra Fort, Excursion to UNESCO Fatehpur Sikri, Sunset view from Mehtab Bagh across Yamuna', '3 Nights in 5-star hotel near Taj Mahal, Private AC chauffeur car for entire circuit, VIP monument passes, Certified Govt historian guide', 'Flights/Trains to Delhi, Personal marble handicrafts shopping', 15, 4.95, 58, '171m', 'October to March', 'Pleasant & Sunny (12°C - 26°C)', 'Hindi, Urdu, English', 'Delhi Airport (DEL)', 'Agra Cantt (AGC)', 1, 1),

-- 12. Swiss Alps
(12, 3, 'Swiss Alps Majestic Glacier & Interlaken Adventure', 'swiss-alps-glacier-interlaken', 'Crown of Europe - Jungfraujoch (Top of Europe) & Zermatt Matterhorn', 'Interlaken, Zermatt & Zurich', 'Bernese Oberland', 'Switzerland', 'Central Europe', 'International Flagship', 8, 7, 175000.00, 195000.00, 10, 145000.00, 175000.00, 240000.00, 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1400&q=85', '["https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80", "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1000&q=80"]', 'Marvel at snow-capped summits, ride the Jungfraujoch Top of Europe cogwheel railway, and cruise pristine Lake Brienz.', 'Grandeur of the Swiss Alps. Alpine meadows, glacier grottos, storybook mountain villages, and world-class Swiss hospitality.', 'Jungfraujoch Top of Europe excursion pass with Eiger Express gondola, 8-Day 1st Class Swiss Travel Pass, Gornergrat Matterhorn cogwheel train, Lake Brienz cruise', '7 Nights in Alpine chalets and Zurich hotels, 1st Class Swiss Travel Pass, Jungfraujoch railway excursion ticket, Gornergrat train pass', 'International flights, Swiss Schengen visa, Ski equipment rental', 10, 4.92, 34, '566m to 3,454m', 'All Year', 'Alpine & Crisp (-4°C to 20°C)', 'German, French, English', 'Zurich Airport (ZRH)', 'Interlaken Ost Station', 1, 1);

-- Seed Bookings with Indian Names
INSERT INTO `bookings` (`id`, `booking_ref`, `user_id`, `package_id`, `travel_date`, `adults`, `children`, `hotel_tier`, `total_amount`, `payment_method`, `payment_status`, `booking_status`, `special_requests`) VALUES
(1, 'SPY-2026-7821', 1, 1, '2026-09-15', 2, 0, 'Luxury', 49998.00, 'UPI / GPay', 'paid', 'confirmed', 'Krrish Modi: Couple tour, flower decoration on Kerala houseboat requested.'),
(2, 'SPY-2026-9043', 3, 2, '2026-10-05', 2, 0, 'Deluxe', 77000.00, 'UPI / PhonePe', 'paid', 'confirmed', 'Hiten Patil: Extra oxygen cylinder for Khardung La pass.'),
(3, 'SPY-2026-5120', 4, 3, '2026-10-12', 4, 0, 'Deluxe', 75996.00, 'Net Banking', 'paid', 'confirmed', 'Shubham Sharma: Beachside villa and water sports package.'),
(4, 'SPY-2026-3341', 5, 4, '2026-10-20', 2, 0, 'Deluxe', 59000.00, 'Credit Card', 'paid', 'confirmed', 'Yug Shah: Shikara ride timing for sunset on Dal Lake.'),
(5, 'SPY-2026-8812', 6, 5, '2026-11-02', 3, 0, 'Luxury', 144000.00, 'UPI / GPay', 'paid', 'confirmed', 'Yakshraj Jadeja: Royal Haveli suite in Udaipur requested.'),
(6, 'SPY-2026-4490', 7, 8, '2026-11-15', 2, 0, 'Deluxe', 72000.00, 'UPI / Paytm', 'paid', 'confirmed', 'Dhyani Joshi: Beachfront cottage at Havelock Island Andaman.');

-- Seed Reviews with Indian Names
INSERT INTO `reviews` (`package_id`, `user_id`, `rating`, `comment`) VALUES
(1, 1, 5, 'The Alleppey houseboat experience by SpidyWeb was magical! Freshly cooked South Indian Sadya and serene sunrise.'),
(2, 3, 5, 'Hiten Patil: Ladakh trip with SpidyWeb was flawless. Oxygen cylinder support and Pangong luxury tents were top class!'),
(3, 4, 5, 'Shubham Sharma: Goa beach water sports and sunset catamaran cruise organized by SpidyWeb made our vacation unforgettable!'),
(4, 5, 5, 'Yug Shah: Dal Lake Shikara ride and Gulmarg cable car with SpidyWeb was like a dream. 10/10 recommendation!'),
(5, 6, 5, 'Yakshraj Jadeja: Royal Rajasthan forts and Lake Pichola boat tour were breathtaking. True 5-star hospitality.'),
(6, 7, 5, 'Dhyani Joshi: Andaman scuba diving and Radhanagar beach was pure paradise! Seamless bookings by SpidyWeb.');

-- Seed Inquiries with Indian Names
INSERT INTO `inquiries` (`name`, `email`, `phone`, `destination_id`, `subject`, `message`, `status`) VALUES
('Hiten Patil', 'hiten@gmail.com', '+91 98221 44556', 2, 'Custom Ladakh Bike Tour for 6 Friends', 'Hi Krrish & SpidyWeb team, we are planning a Royal Enfield bullet bike expedition to Ladakh in October.', 'unread'),
('Shubham Sharma', 'shubham.sharma@gmail.com', '+91 98332 55667', 3, 'Goa Private Pool Villa Query', 'Hello, do you have 4-BHK beachfront villas in North Goa for our Diwali family vacation?', 'read'),
('Yug Shah', 'yug.shah@gmail.com', '+91 98443 66778', 4, 'Kashmir Winter Snow Itinerary', 'Can we book Gulmarg Gondola Phase-2 and ski instructor passes along with our package?', 'unread'),
('Yakshraj Jadeja', 'yakshraj.jadeja@gmail.com', '+91 98554 77889', 5, 'Rajasthan Desert Camp Group Booking', 'We want to book a 15-person desert camp in Jaisalmer Sam Sand Dunes for New Year.', 'replied'),
('Dhyani Joshi', 'dhyani.joshi@gmail.com', '+91 98665 88990', 8, 'Andaman Scuba Diving Certification', 'Hi, is PADI open-water scuba diving certification included in the Havelock package?', 'unread');
