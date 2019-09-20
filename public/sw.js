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
    "url": "webpack-runtime-650e739481b7a1886511.js"
  },
  {
    "url": "commons.337ca6bd982f85bcd2f8.css"
  },
  {
    "url": "commons-94f95b4a6541300cda46.js"
  },
  {
    "url": "app-790271417795040b036e.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-8c17f67f366519e55d7f.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "560139ab2acb405727ce13fb5dacd335"
  },
  {
    "url": "styles.4ee6360c92b32c6659b5.css"
  },
  {
    "url": "component---src-templates-blog-posts-tsx-22c3840a9cd0ec26b0cc.js"
  },
  {
    "url": "styles-48d1239998d7faf50f64.js"
  },
  {
    "url": "page-data/posts/2/page-data.json",
    "revision": "a04b7400facfb2e2e3180987dc7e040b"
  },
  {
    "url": "page-data/posts/3/page-data.json",
    "revision": "4f291f18d16f5de5a676aab02b0f0b42"
  },
  {
    "url": "page-data/posts/page-data.json",
    "revision": "c27d152ced46490f673c36ec61b81fb4"
  },
  {
    "url": "component---src-templates-blog-post-tsx-f0e68042d95c6457269e.js"
  },
  {
    "url": "page-data/post/this-is-my-1st-post/page-data.json",
    "revision": "10eec72ddd2679d796352ab0c07acd5c"
  },
  {
    "url": "page-data/post/this-is-my-2nd-post/page-data.json",
    "revision": "aaa124a9031304ebeeb5858336a89244"
  },
  {
    "url": "page-data/post/this-is-my-3rd-post/page-data.json",
    "revision": "9e6a8f6ff40b9685ee0f84d3ffc322c4"
  },
  {
    "url": "page-data/post/this-is-my-4th-post/page-data.json",
    "revision": "db90a0f8e1c949b3f339937856cf65b6"
  },
  {
    "url": "page-data/post/this-is-my-5th-post/page-data.json",
    "revision": "20840b5d1f4c697078fe3a3563464759"
  },
  {
    "url": "page-data/post/this-is-my-6th-post/page-data.json",
    "revision": "88113084ea03067c217deefa5bff7b21"
  },
  {
    "url": "component---src-pages-about-tsx-3f5b8fed61a3d5852342.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "f8a06f310f2703fb5967ca9a84e6dea0"
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
