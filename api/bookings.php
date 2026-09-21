<?php
/**
 * Wanderlust Voyage - Bookings Management API
 * Handles Booking Creation, Retrievals for Logged-in Customer, and Cancellations
 */

require_once __DIR__ . '/../config/db.php';

header('Content-Type: application/json; charset=utf-8');

$action = $_POST['action'] ?? $_GET['action'] ?? 'list';
$db = getDB();
$currentUser = getLoggedInUser();

switch ($action) {
    case 'create':
        // If user is not logged in, check if default demo user exists or create guest session
        $userId = $currentUser ? $currentUser['id'] : null;
        if (!$userId) {
            // Auto fallback to demo user (Alex Morgan, id: 2) or require login
            $userCheck = $db->query("SELECT id FROM users WHERE role = 'customer' LIMIT 1")->fetch();
            if ($userCheck) {
                $userId = $userCheck['id'];
                // Set session so customer can see their dashboard right away
                $_SESSION['user_id'] = $userId;
                $_SESSION['user_name'] = 'Alex Morgan';
                $_SESSION['user_email'] = 'alex@example.com';
                $_SESSION['user_role'] = 'customer';
            } else {
                jsonResponse(['success' => false, 'require_login' => true, 'error' => 'Please login to reserve.'], 401);
            }
        }

        $packageId       = (int)($_POST['package_id'] ?? 0);
        $travelDate      = cleanInput($_POST['travel_date'] ?? '');
        $adults          = max(1, (int)($_POST['adults'] ?? 1));
        $children        = max(0, (int)($_POST['children'] ?? 0));
        $totalAmount     = (float)($_POST['total_amount'] ?? 0);
        $paymentMethod   = cleanInput($_POST['payment_method'] ?? 'Credit Card');
        $specialRequests = cleanInput($_POST['special_requests'] ?? '');

        if (!$packageId || empty($travelDate) || $totalAmount <= 0) {
            jsonResponse(['success' => false, 'error' => 'Invalid booking details provided.'], 400);
        }

        // Verify package exists
        $pkgStmt = $db->prepare("SELECT id, title, price FROM packages WHERE id = ? LIMIT 1");
        $pkgStmt->execute([$packageId]);
        $pkg = $pkgStmt->fetch();
        if (!$pkg) {
            jsonResponse(['success' => false, 'error' => 'Selected tour package no longer exists.'], 404);
        }

        // Generate unique booking reference number
        $bookingRef = 'WL-' . date('Y') . '-' . mt_rand(1000, 9999);

        $stmt = $db->prepare("
            INSERT INTO bookings (booking_ref, user_id, package_id, travel_date, adults, children, total_amount, payment_method, payment_status, booking_status, special_requests)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'paid', 'confirmed', ?)
        ");
        $stmt->execute([$bookingRef, $userId, $packageId, $travelDate, $adults, $children, $totalAmount, $paymentMethod, $specialRequests]);

        $bookingId = $db->lastInsertId();

        jsonResponse([
            'success' => true,
            'message' => 'Your booking is confirmed!',
            'booking' => [
                'id'             => $bookingId,
                'booking_ref'    => $bookingRef,
                'package_id'     => $packageId,
                'package_title'  => $pkg['title'],
                'travel_date'    => $travelDate,
                'adults'         => $adults,
                'children'       => $children,
                'total_amount'   => $totalAmount,
                'payment_method' => $paymentMethod,
                'booking_status' => 'confirmed'
            ]
        ], 201);
        break;

    case 'list':
    case 'my_bookings':
        $userId = $currentUser ? $currentUser['id'] : 2; // Default to demo user if not logged in
        $stmt = $db->prepare("
            SELECT b.*, p.title as package_title, p.destination, p.featured_image, p.duration_days, p.slug as package_slug 
            FROM bookings b 
            JOIN packages p ON b.package_id = p.id 
            WHERE b.user_id = ? 
            ORDER BY b.created_at DESC
        ");
        $stmt->execute([$userId]);
        $bookings = $stmt->fetchAll();

        jsonResponse(['success' => true, 'bookings' => $bookings]);
        break;

    case 'cancel':
        if (!$currentUser) {
            jsonResponse(['success' => false, 'error' => 'Unauthorized'], 401);
        }
        $bookingId = (int)($_POST['id'] ?? 0);
        $stmt = $db->prepare("UPDATE bookings SET booking_status = 'cancelled' WHERE id = ? AND (user_id = ? OR ? = 'admin')");
        $stmt->execute([$bookingId, $currentUser['id'], $currentUser['role']]);

        jsonResponse(['success' => true, 'message' => 'Booking cancelled successfully.']);
        break;

    default:
        jsonResponse(['success' => false, 'error' => 'Invalid action.'], 400);
        break;
}
?>
