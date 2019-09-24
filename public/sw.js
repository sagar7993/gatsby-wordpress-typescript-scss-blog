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
    "url": "webpack-runtime-f5f55f626c39237f31e2.js"
  },
  {
    "url": "commons.b0011fa16554a3bddbdf.css"
  },
  {
    "url": "commons-76bdb4b2d19b9d91f0ce.js"
  },
  {
    "url": "app-7a95e131407176ee4e98.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-8976e363f997194e448f.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "57621068bb803b6bcdc76a5f067735d4"
  },
  {
    "url": "styles.b64496dd8abd4c02b0a8.css"
  },
  {
    "url": "component---src-pages-index-tsx-48d788724ab4d60f54f4.js"
  },
  {
    "url": "styles-63648dc3dba6eb2a0e24.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "7c1d0896e610e7a3e48644559ee6f472"
  },
  {
    "url": "component---src-templates-blog-posts-tsx-60cafe7b412cbf38feb0.js"
  },
  {
    "url": "page-data/posts/2/page-data.json",
    "revision": "ae157b90acfeb861b3fa1007ec23c0ee"
  },
  {
    "url": "page-data/posts/3/page-data.json",
    "revision": "d8be6663fadd416d0d7b1788bb60e342"
  },
  {
    "url": "page-data/posts/page-data.json",
    "revision": "23428d4186bf5569d922d38898c2b8f0"
  },
  {
    "url": "component---src-templates-blog-post-tsx-1836b91c53877a154b68.js"
  },
  {
    "url": "page-data/post/this-is-my-1st-post/page-data.json",
    "revision": "3b39a7177c6d10811989e04605c3c3da"
  },
  {
    "url": "page-data/post/this-is-my-2nd-post/page-data.json",
    "revision": "4d44908830641ca78e3c241b97183146"
  },
  {
    "url": "page-data/post/this-is-my-3rd-post/page-data.json",
    "revision": "833467b7e1f35d524180b63612094cd6"
  },
  {
    "url": "page-data/post/this-is-my-4th-post/page-data.json",
    "revision": "ddcf1f591d071681c0929bb9a29e7737"
  },
  {
    "url": "page-data/post/this-is-my-5th-post/page-data.json",
    "revision": "8d0f0c94a93321e5994a345a5d7d8122"
  },
  {
    "url": "page-data/post/this-is-my-6th-post/page-data.json",
    "revision": "06d674f1daf5e338ce3562e7de5b8f36"
  },
  {
    "url": "component---src-templates-blog-tag-posts-tsx-6a9369f9720b2e3c7031.js"
  },
  {
    "url": "page-data/tag/adventure/page-data.json",
    "revision": "b65b31a75f8b5a22c77321d0f33e213b"
  },
  {
    "url": "page-data/tag/food/page-data.json",
    "revision": "42906df37d58f985a3782f27672bd208"
  },
  {
    "url": "page-data/tag/life/page-data.json",
    "revision": "a8251a814d8567c32fdf8739be26bba9"
  },
  {
    "url": "page-data/tag/nature/page-data.json",
    "revision": "e53ba209b3e19e412a8cbc67e5253219"
  },
  {
    "url": "page-data/tag/travel/page-data.json",
    "revision": "846c624790cbdfb261e91d9a5a96876b"
  },
  {
    "url": "component---src-templates-blog-category-posts-tsx-23ab90883b2b745a3e9e.js"
  },
  {
    "url": "page-data/category/adventure/page-data.json",
    "revision": "5c7093acaf4592636fe7c95b6d949be0"
  },
  {
    "url": "page-data/category/food/page-data.json",
    "revision": "cd0fd1c9b1c274245532a890997b95e8"
  },
  {
    "url": "page-data/category/life/page-data.json",
    "revision": "eb9b2f31c85a4512e99b028835ba8085"
  },
  {
    "url": "page-data/category/nature/page-data.json",
    "revision": "3cc9a7eb38350479843dfdf80f4ab477"
  },
  {
    "url": "page-data/category/travel/page-data.json",
    "revision": "7c0aa5e70c0a9906424f60c7350bc70c"
  },
  {
    "url": "component---src-pages-about-tsx-d7014d66a4e95d8df86d.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "d69bf3d79302424a42c3b26940cb1c30"
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
  if (!resources || !(await caches.match(`/app-7a95e131407176ee4e98.js`))) {
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
