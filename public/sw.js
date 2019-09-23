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
    "url": "webpack-runtime-c3544e6e3721fd86a558.js"
  },
  {
    "url": "commons.17c79ea73e4fb751ed11.css"
  },
  {
    "url": "commons-017f44ec9ad0ef55b01f.js"
  },
  {
    "url": "app-d35864e8fe5f7ec5281e.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-1d26d3f34ffaad76b4c2.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "94e80edf209077f98dd392eccfbbd2df"
  },
  {
    "url": "styles.6a1ba56c1f89ddebbb64.css"
  },
  {
    "url": "component---src-templates-blog-posts-tsx-a704d1f6fd85080b7fd2.js"
  },
  {
    "url": "styles-5605d54b1d78f1f4333d.js"
  },
  {
    "url": "page-data/posts/2/page-data.json",
    "revision": "9fb7b9fe1fea06eca64e51ab21b4646d"
  },
  {
    "url": "page-data/posts/3/page-data.json",
    "revision": "ac0eb2d2191c95ccce9fd3f0e36a2629"
  },
  {
    "url": "page-data/posts/page-data.json",
    "revision": "79ea5ead38b4fc13c24d69611bdacbfe"
  },
  {
    "url": "component---src-templates-blog-post-tsx-1d78e07e884a95b9d8ce.js"
  },
  {
    "url": "page-data/post/this-is-my-1st-post/page-data.json",
    "revision": "b8889f52f8b3f59bfbe5e0f99e22c513"
  },
  {
    "url": "page-data/post/this-is-my-2nd-post/page-data.json",
    "revision": "6b0bba6e17a2431e8a393b3127faadd5"
  },
  {
    "url": "page-data/post/this-is-my-3rd-post/page-data.json",
    "revision": "6b45ac7fff5c3cc381fa35b88f7d44ea"
  },
  {
    "url": "page-data/post/this-is-my-4th-post/page-data.json",
    "revision": "61ab05e765f54454dd65ebf830951144"
  },
  {
    "url": "page-data/post/this-is-my-5th-post/page-data.json",
    "revision": "2c27343db4eaf0dfefc5b07e1dc9f704"
  },
  {
    "url": "page-data/post/this-is-my-6th-post/page-data.json",
    "revision": "13425cf2ddc4543318a582c331341610"
  },
  {
    "url": "component---src-pages-about-tsx-d00e72fb38171646ee9e.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "141bf6514522ea0199be807a3d863792"
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
  if (!resources || !(await caches.match(`/app-d35864e8fe5f7ec5281e.js`))) {
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
