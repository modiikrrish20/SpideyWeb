#!/usr/bin/env python3
"""
SpidyWeb Tours & Travels - Local Server Runner
Starts local development server and opens the browser.
Supports both PHP built-in server (when PHP is installed) and
a robust Python HTTP server with automatic PHP->HTML routing & API mocking.
"""

import os
import sys
import shutil
import subprocess
import webbrowser
import http.server
import socketserver
import urllib.parse
import json
import random

PORT = 8000
WORKSPACE_DIR = os.path.dirname(os.path.abspath(__file__))

def check_php():
    return shutil.which("php")

MOCK_USERS = {
    "modik3654@gmail.com": {
        "id": 1,
        "full_name": "Krrish Modi",
        "email": "modik3654@gmail.com",
        "password": "user123",
        "role": "customer"
    },
    "hiten@gmail.com": {
        "id": 2,
        "full_name": "Hiten Patil",
        "email": "hiten@gmail.com",
        "password": "12345",
        "role": "customer"
    }
}

class SpidyWebRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        clean_path = parsed.path
        query = urllib.parse.parse_qs(parsed.query)

        # 1. API GET Endpoints
        if clean_path.startswith('/api/'):
            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.end_headers()

            if 'packages.php' in clean_path:
                resp = {
                    "success": True,
                    "message": "Package catalog loaded",
                    "packages": []
                }
            elif 'bookings.php' in clean_path:
                resp = {
                    "success": True,
                    "bookings": [
                        {
                            "id": 1,
                            "booking_ref": "SPY-2026-8821",
                            "package_title": "Kerala Backwaters Luxury Houseboat & Munnar Tea Hills",
                            "travel_date": "2026-10-15",
                            "status": "confirmed",
                            "payment_status": "paid",
                            "total_price": 28500
                        }
                    ]
                }
            elif 'admin.php' in clean_path:
                resp = {
                    "success": True,
                    "stats": {
                        "total_bookings": 142,
                        "total_revenue": 3485000,
                        "total_customers": 128,
                        "total_packages": 16
                    }
                }
            elif 'auth.php' in clean_path:
                resp = {"success": True, "authenticated": False, "user": None}
            else:
                resp = {"success": True, "data": []}

            self.wfile.write(json.dumps(resp).encode('utf-8'))
            return

        # 2. Route rewrites for static pages
        if clean_path in ('', '/'):
            self.path = '/index.html' + (f'?{parsed.query}' if parsed.query else '')
        elif clean_path in ('/admin', '/admin/'):
            self.path = '/admin/index.html' + (f'?{parsed.query}' if parsed.query else '')
        elif clean_path.endswith('.php'):
            # Map foo.php -> foo.html if it exists
            html_candidate = clean_path[:-4] + '.html'
            local_file = os.path.join(WORKSPACE_DIR, html_candidate.lstrip('/'))
            if os.path.exists(local_file):
                self.path = html_candidate + (f'?{parsed.query}' if parsed.query else '')

        return super().do_GET()

    def do_POST(self):
        content_length = int(self.headers.get('Content-Length', 0))
        body = b''
        if content_length > 0:
            body = self.rfile.read(content_length)

        parsed = urllib.parse.urlparse(self.path)
        clean_path = parsed.path

        self.send_response(200)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.end_headers()

        mock_ref = f"SPY-2026-{random.randint(1000, 9999)}"

        if 'auth.php' in clean_path:
            form_data = urllib.parse.parse_qs(body.decode('utf-8', errors='ignore'))
            action = form_data.get('action', [''])[0]
            email = form_data.get('email', [''])[0].strip().lower()
            password = form_data.get('password', [''])[0]
            full_name = form_data.get('full_name', [''])[0].strip() or (email.split('@')[0] if email else 'Traveler')
            otp = form_data.get('otp', [''])[0].strip()
            new_password = form_data.get('new_password', [''])[0]

            if action == 'register':
                user_obj = {
                    "id": len(MOCK_USERS) + 1,
                    "full_name": full_name,
                    "email": email,
                    "password": password,
                    "role": "customer"
                }
                MOCK_USERS[email] = user_obj
                response = {
                    "success": True,
                    "message": "Account created successfully!",
                    "user": user_obj
                }
            elif action == 'login':
                user = MOCK_USERS.get(email)
                if user and user.get("password") == password:
                    response = {
                        "success": True,
                        "message": "Login successful!",
                        "user": user
                    }
                else:
                    response = {
                        "success": False,
                        "error": "Invalid email or password."
                    }
            elif action == 'forgot_password':
                gen_otp = str(random.randint(100000, 999999))
                response = {
                    "success": True,
                    "message": "OTP generated successfully.",
                    "otp": gen_otp,
                    "email": email
                }
            elif action == 'reset_password':
                if email in MOCK_USERS:
                    MOCK_USERS[email]["password"] = new_password
                else:
                    MOCK_USERS[email] = {
                        "id": len(MOCK_USERS) + 1,
                        "full_name": email.split('@')[0],
                        "email": email,
                        "password": new_password,
                        "role": "customer"
                    }
                response = {
                    "success": True,
                    "message": "Password updated successfully!"
                }
            elif action == 'logout':
                response = {
                    "success": True,
                    "message": "Logged out successfully."
                }
            else:
                response = {
                    "success": True,
                    "message": "Auth operation completed."
                }
        elif 'admin.php' in clean_path:
            response = {
                "success": True,
                "message": "Administrative operation completed.",
                "affected_rows": 1
            }
        else:
            response = {
                "success": True,
                "message": "Operation completed successfully.",
                "booking": {
                    "booking_ref": mock_ref,
                    "payment_status": "paid",
                    "booking_status": "confirmed"
                }
            }

        self.wfile.write(json.dumps(response).encode('utf-8'))

def run_server():
    os.chdir(WORKSPACE_DIR)
    php_path = check_php()
    if php_path:
        print(f"[*] Found PHP binary at: {php_path}")
        print(f"[*] Starting PHP Built-in Server on http://localhost:{PORT}")
        print("[*] Press Ctrl+C to stop the server.")
        try:
            webbrowser.open(f"http://localhost:{PORT}")
            subprocess.run([php_path, "-S", f"localhost:{PORT}", "-t", WORKSPACE_DIR])
        except KeyboardInterrupt:
            print("\n[*] Server stopped.")
            sys.exit(0)
    else:
        print("[*] PHP binary not detected in system PATH.")
        print("[*] Starting enhanced Python server (with full static HTML routing & API mocking)")
        print(f"[*] Web Server running at: http://localhost:{PORT}")
        print(f"[*] Admin Panel: http://localhost:{PORT}/admin/index.html")
        print("[*] Press Ctrl+C to stop the server.\n")

        socketserver.TCPServer.allow_reuse_address = True
        try:
            with socketserver.TCPServer(("", PORT), SpidyWebRequestHandler) as httpd:
                webbrowser.open(f"http://localhost:{PORT}")
                httpd.serve_forever()
        except OSError as e:
            if e.errno == 48: # Address already in use
                alt_port = 8080
                print(f"[!] Port {PORT} in use, switching to port {alt_port}...")
                with socketserver.TCPServer(("", alt_port), SpidyWebRequestHandler) as httpd:
                    webbrowser.open(f"http://localhost:{alt_port}")
                    httpd.serve_forever()
            else:
                raise e
        except KeyboardInterrupt:
            print("\n[*] Server stopped.")

if __name__ == "__main__":
    run_server()
