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
    "url": "webpack-runtime-2d9a090f4b8f0f25de90.js"
  },
  {
    "url": "commons.8ec86ffa526cc534ebfc.css"
  },
  {
    "url": "commons-ee55da94148c69ddce0c.js"
  },
  {
    "url": "app-945b893d2c36f390cc43.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-de7d5bd3a98a28b87e7a.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "53f8ac329eadd0d828efaffd83f90ac4"
  },
  {
    "url": "styles.638e8f5690029c5de77d.css"
  },
  {
    "url": "component---src-templates-blog-posts-tsx-d42bd61137de6c5d753f.js"
  },
  {
    "url": "styles-ec33bbb62d9b281ab4cc.js"
  },
  {
    "url": "page-data/posts/2/page-data.json",
    "revision": "2141851457f32d4ebed942f919ee6944"
  },
  {
    "url": "page-data/posts/3/page-data.json",
    "revision": "c4468fdf90d852132acfc4c7c4053ac5"
  },
  {
    "url": "page-data/posts/page-data.json",
    "revision": "e39c2dd961018f84100fc7718f4651d2"
  },
  {
    "url": "component---src-templates-blog-post-tsx-3df83efc0db1edc19944.js"
  },
  {
    "url": "page-data/post/this-is-my-1st-post/page-data.json",
    "revision": "56fa744ee660bdd46448ed68b34ce031"
  },
  {
    "url": "page-data/post/this-is-my-2nd-post/page-data.json",
    "revision": "cb28fcdb5c4019e5050a01c231b955c2"
  },
  {
    "url": "page-data/post/this-is-my-3rd-post/page-data.json",
    "revision": "be9f96315a73c261a073253962dd4f74"
  },
  {
    "url": "page-data/post/this-is-my-4th-post/page-data.json",
    "revision": "d666fe45272550ce18e02e15b9d85d82"
  },
  {
    "url": "page-data/post/this-is-my-5th-post/page-data.json",
    "revision": "78faa8188592babe937413bcf834acac"
  },
  {
    "url": "page-data/post/this-is-my-6th-post/page-data.json",
    "revision": "d6b6aa58739b59eb33eb2d07d7bfc9fa"
  },
  {
    "url": "component---src-pages-about-tsx-f2f67d4b5395f137b8e2.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "6204d27dd796fd2d91f106e3a465369e"
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
  if (!resources || !(await caches.match(`/app-945b893d2c36f390cc43.js`))) {
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
