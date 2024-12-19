'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4188ea3e716bcf00708d64898f4bfa87",
"assets/AssetManifest.bin.json": "96ddfee2e61c2254731d6e7543799b70",
"assets/AssetManifest.json": "27238e7788736582c1c2d9345567899c",
"assets/assets/icons/flutter-logo.png": "13e9c72ec37fac220397aa819fa1ef2d",
"assets/assets/icons/github.png": "1fc5ba73e0e63e36bc09e37a461a7cfc",
"assets/assets/icons/Hackerrank.png": "bad3ccb09e3c19f9403b614db310ac4e",
"assets/assets/icons/heart.png": "3307ec5283bf1e4bf1283903a6c44d80",
"assets/assets/icons/info-button.png": "ffa4f0c5449a7d4db96e34c21ed0ffda",
"assets/assets/icons/instagram.png": "59ce37415141ef2ebba7740fc715a9cc",
"assets/assets/icons/leetcode.png": "e50ae59b0ddaee47ae0894c853ee6aed",
"assets/assets/icons/linkedin.jpg": "ccc2b39828a0111d22a603a8e2146771",
"assets/assets/icons/mobile.png": "d7c283db1ce6f17f878d069d9ea41b08",
"assets/assets/icons/suitcase.png": "3868f67d6d9004fe386efb1de7ee71a1",
"assets/assets/icons/terminal.png": "104f036ba7589d6b7638ff349eed6a82",
"assets/assets/images/bookeve-logo.jpeg": "671abb55df2fd7643c0f832fdceec355",
"assets/assets/images/dart.png": "d281f7d582e2421be90265b0bf1f551c",
"assets/assets/images/dj.jpeg": "2b8ae195d81ecd5caf192902a5ba33f3",
"assets/assets/images/docker.png": "81117baf9ae17bb1c3ab578141c359a1",
"assets/assets/images/f.jpg": "9c5a2334f0f7a9786afbb2966ddbbddd",
"assets/assets/images/fastapi.png": "74d2f3d85cd784a8534e8936859dd24b",
"assets/assets/images/flutter.png": "13e9c72ec37fac220397aa819fa1ef2d",
"assets/assets/images/github-logo.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/assets/images/has.jpg": "f50be258fc74ce13faf70e5654595b4c",
"assets/assets/images/heart.png": "5a5fb0d693d41ac6bba95243fcb7bafd",
"assets/assets/images/himanshu1.jpg": "da971e5122eebfc568a6f58fd6a7c3b1",
"assets/assets/images/himanshu2.jpg": "ef95f39dcb6c710cdd8f38bdd6c4fe9a",
"assets/assets/images/himanshu3.jpg": "b409726f97022d5b053514fb52edce6c",
"assets/assets/images/java.png": "02ac87d151cdb6c563592d18eb82eb6f",
"assets/assets/images/mb.jpeg": "c653f7893cc0f25dd584866f78c9fd4b",
"assets/assets/images/mdb.png": "b3d57f79c5e51f0e5dfef583b6aefed0",
"assets/assets/images/mixpanel.png": "9c110374903d532979e56b0ddee5c313",
"assets/assets/images/onesignal.png": "891a92ad66e5133dfe967ab0ecad6f83",
"assets/assets/images/pm.jpg": "ed2179feaa2dddc0a7707d0d7340a764",
"assets/assets/images/profile_pic.jpeg": "b0c1c188de1aa96d62f0cd40a1bfd3d3",
"assets/assets/images/profile_pic.jpg": "ff8b913d273c314edcdcb0eaf45223d0",
"assets/assets/images/psql.png": "0d4d1f75029e281d9f9ad37b8a985b78",
"assets/assets/images/python.png": "d4702effe6661b0fd6f1ac729fa69a8a",
"assets/assets/images/qmansys-logo.png": "c113bee18f5e1f1e10103b396884f706",
"assets/assets/images/rssd.jpg": "244f90d83b4dcf27593355741eb5ac9e",
"assets/assets/images/shinchan.jpg": "41d7e63fe41e57333e630e4623c76fee",
"assets/assets/images/sql.png": "4db6d360663c14ae71bb69f8eff716c2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "2a4114fcffb6a3b158406b64a88b40f7",
"assets/NOTICES": "d35f0910e62fb21eb270c15be1de994c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "1cae5d9738dfd0a28ea2b32cd04a03f0",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "a391250dff2a830fdbf41a640641e877",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bf7aaf771b219fe9a81c32fd0c3cbafc",
"/": "bf7aaf771b219fe9a81c32fd0c3cbafc",
"main.dart.js": "ae428389fad0dece5cd25597522c1164",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"version.json": "9b818ca9511483c901bed1545384376c"};
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
