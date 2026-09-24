import subprocess
import json
import sys

jxa_script = '''
// Mock minimal browser environment
var storage = {};
var localStorage = {
  getItem: function(k) { return storage[k] !== undefined ? storage[k] : null; },
  setItem: function(k, v) { storage[k] = String(v); },
  removeItem: function(k) { delete storage[k]; }
};
var sessionStorage = {
  getItem: function(k) { return storage[k] !== undefined ? storage[k] : null; },
  setItem: function(k, v) { storage[k] = String(v); },
  removeItem: function(k) { delete storage[k]; }
};

var domElements = {
  '#header-dp': { src: 'default_unsplash.jpg', alt: '' },
  '#dashboard-dp': { src: 'default_unsplash.jpg', alt: '' },
  '#nav-user-name': { innerText: '' },
  '#nav-user-email': { innerText: '' },
  '.user-name-display': { innerText: '' },
  '.user-email-display': { innerText: '' }
};

var listeners = {};

var document = {
  addEventListener: function(event, cb) {
    listeners[event] = listeners[event] || [];
    listeners[event].push(cb);
  },
  querySelector: function(sel) { return null; },
  querySelectorAll: function(sel) {
    var results = [];
    if (sel.indexOf('#header-dp') !== -1 || sel.indexOf('.user-avatar-img') !== -1) {
      results.push(domElements['#header-dp']);
      results.push(domElements['#dashboard-dp']);
    }
    if (sel.indexOf('#nav-user-name') !== -1 || sel.indexOf('.user-name-display') !== -1) {
      results.push(domElements['#nav-user-name']);
      results.push(domElements['.user-name-display']);
    }
    if (sel.indexOf('#nav-user-email') !== -1 || sel.indexOf('.user-email-display') !== -1) {
      results.push(domElements['#nav-user-email']);
      results.push(domElements['.user-email-display']);
    }
    return results;
  },
  getElementById: function(id) {
    if (id === 'header-dp') return domElements['#header-dp'];
    if (id === 'dashboard-dp') return domElements['#dashboard-dp'];
    if (id === 'nav-user-name') return domElements['#nav-user-name'];
    if (id === 'nav-user-email') return domElements['#nav-user-email'];
    return null;
  },
  createElement: function(tag) {
    return { classList: { add: function(){}, remove: function(){} }, style: {} };
  },
  body: { appendChild: function(){} }
};

var window = this;
window.addEventListener = function(event, cb) {
  listeners[event] = listeners[event] || [];
  listeners[event].push(cb);
};
window.dispatchEvent = function(evt) {
  var cbs = listeners[evt.type] || [];
  for (var i = 0; i < cbs.length; i++) cbs[i](evt);
};
var location = { pathname: '/index.html', search: '', replace: function(){} };
var navigator = {};
'''

with open('assets/js/tour-dataset.js') as f:
    js_dataset = f.read()
with open('assets/js/auth.js') as f:
    js_auth = f.read()
with open('assets/js/main.js') as f:
    js_main = f.read()

test_logic = '''
// Execute loaded scripts
var results = [];

// 1. Initial State: Log in as Krrish Modi
var initialUser = {
  id: 1,
  full_name: 'Krrish Modi',
  email: 'modik3654@gmail.com',
  password: 'user123',
  role: 'customer',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80'
};
SpideyAuth.setAuthUser(initialUser);
SpideyAuth.syncNavbarUser();

results.push({
  test: 'Initial login avatar in DOM',
  headerDp: domElements['#header-dp'].src,
  expected: initialUser.avatar,
  pass: domElements['#header-dp'].src === initialUser.avatar
});

// 2. Change DP to user's beach photo
var customBeachPhoto = 'data:image/jpeg;base64,KRISH_BEACH_PHOTO_DATA_12345';
SpideyAuth.updateUserAvatar(customBeachPhoto);

var updatedUser = SpideyAuth.getAuthUser();
var registeredUsers = SpideyAuth.getRegisteredUsers();
var krishRegistered = registeredUsers.find(function(u) { return u.email === 'modik3654@gmail.com'; });

results.push({
  test: 'updateUserAvatar updates DOM immediately',
  headerDp: domElements['#header-dp'].src,
  dashboardDp: domElements['#dashboard-dp'].src,
  pass: domElements['#header-dp'].src === customBeachPhoto && domElements['#dashboard-dp'].src === customBeachPhoto
});

results.push({
  test: 'updateUserAvatar updates session user.avatar',
  sessionAvatar: updatedUser.avatar,
  pass: updatedUser.avatar === customBeachPhoto
});

results.push({
  test: 'updateUserAvatar updates registered users database',
  registeredAvatar: krishRegistered ? krishRegistered.avatar : null,
  pass: krishRegistered && krishRegistered.avatar === customBeachPhoto
});

results.push({
  test: 'updateUserAvatar sets userAvatar in localStorage',
  localStorageAvatar: localStorage.getItem('userAvatar'),
  userScopedAvatar: localStorage.getItem('userAvatar_modik3654@gmail.com'),
  pass: localStorage.getItem('userAvatar') === customBeachPhoto && localStorage.getItem('userAvatar_modik3654@gmail.com') === customBeachPhoto
});

// 3. Simulate user navigating back to index.html (main home page reload)
domElements['#header-dp'].src = 'default_unsplash.jpg'; // Reset DOM as fresh page load does
SpideyAuth.syncNavbarUser(); // Triggered on DOMContentLoaded in index.html

results.push({
  test: 'Home page reload (index.html) displays custom DP in navbar',
  headerDp: domElements['#header-dp'].src,
  pass: domElements['#header-dp'].src === customBeachPhoto
});

// 4. Simulate real-time cross-tab storage event
var newPresetAvatar = 'https://images.unsplash.com/photo-custom-preset-999';
storage['userAvatar'] = newPresetAvatar;
storage['userAvatar_modik3654@gmail.com'] = newPresetAvatar;

var storageEventCbs = listeners['storage'] || [];
for (var i = 0; i < storageEventCbs.length; i++) {
  storageEventCbs[i]({ key: 'userAvatar', newValue: newPresetAvatar });
}

results.push({
  test: 'Real-time cross-tab storage event updates home page navbar without refresh',
  headerDp: domElements['#header-dp'].src,
  pass: domElements['#header-dp'].src === newPresetAvatar
});

JSON.stringify(results);
'''

full_script = jxa_script + '\n' + js_dataset + '\n' + js_auth + '\n' + js_main + '\n' + test_logic

with open('/tmp/test_dp_runner.js', 'w') as f:
    f.write(full_script)

res = subprocess.run(['osascript', '-l', 'JavaScript', '/tmp/test_dp_runner.js'], capture_output=True, text=True)

if res.returncode != 0:
    print('JXA ERROR:', res.stderr)
    sys.exit(1)

out = res.stdout.strip() or res.stderr.strip()
lines = [l for l in out.split('\n') if l.strip().startswith('[')]
if not lines:
    print('RAW STDOUT:', res.stdout)
    print('RAW STDERR:', res.stderr)
    sys.exit(1)

results = json.loads(lines[-1])
all_passed = True
for r in results:
    status = '✅ PASS' if r['pass'] else '❌ FAIL'
    print(f"{status}: {r['test']}")
    if not r['pass']:
        all_passed = False
        print(f"   Details: {r}")

if all_passed:
    print("\n🎉 ALL 6 AUTOMATED TESTS PASSED!")
else:
    sys.exit(1)
