
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "route": "/services"
  },
  {
    "renderMode": 2,
    "route": "/lakers"
  },
  {
    "renderMode": 2,
    "route": "/bulls"
  },
  {
    "renderMode": 2,
    "route": "/warriors"
  },
  {
    "renderMode": 2,
    "route": "/celtics"
  },
  {
    "renderMode": 2,
    "route": "/heat"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 27835, hash: '0822037a28d2c4adb64efba8465871d0fbe508bbfef124b0abdfe3e9260990b8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17138, hash: '812982397d42714122162d84f9450a3f17705d0008cf65c620ccb0b7c99f338b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 43280, hash: '2ab36956cd3ed90a921cb2529ede1d363dbd12dea194a5259776bd9acf985382', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 41668, hash: 'e438e109fbb4c36da7a2de6014cc365d00cf2c9ac67931d372db8e12dfd3dcee', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'lakers/index.html': {size: 36614, hash: '16b38fce6dbdedfc1c410cc95de333f598f3dadc2a95b36ac3156398f439f723', text: () => import('./assets-chunks/lakers_index_html.mjs').then(m => m.default)},
    'warriors/index.html': {size: 36692, hash: '7f38a41d8b7432eec36c0ea368c8ea4866ee43e136e49c6c2c3b01abeec8f495', text: () => import('./assets-chunks/warriors_index_html.mjs').then(m => m.default)},
    'celtics/index.html': {size: 36623, hash: '265594b7281c0347b89dd7e3599a68c37fe494ffd721b31fb261f27fbeb30a4b', text: () => import('./assets-chunks/celtics_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 37428, hash: 'b0f1a4c4dd536b2bc620fb47ebc4e834d92a73997e75610573f605cae9732605', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'heat/index.html': {size: 36578, hash: '6194f16eecd265ccd9c8bb0e6d2a635ccfc6b1f7b54c52bdaf058c87f6527cdc', text: () => import('./assets-chunks/heat_index_html.mjs').then(m => m.default)},
    'services/index.html': {size: 36185, hash: '08831b2561d8a2f7ffda9e339ec69db2a88b051f816f629428d5e51d1dd8fd28', text: () => import('./assets-chunks/services_index_html.mjs').then(m => m.default)},
    'bulls/index.html': {size: 36579, hash: 'cfd2e37fe5ef9b33ae9f2e83ca343ed504af995499a5783540a5460b050ff530', text: () => import('./assets-chunks/bulls_index_html.mjs').then(m => m.default)},
    'styles-TF4W7JTK.css': {size: 239474, hash: 'dgi5mF1YYFc', text: () => import('./assets-chunks/styles-TF4W7JTK_css.mjs').then(m => m.default)}
  },
};
