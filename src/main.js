import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ViewUI from 'view-design';
import '../my-theme/index.less';
import store from './store/index'
Vue.use(ViewUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
