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
    "url": "webpack-runtime-f293138a19bb03d51b68.js"
  },
  {
    "url": "commons.37c678e93c076a374ed5.css"
  },
  {
    "url": "commons-405aee851ea4d4ea3b7e.js"
  },
  {
    "url": "app-bd7caa1e561c818d40c2.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-8976e363f997194e448f.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "26f8bc09e43b239ff1cc45a0e60ca81e"
  },
  {
    "url": "styles.b2ea84ef2d612c45c96d.css"
  },
  {
    "url": "component---src-pages-index-tsx-4e92fc75c54543fb1e6b.js"
  },
  {
    "url": "styles-88061376abd97e2c94b4.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "198bb57679178e5c9418fc40732c6ac3"
  },
  {
    "url": "component---src-templates-blog-posts-tsx-8cceca126b7cdbdc1a97.js"
  },
  {
    "url": "page-data/posts/2/page-data.json",
    "revision": "8a13f5c20da8a97faa525ee94eca2875"
  },
  {
    "url": "page-data/posts/3/page-data.json",
    "revision": "28f7ee2d9b0eb3990c87f7bd1a3e43a6"
  },
  {
    "url": "page-data/posts/page-data.json",
    "revision": "6d8ea331175411e307fcc423708b3bc9"
  },
  {
    "url": "component---src-templates-blog-post-tsx-6f0de160d8a0ade00eb9.js"
  },
  {
    "url": "page-data/post/this-is-my-1st-post/page-data.json",
    "revision": "33c16f18ffe6a838c6ed25448e7ce010"
  },
  {
    "url": "page-data/post/this-is-my-2nd-post/page-data.json",
    "revision": "c96f0dd716a843318accf54a47f1b9b8"
  },
  {
    "url": "page-data/post/this-is-my-3rd-post/page-data.json",
    "revision": "cebae8a9d6f6df2090022b85c5e8e8e1"
  },
  {
    "url": "page-data/post/this-is-my-4th-post/page-data.json",
    "revision": "495a82c883cba9ad17c6b2e77789bf5a"
  },
  {
    "url": "page-data/post/this-is-my-5th-post/page-data.json",
    "revision": "e849421428d32a36acffd099f187932a"
  },
  {
    "url": "page-data/post/this-is-my-6th-post/page-data.json",
    "revision": "e5268142e82441c88bf8884b95f93c7a"
  },
  {
    "url": "component---src-templates-blog-tag-posts-tsx-bc4c0b4ef6d4b64e74a1.js"
  },
  {
    "url": "page-data/tag/adventure/page-data.json",
    "revision": "23b7f456c3d8e080620334e036c8868a"
  },
  {
    "url": "page-data/tag/food/page-data.json",
    "revision": "9d47a2a949ceb184fac649e55b0ea619"
  },
  {
    "url": "page-data/tag/life/page-data.json",
    "revision": "c0212bdd6e75392e86ada9f52879aeda"
  },
  {
    "url": "page-data/tag/nature/page-data.json",
    "revision": "47cc80dbdb61df63ff17bf7fe15d9353"
  },
  {
    "url": "page-data/tag/travel/page-data.json",
    "revision": "a567d7b2f15d76b3d2ee1a38fbee95cb"
  },
  {
    "url": "component---src-templates-blog-category-posts-tsx-981d7d5faf7e46e416b9.js"
  },
  {
    "url": "page-data/category/adventure/page-data.json",
    "revision": "cc7dfcee1f6ad9c1fcd82394d84c8754"
  },
  {
    "url": "page-data/category/food/page-data.json",
    "revision": "5b4af1a43bf6ca44a1e8e9e6796f5351"
  },
  {
    "url": "page-data/category/life/page-data.json",
    "revision": "02a007013bab9005cbce9144fbd5faab"
  },
  {
    "url": "page-data/category/nature/page-data.json",
    "revision": "ca2156ce214400d35dba17d516b2f0f6"
  },
  {
    "url": "page-data/category/travel/page-data.json",
    "revision": "911587f1cea736079afc1ea2f4972d86"
  },
  {
    "url": "component---src-pages-about-tsx-59a604a6268afc7ec76b.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "c149b302ea59ab5afb7a2d2e60ce2966"
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
  if (!resources || !(await caches.match(`/app-bd7caa1e561c818d40c2.js`))) {
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
