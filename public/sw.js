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
    "url": "webpack-runtime-a4c6c73c3daf59608287.js"
  },
  {
    "url": "commons.03010c0a4e00d53bd6bf.css"
  },
  {
    "url": "commons-910717627cc01fac66c9.js"
  },
  {
    "url": "app-7d756ee6b84e914ea57d.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-b8e58da3b5c36d83eec8.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "18267e88dbea3716713d1cdc71e1027a"
  },
  {
    "url": "styles.54dd774da1217f0cfa85.css"
  },
  {
    "url": "component---src-pages-index-tsx-fdbcdcc93a5058fabb18.js"
  },
  {
    "url": "styles-0014436a62495802b91d.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "effefdb57cf603bef3e89189d844107c"
  },
  {
    "url": "component---src-templates-blog-posts-tsx-fe71ce2f81d7cd3417ce.js"
  },
  {
    "url": "page-data/posts/2/page-data.json",
    "revision": "d143c0f9da86fe0a1a9240b825bb19a8"
  },
  {
    "url": "page-data/posts/3/page-data.json",
    "revision": "3ba0be1f1dbfc22928c8e35f6dfb7f07"
  },
  {
    "url": "page-data/posts/page-data.json",
    "revision": "123545e681d935e611a206ede78bfe60"
  },
  {
    "url": "component---src-templates-blog-post-tsx-e77f718f4ad3d4577a60.js"
  },
  {
    "url": "page-data/post/this-is-my-1st-post/page-data.json",
    "revision": "7b0e4d832e69daefcf29cc96db19f817"
  },
  {
    "url": "page-data/post/this-is-my-2nd-post/page-data.json",
    "revision": "d184e72c667432662d6813a81732f5d2"
  },
  {
    "url": "page-data/post/this-is-my-3rd-post/page-data.json",
    "revision": "45f338e64fc9c837c5a98771a0cf4ca4"
  },
  {
    "url": "page-data/post/this-is-my-4th-post/page-data.json",
    "revision": "2b179e4272386a7c2202da3110b5fcc5"
  },
  {
    "url": "page-data/post/this-is-my-5th-post/page-data.json",
    "revision": "ca5a95813b87271663910c2b6ed7ce59"
  },
  {
    "url": "page-data/post/this-is-my-6th-post/page-data.json",
    "revision": "8e07c90e39588912529758ba8366ecaf"
  },
  {
    "url": "component---src-templates-blog-tag-posts-tsx-f45ee9a1f4668c907d90.js"
  },
  {
    "url": "page-data/tag/adventure/page-data.json",
    "revision": "00db67bdb38b8a5bcf657fab98bc9709"
  },
  {
    "url": "page-data/tag/food/page-data.json",
    "revision": "fb7eb29fcfbfe3626b607eedd25fa9c2"
  },
  {
    "url": "page-data/tag/life/page-data.json",
    "revision": "a7326fd68c37c3384747bbd182e444a6"
  },
  {
    "url": "page-data/tag/nature/page-data.json",
    "revision": "c698590205dd5858aea0f267274faa65"
  },
  {
    "url": "page-data/tag/travel/page-data.json",
    "revision": "8f9729e8922428879d4adb667995825e"
  },
  {
    "url": "component---src-templates-blog-category-posts-tsx-f1904524971fef7ef513.js"
  },
  {
    "url": "page-data/category/adventure/page-data.json",
    "revision": "c14d7c92f3401a1f2afb025d35ea5180"
  },
  {
    "url": "page-data/category/food/page-data.json",
    "revision": "9ea7a11bb805090e7db703418886e809"
  },
  {
    "url": "page-data/category/life/page-data.json",
    "revision": "ac08c41fbbdaa02edb44c2ad7f5054cc"
  },
  {
    "url": "page-data/category/nature/page-data.json",
    "revision": "ebb20c4f18b714ae71b3164bbb5c089a"
  },
  {
    "url": "page-data/category/travel/page-data.json",
    "revision": "5ef028d6267fd5ea924dbaca70586419"
  },
  {
    "url": "component---src-pages-about-tsx-62c0a763dcb2a2fd9582.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "c2ed886b964fce3dd22e49c5d661e9b0"
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
  if (!resources || !(await caches.match(`/app-7d756ee6b84e914ea57d.js`))) {
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
