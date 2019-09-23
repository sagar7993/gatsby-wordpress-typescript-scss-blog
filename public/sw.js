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
    "url": "webpack-runtime-f8a63ad5b70920b63553.js"
  },
  {
    "url": "commons.c4a9e1ac1b37bfbaf991.css"
  },
  {
    "url": "commons-5a67f8bbaeab2f6713a4.js"
  },
  {
    "url": "app-be9a4082acd5cd1ca66b.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-1d26d3f34ffaad76b4c2.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "3172fdf0c5f077394461f6c108fe8cae"
  },
  {
    "url": "styles.6a1ba56c1f89ddebbb64.css"
  },
  {
    "url": "component---src-templates-blog-posts-tsx-a704d1f6fd85080b7fd2.js"
  },
  {
    "url": "styles-99ecd375627d687efc3a.js"
  },
  {
    "url": "page-data/posts/2/page-data.json",
    "revision": "e2361bea7ee7dc681752a4bda146b188"
  },
  {
    "url": "page-data/posts/3/page-data.json",
    "revision": "b12ea1a48a492b0c12c8d7ac2902bff6"
  },
  {
    "url": "page-data/posts/page-data.json",
    "revision": "446f68cd2441c35c1bc7b27bf0fe711d"
  },
  {
    "url": "component---src-templates-blog-post-tsx-1d78e07e884a95b9d8ce.js"
  },
  {
    "url": "page-data/post/this-is-my-1st-post/page-data.json",
    "revision": "507dfec2281ee8ad562f6d43650e708d"
  },
  {
    "url": "page-data/post/this-is-my-2nd-post/page-data.json",
    "revision": "44309299deabe1098cc91ecb9865e345"
  },
  {
    "url": "page-data/post/this-is-my-3rd-post/page-data.json",
    "revision": "7e23a9e44f01b9d8e3b508bdf5923c22"
  },
  {
    "url": "page-data/post/this-is-my-4th-post/page-data.json",
    "revision": "e0dcea35f15ca5d4d1a8016401161a96"
  },
  {
    "url": "page-data/post/this-is-my-5th-post/page-data.json",
    "revision": "17a65e4f259df1fbf8e53bbd450f2971"
  },
  {
    "url": "page-data/post/this-is-my-6th-post/page-data.json",
    "revision": "c1abb0e80809a4177aa37ea754e3a3cf"
  },
  {
    "url": "component---src-pages-about-tsx-80acea2df8623e03bf39.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "ab8904f662bc7ce22bfa1345c1e7927c"
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
  if (!resources || !(await caches.match(`/app-be9a4082acd5cd1ca66b.js`))) {
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
