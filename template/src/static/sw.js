importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt-firebase-auth",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.aee03fcadb241e46d58b3807690a91da.css",
    "revision": "aee03fcadb241e46d58b3807690a91da"
  },
  {
    "url": "/_nuxt/app.fc45718a8b9fa048fce3.js",
    "revision": "42949f79a090cf0f9e5a9d62a5918f18"
  },
  {
    "url": "/_nuxt/layouts/default.84dd6c1724a5c678bd6a.js",
    "revision": "1325509a673a559592c6f942210f473a"
  },
  {
    "url": "/_nuxt/manifest.b41951eaef9a9802a651.js",
    "revision": "28bcecf549317a36acb2ede3faf7a7ef"
  },
  {
    "url": "/_nuxt/pages/about.df62526fe1ba65b57c3a.js",
    "revision": "de9d2d106131689a6916fa2e6ddde258"
  },
  {
    "url": "/_nuxt/pages/admin.feeb7d05a8c0b5446e8d.js",
    "revision": "815345bdb655b84af4fbd2412f17bce8"
  },
  {
    "url": "/_nuxt/pages/admin/index.f0d7016c47dbcab51e34.js",
    "revision": "e427950f5a474cee1829ccadb7dd9b46"
  },
  {
    "url": "/_nuxt/pages/admin/items.c6a30491c76b6a1fc6fb.js",
    "revision": "20b594503c045a626ed6088971a5ccdf"
  },
  {
    "url": "/_nuxt/pages/admin/settings.95ca9930c352d3a5e1e1.js",
    "revision": "3d0d5d5252f17a882ad5227192fc867d"
  },
  {
    "url": "/_nuxt/pages/index.8733271eecbc3b33d1a2.js",
    "revision": "8b8bbe37a875182102d44b36cf077f21"
  },
  {
    "url": "/_nuxt/pages/login.aff2562c47113a5451e5.js",
    "revision": "8a9662e5fdcddd905761c0f3c532bbb1"
  },
  {
    "url": "/_nuxt/vendor.ff7763053d2f68acc635.js",
    "revision": "59fff4c3c1dbfa55485e2cbf92c9e3a1"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

