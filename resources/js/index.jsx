// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fab } from "@fortawesome/free-brands-svg-icons";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// library.add(fas);
// library.add(fab);

// questi sostituiscono il deprecato @babel/polyfill
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// altri import
import React from 'react';
import { render } from 'react-dom';
import configureAppStore from './configureStore';
import { setUserProfile } from './user/UserActions';
import App from './components/App';

window._ = require('lodash');
window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const store = configureAppStore();

store.dispatch(setUserProfile(window.user));

render(<App store={store} />, document.getElementById('app'));
