import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css' // CSS样式重置
import '@vant/touch-emulator'

import {
  Button, Image, Icon, Tabbar, TabbarItem, NavBar, Tab, Tabs, Row, Col, Grid, GridItem, Sticky,
  Swipe, SwipeItem, Lazyload, List, progress
} from 'vant'
Vue.use(Button).use(Image).use(Icon).use(Tabbar).use(TabbarItem).use(NavBar).use(Tab).use(Tabs)
  .use(Row).use(Col).use(Grid).use(GridItem).use(Sticky).use(Swipe).use(SwipeItem).use(Lazyload)
  .use(List).use(progress)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
