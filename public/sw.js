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
    "url": "webpack-runtime-125f6170b4078d2a30ec.js"
  },
  {
    "url": "commons.37c678e93c076a374ed5.css"
  },
  {
    "url": "commons-7ddf191d3fc294c0b79b.js"
  },
  {
    "url": "app-7a95e131407176ee4e98.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-8976e363f997194e448f.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "d936a831420227dcd881b69e7aa8c339"
  },
  {
    "url": "styles.b2ea84ef2d612c45c96d.css"
  },
  {
    "url": "component---src-pages-index-tsx-4e92fc75c54543fb1e6b.js"
  },
  {
    "url": "styles-dc7634fbe3aee995dcf1.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "db1d9d7f71952459d1bc9f5a4e235cc7"
  },
  {
    "url": "component---src-templates-blog-posts-tsx-8cceca126b7cdbdc1a97.js"
  },
  {
    "url": "page-data/posts/2/page-data.json",
    "revision": "faaaf12204a356d7477c3945d79d537c"
  },
  {
    "url": "page-data/posts/3/page-data.json",
    "revision": "3650c7ea0d387cae7cbab2fe7f7e29cf"
  },
  {
    "url": "page-data/posts/page-data.json",
    "revision": "a6fccc4db8f27a5c6ec976f2080f8bad"
  },
  {
    "url": "component---src-templates-blog-post-tsx-6f0de160d8a0ade00eb9.js"
  },
  {
    "url": "page-data/post/this-is-my-1st-post/page-data.json",
    "revision": "b979d269e0fee2365666a43351e2b541"
  },
  {
    "url": "page-data/post/this-is-my-2nd-post/page-data.json",
    "revision": "91c03758c3036a1e359739b67aab6334"
  },
  {
    "url": "page-data/post/this-is-my-3rd-post/page-data.json",
    "revision": "7b8a76d51bbaec6200ed7c580e8d661a"
  },
  {
    "url": "page-data/post/this-is-my-4th-post/page-data.json",
    "revision": "942ba411d8b7c6496a6ce2997c5d1caa"
  },
  {
    "url": "page-data/post/this-is-my-5th-post/page-data.json",
    "revision": "975318ee4999c07ddd39f9b7fb097122"
  },
  {
    "url": "page-data/post/this-is-my-6th-post/page-data.json",
    "revision": "214bfbd24ba204d6807b02564c748541"
  },
  {
    "url": "component---src-templates-blog-tag-posts-tsx-bc4c0b4ef6d4b64e74a1.js"
  },
  {
    "url": "page-data/tag/adventure/page-data.json",
    "revision": "881addff3c5086ad2853467f51bafc4a"
  },
  {
    "url": "page-data/tag/food/page-data.json",
    "revision": "8aa5c7b627589686ae639ea8756ef55e"
  },
  {
    "url": "page-data/tag/life/page-data.json",
    "revision": "2977ff0cb2a397e5f8900b0c7b7f6934"
  },
  {
    "url": "page-data/tag/nature/page-data.json",
    "revision": "5e8e3a5e854910b9a018bea82824712b"
  },
  {
    "url": "page-data/tag/travel/page-data.json",
    "revision": "f98299675cc55423c23d24e4e407c041"
  },
  {
    "url": "component---src-templates-blog-category-posts-tsx-981d7d5faf7e46e416b9.js"
  },
  {
    "url": "page-data/category/adventure/page-data.json",
    "revision": "0254efcd95ab0bda39dbced9fb93d147"
  },
  {
    "url": "page-data/category/food/page-data.json",
    "revision": "af0f1d7d6496d39229a3fda18b05ae46"
  },
  {
    "url": "page-data/category/life/page-data.json",
    "revision": "1918335652200b27a5757dd525f26bbb"
  },
  {
    "url": "page-data/category/nature/page-data.json",
    "revision": "66592352b84a7039fc64fc13e0b81d38"
  },
  {
    "url": "page-data/category/travel/page-data.json",
    "revision": "9fa58b8cc6560782a9369f6906bd8016"
  },
  {
    "url": "component---src-pages-about-tsx-59a604a6268afc7ec76b.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "8ae2beadc0174d37c4b3f9b07dfd3865"
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
