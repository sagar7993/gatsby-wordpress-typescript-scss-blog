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
    "url": "webpack-runtime-3d34b182a728c4f2b3f8.js"
  },
  {
    "url": "commons.01f90a68b750bb094442.css"
  },
  {
    "url": "commons-3c915069bbf60bb9bf42.js"
  },
  {
    "url": "app-37b12a5f8c786dff4ef8.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-ec51c786fa91e3bfdf06.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "8c386fccd4ddf793336ff221203ea882"
  },
  {
    "url": "styles.4ee6360c92b32c6659b5.css"
  },
  {
    "url": "component---src-templates-blog-posts-tsx-5380cc4d36bde0bd66db.js"
  },
  {
    "url": "styles-d6af4bafcb22825b77a0.js"
  },
  {
    "url": "page-data/posts/2/page-data.json",
    "revision": "46d5f0c80afdce242dd40e8bdad4bd61"
  },
  {
    "url": "page-data/posts/3/page-data.json",
    "revision": "e84fafb35d783313e3c318470248ea36"
  },
  {
    "url": "page-data/posts/page-data.json",
    "revision": "7f4475bf8d1299ac758668b16d854875"
  },
  {
    "url": "component---src-templates-blog-post-tsx-06d2936448297ea84797.js"
  },
  {
    "url": "page-data/post/this-is-my-1st-post/page-data.json",
    "revision": "60dde64fdfc3e9f837272b57e43adb22"
  },
  {
    "url": "page-data/post/this-is-my-2nd-post/page-data.json",
    "revision": "b19a6bad14b135c91f825f64b403e12b"
  },
  {
    "url": "page-data/post/this-is-my-3rd-post/page-data.json",
    "revision": "2f0b2b0ac575f2477386302167b143cc"
  },
  {
    "url": "page-data/post/this-is-my-4th-post/page-data.json",
    "revision": "17ba0ca75577aa18ad21970b184809c7"
  },
  {
    "url": "page-data/post/this-is-my-5th-post/page-data.json",
    "revision": "8f9d324d98929e4f3b508a8872495d94"
  },
  {
    "url": "page-data/post/this-is-my-6th-post/page-data.json",
    "revision": "bd07c1c05ebeafbfe3b076f78ca8701a"
  },
  {
    "url": "component---src-pages-about-tsx-ba5aa64fde82d1321123.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "bd5c1dd3081193cacdcd352186008a65"
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
