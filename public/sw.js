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
    "url": "webpack-runtime-c091cdef2e9a5ad2cc2e.js"
  },
  {
    "url": "commons.01f90a68b750bb094442.css"
  },
  {
    "url": "commons-d9d79b7f68dddd851b42.js"
  },
  {
    "url": "app-37b12a5f8c786dff4ef8.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-ec51c786fa91e3bfdf06.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "a201d22cb5856af588d60275e40ff95c"
  },
  {
    "url": "styles.4ee6360c92b32c6659b5.css"
  },
  {
    "url": "component---src-templates-blog-posts-tsx-5380cc4d36bde0bd66db.js"
  },
  {
    "url": "styles-2cd085f5506306bc0f82.js"
  },
  {
    "url": "page-data/posts/2/page-data.json",
    "revision": "adbb5e8b5f68e76342832d26be6f3e02"
  },
  {
    "url": "page-data/posts/3/page-data.json",
    "revision": "3fd10e0521b3e638aa6958d813ad7a9d"
  },
  {
    "url": "page-data/posts/page-data.json",
    "revision": "82d7995220957db60c76a046dfc8c440"
  },
  {
    "url": "component---src-templates-blog-post-tsx-06d2936448297ea84797.js"
  },
  {
    "url": "page-data/post/this-is-my-1st-post/page-data.json",
    "revision": "c8872773af5797d5e944add03a66094e"
  },
  {
    "url": "page-data/post/this-is-my-2nd-post/page-data.json",
    "revision": "8dbaf951463997e62c1b5bd78b05bf5a"
  },
  {
    "url": "page-data/post/this-is-my-3rd-post/page-data.json",
    "revision": "3259a7470abb5b7a9aa01549763c6294"
  },
  {
    "url": "page-data/post/this-is-my-4th-post/page-data.json",
    "revision": "c6dee8f78b531a940b8afba81948c827"
  },
  {
    "url": "page-data/post/this-is-my-5th-post/page-data.json",
    "revision": "0c30d04b880b982c8c465cdf53a3a51f"
  },
  {
    "url": "page-data/post/this-is-my-6th-post/page-data.json",
    "revision": "f9532fc20c9b817d98b009394f480a02"
  },
  {
    "url": "component---src-pages-about-tsx-ba5aa64fde82d1321123.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "19dc7cd71fc5f378d088a23952dd42b7"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "b303b8316bf5832ac55be2a8fb214cf7"
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
  if (!resources || !(await caches.match(`/app-37b12a5f8c786dff4ef8.js`))) {
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
