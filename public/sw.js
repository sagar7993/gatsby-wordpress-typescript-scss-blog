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
    "url": "webpack-runtime-cf575263b1f8ea1a2f2f.js"
  },
  {
    "url": "commons-b6fdbe03d9bdbaf7329f.js"
  },
  {
    "url": "app-651b8ccf15d29039198b.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-ee4887b5ff2b886d0d4e.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "78f6c7e5aef2754b3f92b4ba705c7b54"
  },
  {
    "url": "styles.640a95a0684ff4f05811.css"
  },
  {
    "url": "styles-2dc17ea8d54ce3314163.js"
  },
  {
    "url": "component---src-pages-index-tsx-fa3a8bc451ad6851c04e.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "adbcd54f95ea3f37256b0ba669a1be04"
  },
  {
    "url": "component---src-templates-blog-posts-tsx-784bafd240d54c2faa26.js"
  },
  {
    "url": "page-data/posts/2/page-data.json",
    "revision": "a34adc93eac417a20fb71bc3d7af3557"
  },
  {
    "url": "page-data/posts/3/page-data.json",
    "revision": "aec3c2cbfdf8d4454af18e34bc6a7515"
  },
  {
    "url": "page-data/posts/page-data.json",
    "revision": "99b0c655308c84bd2879244e2c968721"
  },
  {
    "url": "component---src-templates-blog-post-tsx-bda79f24cf62e7c54f1e.js"
  },
  {
    "url": "page-data/post/this-is-my-1st-post/page-data.json",
    "revision": "dcbcdb460028f8263b2d49c58160924d"
  },
  {
    "url": "page-data/post/this-is-my-2nd-post/page-data.json",
    "revision": "0f3cc2ad33cc62e8645688774662f053"
  },
  {
    "url": "page-data/post/this-is-my-3rd-post/page-data.json",
    "revision": "d3d645d6bf21a62ad3f17067d1ba09c8"
  },
  {
    "url": "page-data/post/this-is-my-4th-post/page-data.json",
    "revision": "aa94edf1d8fb380bbcac3c7749fb026d"
  },
  {
    "url": "page-data/post/this-is-my-5th-post/page-data.json",
    "revision": "79e277c0b6c935ea5f7333856ddb9cc2"
  },
  {
    "url": "page-data/post/this-is-my-6th-post/page-data.json",
    "revision": "5298d9cc027d45b4d943d8d297ac1cc6"
  },
  {
    "url": "component---src-templates-blog-tag-posts-tsx-4065e4008de4d2dae5f2.js"
  },
  {
    "url": "page-data/tag/adventure/page-data.json",
    "revision": "ac015c109b936fd1718c8420d473c268"
  },
  {
    "url": "page-data/tag/food/page-data.json",
    "revision": "407bc0546c4c5288e84d570e5cea419f"
  },
  {
    "url": "page-data/tag/life/page-data.json",
    "revision": "54badd1e4c871227136a328edcf72e4d"
  },
  {
    "url": "page-data/tag/nature/page-data.json",
    "revision": "1cf2f573fe221ebaa479616a46299ffa"
  },
  {
    "url": "page-data/tag/travel/page-data.json",
    "revision": "871f59b18fdd5438b55fbfd2f9d1007c"
  },
  {
    "url": "component---src-templates-blog-category-posts-tsx-9536f111608f42dc0a93.js"
  },
  {
    "url": "page-data/category/adventure/page-data.json",
    "revision": "8cabbd97dc5a12a152cb1c1bf49b17e6"
  },
  {
    "url": "page-data/category/food/page-data.json",
    "revision": "8ea2af54da239280150676d2e5aa9a2e"
  },
  {
    "url": "page-data/category/life/page-data.json",
    "revision": "0645d9881635a8783ba1ea3420e7ce21"
  },
  {
    "url": "page-data/category/nature/page-data.json",
    "revision": "b298b721a29ae855cc1f205752510715"
  },
  {
    "url": "page-data/category/travel/page-data.json",
    "revision": "afe0bac58d8b33a4525fb1173f5c410b"
  },
  {
    "url": "component---src-pages-about-tsx-195c5e2e2bcfa7eb044d.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "a77850122ac14d9b055a0125591d853e"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "c9a40402818f7743a848ec285c7cf598"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

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

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-651b8ccf15d29039198b.js`))) {
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

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
