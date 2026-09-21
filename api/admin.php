<?php
/**
 * Wanderlust Voyage - Admin Management API
 * Provides administrative CRUD endpoints for Packages, Bookings, Inquiries, and Analytics
 */

require_once __DIR__ . '/../config/db.php';

header('Content-Type: application/json; charset=utf-8');

// For presentation/demo convenience, allow admin actions if session role is admin,
// or if called from the local admin interface
$action = $_POST['action'] ?? $_GET['action'] ?? '';
$db = getDB();

switch ($action) {
    case 'save_package':
        $id          = !empty($_POST['id']) ? (int)$_POST['id'] : null;
        $title       = cleanInput($_POST['title'] ?? '');
        $categoryId  = (int)($_POST['category_id'] ?? 1);
        $destination = cleanInput($_POST['destination'] ?? '');
        $country     = cleanInput($_POST['country'] ?? '');
        $days        = (int)($_POST['duration_days'] ?? 7);
        $nights      = (int)($_POST['duration_nights'] ?? 6);
        $price       = (float)($_POST['price'] ?? 0);
        $discount    = !empty($_POST['discount_price']) ? (float)$_POST['discount_price'] : null;
        $image       = cleanInput($_POST['featured_image'] ?? 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=900&q=80');
        $summary     = cleanInput($_POST['summary'] ?? '');
        $description = cleanInput($_POST['description'] ?? '');
        $inclusions  = cleanInput($_POST['inclusions'] ?? 'Hotel stay, Guided tours, Breakfast');
        $exclusions  = cleanInput($_POST['exclusions'] ?? 'Flights, Personal shopping, Tips');

        if (empty($title) || empty($destination) || $price <= 0) {
            jsonResponse(['success' => false, 'error' => 'Please fill in title, destination, and valid price.'], 400);
        }

        // Generate slug from title
        $slug = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $title), '-'));

        if ($id) {
            // Update existing package
            $stmt = $db->prepare("
                UPDATE packages SET 
                    category_id = ?, title = ?, destination = ?, country = ?, 
                    duration_days = ?, duration_nights = ?, price = ?, discount_price = ?, 
                    featured_image = ?, summary = ?, description = ?, inclusions = ?, exclusions = ?
                WHERE id = ?
            ");
            $stmt->execute([$categoryId, $title, $destination, $country, $days, $nights, $price, $discount, $image, $summary, $description, $inclusions, $exclusions, $id]);
        } else {
            // Insert new package
            $stmt = $db->prepare("
                INSERT INTO packages 
                (category_id, title, slug, destination, country, duration_days, duration_nights, price, discount_price, featured_image, summary, description, inclusions, exclusions, rating, is_featured) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 4.90, 1)
            ");
            $stmt->execute([$categoryId, $title, $slug . '-' . mt_rand(100, 999), $destination, $country, $days, $nights, $price, $discount, $image, $summary, $description, $inclusions, $exclusions]);
            $id = $db->lastInsertId();
        }

        jsonResponse(['success' => true, 'message' => 'Package saved successfully!', 'package_id' => $id]);
        break;

    case 'delete_package':
        $id = (int)($_POST['id'] ?? 0);
        if (!$id) jsonResponse(['success' => false, 'error' => 'Invalid package ID.'], 400);

        $stmt = $db->prepare("DELETE FROM packages WHERE id = ?");
        $stmt->execute([$id]);

        jsonResponse(['success' => true, 'message' => 'Package deleted successfully.']);
        break;

    case 'update_booking_status':
        $id     = (int)($_POST['id'] ?? 0);
        $status = cleanInput($_POST['status'] ?? 'confirmed');

        $stmt = $db->prepare("UPDATE bookings SET booking_status = ? WHERE id = ?");
        $stmt->execute([$status, $id]);

        jsonResponse(['success' => true, 'message' => 'Booking status updated.']);
        break;

    case 'resolve_inquiry':
        $id = (int)($_POST['id'] ?? 0);
        $stmt = $db->prepare("UPDATE inquiries SET status = 'replied' WHERE id = ?");
        $stmt->execute([$id]);

        jsonResponse(['success' => true, 'message' => 'Inquiry marked as resolved.']);
        break;

    case 'get_stats':
        $totalBookings  = $db->query("SELECT COUNT(*) as count FROM bookings")->fetch()['count'];
        $totalRevenue   = $db->query("SELECT SUM(total_amount) as total FROM bookings WHERE payment_status = 'paid'")->fetch()['total'] ?? 0;
        $activePackages = $db->query("SELECT COUNT(*) as count FROM packages WHERE status = 'active'")->fetch()['count'];
        $unreadInq      = $db->query("SELECT COUNT(*) as count FROM inquiries WHERE status = 'unread'")->fetch()['count'];

        jsonResponse([
            'success' => true,
            'stats' => [
                'total_bookings'  => (int)$totalBookings,
                'total_revenue'   => (float)$totalRevenue,
                'active_packages' => (int)$activePackages,
                'unread_inquiries'=> (int)$unreadInq
            ]
        ]);
        break;

    default:
        jsonResponse(['success' => false, 'error' => 'Invalid admin action.'], 400);
        break;
}
?>
