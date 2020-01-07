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
    "revision": "419b4b9021435b880f7e4887a685e4d4"
  },
  {
    "url": "component---src-templates-blog-posts-tsx-784bafd240d54c2faa26.js"
  },
  {
    "url": "page-data/posts/2/page-data.json",
    "revision": "9a9a8771d28a100ac5a9c4aa239057fb"
  },
  {
    "url": "page-data/posts/3/page-data.json",
    "revision": "daf2a3f0a985e0a0a551de75579c7368"
  },
  {
    "url": "page-data/posts/page-data.json",
    "revision": "58bfb65bf4d06e5cef28925ce134156a"
  },
  {
    "url": "component---src-templates-blog-post-tsx-bda79f24cf62e7c54f1e.js"
  },
  {
    "url": "page-data/post/this-is-my-1st-post/page-data.json",
    "revision": "ee1611eb9b418e204e5ec535ed748e37"
  },
  {
    "url": "page-data/post/this-is-my-2nd-post/page-data.json",
    "revision": "af8ad4b47cd5b68f0d6cbee4a00300e0"
  },
  {
    "url": "page-data/post/this-is-my-3rd-post/page-data.json",
    "revision": "3f302514f0447b48fc4d5331acb77e76"
  },
  {
    "url": "page-data/post/this-is-my-4th-post/page-data.json",
    "revision": "0612b58f6d24a5b83ae351330d71c52d"
  },
  {
    "url": "page-data/post/this-is-my-5th-post/page-data.json",
    "revision": "4c4a673745295a657ec3b5ead3246b10"
  },
  {
    "url": "page-data/post/this-is-my-6th-post/page-data.json",
    "revision": "411c1bcbaf46e750e28f6443aa19ff6e"
  },
  {
    "url": "component---src-templates-blog-tag-posts-tsx-4065e4008de4d2dae5f2.js"
  },
  {
    "url": "page-data/tag/adventure/page-data.json",
    "revision": "c3f4fccba0dba9cc8a0dd260365bacb7"
  },
  {
    "url": "page-data/tag/food/page-data.json",
    "revision": "075f495fb587e8997a06990230312e51"
  },
  {
    "url": "page-data/tag/life/page-data.json",
    "revision": "9c4f717fd4ab98f90793b6a8ef44903d"
  },
  {
    "url": "page-data/tag/nature/page-data.json",
    "revision": "1ecbc496637a4170b3ad05ec5ba4e888"
  },
  {
    "url": "page-data/tag/travel/page-data.json",
    "revision": "c6d54392ee9794e3258ed0352f5f2763"
  },
  {
    "url": "component---src-templates-blog-category-posts-tsx-9536f111608f42dc0a93.js"
  },
  {
    "url": "page-data/category/adventure/page-data.json",
    "revision": "b321ebc3700da0f7b90ebfa54bcb978c"
  },
  {
    "url": "page-data/category/food/page-data.json",
    "revision": "559ebd37e4c449051d5f5ddbe63863a3"
  },
  {
    "url": "page-data/category/life/page-data.json",
    "revision": "182acb8d8d520b7492b5e8b7a1570a54"
  },
  {
    "url": "page-data/category/nature/page-data.json",
    "revision": "cd0d24af4cbd1b38024650748c2dba46"
  },
  {
    "url": "page-data/category/travel/page-data.json",
    "revision": "04f5ed91537698bc0f8a4c4ca9544d1d"
  },
  {
    "url": "component---src-pages-about-tsx-195c5e2e2bcfa7eb044d.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "148f5703b5467795a5b49ece32385361"
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
