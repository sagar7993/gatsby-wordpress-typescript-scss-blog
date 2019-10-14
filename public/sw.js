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
    "url": "webpack-runtime-5375f5974bbaf5e9cc8f.js"
  },
  {
    "url": "commons.98fc3f9a37638aaa536e.css"
  },
  {
    "url": "commons-c575712763405c37da4a.js"
  },
  {
    "url": "app-4cb7ab5923814ac95b00.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-b8e58da3b5c36d83eec8.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "01ca857852cde938c5e6b7cc4abbaaad"
  },
  {
    "url": "styles.54dd774da1217f0cfa85.css"
  },
  {
    "url": "component---src-pages-index-tsx-58415dab9792be62a7a7.js"
  },
  {
    "url": "styles-da899d352af8ba56a296.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "8f5e2fc6b6b4dfec17f057378be6de70"
  },
  {
    "url": "component---src-templates-blog-posts-tsx-c59fbf725397cd265031.js"
  },
  {
    "url": "page-data/posts/2/page-data.json",
    "revision": "490d56ec3858c592c15bd4dce873dbb2"
  },
  {
    "url": "page-data/posts/3/page-data.json",
    "revision": "5f1f365be2851c0092878674a05a5b30"
  },
  {
    "url": "page-data/posts/page-data.json",
    "revision": "7907f2512111a65e52238efbde63e91a"
  },
  {
    "url": "component---src-templates-blog-post-tsx-afa0176bbb9fc8d399ab.js"
  },
  {
    "url": "page-data/post/this-is-my-1st-post/page-data.json",
    "revision": "98d6be1c567461c2ab989a4b04039bcc"
  },
  {
    "url": "page-data/post/this-is-my-2nd-post/page-data.json",
    "revision": "00dce90b186bfb697c368ca44b9d3816"
  },
  {
    "url": "page-data/post/this-is-my-3rd-post/page-data.json",
    "revision": "070594b0aca5b3e423bb6312e06f6ffd"
  },
  {
    "url": "page-data/post/this-is-my-4th-post/page-data.json",
    "revision": "235d809517169f94f6ab6bb68b86286f"
  },
  {
    "url": "page-data/post/this-is-my-5th-post/page-data.json",
    "revision": "1505f41c000a0b89e2d7f8aee6f5145a"
  },
  {
    "url": "page-data/post/this-is-my-6th-post/page-data.json",
    "revision": "b519d74687fd7a68d9390420a1e439e8"
  },
  {
    "url": "component---src-templates-blog-tag-posts-tsx-bde43fdd1489086e93f8.js"
  },
  {
    "url": "page-data/tag/adventure/page-data.json",
    "revision": "c202926ec969a773500d3ec9ea9d01b9"
  },
  {
    "url": "page-data/tag/food/page-data.json",
    "revision": "5bd17821c519d04919e761c51f2d6d22"
  },
  {
    "url": "page-data/tag/life/page-data.json",
    "revision": "fcdc478428e000a9d9c9c4096540ad38"
  },
  {
    "url": "page-data/tag/nature/page-data.json",
    "revision": "8b8438c2b0f2d412f632860bb07e1e3b"
  },
  {
    "url": "page-data/tag/travel/page-data.json",
    "revision": "f3087aca20622285a0796b30aadded55"
  },
  {
    "url": "component---src-templates-blog-category-posts-tsx-6cdf3b3cbe43e05261ec.js"
  },
  {
    "url": "page-data/category/adventure/page-data.json",
    "revision": "ff71631c07d9e4bec66e2cc4211ec7e1"
  },
  {
    "url": "page-data/category/food/page-data.json",
    "revision": "932e0b1642392f07c2ad6cdcb8c9651c"
  },
  {
    "url": "page-data/category/life/page-data.json",
    "revision": "19c6caa9c5f26c2455df4f87c921503c"
  },
  {
    "url": "page-data/category/nature/page-data.json",
    "revision": "303ffa5c401a97e0d1617a09cd7570c2"
  },
  {
    "url": "page-data/category/travel/page-data.json",
    "revision": "628ef62288e464237d8be583a11e08ca"
  },
  {
    "url": "component---src-pages-about-tsx-93eed3f27b47d4bc8d44.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "b8cc4ffbcbcee247f9719526e456326d"
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
