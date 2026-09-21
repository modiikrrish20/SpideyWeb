<?php
/**
 * Wanderlust Voyage - Tour Packages API Endpoint
 * Handles Package Catalog Listing, Search/Filters, and Single Package Detail with Itinerary
 */

require_once __DIR__ . '/../config/db.php';

header('Content-Type: application/json; charset=utf-8');

$db = getDB();

// Single package detail by ID or Slug
if (isset($_GET['id']) || isset($_GET['slug'])) {
    $param = $_GET['id'] ?? $_GET['slug'];
    $isNumeric = is_numeric($param);

    if ($isNumeric) {
        $stmt = $db->prepare("
            SELECT p.*, c.name as category_name, c.slug as category_slug 
            FROM packages p 
            JOIN categories c ON p.category_id = c.id 
            WHERE p.id = ? 
            LIMIT 1
        ");
        $stmt->execute([(int)$param]);
    } else {
        $stmt = $db->prepare("
            SELECT p.*, c.name as category_name, c.slug as category_slug 
            FROM packages p 
            JOIN categories c ON p.category_id = c.id 
            WHERE p.slug = ? 
            LIMIT 1
        ");
        $stmt->execute([$param]);
    }

    $package = $stmt->fetch();

    if (!$package) {
        jsonResponse(['success' => false, 'error' => 'Tour package not found.'], 404);
    }

    // Fetch Day-by-day Itinerary
    $itStmt = $db->prepare("SELECT * FROM itineraries WHERE package_id = ? ORDER BY day_number ASC");
    $itStmt->execute([$package['id']]);
    $package['itineraries'] = $itStmt->fetchAll();

    // Fetch Reviews
    $revStmt = $db->prepare("
        SELECT r.*, u.full_name as user_name, u.avatar as user_avatar 
        FROM reviews r 
        JOIN users u ON r.user_id = u.id 
        WHERE r.package_id = ? 
        ORDER BY r.created_at DESC
    ");
    $revStmt->execute([$package['id']]);
    $package['reviews'] = $revStmt->fetchAll();

    jsonResponse(['success' => true, 'package' => $package]);
}

// Catalog listing with optional filters
$categorySlug = $_GET['category'] ?? '';
$keyword      = $_GET['search'] ?? '';
$minPrice     = isset($_GET['min_price']) ? (float)$_GET['min_price'] : 0;
$maxPrice     = isset($_GET['max_price']) ? (float)$_GET['max_price'] : 999999;
$featuredOnly = isset($_GET['featured']) && $_GET['featured'] == '1';

$sql = "
    SELECT p.*, c.name as category_name, c.slug as category_slug 
    FROM packages p 
    JOIN categories c ON p.category_id = c.id 
    WHERE p.status = 'active'
";
$params = [];

if (!empty($categorySlug) && $categorySlug !== 'all') {
    $sql .= " AND c.slug = ?";
    $params[] = $categorySlug;
}

if (!empty($keyword)) {
    $sql .= " AND (p.title LIKE ? OR p.destination LIKE ? OR p.country LIKE ?)";
    $term = "%" . $keyword . "%";
    $params[] = $term;
    $params[] = $term;
    $params[] = $term;
}

if ($featuredOnly) {
    $sql .= " AND p.is_featured = 1";
}

$sql .= " AND p.price BETWEEN ? AND ? ORDER BY p.is_bestseller DESC, p.created_at DESC";
$params[] = $minPrice;
$params[] = $maxPrice;

$stmt = $db->prepare($sql);
$stmt->execute($params);
$packages = $stmt->fetchAll();

// Fetch categories for filtering
$catStmt = $db->query("SELECT * FROM categories ORDER BY id ASC");
$categories = $catStmt->fetchAll();

jsonResponse([
    'success'    => true,
    'count'      => count($packages),
    'categories' => $categories,
    'packages'   => $packages
]);
?>
