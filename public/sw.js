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
    "url": "webpack-runtime-9545511369df5d610483.js"
  },
  {
    "url": "commons.2229e8780a1c8d1635d0.css"
  },
  {
    "url": "commons-b7d976b9aef20b6d0689.js"
  },
  {
    "url": "app-db059d9ef05dfebb9351.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-1d26d3f34ffaad76b4c2.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "53bded41ec01f30f071578620171083f"
  },
  {
    "url": "styles.aafcee07cdeaed2d3549.css"
  },
  {
    "url": "component---src-templates-blog-posts-tsx-a704d1f6fd85080b7fd2.js"
  },
  {
    "url": "styles-24faf0dc9bbcd00283f6.js"
  },
  {
    "url": "page-data/posts/2/page-data.json",
    "revision": "2be15d8ec3207380b061e085285bae15"
  },
  {
    "url": "page-data/posts/3/page-data.json",
    "revision": "57363e95641206f4bd889c9d8d7c48a2"
  },
  {
    "url": "page-data/posts/page-data.json",
    "revision": "cf1d503a5305136bbbdb6b4d94038053"
  },
  {
    "url": "component---src-templates-blog-post-tsx-980b242427698f2bb988.js"
  },
  {
    "url": "page-data/post/this-is-my-1st-post/page-data.json",
    "revision": "4f431000ee0535ccc356f643c0e91b8f"
  },
  {
    "url": "page-data/post/this-is-my-2nd-post/page-data.json",
    "revision": "2cf9c706c57118431739162a5fba5732"
  },
  {
    "url": "page-data/post/this-is-my-3rd-post/page-data.json",
    "revision": "aa778035e024a05adce0122a561b4ac6"
  },
  {
    "url": "page-data/post/this-is-my-4th-post/page-data.json",
    "revision": "e14e8c9a48183b583a974595773bca3d"
  },
  {
    "url": "page-data/post/this-is-my-5th-post/page-data.json",
    "revision": "c19199f67168ea3e066e746f6d4f7de4"
  },
  {
    "url": "page-data/post/this-is-my-6th-post/page-data.json",
    "revision": "32fb4887db4970bef31364b56750af9d"
  },
  {
    "url": "component---src-pages-about-tsx-589effc09b7ac9ec8954.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "0d46b8d8620ad2999c508b13fa6e5926"
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
  if (!resources || !(await caches.match(`/app-db059d9ef05dfebb9351.js`))) {
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
