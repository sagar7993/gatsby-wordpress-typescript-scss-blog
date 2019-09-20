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
    "url": "webpack-runtime-a0481908a00a10ab0f39.js"
  },
  {
    "url": "commons.337ca6bd982f85bcd2f8.css"
  },
  {
    "url": "commons-56e42c38331ef1d1a19e.js"
  },
  {
    "url": "app-790271417795040b036e.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-8c17f67f366519e55d7f.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "ad1a641632b9ef1c545ea09f810ce1af"
  },
  {
    "url": "styles.4ee6360c92b32c6659b5.css"
  },
  {
    "url": "component---src-templates-blog-posts-tsx-5543ecc9fc7c4fc91988.js"
  },
  {
    "url": "styles-550f9924968eb1183bb3.js"
  },
  {
    "url": "page-data/posts/2/page-data.json",
    "revision": "c3a286690031972ace512dfec2da2f91"
  },
  {
    "url": "page-data/posts/3/page-data.json",
    "revision": "b869467cd1f0f011ea44b33758db662a"
  },
  {
    "url": "page-data/posts/page-data.json",
    "revision": "767ca5ee4de5ce91aac4b57bba589fad"
  },
  {
    "url": "component---src-templates-blog-post-tsx-04d531d6bf6178254d67.js"
  },
  {
    "url": "page-data/post/this-is-my-1st-post/page-data.json",
    "revision": "0dedc13f025df86c9dee912d7e9a173b"
  },
  {
    "url": "page-data/post/this-is-my-2nd-post/page-data.json",
    "revision": "39c75d295724827e4f751b45f4190c5d"
  },
  {
    "url": "page-data/post/this-is-my-3rd-post/page-data.json",
    "revision": "fc96bca0df23c5a685f23841fa877c15"
  },
  {
    "url": "page-data/post/this-is-my-4th-post/page-data.json",
    "revision": "a05a07f99c8bc97e75ade06a500b7341"
  },
  {
    "url": "page-data/post/this-is-my-5th-post/page-data.json",
    "revision": "0670d10339cb3875cc3401566fabbf79"
  },
  {
    "url": "page-data/post/this-is-my-6th-post/page-data.json",
    "revision": "4fa364bf7df24fa833a2d791a53237c6"
  },
  {
    "url": "component---src-pages-about-tsx-07bbc9db595caca8bd8c.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "050fc328bfb5e50ac970f5a09d99ed3b"
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
  if (!resources || !(await caches.match(`/app-790271417795040b036e.js`))) {
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
