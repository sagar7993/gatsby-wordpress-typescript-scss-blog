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
    "url": "webpack-runtime-94a70738b93bd77df252.js"
  },
  {
    "url": "commons.af07c6897d0587987409.css"
  },
  {
    "url": "commons-464a780b7b5160b482f7.js"
  },
  {
    "url": "app-07a1227e2fd6c2a318d2.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-284f675fc375812d3590.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "11c16d395b9899fefda0a42d6c957b69"
  },
  {
    "url": "styles.54dd774da1217f0cfa85.css"
  },
  {
    "url": "component---src-pages-index-tsx-44206e8ba138620f279c.js"
  },
  {
    "url": "styles-5e8ba79cabad2b1ab789.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "30b39a13df2d05177813f83e8ff416cd"
  },
  {
    "url": "component---src-templates-blog-posts-tsx-7e02c036a9c7aaa8b4ef.js"
  },
  {
    "url": "page-data/posts/2/page-data.json",
    "revision": "22fa7d24701c10aa66cc7f355e4e227f"
  },
  {
    "url": "page-data/posts/3/page-data.json",
    "revision": "4727cef0ac4b0639d83750008853a09b"
  },
  {
    "url": "page-data/posts/page-data.json",
    "revision": "01db9b3e294520fe78327d9f200e9543"
  },
  {
    "url": "component---src-templates-blog-post-tsx-91586364350a8bb141b4.js"
  },
  {
    "url": "page-data/post/this-is-my-1st-post/page-data.json",
    "revision": "d4e02ee4887d18dcd9abb2a6595bf138"
  },
  {
    "url": "page-data/post/this-is-my-2nd-post/page-data.json",
    "revision": "3b12cd0531f94c7ca60854301cdea3ee"
  },
  {
    "url": "page-data/post/this-is-my-3rd-post/page-data.json",
    "revision": "894036f40cc73764b4f603e128c154de"
  },
  {
    "url": "page-data/post/this-is-my-4th-post/page-data.json",
    "revision": "20006749ff1ae074303b05c1ec86864f"
  },
  {
    "url": "page-data/post/this-is-my-5th-post/page-data.json",
    "revision": "6ca7b01d91886f70ed99272af4a8b0f7"
  },
  {
    "url": "page-data/post/this-is-my-6th-post/page-data.json",
    "revision": "5878e278992662430403c72a2e4889d6"
  },
  {
    "url": "component---src-templates-blog-tag-posts-tsx-6813eb0a82b96fdb0ebe.js"
  },
  {
    "url": "page-data/tag/adventure/page-data.json",
    "revision": "916db412776b7ff6a7e18ec32c9c9a1a"
  },
  {
    "url": "page-data/tag/food/page-data.json",
    "revision": "36f75cff721b89645d47898e0f96578e"
  },
  {
    "url": "page-data/tag/life/page-data.json",
    "revision": "b36a6a0ef25e93f9cc1b1398c13eac5b"
  },
  {
    "url": "page-data/tag/nature/page-data.json",
    "revision": "259846bc757f6de0e31e1e3c99e6b53e"
  },
  {
    "url": "page-data/tag/travel/page-data.json",
    "revision": "8b38579a2fa00b1f5f842a1808eed4dc"
  },
  {
    "url": "component---src-templates-blog-category-posts-tsx-b73158c82846563b3ffc.js"
  },
  {
    "url": "page-data/category/adventure/page-data.json",
    "revision": "263cda50ea1b22e36e71c04dcbda0230"
  },
  {
    "url": "page-data/category/food/page-data.json",
    "revision": "4869074140153af9b9f2f01420a2da86"
  },
  {
    "url": "page-data/category/life/page-data.json",
    "revision": "ce382644222b369885a637e7f77aebe4"
  },
  {
    "url": "page-data/category/nature/page-data.json",
    "revision": "7f2188cc6dc490e9b2758088687e2439"
  },
  {
    "url": "page-data/category/travel/page-data.json",
    "revision": "98125a5f67c809de06feb7c7cc022845"
  },
  {
    "url": "component---src-pages-about-tsx-8948c518de620630b5ac.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "bfde50c593806b921ddbfabc3d25d22d"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "0aecc8991b9b0c1b26a1916b52079ae8"
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
let offlineShellEnabled = true

const navigationRoute = new NavigationRoute(async ({ event }) => {
  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-07a1227e2fd6c2a318d2.js`))) {
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

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, ({ event }) => {
  const { pathname } = new URL(event.request.url)

  const api = pathname.match(/:(.+)/)[1]
  MessageAPI[api]()

  return new Response()
})
