import Vue from 'vue'
import App from './App'
import Swiper from './src'
import SwiperItem from './src/swiper-item'

Vue.component(Swiper.name, Swiper)
Vue.component(SwiperItem.name, SwiperItem)

Vue.config.productionTip = false

/* eslint-disable no-new */
const instance = new Vue({
  render: h => h(App)
})

instance.$mount('#app')
