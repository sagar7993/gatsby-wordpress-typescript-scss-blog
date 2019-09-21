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
    "url": "webpack-runtime-762edfece6af89cde178.js"
  },
  {
    "url": "commons.2229e8780a1c8d1635d0.css"
  },
  {
    "url": "commons-32d8926019722b768a25.js"
  },
  {
    "url": "app-db059d9ef05dfebb9351.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-1d26d3f34ffaad76b4c2.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "6a5cdb0a245fb5f214fb2034d7324169"
  },
  {
    "url": "styles.aafcee07cdeaed2d3549.css"
  },
  {
    "url": "component---src-templates-blog-posts-tsx-a704d1f6fd85080b7fd2.js"
  },
  {
    "url": "styles-686f9b1e5039a5bdde3c.js"
  },
  {
    "url": "page-data/posts/2/page-data.json",
    "revision": "29c0a905aa0aed3836ff4dde59182ebc"
  },
  {
    "url": "page-data/posts/3/page-data.json",
    "revision": "2824403ad2f5a1e3821ecade1dc37bd2"
  },
  {
    "url": "page-data/posts/page-data.json",
    "revision": "58836d8720ece5c83390b0dde7a8f7dd"
  },
  {
    "url": "component---src-templates-blog-post-tsx-980b242427698f2bb988.js"
  },
  {
    "url": "page-data/post/this-is-my-1st-post/page-data.json",
    "revision": "789ad69e0ea8525b4874b2638dc57bdb"
  },
  {
    "url": "page-data/post/this-is-my-2nd-post/page-data.json",
    "revision": "6bcccb9c21828922d6ab53564845f80f"
  },
  {
    "url": "page-data/post/this-is-my-3rd-post/page-data.json",
    "revision": "ab81083f4f2004ea95675f8d0892afb3"
  },
  {
    "url": "page-data/post/this-is-my-4th-post/page-data.json",
    "revision": "0ba7cd63cfdedfc56f4372c6f70cb2ce"
  },
  {
    "url": "page-data/post/this-is-my-5th-post/page-data.json",
    "revision": "9205d39f5f9822b9273cfa45aee93439"
  },
  {
    "url": "page-data/post/this-is-my-6th-post/page-data.json",
    "revision": "b9f9887b575103adbec5a6ccfd6379a8"
  },
  {
    "url": "component---src-pages-about-tsx-589effc09b7ac9ec8954.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "9fb4dac021022d06f0e586e74506276e"
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
