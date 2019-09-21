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
    "url": "webpack-runtime-e424d651551589bde39f.js"
  },
  {
    "url": "commons.337ca6bd982f85bcd2f8.css"
  },
  {
    "url": "commons-f1f232e4e4422943d64e.js"
  },
  {
    "url": "app-d828ca465d695398c140.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-8bf0d681082358000f95.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "fce2b3330e466e9cfa6070f6f3ad4a19"
  },
  {
    "url": "styles.4ee6360c92b32c6659b5.css"
  },
  {
    "url": "component---src-templates-blog-posts-tsx-c1018593d8f81055099d.js"
  },
  {
    "url": "styles-6b0277b2010be0577591.js"
  },
  {
    "url": "page-data/posts/2/page-data.json",
    "revision": "c1ab75c1220008de204c0be80d8de203"
  },
  {
    "url": "page-data/posts/3/page-data.json",
    "revision": "983a3457448a29cbe54de55e252761e5"
  },
  {
    "url": "page-data/posts/page-data.json",
    "revision": "d592d1aa47770fd20e0cf6a1c0b1673e"
  },
  {
    "url": "component---src-templates-blog-post-tsx-2b7f2234eaf2dbf85e41.js"
  },
  {
    "url": "page-data/post/this-is-my-1st-post/page-data.json",
    "revision": "1d33f19b2cb00de25e6f1e67a808390d"
  },
  {
    "url": "page-data/post/this-is-my-2nd-post/page-data.json",
    "revision": "462a8e36ff5eb259500963f2ebb6d8ca"
  },
  {
    "url": "page-data/post/this-is-my-3rd-post/page-data.json",
    "revision": "5cc8aa31ef639b15843c7f0c54baef2a"
  },
  {
    "url": "page-data/post/this-is-my-4th-post/page-data.json",
    "revision": "b3c2d63ef88fea3895d996fc623febd4"
  },
  {
    "url": "page-data/post/this-is-my-5th-post/page-data.json",
    "revision": "d24f16f84f47a0f5b6a4bcb1d82178a5"
  },
  {
    "url": "page-data/post/this-is-my-6th-post/page-data.json",
    "revision": "67664aa0bb1636b5455efd5a5bd7b626"
  },
  {
    "url": "component---src-pages-about-tsx-9e93aaa231ef63ec43a1.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "10b275b5a44bfab8c9dad0788532f29c"
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
  if (!resources || !(await caches.match(`/app-d828ca465d695398c140.js`))) {
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
