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
    "url": "webpack-runtime-e59dd63a64c8e5cce657.js"
  },
  {
    "url": "commons.2229e8780a1c8d1635d0.css"
  },
  {
    "url": "commons-3ce692621d2d95256388.js"
  },
  {
    "url": "app-db059d9ef05dfebb9351.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-1d26d3f34ffaad76b4c2.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "2d08b0d9488092b88080036ac97b259e"
  },
  {
    "url": "styles.aafcee07cdeaed2d3549.css"
  },
  {
    "url": "component---src-templates-blog-posts-tsx-a704d1f6fd85080b7fd2.js"
  },
  {
    "url": "styles-1abd5e3540e7e5d8edd4.js"
  },
  {
    "url": "page-data/posts/2/page-data.json",
    "revision": "3f2ca25b854c5ab1f6021d236aa2452c"
  },
  {
    "url": "page-data/posts/3/page-data.json",
    "revision": "ee02b3b4ccbcdf16a17e8685b2270718"
  },
  {
    "url": "page-data/posts/page-data.json",
    "revision": "f3f1be4f9e604d0a46936e239412069c"
  },
  {
    "url": "component---src-templates-blog-post-tsx-980b242427698f2bb988.js"
  },
  {
    "url": "page-data/post/this-is-my-1st-post/page-data.json",
    "revision": "e91ce07629902ceeeee9587c64a327c1"
  },
  {
    "url": "page-data/post/this-is-my-2nd-post/page-data.json",
    "revision": "91c29b8495afc777278498557b772d1a"
  },
  {
    "url": "page-data/post/this-is-my-3rd-post/page-data.json",
    "revision": "4e33f54506c5b1e684aa5b64d581da27"
  },
  {
    "url": "page-data/post/this-is-my-4th-post/page-data.json",
    "revision": "1a6c7acb6978ec0113584f9e5cca7875"
  },
  {
    "url": "page-data/post/this-is-my-5th-post/page-data.json",
    "revision": "cb0995e26cacccfb76870356763c1693"
  },
  {
    "url": "page-data/post/this-is-my-6th-post/page-data.json",
    "revision": "4994f2c9d41e8d95d7d0d2983d558d07"
  },
  {
    "url": "component---src-pages-about-tsx-589effc09b7ac9ec8954.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "004795843dd3a8e2b456bd23aa3fb86a"
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
