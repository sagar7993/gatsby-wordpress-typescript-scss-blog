/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-b9dc2d2610e3b3bfdab9.js"
  },
  {
    "url": "commons.01f90a68b750bb094442.css"
  },
  {
    "url": "commons-ca47691a0a90ed892a6d.js"
  },
  {
    "url": "app-37b12a5f8c786dff4ef8.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-ec51c786fa91e3bfdf06.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "4456bf5783cc06c383ea12014af06bba"
  },
  {
    "url": "styles.4ee6360c92b32c6659b5.css"
  },
  {
    "url": "component---src-templates-blog-posts-tsx-5380cc4d36bde0bd66db.js"
  },
  {
    "url": "styles-d893bc2f053323cf37f4.js"
  },
  {
    "url": "page-data/posts/2/page-data.json",
    "revision": "460a9356cc863687dce514cace97001c"
  },
  {
    "url": "page-data/posts/3/page-data.json",
    "revision": "412edaabee7b10c8ec588743dfcb571e"
  },
  {
    "url": "page-data/posts/page-data.json",
    "revision": "5d043b9085523f995d11ec1baebed001"
  },
  {
    "url": "component---src-templates-blog-post-tsx-06d2936448297ea84797.js"
  },
  {
    "url": "page-data/post/this-is-my-1st-post/page-data.json",
    "revision": "bd313807607707cdf4f0df09deec0c2e"
  },
  {
    "url": "page-data/post/this-is-my-2nd-post/page-data.json",
    "revision": "94b9cb9f397cc0f7e137c37ae8826361"
  },
  {
    "url": "page-data/post/this-is-my-3rd-post/page-data.json",
    "revision": "8afdb527b44502d1da276a2cc5e20021"
  },
  {
    "url": "page-data/post/this-is-my-4th-post/page-data.json",
    "revision": "055f2f6bc40226de2a31bd660797dedf"
  },
  {
    "url": "page-data/post/this-is-my-5th-post/page-data.json",
    "revision": "36169617162bf04c0bdc65bc0a699b26"
  },
  {
    "url": "page-data/post/this-is-my-6th-post/page-data.json",
    "revision": "b8f43d8abcf898ea94f013cdd98fcd76"
  },
  {
    "url": "component---src-pages-about-tsx-ba5aa64fde82d1321123.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "22a7cefb40f572cb8b10948ac736dfc3"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "b303b8316bf5832ac55be2a8fb214cf7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.NetworkFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

const navigationRoute = new NavigationRoute(async ({ event }) => {
  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-37b12a5f8c786dff4ef8.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

const messageApi = {
  setPathResources(event, { path, resources }) {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources(event) {
    event.waitUntil(idbKeyval.clear())
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi } = event.data
  if (gatsbyApi) messageApi[gatsbyApi](event, event.data)
})
