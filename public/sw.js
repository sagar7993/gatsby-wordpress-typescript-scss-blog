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
    "url": "webpack-runtime-a2e5f48aa3dedbfc2abd.js"
  },
  {
    "url": "commons.f9054fa6bdebd79d82cb.css"
  },
  {
    "url": "commons-65ed8a49fc53dc46fc2c.js"
  },
  {
    "url": "app-df9cad7e6699b014882a.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-669662d6a8ccd969794d.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "7f4d5a50bc510201e77f60162f5734a7"
  },
  {
    "url": "styles.1797f6ac3edcfa8b1a1c.css"
  },
  {
    "url": "component---src-pages-index-tsx-ce170b9d68bbb82f6022.js"
  },
  {
    "url": "styles-521e9060923d77da63a3.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "5d7c9a2a4b44f45e113bd0b98949011c"
  },
  {
    "url": "component---src-templates-blog-posts-tsx-733c590167fde450438e.js"
  },
  {
    "url": "page-data/posts/2/page-data.json",
    "revision": "f612ce5706159d9ad15ecf9c577046ef"
  },
  {
    "url": "page-data/posts/3/page-data.json",
    "revision": "b11eaf76540e56e310f7e255c3379f2a"
  },
  {
    "url": "page-data/posts/page-data.json",
    "revision": "abbc636c7235978ec1d997dbadea8921"
  },
  {
    "url": "component---src-templates-blog-post-tsx-c2862de6dc63621cb54a.js"
  },
  {
    "url": "page-data/post/this-is-my-1st-post/page-data.json",
    "revision": "f8d3921c2eadbfaf25d9505013c308ca"
  },
  {
    "url": "page-data/post/this-is-my-2nd-post/page-data.json",
    "revision": "fc225b3ba3abafc46f50238f12058cd4"
  },
  {
    "url": "page-data/post/this-is-my-3rd-post/page-data.json",
    "revision": "70834ce8447857259ca3668e0fd1d2a3"
  },
  {
    "url": "page-data/post/this-is-my-4th-post/page-data.json",
    "revision": "c08cc94af86640c0494a52499dbe6dab"
  },
  {
    "url": "page-data/post/this-is-my-5th-post/page-data.json",
    "revision": "717ebd65202f440bc7ec6e61f8698cd1"
  },
  {
    "url": "page-data/post/this-is-my-6th-post/page-data.json",
    "revision": "26e3e3d2c189a474374472ff75c498db"
  },
  {
    "url": "component---src-templates-blog-tag-posts-tsx-a7179c5a24d6d9df2cb1.js"
  },
  {
    "url": "page-data/tag/adventure/page-data.json",
    "revision": "2ada1990985370f2446ff1b9969464b7"
  },
  {
    "url": "page-data/tag/food/page-data.json",
    "revision": "30839393285f53db40908cc24a7d4bdd"
  },
  {
    "url": "page-data/tag/life/page-data.json",
    "revision": "49108999e8111e697551e01063f12bc1"
  },
  {
    "url": "page-data/tag/nature/page-data.json",
    "revision": "52110d5872e1dfb60f9be74b759da57d"
  },
  {
    "url": "page-data/tag/travel/page-data.json",
    "revision": "00657f0dfc2ff89147b2ad2fcc717719"
  },
  {
    "url": "component---src-templates-blog-category-posts-tsx-663803708b54e630961a.js"
  },
  {
    "url": "page-data/category/adventure/page-data.json",
    "revision": "97a3f4a45a050c13b81f88e4b45b3535"
  },
  {
    "url": "page-data/category/food/page-data.json",
    "revision": "c0a0c6a642d35abf547afb5c14e50ce8"
  },
  {
    "url": "page-data/category/life/page-data.json",
    "revision": "8f09488524e066ebee9f402f6fcb7252"
  },
  {
    "url": "page-data/category/nature/page-data.json",
    "revision": "513a8f6eeb7a7a9eb85b76d27cfb07bc"
  },
  {
    "url": "page-data/category/travel/page-data.json",
    "revision": "c372a6c1b0992813b8e0c74e75f430d9"
  },
  {
    "url": "component---src-pages-about-tsx-2b7b191ca1f784077976.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "c9ad1d2bd5a75427806ecbef71e67808"
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
  if (!resources || !(await caches.match(`/app-df9cad7e6699b014882a.js`))) {
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
