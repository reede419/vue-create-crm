import Vue from "vue";
import Vuelidate from 'vuelidate'

import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import dateFilter from './filters/date.filter'
import currencyFilter from './filters/currency.filter'

import'materialize-css/dist/js/materialize.min.js'
import messagePlugin from './utils/message.plugin'
import Loader from '@/components/app/Loader'


import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/database'


Vue.config.productionTip = false;

Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)

Vue.use(Vuelidate)
Vue.use(messagePlugin)
Vue.component('Loader', Loader)

const firebaseConfig = {
  apiKey: "AIzaSyAJTQgJAuAW7CCJlSAdUgYD3mQfNBLNPLA",
  authDomain: "vue-crm-ser.firebaseapp.com",
  projectId: "vue-crm-ser",
  storageBucket: "vue-crm-ser.appspot.com",
  messagingSenderId: "210783677485",
  appId: "1:210783677485:web:cfba78f1bbc0e20f27dca4",
  measurementId: "G-0DJ70E3QE7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let app
firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
})

