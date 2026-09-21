<?php
/**
 * Wanderlust Voyage - Authentication & Authorization Middleware
 */

require_once __DIR__ . '/../config/db.php';

/**
 * Require User to be Logged In
 */
function requireLogin() {
    $user = getLoggedInUser();
    if (!$user) {
        // Redirect to login with return URL
        $returnUrl = urlencode($_SERVER['REQUEST_URI']);
        header("Location: login.php?redirect=" . $returnUrl);
        exit;
    }
    return $user;
}

/**
 * Require Admin Access Role
 */
function requireAdmin() {
    $user = getLoggedInUser();
    if (!$user || $user['role'] !== 'admin') {
        header("Location: ../admin/login.php?error=unauthorized");
        exit;
    }
    return $user;
}
?>
