const CACHE_NAME = "manojchaurasiya";
const urlsToCache = [
  "/",
  "/index.html",
  "/worker.js",
  "/assets/js/main.js",
  "/assets/css/style.min.css",
  "/assets/css/animate.min.css",
  "/assets/img/hero-bg.webp",
  "/assets/img/overlay-bg.webp",
  "/assets/img/counters-bg.webp",
  "/assets/vendor/wow/wow.min.js",
  "/assets/vendor/bootstrap/css/bootstrap.min.css",
  "/assets/vendor/bootstrap/js/bootstrap.min.js",
  "/assets/img/clients/arvind.webp",
  "/assets/img/clients/awana.webp",
  "/assets/img/clients/bnp.webp",
  "/assets/img/clients/citi.webp",
  "/assets/img/clients/cp-rail.webp",
  "/assets/img/clients/drreddy.webp",
  "/assets/img/clients/entertainment-partner.webp",
  "/assets/img/clients/freshdirect.webp",
  "/assets/img/clients/hospira.webp",
  "/assets/img/clients/imro.webp",
  "/assets/img/clients/itone.webp",
  "/assets/img/clients/kaust.webp",
  "/assets/img/clients/klatancor.webp",
  "/assets/img/clients/morganstanley.webp",
  "/assets/img/clients/sap.webp",
  "/assets/img/clients/spar.webp",
  "/assets/img/clients/topper.webp",
  "/assets/img/clients/wolters-kluwer.webp",
  "/assets/img/employee/accionlabs.webp",
  "/assets/img/employee/hcl.webp",
  "/assets/img/employee/incture.webp",
  "/assets/img/employee/octal.webp",
  "/assets/img/employee/polaris.webp",
  "/assets/img/employee/viseo.webp",
  "/assets/img/employee/wissen.webp",
  "/assets/img/work-1.webp",
  "/assets/img/work-2.webp",
  "/assets/img/work-3.webp",
];

// Install a service worker
self.addEventListener("install", (event) => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// Cache and return requests
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      // Cache hit - return response
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});

// Update a service worker
self.addEventListener("activate", (event) => {
  var cacheWhitelist = ["manojchaurasiya"];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
