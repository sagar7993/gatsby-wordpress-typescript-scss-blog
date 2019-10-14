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
    "url": "webpack-runtime-e5634041328b784a7d2b.js"
  },
  {
    "url": "commons.52da80032542d14a9e2f.css"
  },
  {
    "url": "commons-ce7aed3ba4bb131a91f3.js"
  },
  {
    "url": "app-4cb7ab5923814ac95b00.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-b8e58da3b5c36d83eec8.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "436caaa8caa891ea238cdb7d1cc609d8"
  },
  {
    "url": "styles.54dd774da1217f0cfa85.css"
  },
  {
    "url": "component---src-pages-index-tsx-58415dab9792be62a7a7.js"
  },
  {
    "url": "styles-4bdd81b3795832888123.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "586499e182988b1e8b9921dcb3e46e54"
  },
  {
    "url": "component---src-templates-blog-posts-tsx-c59fbf725397cd265031.js"
  },
  {
    "url": "page-data/posts/2/page-data.json",
    "revision": "0805869c091e10c707f994f865e0969f"
  },
  {
    "url": "page-data/posts/3/page-data.json",
    "revision": "7d7e886073e72edd87ca8943b72c57a9"
  },
  {
    "url": "page-data/posts/page-data.json",
    "revision": "97e6662dbf10df8e88811cb289ba8085"
  },
  {
    "url": "component---src-templates-blog-post-tsx-afa0176bbb9fc8d399ab.js"
  },
  {
    "url": "page-data/post/this-is-my-1st-post/page-data.json",
    "revision": "8c9576edbd526dece1de37e7e729b2c1"
  },
  {
    "url": "page-data/post/this-is-my-2nd-post/page-data.json",
    "revision": "3b8150b4aac9a01f997a8851469e645b"
  },
  {
    "url": "page-data/post/this-is-my-3rd-post/page-data.json",
    "revision": "226c91770581b842a9aca27bde1021c1"
  },
  {
    "url": "page-data/post/this-is-my-4th-post/page-data.json",
    "revision": "bd1ba4867d54c7b4cad27f59bfc9d69b"
  },
  {
    "url": "page-data/post/this-is-my-5th-post/page-data.json",
    "revision": "26c9b54f07848f4feff8f77aed984bdb"
  },
  {
    "url": "page-data/post/this-is-my-6th-post/page-data.json",
    "revision": "1583f9d3fe7a9d46a07f88851544dbb1"
  },
  {
    "url": "component---src-templates-blog-tag-posts-tsx-bde43fdd1489086e93f8.js"
  },
  {
    "url": "page-data/tag/adventure/page-data.json",
    "revision": "5a28f62e3de1f71d0a698d4dc740a11b"
  },
  {
    "url": "page-data/tag/food/page-data.json",
    "revision": "4ac5f33f0bd4c0ea1d43aa4003edb80c"
  },
  {
    "url": "page-data/tag/life/page-data.json",
    "revision": "d173041b5a016836afe3f4d97cc46a0d"
  },
  {
    "url": "page-data/tag/nature/page-data.json",
    "revision": "9d75b4f649fc7da42525bae86ede0cb8"
  },
  {
    "url": "page-data/tag/travel/page-data.json",
    "revision": "6d59945895eea347305aae990d9d4977"
  },
  {
    "url": "component---src-templates-blog-category-posts-tsx-6cdf3b3cbe43e05261ec.js"
  },
  {
    "url": "page-data/category/adventure/page-data.json",
    "revision": "205349ec1a9a364c7d16508b759efe4c"
  },
  {
    "url": "page-data/category/food/page-data.json",
    "revision": "a4f5503f4122b232c489f5a8140e11ec"
  },
  {
    "url": "page-data/category/life/page-data.json",
    "revision": "e05185878d39f08abcca4414833ccbd9"
  },
  {
    "url": "page-data/category/nature/page-data.json",
    "revision": "2e690818265e1d5c81e3039b85430e51"
  },
  {
    "url": "page-data/category/travel/page-data.json",
    "revision": "8ccb60d44881d69c39bcff5288bc2a18"
  },
  {
    "url": "component---src-pages-about-tsx-93eed3f27b47d4bc8d44.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "3d8f7c5112de74eb1ee3a76f442ddfc3"
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
  if (!resources || !(await caches.match(`/app-4cb7ab5923814ac95b00.js`))) {
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
