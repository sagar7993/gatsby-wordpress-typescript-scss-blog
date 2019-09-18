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
    "url": "webpack-runtime-3617ddc9c5c3febd94c0.js"
  },
  {
    "url": "commons.8fac62fe05b6ab060430.css"
  },
  {
    "url": "commons-09e2cede1ec57adba387.js"
  },
  {
    "url": "app-ad407921e6633002453b.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-2389679d36688f578f79.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "409debd275e236841a980c4f15afb067"
  },
  {
    "url": "styles.4ee6360c92b32c6659b5.css"
  },
  {
    "url": "component---src-templates-blog-posts-tsx-03c605505e702c8c05c5.js"
  },
  {
    "url": "styles-3750dff4c23559a8c897.js"
  },
  {
    "url": "page-data/posts/2/page-data.json",
    "revision": "02f13c0bb4cd4989a80346d717936b03"
  },
  {
    "url": "page-data/posts/3/page-data.json",
    "revision": "27c7c7f3c587e169604c1966ec2a5004"
  },
  {
    "url": "page-data/posts/page-data.json",
    "revision": "b6252f43d6889e75a842250f9ebb3842"
  },
  {
    "url": "component---src-templates-blog-post-tsx-440e9e39835a032f1db8.js"
  },
  {
    "url": "page-data/post/this-is-my-1st-post/page-data.json",
    "revision": "c0757c857438026b3c588616ce53c7ae"
  },
  {
    "url": "page-data/post/this-is-my-2nd-post/page-data.json",
    "revision": "8a71164163ea242a6b47aa875adbdf9a"
  },
  {
    "url": "page-data/post/this-is-my-3rd-post/page-data.json",
    "revision": "15f71a15f21f0515b765af932220c0cb"
  },
  {
    "url": "page-data/post/this-is-my-4th-post/page-data.json",
    "revision": "acf42906dbf6b8e17763ff9c3d834ebe"
  },
  {
    "url": "page-data/post/this-is-my-5th-post/page-data.json",
    "revision": "d5ea0ae100c95aca75459cc8aff4b839"
  },
  {
    "url": "page-data/post/this-is-my-6th-post/page-data.json",
    "revision": "229a35a029ffbf5d4668afcad32bc42d"
  },
  {
    "url": "component---src-pages-about-tsx-0a6ca4c3eb04213f2cd8.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "5bb5ff50d2b73111ea894d70334eb70b"
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
  if (!resources || !(await caches.match(`/app-ad407921e6633002453b.js`))) {
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
