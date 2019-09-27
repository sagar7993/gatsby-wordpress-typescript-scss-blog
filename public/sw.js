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
    "url": "webpack-runtime-d01d2acfd6d97729a73b.js"
  },
  {
    "url": "commons.1244018d0493af3b79fe.css"
  },
  {
    "url": "commons-10b2e1ea17b6c8a221c3.js"
  },
  {
    "url": "app-4cd965010a19c0287d09.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-75a2af7a721dc559acd1.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "92d14ec00bbe65f12e481c13131741f2"
  },
  {
    "url": "styles.54dd774da1217f0cfa85.css"
  },
  {
    "url": "component---src-pages-index-tsx-525705839bfcce60be1c.js"
  },
  {
    "url": "styles-6e925cea4fbc4fdb75b2.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "50cde7d40c520087502e077c70f4d89b"
  },
  {
    "url": "component---src-templates-blog-posts-tsx-ef038c61aca6dbe843a9.js"
  },
  {
    "url": "page-data/posts/2/page-data.json",
    "revision": "dcb9ef8478a256ae51d4a136d55322c5"
  },
  {
    "url": "page-data/posts/3/page-data.json",
    "revision": "ac1f3b8296e65858ba8e110039148149"
  },
  {
    "url": "page-data/posts/page-data.json",
    "revision": "a1bf1b0588c91422a9d5e89addbaedc3"
  },
  {
    "url": "component---src-templates-blog-post-tsx-488957fd239cf3a3bb7e.js"
  },
  {
    "url": "page-data/post/this-is-my-1st-post/page-data.json",
    "revision": "548484fa0ab1ea7e9d39c9fc4258bc89"
  },
  {
    "url": "page-data/post/this-is-my-2nd-post/page-data.json",
    "revision": "b97e493873cc5c28ce77801e4c7702dc"
  },
  {
    "url": "page-data/post/this-is-my-3rd-post/page-data.json",
    "revision": "158fcccd6094d4def02d16cc4567fd24"
  },
  {
    "url": "page-data/post/this-is-my-4th-post/page-data.json",
    "revision": "0f1a96b6e12ae59f8de2aa38e21d9f67"
  },
  {
    "url": "page-data/post/this-is-my-5th-post/page-data.json",
    "revision": "bb7bfe686bed56ac408323f4bf0b46d0"
  },
  {
    "url": "page-data/post/this-is-my-6th-post/page-data.json",
    "revision": "6b8a0bf4d38e7162c22313ab66ed7394"
  },
  {
    "url": "component---src-templates-blog-tag-posts-tsx-5f576b55ea5d125ad117.js"
  },
  {
    "url": "page-data/tag/adventure/page-data.json",
    "revision": "7bb70cafe8e312db08fe146554672d5f"
  },
  {
    "url": "page-data/tag/food/page-data.json",
    "revision": "ef9e4d07e6fbd560c4e84de425ad137a"
  },
  {
    "url": "page-data/tag/life/page-data.json",
    "revision": "f812b0a646e59b38b5266998278cb5d9"
  },
  {
    "url": "page-data/tag/nature/page-data.json",
    "revision": "5031b258a51c6f577ab5bcbef6912b9a"
  },
  {
    "url": "page-data/tag/travel/page-data.json",
    "revision": "5f7db42fbce92016f4dbde04f975d278"
  },
  {
    "url": "component---src-templates-blog-category-posts-tsx-21bd56b89ca7df52a3a3.js"
  },
  {
    "url": "page-data/category/adventure/page-data.json",
    "revision": "08c5fe928db6fff15d838b181726a5e6"
  },
  {
    "url": "page-data/category/food/page-data.json",
    "revision": "34264ac83a542dfb9c4a7d43f7a8199c"
  },
  {
    "url": "page-data/category/life/page-data.json",
    "revision": "6c9b5c44f4cff9d85fe41635b4db6251"
  },
  {
    "url": "page-data/category/nature/page-data.json",
    "revision": "302d72d64104ef1753fcbaa2bb6c5a78"
  },
  {
    "url": "page-data/category/travel/page-data.json",
    "revision": "e92439de8cd3404275f1a70b6ff7ef39"
  },
  {
    "url": "component---src-pages-about-tsx-d5319ead198ebf6d6b70.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "93ed14a76e8c690bb6dba9a10c22bd73"
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
  if (!resources || !(await caches.match(`/app-4cd965010a19c0287d09.js`))) {
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
