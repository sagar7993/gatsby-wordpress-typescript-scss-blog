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
    "url": "webpack-runtime-d290fff6931f46a9ed58.js"
  },
  {
    "url": "commons.2229e8780a1c8d1635d0.css"
  },
  {
    "url": "commons-d0cca7eb64d4c6e68cdd.js"
  },
  {
    "url": "app-8f5dc351b0d6d90978c5.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-1d26d3f34ffaad76b4c2.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "ae57c1f6920c89ec4e0dab2d19bc1b64"
  },
  {
    "url": "styles.6a1ba56c1f89ddebbb64.css"
  },
  {
    "url": "component---src-templates-blog-posts-tsx-a704d1f6fd85080b7fd2.js"
  },
  {
    "url": "styles-ed2a4494fae5bf6691f9.js"
  },
  {
    "url": "page-data/posts/2/page-data.json",
    "revision": "4857b054408a9bc1bcef6b303b2aafb5"
  },
  {
    "url": "page-data/posts/3/page-data.json",
    "revision": "813b6923926f47a62e4f34237ef5e9aa"
  },
  {
    "url": "page-data/posts/page-data.json",
    "revision": "220562ad2745b9806b4d2871c55eedb2"
  },
  {
    "url": "component---src-templates-blog-post-tsx-1d78e07e884a95b9d8ce.js"
  },
  {
    "url": "page-data/post/this-is-my-1st-post/page-data.json",
    "revision": "ffbc516c7c775f67384587ce02d58524"
  },
  {
    "url": "page-data/post/this-is-my-2nd-post/page-data.json",
    "revision": "7ad6ae80aa8bcab6d34de4a5a7c904bb"
  },
  {
    "url": "page-data/post/this-is-my-3rd-post/page-data.json",
    "revision": "532b92a1a6bb52aa32f3bfbef99763ce"
  },
  {
    "url": "page-data/post/this-is-my-4th-post/page-data.json",
    "revision": "98e28df552eacfc3ca702961ad07b7f7"
  },
  {
    "url": "page-data/post/this-is-my-5th-post/page-data.json",
    "revision": "46bb4d1c741608de3b527f3256c1ac43"
  },
  {
    "url": "page-data/post/this-is-my-6th-post/page-data.json",
    "revision": "1b4282322a608c183ce221a1855513e2"
  },
  {
    "url": "component---src-pages-about-tsx-d00e72fb38171646ee9e.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "26dcaa4239fa38f05d9825f8088ace0d"
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
  if (!resources || !(await caches.match(`/app-8f5dc351b0d6d90978c5.js`))) {
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
