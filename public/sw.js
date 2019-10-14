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
    "url": "webpack-runtime-638ebc25272223ad3515.js"
  },
  {
    "url": "commons.03010c0a4e00d53bd6bf.css"
  },
  {
    "url": "commons-205f8796758bc8556c59.js"
  },
  {
    "url": "app-7d756ee6b84e914ea57d.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-b8e58da3b5c36d83eec8.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "12a939e2051c8fc80b9c40f79070dbf4"
  },
  {
    "url": "styles.54dd774da1217f0cfa85.css"
  },
  {
    "url": "component---src-pages-index-tsx-fdbcdcc93a5058fabb18.js"
  },
  {
    "url": "styles-fc5e5b09eaaead8c4821.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "e7363043d0a05db7edbb90320b922bda"
  },
  {
    "url": "component---src-templates-blog-posts-tsx-fe71ce2f81d7cd3417ce.js"
  },
  {
    "url": "page-data/posts/2/page-data.json",
    "revision": "cf1e5ef41baf8f2f2b862e906014678b"
  },
  {
    "url": "page-data/posts/3/page-data.json",
    "revision": "3b45294674094f3e8ef27f410db43de6"
  },
  {
    "url": "page-data/posts/page-data.json",
    "revision": "e8be2ffd19965637c2b664c23ac42e14"
  },
  {
    "url": "component---src-templates-blog-post-tsx-e77f718f4ad3d4577a60.js"
  },
  {
    "url": "page-data/post/this-is-my-1st-post/page-data.json",
    "revision": "f881a69f2c3bd83a1e7a04ecca992b2a"
  },
  {
    "url": "page-data/post/this-is-my-2nd-post/page-data.json",
    "revision": "df365a7d7cbfdce9061cb3b267347614"
  },
  {
    "url": "page-data/post/this-is-my-3rd-post/page-data.json",
    "revision": "c5060771fa8c8ca8829924599f75d896"
  },
  {
    "url": "page-data/post/this-is-my-4th-post/page-data.json",
    "revision": "58f2a4ecde2dd14ed20a5dfb9a8140ef"
  },
  {
    "url": "page-data/post/this-is-my-5th-post/page-data.json",
    "revision": "6e3e1621686f2cfdb3b949fded0bdc3e"
  },
  {
    "url": "page-data/post/this-is-my-6th-post/page-data.json",
    "revision": "3b5b1ebc46692ce1936ba65e646f0612"
  },
  {
    "url": "component---src-templates-blog-tag-posts-tsx-f45ee9a1f4668c907d90.js"
  },
  {
    "url": "page-data/tag/adventure/page-data.json",
    "revision": "dfd7b92eb9cc0031339925dff8888a06"
  },
  {
    "url": "page-data/tag/food/page-data.json",
    "revision": "eb01fb973d3e0ab3660b0f01b931f463"
  },
  {
    "url": "page-data/tag/life/page-data.json",
    "revision": "105e3c1548d9edeaa5675b5909228666"
  },
  {
    "url": "page-data/tag/nature/page-data.json",
    "revision": "580004403bf4fb65e6f2703886227fc0"
  },
  {
    "url": "page-data/tag/travel/page-data.json",
    "revision": "382fd9d26d74ed184a91f652514cc505"
  },
  {
    "url": "component---src-templates-blog-category-posts-tsx-f1904524971fef7ef513.js"
  },
  {
    "url": "page-data/category/adventure/page-data.json",
    "revision": "d3459b7fea97c2429d00cc33e968505e"
  },
  {
    "url": "page-data/category/food/page-data.json",
    "revision": "469cb44362cdd261e398de282d8e2364"
  },
  {
    "url": "page-data/category/life/page-data.json",
    "revision": "a309f698c8bea80bf845d70f34893b93"
  },
  {
    "url": "page-data/category/nature/page-data.json",
    "revision": "3d2f6f2e1cd179870abf6526c1435886"
  },
  {
    "url": "page-data/category/travel/page-data.json",
    "revision": "db046560c5ca6c30e32a2a88a9e642c5"
  },
  {
    "url": "component---src-pages-about-tsx-62c0a763dcb2a2fd9582.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "d9ff7d7207fb65553be954fee6abec20"
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
  if (!resources || !(await caches.match(`/app-7d756ee6b84e914ea57d.js`))) {
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
