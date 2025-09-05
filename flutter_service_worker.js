'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "86bc33365194535c235cdbd852b1bc50",
".git/config": "8238cc7ad3dc2574e10733f2f239c1f4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1b705e2e36c2280eef052ae24031dad9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "45090b2676181deeeb0b76dcea3214b0",
".git/logs/refs/heads/main": "2f59a99c70cd311cf6b3d221004fdff6",
".git/logs/refs/remotes/orgin/main": "35efcb140e7a43d74e37b9b00cbd139d",
".git/objects/01/83fbca6f03acffb66ea1e5db79f1b94e1b2394": "a6b048452f62fdc0ab0058abc8f9c20a",
".git/objects/02/8dd476428e14ebdb4777455217fbf8ec284559": "bfe74f6b4728c5c4ba0bbbf8a3b4c442",
".git/objects/03/a9911e369c0effa9926806c8d15856e6f7cede": "e2e7ba906877d9228100a041443f9be6",
".git/objects/0d/aef38582c07b5cddc68222256ec0c7a800eec5": "3f851b26b3f1f0cc2d42b3ad0ab94548",
".git/objects/18/a90e419716330b852e353e8741f12f574caef2": "9b00d736651bcc751aaac6c10960528b",
".git/objects/1a/03af089069792d61870054b0eff0093f0c5ef6": "60f16361e4283662306f5878469a66b9",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1f/91b439b91c0ff634fcfc39d968dd6d48508839": "3529144672a0971f5d5c3ad5d2b4b7f2",
".git/objects/24/5d2354420b040c3a6476593c90326460cb0657": "e885327cfed4bf789bca1ae492a9d946",
".git/objects/31/fb46d7228a29725bc41b02681ffadb46d82b71": "4cb58cfe4233488c7c193bf19a719e50",
".git/objects/32/308eb53c02cb3337870cc337b5c1513e3fc195": "d675305d9047d616ec1c072ea5e207f3",
".git/objects/35/3db405fdd258785e72d4236b32fe488d830dce": "c180de560e1f634442838af0166346f7",
".git/objects/3d/90a7d6dc3ea0fdcfe7d98c3b47203d6de9807c": "0aaadad770dcd967c7190068220a18ef",
".git/objects/43/2a0294158e76eee72cde39a0cc9de9504ce296": "1bca4813d3ff39b45d55ef0cebdb8eb0",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/8afd55fb185ae18b7d1e7914fdc862451f7f89": "f8eb071ac5d8b8c1693fc1ac6559d154",
".git/objects/48/7190c8bfa5d9ee97fc07e183b09d13eb7bc9a1": "f1e431cf295ee4f75185080b7cf6e023",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4f/1577b987caa5a85e6eb6b0cb59b67e766b8ab0": "553f88cc9f3c4b25e72705453342ad58",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/53/75a2b70ba044b64ce925c9461561c71390834d": "97734032dda613518e2668c5128c0252",
".git/objects/5b/da45e43d77df9d97b928ce8c9fb9158ab38783": "fdea13c1bea885259402f9b84b84ca94",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/60a984e7867ec1f17692fee9fce147e3d3bc28": "2ba7fe8b804b6b32a785cf18fda89a3e",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/7f/23ddaf5f6698a7bd448099f6d7014743cb2491": "04ad50aa00dabde572ef1fd00888d8c7",
".git/objects/83/484c2ba925e19ed85fb97740e02188af919947": "942cb93e7829ac71df923bc54b3ce3c0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/1f49424668a0e3ca96f8dbb5504837d59558c4": "0ee997e5cebd6df32a983de9d0b672f6",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8e/eaccf63de5525c266122fd0dd05e9023c75059": "96aa2f9e13a6791e0f5bee478c6174d0",
".git/objects/98/baf8635074169036e1b73f61777dab4691fa55": "10f7cd50220b9caa23cd6e40200a6707",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/a6/fefffddd7f5bdab40d326ee3e2591fa0354673": "23e0c0229f39a9ce6822e2b69843ffa4",
".git/objects/a8/db329ca3d2a65c02e9118db1db6f8e05e3db87": "c89798a430bb970dce97276b5d15a926",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bc/ef870d341031bbfdea6a09853bab309e0b95a7": "75205194e7b6ccc556500ce8886c455e",
".git/objects/c6/49c69ad24b3daa9c2e6ba327f1981ebe100e28": "dc002e0f56122b8f0151b930113fc7fd",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/cb/7ec305bfe475d892c8faeff05fd86ff4bba95d": "a07a460e1166798aac6a14ac8728644d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/06e3b908a556f6d17d36b2b8348aad90fce836": "6de862770d79359fdd0cd56297e9f50e",
".git/objects/d6/2b67cdf70730a3e3a312a38740357a01468ef0": "26f044a948989960e87aaa97e3117f3e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e5/de479a6c69b5c17c62f9f58984fd6d199a0f5a": "9a1f58c1ce2c4b43563145fafae02b21",
".git/objects/e6/2f85d31b3657ce68db7500754ec9cc78d828bc": "7f72a97adfcfe05a6244e563beff9543",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/b2543c4125f54315736231212a348c0e1df072": "aee79b5e8f7bf2c11106d55db8739ebd",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/589ffa20e10e661ed1476c88adcbc299011c3b": "f3ca38a118d3bd5ede927716074fae25",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/3fe1f2a4377a77efcefaf5f1fffd5bc3654d85": "adbeb8987ed7c9787dde56f7891f9204",
".git/objects/f7/9135c2cc509a6cb13a64cdb2fe7a3d88fe4b24": "f1479ecff66e21ac290125329dc1db0e",
".git/objects/f7/c7fe37c2d7004e254dc11a3c4a16bcf94f63bc": "3519eac0f5152901dbd6818891014456",
".git/objects/f8/ec44f78cf356dc21521fb0d5aed281c03b3835": "51f7a65948df728ba5aa2769c4f5af3e",
".git/objects/fb/ea870cbd38fbcc2e37b6bb5573f4c380799342": "b96c451ed750df607ef853ba27c219cd",
".git/objects/fc/3a9713ae02a689b0810bf35eee1a51b38fc133": "ddd9230890bbbf563adc54477ed9796a",
".git/refs/heads/main": "9e157382b9fcd86e8c0d516e2091cd41",
".git/refs/remotes/orgin/main": "9e157382b9fcd86e8c0d516e2091cd41",
"assets/AssetManifest.bin": "47df5e3d162f65efd533518030260f66",
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
"flutter_bootstrap.js": "1215b443f1080bb7fed5bccae72d0703",
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
