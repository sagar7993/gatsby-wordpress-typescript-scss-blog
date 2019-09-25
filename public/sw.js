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
    "url": "webpack-runtime-a5a18551e63c27995040.js"
  },
  {
    "url": "commons.7c42508dda9023fe2a78.css"
  },
  {
    "url": "commons-5ab21ad70f0168f08b41.js"
  },
  {
    "url": "app-0a9e1d5e8f42a8d72229.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-669662d6a8ccd969794d.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "53acbbf25099c5af194b9d9668a750c2"
  },
  {
    "url": "styles.1797f6ac3edcfa8b1a1c.css"
  },
  {
    "url": "component---src-pages-index-tsx-666378b52309c3a22f74.js"
  },
  {
    "url": "styles-0559f5767b471089abe7.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "8c923e494842269ea150d25a6239cab5"
  },
  {
    "url": "component---src-templates-blog-posts-tsx-83cf2cdee6ad3fdd7666.js"
  },
  {
    "url": "page-data/posts/2/page-data.json",
    "revision": "bc597f4e409756268e6118cc29aae906"
  },
  {
    "url": "page-data/posts/3/page-data.json",
    "revision": "42b6f64028c1a09a60fe8f8184ced9b3"
  },
  {
    "url": "page-data/posts/page-data.json",
    "revision": "9bed6526cba9f386315b1ece7863310b"
  },
  {
    "url": "component---src-templates-blog-post-tsx-59bfc53e0095347897bb.js"
  },
  {
    "url": "page-data/post/this-is-my-1st-post/page-data.json",
    "revision": "8260fc8c6d631e07faa4553189750297"
  },
  {
    "url": "page-data/post/this-is-my-2nd-post/page-data.json",
    "revision": "e94ec926e1758ef83458ad88cc002d9f"
  },
  {
    "url": "page-data/post/this-is-my-3rd-post/page-data.json",
    "revision": "6cacb43379ef49e81365aec127de4266"
  },
  {
    "url": "page-data/post/this-is-my-4th-post/page-data.json",
    "revision": "3c24e73ede8a8b1a11146af8feefaa9e"
  },
  {
    "url": "page-data/post/this-is-my-5th-post/page-data.json",
    "revision": "c62fd7a46cea8329f2600dfef380c2f4"
  },
  {
    "url": "page-data/post/this-is-my-6th-post/page-data.json",
    "revision": "31b2841e60fab4678529d562f5e0629d"
  },
  {
    "url": "component---src-templates-blog-tag-posts-tsx-b62cbaeed482044527f4.js"
  },
  {
    "url": "page-data/tag/adventure/page-data.json",
    "revision": "3add85d7423a25c488224724547fcbcd"
  },
  {
    "url": "page-data/tag/food/page-data.json",
    "revision": "58c7d3079441114f736706ff9487127f"
  },
  {
    "url": "page-data/tag/life/page-data.json",
    "revision": "d089439159ec203100ff2593fe083bf5"
  },
  {
    "url": "page-data/tag/nature/page-data.json",
    "revision": "0d4433b41d66bec0647eb565487914c0"
  },
  {
    "url": "page-data/tag/travel/page-data.json",
    "revision": "59aa009aa68b61dcd9b463c33eacdd0f"
  },
  {
    "url": "component---src-templates-blog-category-posts-tsx-71e96a4cfd50a1c147d1.js"
  },
  {
    "url": "page-data/category/adventure/page-data.json",
    "revision": "f42abc7d38c897b729a51992a667d5a8"
  },
  {
    "url": "page-data/category/food/page-data.json",
    "revision": "835d3bc85547152e0cca778d908ad1d4"
  },
  {
    "url": "page-data/category/life/page-data.json",
    "revision": "e305df490b5e63377d90db5b8e34c856"
  },
  {
    "url": "page-data/category/nature/page-data.json",
    "revision": "98914d362e712f4c51fd681c4a5b994e"
  },
  {
    "url": "page-data/category/travel/page-data.json",
    "revision": "0b8086e3cb0ed97136dab7909299c249"
  },
  {
    "url": "component---src-pages-about-tsx-3c0ceb9ed9226f42ab0b.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "9d1845f7ecc3d4ea5e4b6955b21fd6a6"
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
  if (!resources || !(await caches.match(`/app-0a9e1d5e8f42a8d72229.js`))) {
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
