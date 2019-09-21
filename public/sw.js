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
    "url": "webpack-runtime-c2f0e463f4fb95e8305e.js"
  },
  {
    "url": "commons.2229e8780a1c8d1635d0.css"
  },
  {
    "url": "commons-ec901bea76ab822a9ec4.js"
  },
  {
    "url": "app-db059d9ef05dfebb9351.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-1d26d3f34ffaad76b4c2.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "15c0f595d0f5c215d9a7cf41b827b48d"
  },
  {
    "url": "styles.aafcee07cdeaed2d3549.css"
  },
  {
    "url": "component---src-templates-blog-posts-tsx-a704d1f6fd85080b7fd2.js"
  },
  {
    "url": "styles-5f73d56f754ba652e1f2.js"
  },
  {
    "url": "page-data/posts/2/page-data.json",
    "revision": "de2e456bba26ba354a96aeda549c37cd"
  },
  {
    "url": "page-data/posts/3/page-data.json",
    "revision": "749fe2f1fb04c288737fdc0fae35b682"
  },
  {
    "url": "page-data/posts/page-data.json",
    "revision": "e0f67abc1d4bb12fc25dc8276263229a"
  },
  {
    "url": "component---src-templates-blog-post-tsx-980b242427698f2bb988.js"
  },
  {
    "url": "page-data/post/this-is-my-1st-post/page-data.json",
    "revision": "ffd2dbad8194059664dcb2d2aa4b27b8"
  },
  {
    "url": "page-data/post/this-is-my-2nd-post/page-data.json",
    "revision": "3364e42e84cd16267c6d908163292725"
  },
  {
    "url": "page-data/post/this-is-my-3rd-post/page-data.json",
    "revision": "f77abf0c84ec00deb118ec8204d4ba5b"
  },
  {
    "url": "page-data/post/this-is-my-4th-post/page-data.json",
    "revision": "f7ae170152c7d2e752dc612ab89915b5"
  },
  {
    "url": "page-data/post/this-is-my-5th-post/page-data.json",
    "revision": "2b822fc28bbedce5956a568af65dbdab"
  },
  {
    "url": "page-data/post/this-is-my-6th-post/page-data.json",
    "revision": "ae24416ff446ece706f83519683d3ecc"
  },
  {
    "url": "component---src-pages-about-tsx-97585539b15aa50d8c74.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "c0f90064b3d927a23b0bd46e74395fc8"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "68bf2039e7f0af15d019214e1573b5d7"
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
  if (!resources || !(await caches.match(`/app-db059d9ef05dfebb9351.js`))) {
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
