'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "47df5e3d162f65efd533518030260f66",
"assets/AssetManifest.bin.json": "c94d4345044b3bbf09a3a85efa9c58c6",
"assets/AssetManifest.json": "57ea398f8f36145fd0ed441a9a15943d",
"assets/assets/profileImage.jpg": "6adb0442050dd7b7037df419b3999633",
"assets/assets/projects_images/commander_calls1.jpg": "2dcf9d90ed89573718ccb993201d1508",
"assets/assets/projects_images/commander_calls2.jpg": "cafac4acc8fda9d4e548e869d9fa92f2",
"assets/assets/projects_images/commander_calls3.jpg": "3d6e2b26629ae0749e015e1a1fba6930",
"assets/assets/projects_images/commander_calls4.jpg": "bc7f9bf0e3eda2a94fd4795463eefdfb",
"assets/assets/projects_images/commander_calls5.jpg": "c26faf55f374be5c8a8651fbcd2b1e89",
"assets/assets/projects_images/commander_calls6.jpg": "140abb4276be06c508437622ec1d690f",
"assets/assets/projects_images/commander_calls7.jpg": "cdaf7980d063f842b956cde3ee4dccba",
"assets/assets/projects_images/olive1.jpg": "722995d4b54fb99a76c5607eecc893c5",
"assets/assets/projects_images/olive2.jpg": "6b07e75e04fbe4234fd56fa0e96d9eb5",
"assets/assets/projects_images/olive3.jpg": "8ef85df56fd5c28e1608c1a0fc6e6bde",
"assets/assets/projects_images/olive4.jpg": "d04423f0f24505446f7fd5fa2802d081",
"assets/assets/projects_images/olive5.jpg": "a938d325f9ff977024d7f0d8eb81d290",
"assets/assets/projects_images/olive6.jpg": "5c56c0711e6b5cdeef12dc3fe544f795",
"assets/assets/projects_images/spiner.jpg": "f40d6685ca8d5dc977842df7de97b386",
"assets/assets/projects_images/spiner1.jpg": "bd6d5b3a01fb919a69de03be11a1dcd3",
"assets/assets/projects_images/spiner2.jpg": "7848c63017c4f1256ae6ab990a0c0b09",
"assets/assets/projects_images/spiner3.jpg": "7e2603a94a832a7b9d3fd88c44a7323b",
"assets/assets/projects_images/spiner4.jpg": "7e2603a94a832a7b9d3fd88c44a7323b",
"assets/assets/projects_images/word.jpg": "5463b62d9bf461f8ed63ee23af402b39",
"assets/assets/projects_images/word1.jpg": "d95a743d94165e523c43cd312fca5a69",
"assets/assets/projects_images/word2.jpg": "82f7802c343165fb60d10738cb1e9649",
"assets/assets/projects_images/word3.jpg": "b8a7b93a31f0cc4dd679af21042f88ae",
"assets/assets/projects_images/word4.jpg": "c0268bfca054219d844cebf09a113cf2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a6e8e8b19f1a7d73aa9845559e895a7a",
"assets/NOTICES": "3c8fc868e79fab2826491f647458bd59",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "8b682ead8bf0ea87463c61df28b58d72",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "67ac4c0b237508b6dab4ce1f231a2918",
"/": "67ac4c0b237508b6dab4ce1f231a2918",
"main.dart.js": "258ff703e7ef524fb0a3785900497332",
"manifest.json": "d57d21a500807a0907c918929be37faa",
"version.json": "008eb5ef4b8bddfbc8cc0d1e12bcf350"};
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
