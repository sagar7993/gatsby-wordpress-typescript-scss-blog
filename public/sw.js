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
    "url": "webpack-runtime-dcb610bd7e7d6120c188.js"
  },
  {
    "url": "commons.337ca6bd982f85bcd2f8.css"
  },
  {
    "url": "commons-7e19f5b6840f27f54a4d.js"
  },
  {
    "url": "app-790271417795040b036e.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-8c17f67f366519e55d7f.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "f7556d190e367a604d358c452c4e4876"
  },
  {
    "url": "styles.4ee6360c92b32c6659b5.css"
  },
  {
    "url": "component---src-templates-blog-posts-tsx-2706eb17c203830d8bba.js"
  },
  {
    "url": "styles-8a5b92d89d5b10c4a864.js"
  },
  {
    "url": "page-data/posts/2/page-data.json",
    "revision": "e3f47c5a5c4972bb470320ffc3a69b45"
  },
  {
    "url": "page-data/posts/3/page-data.json",
    "revision": "6fe9d8dec3278975bd19c8bff85c72d0"
  },
  {
    "url": "page-data/posts/page-data.json",
    "revision": "4d083474476e9219d76bd4486c24919f"
  },
  {
    "url": "component---src-templates-blog-post-tsx-2f5ea5853449c6e3c2a9.js"
  },
  {
    "url": "page-data/post/this-is-my-1st-post/page-data.json",
    "revision": "3b654a1b861a891940c76a699d5c75bf"
  },
  {
    "url": "page-data/post/this-is-my-2nd-post/page-data.json",
    "revision": "760aa3b188ffede758e5f5f3c2759e80"
  },
  {
    "url": "page-data/post/this-is-my-3rd-post/page-data.json",
    "revision": "36ee17fc7aeb893e78c5c9d3aefacd27"
  },
  {
    "url": "page-data/post/this-is-my-4th-post/page-data.json",
    "revision": "af8efe9e035580c67ae3de1f46122e8c"
  },
  {
    "url": "page-data/post/this-is-my-5th-post/page-data.json",
    "revision": "4feefdeb95ae50ebc29cdf840c11e1ed"
  },
  {
    "url": "page-data/post/this-is-my-6th-post/page-data.json",
    "revision": "d5e993cc6332dd7d9254121d6ef9225d"
  },
  {
    "url": "component---src-pages-about-tsx-6a5e27c4271dc4d52a94.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "2289db07bc2a849e56030a8fd35a25ca"
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
  if (!resources || !(await caches.match(`/app-790271417795040b036e.js`))) {
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
