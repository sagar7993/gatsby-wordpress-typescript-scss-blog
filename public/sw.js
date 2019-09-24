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
    "url": "webpack-runtime-0233cb1c911c4a04938e.js"
  },
  {
    "url": "commons.8ec86ffa526cc534ebfc.css"
  },
  {
    "url": "commons-99df34f6efa8a077a473.js"
  },
  {
    "url": "app-0aadffa95bc3b923d201.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-e34d07349299bd651956.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "c77b5b7119a9ca1f80930f251bef1ebd"
  },
  {
    "url": "styles.638e8f5690029c5de77d.css"
  },
  {
    "url": "component---src-templates-blog-posts-tsx-9a521264e5dfe2bb6a12.js"
  },
  {
    "url": "styles-2b3300e8f935c5b64612.js"
  },
  {
    "url": "page-data/posts/2/page-data.json",
    "revision": "69e276cc90dff4f66cb7fdec5662e6ea"
  },
  {
    "url": "page-data/posts/3/page-data.json",
    "revision": "0f1797e929d4c966790ac7feadefcd07"
  },
  {
    "url": "page-data/posts/page-data.json",
    "revision": "f3c50ffbe54ab48c1ada3ef69c6c92ec"
  },
  {
    "url": "component---src-templates-blog-post-tsx-fa2eb417d52bac3baf0a.js"
  },
  {
    "url": "page-data/post/this-is-my-1st-post/page-data.json",
    "revision": "aed15302437ffbdb9f8be4da10661aa4"
  },
  {
    "url": "page-data/post/this-is-my-2nd-post/page-data.json",
    "revision": "ad68cfbab96e2bcc84dc0b3fb909112d"
  },
  {
    "url": "page-data/post/this-is-my-3rd-post/page-data.json",
    "revision": "7d6c53e826c701c7543c5ce3357c24a0"
  },
  {
    "url": "page-data/post/this-is-my-4th-post/page-data.json",
    "revision": "cbdda409605c27f7b9f0096a652f24e7"
  },
  {
    "url": "page-data/post/this-is-my-5th-post/page-data.json",
    "revision": "5f101b77f81742b3148e9935a54dd3bc"
  },
  {
    "url": "page-data/post/this-is-my-6th-post/page-data.json",
    "revision": "8b4a211f766350a28f8844acb06160dc"
  },
  {
    "url": "component---src-pages-about-tsx-f50be48edec111ca6123.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "396797f9d270b75c6b2bff1b42fd8348"
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
  if (!resources || !(await caches.match(`/app-0aadffa95bc3b923d201.js`))) {
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
