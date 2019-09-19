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
    "url": "webpack-runtime-7ad4334e2299a7284e93.js"
  },
  {
    "url": "commons.01f90a68b750bb094442.css"
  },
  {
    "url": "commons-71f0bf0dc8eaca559f44.js"
  },
  {
    "url": "app-37b12a5f8c786dff4ef8.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-ec51c786fa91e3bfdf06.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "85d7f3982f2f1dac9ddbd21b49f8a49c"
  },
  {
    "url": "styles.4ee6360c92b32c6659b5.css"
  },
  {
    "url": "component---src-templates-blog-posts-tsx-5380cc4d36bde0bd66db.js"
  },
  {
    "url": "styles-29e993f0dcebe3068035.js"
  },
  {
    "url": "page-data/posts/2/page-data.json",
    "revision": "17775c7a9aad8353527b97e633668b57"
  },
  {
    "url": "page-data/posts/3/page-data.json",
    "revision": "05f7ae7df38ab1b1041791096ec6c337"
  },
  {
    "url": "page-data/posts/page-data.json",
    "revision": "0b2d5a5199d366eb76b012c21d1e5d2b"
  },
  {
    "url": "component---src-templates-blog-post-tsx-06d2936448297ea84797.js"
  },
  {
    "url": "page-data/post/this-is-my-1st-post/page-data.json",
    "revision": "43539e4503c753ec763ee1e0ed08602c"
  },
  {
    "url": "page-data/post/this-is-my-2nd-post/page-data.json",
    "revision": "e5d5c586eb3cdbaceb5fa9f83d78833f"
  },
  {
    "url": "page-data/post/this-is-my-3rd-post/page-data.json",
    "revision": "3bf1b9dd235a410d6aa808dbf9fad7f5"
  },
  {
    "url": "page-data/post/this-is-my-4th-post/page-data.json",
    "revision": "d486508916e5e1db5e3765a8fa1677f0"
  },
  {
    "url": "page-data/post/this-is-my-5th-post/page-data.json",
    "revision": "bce905289a3335fe64aa04324006ece1"
  },
  {
    "url": "page-data/post/this-is-my-6th-post/page-data.json",
    "revision": "3764a2d93875bec80ebdc29e32fef1c2"
  },
  {
    "url": "component---src-pages-about-tsx-ba5aa64fde82d1321123.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "e20966ceb36e87efa943eb19b35dd64c"
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
