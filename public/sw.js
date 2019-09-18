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
    "url": "webpack-runtime-e3dd19ebe31812842e47.js"
  },
  {
    "url": "commons.9944d7d3a81065154695.css"
  },
  {
    "url": "commons-30f2d3f34905c538b2a5.js"
  },
  {
    "url": "app-776b367ed9e68acfe068.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-8422835cd635b1973940.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "0ca8d63a34a609b4470b2d7b5274e25f"
  },
  {
    "url": "styles.4ee6360c92b32c6659b5.css"
  },
  {
    "url": "component---src-templates-blog-posts-tsx-7f1b892a40862726dd86.js"
  },
  {
    "url": "styles-b10f434c1e060eaecb7a.js"
  },
  {
    "url": "page-data/posts/2/page-data.json",
    "revision": "49e82d114749a58c15558aaf6d422dfc"
  },
  {
    "url": "page-data/posts/3/page-data.json",
    "revision": "e96711f8cdaef6ec06d3eb6b7a3a1676"
  },
  {
    "url": "page-data/posts/page-data.json",
    "revision": "967e9da9ac50e5fadf3e7c4ced1ad87c"
  },
  {
    "url": "component---src-templates-blog-post-tsx-8ac17cc275740f93e825.js"
  },
  {
    "url": "page-data/post/this-is-my-1st-post/page-data.json",
    "revision": "339e4fcf13154d6b1ec618083d393982"
  },
  {
    "url": "page-data/post/this-is-my-2nd-post/page-data.json",
    "revision": "30b3a834c5e1b34c7751077adc4a922f"
  },
  {
    "url": "page-data/post/this-is-my-3rd-post/page-data.json",
    "revision": "91f6c945324244786970d20adbd57b16"
  },
  {
    "url": "page-data/post/this-is-my-4th-post/page-data.json",
    "revision": "b1f98edd288cca9a821b056138d6ac06"
  },
  {
    "url": "page-data/post/this-is-my-5th-post/page-data.json",
    "revision": "223507e8262410399793915356fb4ebb"
  },
  {
    "url": "page-data/post/this-is-my-6th-post/page-data.json",
    "revision": "3b6d2a6b5a7553f4777645fac63a5aec"
  },
  {
    "url": "component---src-pages-about-tsx-a405e7a77c3cdb3a68e1.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "155285823727af89c9460a993b4cbfed"
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
  if (!resources || !(await caches.match(`/app-776b367ed9e68acfe068.js`))) {
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
