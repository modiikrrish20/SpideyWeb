<?php
/**
 * Wanderlust Voyage - Authentication API Endpoint
 * Handles User Login, Registration, Session Checks, and Logout
 */

require_once __DIR__ . '/../config/db.php';

header('Content-Type: application/json; charset=utf-8');

$action = $_POST['action'] ?? $_GET['action'] ?? '';
$db = getDB();

switch ($action) {
    case 'login':
        $email    = cleanInput($_POST['email'] ?? '');
        $password = $_POST['password'] ?? '';

        if (empty($email) || empty($password)) {
            jsonResponse(['success' => false, 'error' => 'Please provide both email and password.'], 400);
        }

        $stmt = $db->prepare("SELECT * FROM users WHERE email = ? LIMIT 1");
        $stmt->execute([$email]);
        $user = $stmt->fetch();

        if ($user && password_verify($password, $user['password'])) {
            // Prevent Session Fixation attacks
            session_regenerate_id(true);

            $_SESSION['user_id']     = (int)$user['id'];
            $_SESSION['user_name']   = $user['full_name'];
            $_SESSION['user_email']  = $user['email'];
            $_SESSION['user_role']   = $user['role'];
            $_SESSION['user_avatar'] = $user['avatar'];

            jsonResponse([
                'success' => true,
                'message' => 'Login successful!',
                'user' => [
                    'id'        => $user['id'],
                    'full_name' => $user['full_name'],
                    'email'     => $user['email'],
                    'role'      => $user['role']
                ]
            ]);
        } else {
            jsonResponse(['success' => false, 'error' => 'Invalid email address or password.'], 401);
        }
        break;

    case 'register':
        $fullName = cleanInput($_POST['full_name'] ?? '');
        $email    = cleanInput($_POST['email'] ?? '');
        $phone    = cleanInput($_POST['phone'] ?? '');
        $password = $_POST['password'] ?? '';

        if (empty($fullName) || empty($email) || empty($password)) {
            jsonResponse(['success' => false, 'error' => 'Please fill in all required fields.'], 400);
        }

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            jsonResponse(['success' => false, 'error' => 'Please enter a valid email address.'], 400);
        }

        if (strlen($password) < 6) {
            jsonResponse(['success' => false, 'error' => 'Password must be at least 6 characters.'], 400);
        }

        // Check if email already registered
        $checkStmt = $db->prepare("SELECT id FROM users WHERE email = ? LIMIT 1");
        $checkStmt->execute([$email]);
        if ($checkStmt->fetch()) {
            jsonResponse(['success' => false, 'error' => 'This email is already registered. Please login.'], 409);
        }

        // Hash password securely with BCrypt
        $hashedPassword = password_hash($password, PASSWORD_BCRYPT);
        $avatar = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80';

        $insertStmt = $db->prepare("INSERT INTO users (full_name, email, password, phone, role, avatar) VALUES (?, ?, ?, ?, 'customer', ?)");
        $insertStmt->execute([$fullName, $email, $hashedPassword, $phone, $avatar]);

        $newUserId = (int)$db->lastInsertId();

        // Automatically log user in
        session_regenerate_id(true);
        $_SESSION['user_id']     = $newUserId;
        $_SESSION['user_name']   = $fullName;
        $_SESSION['user_email']  = $email;
        $_SESSION['user_role']   = 'customer';
        $_SESSION['user_avatar'] = $avatar;

        jsonResponse([
            'success' => true,
            'message' => 'Account created successfully!',
            'user' => [
                'id'        => $newUserId,
                'full_name' => $fullName,
                'email'     => $email,
                'role'      => 'customer'
            ]
        ], 201);
        break;

    case 'logout':
        $_SESSION = [];
        if (ini_get("session.use_cookies")) {
            $params = session_get_cookie_params();
            setcookie(session_name(), '', time() - 42000,
                $params["path"], $params["domain"],
                $params["secure"], $params["httponly"]
            );
        }
        session_destroy();
        jsonResponse(['success' => true, 'message' => 'Logged out successfully.']);
        break;

    case 'check':
        $user = getLoggedInUser();
        if ($user) {
            jsonResponse(['success' => true, 'authenticated' => true, 'user' => $user]);
        } else {
            jsonResponse(['success' => true, 'authenticated' => false, 'user' => null]);
        }
        break;

    default:
        jsonResponse(['success' => false, 'error' => 'Invalid auth action specified.'], 400);
        break;
}
?>
