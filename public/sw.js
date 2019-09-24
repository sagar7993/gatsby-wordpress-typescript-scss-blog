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
    "url": "webpack-runtime-66e9c78485d13b0d8884.js"
  },
  {
    "url": "commons.8ec86ffa526cc534ebfc.css"
  },
  {
    "url": "commons-723731f2b80775e1e591.js"
  },
  {
    "url": "app-d76971688c83c09b25ff.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-e34d07349299bd651956.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "45a6fc52e14c2da72e12f7c2ca366e41"
  },
  {
    "url": "styles.b64496dd8abd4c02b0a8.css"
  },
  {
    "url": "component---src-templates-blog-posts-tsx-a29c34ae8328c80b0a24.js"
  },
  {
    "url": "styles-e8a6d522a86a9d07b4fe.js"
  },
  {
    "url": "page-data/posts/2/page-data.json",
    "revision": "6a2090bf2120d4b569705e06a1b2a9cb"
  },
  {
    "url": "page-data/posts/3/page-data.json",
    "revision": "f70a26c9d9db6cefd53f113f0eeb39cb"
  },
  {
    "url": "page-data/posts/page-data.json",
    "revision": "e8252c9c04ace4ba052a9c53b09562a2"
  },
  {
    "url": "component---src-templates-blog-post-tsx-9c55d641466675563a17.js"
  },
  {
    "url": "page-data/post/this-is-my-1st-post/page-data.json",
    "revision": "b9bca5a76efc99776c4c924fe0c87623"
  },
  {
    "url": "page-data/post/this-is-my-2nd-post/page-data.json",
    "revision": "7af280b83b1c2659cf6e4a2d628d2674"
  },
  {
    "url": "page-data/post/this-is-my-3rd-post/page-data.json",
    "revision": "71a7c09318559124bb5bd9cbacd9b5f6"
  },
  {
    "url": "page-data/post/this-is-my-4th-post/page-data.json",
    "revision": "2bf4d08112b3876c3cceb48252625af1"
  },
  {
    "url": "page-data/post/this-is-my-5th-post/page-data.json",
    "revision": "fbce1c62edf04c87161da55020539913"
  },
  {
    "url": "page-data/post/this-is-my-6th-post/page-data.json",
    "revision": "d53dc02d70589719ed8ce3288591bb7c"
  },
  {
    "url": "component---src-pages-about-tsx-f50be48edec111ca6123.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "f4e1aec978ada82c38d591d51650ac14"
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
  if (!resources || !(await caches.match(`/app-d76971688c83c09b25ff.js`))) {
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
