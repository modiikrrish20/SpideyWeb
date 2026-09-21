<?php
/**
 * Wanderlust Voyage - Reviews API
 * Handles Customer Review Submissions
 */

require_once __DIR__ . '/../config/db.php';

header('Content-Type: application/json; charset=utf-8');

$db = getDB();
$currentUser = getLoggedInUser();

$packageId = (int)($_POST['package_id'] ?? 0);
$rating    = max(1, min(5, (int)($_POST['rating'] ?? 5)));
$comment   = cleanInput($_POST['comment'] ?? '');

if (!$packageId || empty($comment)) {
    jsonResponse(['success' => false, 'error' => 'Please provide a package ID and review comment.'], 400);
}

$userId = $currentUser ? $currentUser['id'] : 2; // Default to demo customer

$stmt = $db->prepare("INSERT INTO reviews (package_id, user_id, rating, comment) VALUES (?, ?, ?, ?)");
$stmt->execute([$packageId, $userId, $rating, $comment]);

// Update package review count and average rating
$calcStmt = $db->prepare("SELECT AVG(rating) as avg_rating, COUNT(*) as total_reviews FROM reviews WHERE package_id = ?");
$calcStmt->execute([$packageId]);
$stats = $calcStmt->fetch();

$updateStmt = $db->prepare("UPDATE packages SET rating = ?, reviews_count = ? WHERE id = ?");
$updateStmt->execute([round((float)$stats['avg_rating'], 2), (int)$stats['total_reviews'], $packageId]);

jsonResponse([
    'success' => true,
    'message' => 'Thank you! Your review has been published.',
    'new_rating' => round((float)$stats['avg_rating'], 2),
    'reviews_count' => (int)$stats['total_reviews']
]);
?>
