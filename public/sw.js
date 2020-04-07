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
    "revision": "85b63cb5254eab3db5d81ef3bfbac37f"
  },
  {
    "url": "component---src-templates-blog-posts-tsx-784bafd240d54c2faa26.js"
  },
  {
    "url": "page-data/posts/2/page-data.json",
    "revision": "70aac41942e52071696f43dde82d61eb"
  },
  {
    "url": "page-data/posts/3/page-data.json",
    "revision": "28878212e745792489ba25fa2743b6dc"
  },
  {
    "url": "page-data/posts/page-data.json",
    "revision": "206b42e0774f8f4b9078a3895a331ebf"
  },
  {
    "url": "component---src-templates-blog-post-tsx-bda79f24cf62e7c54f1e.js"
  },
  {
    "url": "page-data/post/this-is-my-1st-post/page-data.json",
    "revision": "c58b600007ce0f6f25b5e1e9c3909b5f"
  },
  {
    "url": "page-data/post/this-is-my-2nd-post/page-data.json",
    "revision": "cac7f461112434b4c1942c3f67a60be6"
  },
  {
    "url": "page-data/post/this-is-my-3rd-post/page-data.json",
    "revision": "33373642b61188836a282fc9eaa4e30d"
  },
  {
    "url": "page-data/post/this-is-my-4th-post/page-data.json",
    "revision": "1b660804a6874456b77f070c57599bab"
  },
  {
    "url": "page-data/post/this-is-my-5th-post/page-data.json",
    "revision": "2e5c39f216430be95b96329a956445b8"
  },
  {
    "url": "page-data/post/this-is-my-6th-post/page-data.json",
    "revision": "34a250a0b7ebce0e4b49d82b2aa8674f"
  },
  {
    "url": "component---src-templates-blog-tag-posts-tsx-4065e4008de4d2dae5f2.js"
  },
  {
    "url": "page-data/tag/adventure/page-data.json",
    "revision": "16b49e683869b139e2b9ce37b78679be"
  },
  {
    "url": "page-data/tag/food/page-data.json",
    "revision": "c2efeb1ccb3c24bac102120c03eacbe5"
  },
  {
    "url": "page-data/tag/life/page-data.json",
    "revision": "43fae39693bd78aa74f2ce4b700f2329"
  },
  {
    "url": "page-data/tag/nature/page-data.json",
    "revision": "70e97ae8f2ec4c431dfb61d285bff201"
  },
  {
    "url": "page-data/tag/travel/page-data.json",
    "revision": "ee077f49775013631f3223f19673caf2"
  },
  {
    "url": "component---src-templates-blog-category-posts-tsx-9536f111608f42dc0a93.js"
  },
  {
    "url": "page-data/category/adventure/page-data.json",
    "revision": "6d30567f466b27f5bdfea9feaebbad48"
  },
  {
    "url": "page-data/category/food/page-data.json",
    "revision": "a3b954a5ef1bbb8e54c8dd9617939f00"
  },
  {
    "url": "page-data/category/life/page-data.json",
    "revision": "192d52ba8bbfed6226ff4dc247d6a16a"
  },
  {
    "url": "page-data/category/nature/page-data.json",
    "revision": "3424b6cb386e86005c74fc05c99f14e3"
  },
  {
    "url": "page-data/category/travel/page-data.json",
    "revision": "b087431ea2d4c261dc2156ad4b99d908"
  },
  {
    "url": "component---src-pages-about-tsx-195c5e2e2bcfa7eb044d.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "600686b30e405b8c0580b120a3b8fe36"
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
