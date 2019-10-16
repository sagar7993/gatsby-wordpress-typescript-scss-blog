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
    "url": "webpack-runtime-7d807ab64fc71b5e3b11.js"
  },
  {
    "url": "commons.af07c6897d0587987409.css"
  },
  {
    "url": "commons-b9833dfb96819d2001a8.js"
  },
  {
    "url": "app-07a1227e2fd6c2a318d2.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-284f675fc375812d3590.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "0f6be49ff4b56c9297d579f84c8b624e"
  },
  {
    "url": "styles.54dd774da1217f0cfa85.css"
  },
  {
    "url": "component---src-pages-index-tsx-14dac80cc27583613d7d.js"
  },
  {
    "url": "styles-96e3f00fbb164c54fb75.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "657319470db7e053c8e77e70d7847474"
  },
  {
    "url": "component---src-templates-blog-posts-tsx-7e02c036a9c7aaa8b4ef.js"
  },
  {
    "url": "page-data/posts/2/page-data.json",
    "revision": "510bd9893e71f66cfb6f64ddf142de35"
  },
  {
    "url": "page-data/posts/3/page-data.json",
    "revision": "622051c73ddb98cdf71c4584a67de2d9"
  },
  {
    "url": "page-data/posts/page-data.json",
    "revision": "033e4a30e0f7821c0ee54cc37b1dae3c"
  },
  {
    "url": "component---src-templates-blog-post-tsx-91586364350a8bb141b4.js"
  },
  {
    "url": "page-data/post/this-is-my-1st-post/page-data.json",
    "revision": "aff5f06ed8b887e6ac00adca9586b72b"
  },
  {
    "url": "page-data/post/this-is-my-2nd-post/page-data.json",
    "revision": "688dd27dbcbdf7bc647526e066e7f0f0"
  },
  {
    "url": "page-data/post/this-is-my-3rd-post/page-data.json",
    "revision": "55346a8e03ebaf070b173d6211d534c2"
  },
  {
    "url": "page-data/post/this-is-my-4th-post/page-data.json",
    "revision": "4a9a6a8da0765570f90bd8e2540a3f4b"
  },
  {
    "url": "page-data/post/this-is-my-5th-post/page-data.json",
    "revision": "c197a6d46bb2290c0c4484dbc27dd182"
  },
  {
    "url": "page-data/post/this-is-my-6th-post/page-data.json",
    "revision": "983ade81c6ff5abd04ff7e0ddec54079"
  },
  {
    "url": "component---src-templates-blog-tag-posts-tsx-6813eb0a82b96fdb0ebe.js"
  },
  {
    "url": "page-data/tag/adventure/page-data.json",
    "revision": "b25b71a501adfbc7b907add46f5d2c6c"
  },
  {
    "url": "page-data/tag/food/page-data.json",
    "revision": "d1b4dac9dd08838cf0828d98e4ade17f"
  },
  {
    "url": "page-data/tag/life/page-data.json",
    "revision": "68c65761adb30aa3cbdcf68721c27370"
  },
  {
    "url": "page-data/tag/nature/page-data.json",
    "revision": "40441d4af981e2c01e1d6ff9a769ae4f"
  },
  {
    "url": "page-data/tag/travel/page-data.json",
    "revision": "82d54c480c477b5ab4c930a09b762c8d"
  },
  {
    "url": "component---src-templates-blog-category-posts-tsx-b73158c82846563b3ffc.js"
  },
  {
    "url": "page-data/category/adventure/page-data.json",
    "revision": "bd0e7c8393dfee9ab9dcf6d0c9a958d9"
  },
  {
    "url": "page-data/category/food/page-data.json",
    "revision": "13cb87176dedc99e84742a089f666dd2"
  },
  {
    "url": "page-data/category/life/page-data.json",
    "revision": "065f0532ebf61541fb85764922981354"
  },
  {
    "url": "page-data/category/nature/page-data.json",
    "revision": "364fb082e4621e63363e69fadc0f3f58"
  },
  {
    "url": "page-data/category/travel/page-data.json",
    "revision": "2661a1e501c4db70edc5e590ade16517"
  },
  {
    "url": "component---src-pages-about-tsx-8948c518de620630b5ac.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "d64b724ea3e8b66ba5af0236dd07c93e"
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
  if (!resources || !(await caches.match(`/app-07a1227e2fd6c2a318d2.js`))) {
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
