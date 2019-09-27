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
    "url": "webpack-runtime-463eded49b9866f7a79e.js"
  },
  {
    "url": "commons.03c1a64de2488eead0ad.css"
  },
  {
    "url": "commons-787bac5e20d43b0a446d.js"
  },
  {
    "url": "app-c818916fd86647ec774b.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-75a2af7a721dc559acd1.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "da57db28bdba36f6e542064f83359ca1"
  },
  {
    "url": "styles.54dd774da1217f0cfa85.css"
  },
  {
    "url": "component---src-pages-index-tsx-525705839bfcce60be1c.js"
  },
  {
    "url": "styles-67f57b4b6f43a6601447.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "374b3bd2f2495c95174ea2fa04bc1f06"
  },
  {
    "url": "component---src-templates-blog-posts-tsx-ef038c61aca6dbe843a9.js"
  },
  {
    "url": "page-data/posts/2/page-data.json",
    "revision": "1815cacc0cda2e257b2c5c3eafede16e"
  },
  {
    "url": "page-data/posts/3/page-data.json",
    "revision": "3aed6ce80532804df9b381caf85b786a"
  },
  {
    "url": "page-data/posts/page-data.json",
    "revision": "16386ee095623511958d103d2be3ca35"
  },
  {
    "url": "component---src-templates-blog-post-tsx-a3862f66009e9592d4fc.js"
  },
  {
    "url": "page-data/post/this-is-my-1st-post/page-data.json",
    "revision": "1a8da4fb35845b704105cbbd83a31a49"
  },
  {
    "url": "page-data/post/this-is-my-2nd-post/page-data.json",
    "revision": "44f8b96fffcfd65bdf2d9bb99efa7cfa"
  },
  {
    "url": "page-data/post/this-is-my-3rd-post/page-data.json",
    "revision": "4a53a73a56224e8fafae2d693a6bba2e"
  },
  {
    "url": "page-data/post/this-is-my-4th-post/page-data.json",
    "revision": "2a955c553f2aac14daedca3d0e0fa5ad"
  },
  {
    "url": "page-data/post/this-is-my-5th-post/page-data.json",
    "revision": "8e75254b678b87edbf108fc7a4c91c9a"
  },
  {
    "url": "page-data/post/this-is-my-6th-post/page-data.json",
    "revision": "153829f029a61adc7ab055eeb439cd5d"
  },
  {
    "url": "component---src-templates-blog-tag-posts-tsx-5f576b55ea5d125ad117.js"
  },
  {
    "url": "page-data/tag/adventure/page-data.json",
    "revision": "47fb3fd5b291282b7d6d4bffa026c326"
  },
  {
    "url": "page-data/tag/food/page-data.json",
    "revision": "014f301786f6ea5a406c497e1ecbf5d4"
  },
  {
    "url": "page-data/tag/life/page-data.json",
    "revision": "90c268130b4b071179c002ad75823650"
  },
  {
    "url": "page-data/tag/nature/page-data.json",
    "revision": "540187fc34698c5d6242b60c17a4c90a"
  },
  {
    "url": "page-data/tag/travel/page-data.json",
    "revision": "1542481b780217ab252c695fdba1997e"
  },
  {
    "url": "component---src-templates-blog-category-posts-tsx-21bd56b89ca7df52a3a3.js"
  },
  {
    "url": "page-data/category/adventure/page-data.json",
    "revision": "78a730084d4a144a53d80c0ac56eb319"
  },
  {
    "url": "page-data/category/food/page-data.json",
    "revision": "a2c7ede6042832754f395a5e3dd7fe01"
  },
  {
    "url": "page-data/category/life/page-data.json",
    "revision": "11d5a573872a1d9d362ee19805c8d370"
  },
  {
    "url": "page-data/category/nature/page-data.json",
    "revision": "5d2d0dba1329af7df4cd6613b6163729"
  },
  {
    "url": "page-data/category/travel/page-data.json",
    "revision": "10fd673081df646aadb1c9eb5a3df0c9"
  },
  {
    "url": "component---src-pages-about-tsx-d5319ead198ebf6d6b70.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "af53644a774c7182d180db350a46cc06"
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
  if (!resources || !(await caches.match(`/app-c818916fd86647ec774b.js`))) {
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
