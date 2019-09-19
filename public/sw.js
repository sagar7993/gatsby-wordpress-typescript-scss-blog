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
    "url": "webpack-runtime-aae7bbc3fdfb32cf0564.js"
  },
  {
    "url": "commons.928de637a6a92a39992c.css"
  },
  {
    "url": "commons-fac968f3478dc9488475.js"
  },
  {
    "url": "app-802f40e14987ca20bf21.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-8c17f67f366519e55d7f.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "e12f48de965d8ccf2cd49607223fe843"
  },
  {
    "url": "styles.4ee6360c92b32c6659b5.css"
  },
  {
    "url": "component---src-templates-blog-posts-tsx-ad2a04cb32005360ae38.js"
  },
  {
    "url": "styles-fed08a58f6266b44f54b.js"
  },
  {
    "url": "page-data/posts/2/page-data.json",
    "revision": "ac5862c87df01d6a885317b7ca53b588"
  },
  {
    "url": "page-data/posts/3/page-data.json",
    "revision": "fe1336935153b6c3320ea128373222e8"
  },
  {
    "url": "page-data/posts/page-data.json",
    "revision": "71e92b84d0fb1c3ef67a4154c6c10a46"
  },
  {
    "url": "component---src-templates-blog-post-tsx-ecc3e3fdfff57ba1cdf6.js"
  },
  {
    "url": "page-data/post/this-is-my-1st-post/page-data.json",
    "revision": "50398ee51e7ead25e8b93deb1afbf334"
  },
  {
    "url": "page-data/post/this-is-my-2nd-post/page-data.json",
    "revision": "8248164a2415260f954273f7418d47b0"
  },
  {
    "url": "page-data/post/this-is-my-3rd-post/page-data.json",
    "revision": "c975f198af7bf5f16fb6db33201dabfc"
  },
  {
    "url": "page-data/post/this-is-my-4th-post/page-data.json",
    "revision": "a34a40e6923bb109a018c61bf9606cb6"
  },
  {
    "url": "page-data/post/this-is-my-5th-post/page-data.json",
    "revision": "48e37f253146da07dcc6f99ee90c5e55"
  },
  {
    "url": "page-data/post/this-is-my-6th-post/page-data.json",
    "revision": "230c7c567a4cbc68b5f28ba141111532"
  },
  {
    "url": "component---src-pages-about-tsx-78b3a549f80590dab778.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "33025f7fd47c51ba8f7eecc12ca064dc"
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
  if (!resources || !(await caches.match(`/app-802f40e14987ca20bf21.js`))) {
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
