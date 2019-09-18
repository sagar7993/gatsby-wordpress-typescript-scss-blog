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
    "url": "webpack-runtime-7d8cfc6f34386631b69e.js"
  },
  {
    "url": "commons.63a6dd013ee0611d1b76.css"
  },
  {
    "url": "commons-099b07eb0a20112c36ef.js"
  },
  {
    "url": "app-da20ecf65c439d5752f0.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-8c17f67f366519e55d7f.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "2983d9eaa5627db6a49b2a64eb557acf"
  },
  {
    "url": "styles.4ee6360c92b32c6659b5.css"
  },
  {
    "url": "component---src-templates-blog-posts-tsx-38a06ffb961494445ba5.js"
  },
  {
    "url": "styles-5b7b0b37a407dd6f4d92.js"
  },
  {
    "url": "page-data/posts/2/page-data.json",
    "revision": "6156c74e18e6d821693a969ea39a246c"
  },
  {
    "url": "page-data/posts/3/page-data.json",
    "revision": "58054dd09636e69203c0804f035ba5c1"
  },
  {
    "url": "page-data/posts/page-data.json",
    "revision": "a55a73d862d75ca884f230921b45290c"
  },
  {
    "url": "component---src-templates-blog-post-tsx-a8c5d1f4b283282a27ad.js"
  },
  {
    "url": "page-data/post/this-is-my-1st-post/page-data.json",
    "revision": "08efc0ea0df88642a808b49c3411c3e5"
  },
  {
    "url": "page-data/post/this-is-my-2nd-post/page-data.json",
    "revision": "fa5ee63bd12d828da277fe8f77609c2d"
  },
  {
    "url": "page-data/post/this-is-my-3rd-post/page-data.json",
    "revision": "05b1572ad9cc400b731ba7a8a2e114ca"
  },
  {
    "url": "page-data/post/this-is-my-4th-post/page-data.json",
    "revision": "ba45eb93b7e9d3a53cc81754cccc923f"
  },
  {
    "url": "page-data/post/this-is-my-5th-post/page-data.json",
    "revision": "e3bb32760aeae5f42672c8d865ccf9b6"
  },
  {
    "url": "page-data/post/this-is-my-6th-post/page-data.json",
    "revision": "9b0d91cdefdea82f9e10cdf622ee0182"
  },
  {
    "url": "component---src-pages-about-tsx-e0f9c03ece8871c3e331.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "7825239c80b1cd40e5b40323c995cae4"
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
  if (!resources || !(await caches.match(`/app-da20ecf65c439d5752f0.js`))) {
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
