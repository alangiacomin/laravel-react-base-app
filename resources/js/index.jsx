// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from "@fortawesome/free-brands-svg-icons";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// library.add(fas);
// library.add(fab);

// questi sostituiscono il deprecato @babel/polyfill
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';

import 'core-js/stable';
import React from 'react';
import { render } from 'react-dom';
import 'regenerator-runtime/runtime';
import App from './components/App';
import configureAppStore from './configureStore';
import './i18nextConf';
import { setUserProfile } from './user/UserActions';

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const store = configureAppStore();

store.dispatch(setUserProfile(window.user));

render(<App store={store} />, document.getElementById('app'));
// render(<Suspense fallback={null}><App store={store} /></Suspense>, document.getElementById('app'));
