<?php
/**
 * Wanderlust Voyage - Contact Inquiries API
 * Handles Contact Form Submissions and Support Inquiries
 */

require_once __DIR__ . '/../config/db.php';

header('Content-Type: application/json; charset=utf-8');

$db = getDB();

$name    = cleanInput($_POST['name'] ?? '');
$email   = cleanInput($_POST['email'] ?? '');
$phone   = cleanInput($_POST['phone'] ?? '');
$subject = cleanInput($_POST['subject'] ?? 'General Inquiry');
$message = cleanInput($_POST['message'] ?? '');

if (empty($name) || empty($email) || empty($message)) {
    jsonResponse(['success' => false, 'error' => 'Please fill in your name, email, and message.'], 400);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    jsonResponse(['success' => false, 'error' => 'Please provide a valid email address.'], 400);
}

$stmt = $db->prepare("INSERT INTO inquiries (name, email, phone, subject, message, status) VALUES (?, ?, ?, ?, ?, 'unread')");
$stmt->execute([$name, $email, $phone, $subject, $message]);

jsonResponse([
    'success' => true,
    'message' => 'Thank you for reaching out! Our travel concierge will get back to you within 24 hours.'
]);
?>
