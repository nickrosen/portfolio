importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/050573d.js",
    "revision": "bcea32bb215bb1aaa70fd6cb307dc951"
  },
  {
    "url": "/_nuxt/17603f0.js",
    "revision": "6bb640883c8169daff78e6e20349db0b"
  },
  {
    "url": "/_nuxt/6032a4e.js",
    "revision": "d6be5ad1421e1d5206838ae222eed99d"
  },
  {
    "url": "/_nuxt/6489fed.js",
    "revision": "891a75850cb4fb5e9b0008dcbecfb536"
  },
  {
    "url": "/_nuxt/6635640.js",
    "revision": "8fdd566ffb0ec72d9e10a5ad952b2dd3"
  },
  {
    "url": "/_nuxt/721d604.js",
    "revision": "c9ea925b4f77763aea3c6583abbbc7f2"
  },
  {
    "url": "/_nuxt/7a77971.js",
    "revision": "f0cd7ef0a317261b04226e37c00d82a3"
  },
  {
    "url": "/_nuxt/9b33c1f.js",
    "revision": "e98c82ffec6d97cb8f7ba836f5b0db8b"
  },
  {
    "url": "/_nuxt/e405224.js",
    "revision": "01e9d9358b7622ab765fe5f8f6b42b46"
  },
  {
    "url": "/_nuxt/f002bcc.js",
    "revision": "86716d23e74d5fea1764c4a24ac9c743"
  }
], {
  "cacheId": "nick-rosen-blog",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
