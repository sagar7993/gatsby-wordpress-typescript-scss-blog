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
    "url": "webpack-runtime-714e83861f7d88f09fc8.js"
  },
  {
    "url": "commons.17c79ea73e4fb751ed11.css"
  },
  {
    "url": "commons-0a59a4d6654f5cdeeb65.js"
  },
  {
    "url": "app-ee57bbf31a98869156b9.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-1d26d3f34ffaad76b4c2.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "7f3640929aac333010e14f19f81085f4"
  },
  {
    "url": "styles.6a1ba56c1f89ddebbb64.css"
  },
  {
    "url": "component---src-templates-blog-posts-tsx-a704d1f6fd85080b7fd2.js"
  },
  {
    "url": "styles-64f9f8c3ee6b4e396003.js"
  },
  {
    "url": "page-data/posts/2/page-data.json",
    "revision": "5bcd655ce323bdda090784d3608f08d2"
  },
  {
    "url": "page-data/posts/3/page-data.json",
    "revision": "7527ed2c80f8b81a3a58dc4ee0217fa2"
  },
  {
    "url": "page-data/posts/page-data.json",
    "revision": "185669093bd3dea53552639127eea4be"
  },
  {
    "url": "component---src-templates-blog-post-tsx-1d78e07e884a95b9d8ce.js"
  },
  {
    "url": "page-data/post/this-is-my-1st-post/page-data.json",
    "revision": "5b56953211dc933264ab5f444b3595ed"
  },
  {
    "url": "page-data/post/this-is-my-2nd-post/page-data.json",
    "revision": "a169d9d8c5f926a6365eb701d0465c4d"
  },
  {
    "url": "page-data/post/this-is-my-3rd-post/page-data.json",
    "revision": "84ebdcf53ebc8d4d6c892b65251d4d50"
  },
  {
    "url": "page-data/post/this-is-my-4th-post/page-data.json",
    "revision": "9358d9c36221931ec569ead61bcf38c5"
  },
  {
    "url": "page-data/post/this-is-my-5th-post/page-data.json",
    "revision": "205e374d22acf9e73d5f5a3b7c35a9d9"
  },
  {
    "url": "page-data/post/this-is-my-6th-post/page-data.json",
    "revision": "ea7e3d7c9336f477683560763bb76b10"
  },
  {
    "url": "component---src-pages-about-tsx-80acea2df8623e03bf39.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "07b1a571b56e6c07a7053da276f4426d"
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
  if (!resources || !(await caches.match(`/app-ee57bbf31a98869156b9.js`))) {
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
