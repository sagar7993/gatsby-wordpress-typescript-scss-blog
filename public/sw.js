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
    "url": "webpack-runtime-927d2fd44160dabf1701.js"
  },
  {
    "url": "commons.01f90a68b750bb094442.css"
  },
  {
    "url": "commons-7afc37335f8922b9df55.js"
  },
  {
    "url": "app-4807047d5d434fd9b536.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-278f0d87d799c5fe9f4e.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "4765864e49c1be5df073cf6ca3007de0"
  },
  {
    "url": "styles.4ee6360c92b32c6659b5.css"
  },
  {
    "url": "component---src-templates-blog-posts-tsx-9350ffa8a4c65a9ef097.js"
  },
  {
    "url": "styles-393a14d072fbe6be1f16.js"
  },
  {
    "url": "page-data/posts/2/page-data.json",
    "revision": "67bece772fd0c564491f4aa4e3778b4c"
  },
  {
    "url": "page-data/posts/3/page-data.json",
    "revision": "ccc9b96e811d9769bd678ac6d643f62d"
  },
  {
    "url": "page-data/posts/page-data.json",
    "revision": "e916c38288f2141c3ed197a754ef3d9b"
  },
  {
    "url": "component---src-templates-blog-post-tsx-45346f1cff3b733e5b83.js"
  },
  {
    "url": "page-data/post/this-is-my-1st-post/page-data.json",
    "revision": "64af38917272cd093a22d6ae4b114e7a"
  },
  {
    "url": "page-data/post/this-is-my-2nd-post/page-data.json",
    "revision": "e20d157189bf6e456b8362817e01206f"
  },
  {
    "url": "page-data/post/this-is-my-3rd-post/page-data.json",
    "revision": "1e3cf607098257b421963dccd3670ce5"
  },
  {
    "url": "page-data/post/this-is-my-4th-post/page-data.json",
    "revision": "1f6ba0767357d151f40b92e0f7a7996b"
  },
  {
    "url": "page-data/post/this-is-my-5th-post/page-data.json",
    "revision": "64d3f89197cbd2957d787817de34423f"
  },
  {
    "url": "page-data/post/this-is-my-6th-post/page-data.json",
    "revision": "4177a4e97665584cc3edd3007c2cf86d"
  },
  {
    "url": "component---src-pages-about-tsx-3c610b0f473abd8936eb.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "425e0f6a9702d2c6e1bdb98a0d8686bf"
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

const navigationRoute = new NavigationRoute(async ({ event }) => {
  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-4807047d5d434fd9b536.js`))) {
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

const messageApi = {
  setPathResources(event, { path, resources }) {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources(event) {
    event.waitUntil(idbKeyval.clear())
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi } = event.data
  if (gatsbyApi) messageApi[gatsbyApi](event, event.data)
})
