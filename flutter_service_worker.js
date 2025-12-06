'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "bcfbe13e4ae490a3bd36669aa58b4a5b",
"assets/AssetManifest.bin.json": "96f7b29f732eaa8147eed0feaabd70a6",
"assets/assets/images/bgrd.png": "a21c5f3bb40d2ea2ddc6a7f8249d0779",
"assets/assets/images/face.png": "f5f30f4c63d3b63962789816ce0e4256",
"assets/assets/images/fb.png": "0397d17652c5801c54be40adfb666431",
"assets/assets/images/githb.png": "a1311a6c3e48b23f498dbd512d72fcf3",
"assets/assets/images/github.png": "dff8297feb9abe0bce6dc7a4d1352057",
"assets/assets/images/in.png": "2c759cdc9230edd64e08ad3c33dabfdc",
"assets/assets/images/linked.png": "16e49087ae6a1637e762c7d63b2b11dd",
"assets/assets/images/mypicture.jpeg": "d4112fbd2fd0670cf282b9bbe9d4bcee",
"assets/assets/images/project.png": "ae24f4e2e62eb600529e151913186486",
"assets/assets/images/projects/dolyst/dolyst_splash.png": "e06830c81c37dec6dc4bd4eaf381ab69",
"assets/assets/images/projects/expense/ex_add.jpeg": "8ed353d3932c85d70b30763f45b8881f",
"assets/assets/images/projects/expense/ex_bill.jpeg": "a8b23ca8b962090336ed6a9e1e9e1246",
"assets/assets/images/projects/expense/ex_card.jpeg": "9a49f3545de89b45f993018f2351b38c",
"assets/assets/images/projects/expense/ex_exreceipt.jpeg": "30b1b5fb87971b3a25a73a8e4f5a1b5a",
"assets/assets/images/projects/expense/ex_home.jpeg": "e6b265cb78f89d789f441f99493db5d7",
"assets/assets/images/projects/expense/ex_inreceipt.jpeg": "2dd4190a6f113fe527e77b9c9d77bb7d",
"assets/assets/images/projects/expense/ex_profile.jpeg": "58387bba3cf71a6daad84a63ab0364a4",
"assets/assets/images/projects/expense/ex_splash.jpeg": "b979b1436f3394ac7c228ce902a86cda",
"assets/assets/images/projects/expense/ex_wallet.jpeg": "a1a862bbba47b8c39f26bb74bf489606",
"assets/assets/images/projects/mygmail/accounts.jpeg": "e9355fb0c69c0783cf77a0cc32ec4d87",
"assets/assets/images/projects/mygmail/compose.jpeg": "36951b962a8ffcdf58cd79345d143dc2",
"assets/assets/images/projects/mygmail/home.jpeg": "4a7751981327c8a76fb636a59b01435c",
"assets/assets/images/projects/mygmail/inner.jpeg": "e7cd926020101fe31ed09af6fa48621d",
"assets/assets/images/projects/mygmail/join.jpeg": "7b169826435a7ffe4e5b73232520b6f6",
"assets/assets/images/projects/mygmail/spam.jpeg": "116d953d249a22a98a1b395422687b1e",
"assets/assets/images/projects/mygmail/splash.jpeg": "e6dad56f63145dc28e340a001531c6a1",
"assets/assets/images/projects/mygmail/starred.jpeg": "ad8e76e4f3afaf5ec7a609559770800f",
"assets/assets/images/projects/onesplash.png": "f13c64519464ebf71be26af0b94bd914",
"assets/assets/images/skills/api.png": "76ea082ff3a1bed6dc1035ae65e90636",
"assets/assets/images/skills/dart.png": "d0c3fde4a21fdbd0a11bfa100db161a3",
"assets/assets/images/skills/flutter.png": "e1dacf68c8e19e3d28ae7f678e75e7cc",
"assets/assets/images/skills/localstorage.png": "2e0909034ee42ab0cd795efddc692494",
"assets/assets/images/skills/provider.png": "b85835b61de2f504bfdffc56193ef571",
"assets/assets/images/skills/r_api.png": "9567726cc063ccf19935fa916b600175",
"assets/assets/images/skills/ui.png": "cf3abc1b1817c44f77ca9e2366a9075d",
"assets/assets/images/skills/uiux.png": "7fb5181853015e225402572cc6730ef1",
"assets/assets/json/About%2520Me.json": "d640c9f40f7555534abe9a4ecf1faec2",
"assets/assets/json/contact.json": "c1fd48a7b019e11dbe64021cbaca61b8",
"assets/assets/json/skill.json": "84ff434a3cd69938d299b83fc2f5b11c",
"assets/assets/json/Technology.json": "130d91d7ea701a49cbba0cc6246d616e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "2ae343db669f7acbe78e9e6a393d03d4",
"assets/NOTICES": "8493de9f07903e88c51a7a794a42266e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "216b0010e19095d0863c92100d5b6af3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d5f37f2c6ec829b6c6c08e7693c383d2",
"/": "d5f37f2c6ec829b6c6c08e7693c383d2",
"main.dart.js": "aee5855ca32366ddae97d7ff82ae08ad",
"manifest.json": "7ed5f0ac68ee29fee285da7269058638",
"version.json": "c6a6a976d8eb6c5eb2366ac5efb9b441"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
