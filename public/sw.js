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
    "url": "webpack-runtime-cc41d684f130550b13ab.js"
  },
  {
    "url": "commons.17c79ea73e4fb751ed11.css"
  },
  {
    "url": "commons-abc4e11fe09beb92116e.js"
  },
  {
    "url": "app-d35864e8fe5f7ec5281e.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-1d26d3f34ffaad76b4c2.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "52364b4e56634a271c1d76cb47b3be68"
  },
  {
    "url": "styles.6a1ba56c1f89ddebbb64.css"
  },
  {
    "url": "component---src-templates-blog-posts-tsx-a704d1f6fd85080b7fd2.js"
  },
  {
    "url": "styles-84fd0d993ce18d0fc572.js"
  },
  {
    "url": "page-data/posts/2/page-data.json",
    "revision": "a3edb6a9ac4d2a8aa6c518c24808d5b5"
  },
  {
    "url": "page-data/posts/3/page-data.json",
    "revision": "d2400d95c8ccd918ff90ffd042e9a7fd"
  },
  {
    "url": "page-data/posts/page-data.json",
    "revision": "4ef4bb03aa15aad6d76b9027b54dd165"
  },
  {
    "url": "component---src-templates-blog-post-tsx-1d78e07e884a95b9d8ce.js"
  },
  {
    "url": "page-data/post/this-is-my-1st-post/page-data.json",
    "revision": "e405a288b9cab758cb2dbc778aa29b2b"
  },
  {
    "url": "page-data/post/this-is-my-2nd-post/page-data.json",
    "revision": "999193801fa24654a7f6a2919d666fde"
  },
  {
    "url": "page-data/post/this-is-my-3rd-post/page-data.json",
    "revision": "54fb8b50a242147efd54b4dda4b5157a"
  },
  {
    "url": "page-data/post/this-is-my-4th-post/page-data.json",
    "revision": "34e78eed9567182c39761ad3ce7f376b"
  },
  {
    "url": "page-data/post/this-is-my-5th-post/page-data.json",
    "revision": "ca097777c5a2821045179ff5dd6f4be7"
  },
  {
    "url": "page-data/post/this-is-my-6th-post/page-data.json",
    "revision": "1f45e2ac1f369387a4a436de1c895d92"
  },
  {
    "url": "component---src-pages-about-tsx-d00e72fb38171646ee9e.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "5a08c566d7fe01dadfd967f3b0842cfc"
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
