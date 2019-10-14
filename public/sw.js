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
    "url": "webpack-runtime-f2c622bee41f7b8c1f8d.js"
  },
  {
    "url": "commons.98fc3f9a37638aaa536e.css"
  },
  {
    "url": "commons-d216c954f55a877b1ed9.js"
  },
  {
    "url": "app-4cb7ab5923814ac95b00.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-b8e58da3b5c36d83eec8.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "e13b213aebdd3a7fb511c6b7e743aab2"
  },
  {
    "url": "styles.54dd774da1217f0cfa85.css"
  },
  {
    "url": "component---src-pages-index-tsx-58415dab9792be62a7a7.js"
  },
  {
    "url": "styles-449ef7c8a12708b73c00.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "362c31ea97e4a8c8a688e4857a61acd4"
  },
  {
    "url": "component---src-templates-blog-posts-tsx-c59fbf725397cd265031.js"
  },
  {
    "url": "page-data/posts/2/page-data.json",
    "revision": "161584e17c89188d32acb387765c6c9b"
  },
  {
    "url": "page-data/posts/3/page-data.json",
    "revision": "bf814c3fe1538c79359939eb66873324"
  },
  {
    "url": "page-data/posts/page-data.json",
    "revision": "756d3a87cf5a122c8d3e808ce72abca9"
  },
  {
    "url": "component---src-templates-blog-post-tsx-afa0176bbb9fc8d399ab.js"
  },
  {
    "url": "page-data/post/this-is-my-1st-post/page-data.json",
    "revision": "fb6c23fb360787af25cab28aa2df311f"
  },
  {
    "url": "page-data/post/this-is-my-2nd-post/page-data.json",
    "revision": "c44c05364cab66d6bf2130691dd469a6"
  },
  {
    "url": "page-data/post/this-is-my-3rd-post/page-data.json",
    "revision": "495dd2f7519e25890827418220f9e64e"
  },
  {
    "url": "page-data/post/this-is-my-4th-post/page-data.json",
    "revision": "69e44aeeef63998765f4899705a1565a"
  },
  {
    "url": "page-data/post/this-is-my-5th-post/page-data.json",
    "revision": "9635f34b0d25e63e6fca331ebee37718"
  },
  {
    "url": "page-data/post/this-is-my-6th-post/page-data.json",
    "revision": "c18d1c92aab01d60d034c161a2bef2d8"
  },
  {
    "url": "component---src-templates-blog-tag-posts-tsx-bde43fdd1489086e93f8.js"
  },
  {
    "url": "page-data/tag/adventure/page-data.json",
    "revision": "286fdcc4ea8592a409662fbb06506916"
  },
  {
    "url": "page-data/tag/food/page-data.json",
    "revision": "d945e0ea691b898a18122c47a7daec3f"
  },
  {
    "url": "page-data/tag/life/page-data.json",
    "revision": "979e7ab3330c3ffd7b32739799d63eea"
  },
  {
    "url": "page-data/tag/nature/page-data.json",
    "revision": "c056d548ae8295643a6748a4ff6a45d8"
  },
  {
    "url": "page-data/tag/travel/page-data.json",
    "revision": "ce2cd7447d1f98deb4715cec3d19e000"
  },
  {
    "url": "component---src-templates-blog-category-posts-tsx-6cdf3b3cbe43e05261ec.js"
  },
  {
    "url": "page-data/category/adventure/page-data.json",
    "revision": "d3ef657f9cdb9534e0fa937f6304fa4c"
  },
  {
    "url": "page-data/category/food/page-data.json",
    "revision": "274b3df18c894c3a5cd38d24a90f3675"
  },
  {
    "url": "page-data/category/life/page-data.json",
    "revision": "83675edd277c949df3f848501ccec8be"
  },
  {
    "url": "page-data/category/nature/page-data.json",
    "revision": "e087a46cbe7f36ca1902324ec40611b0"
  },
  {
    "url": "page-data/category/travel/page-data.json",
    "revision": "4e244797bd7d537081119d30b8af7228"
  },
  {
    "url": "component---src-pages-about-tsx-93eed3f27b47d4bc8d44.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "b36d33f71e4078f513fa5fbefcf47020"
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
