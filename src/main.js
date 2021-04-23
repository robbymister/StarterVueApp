import Vue from 'vue'
import App from './App.vue'
import {InputNumber, DatePicker, ColorPicker, Slider} from 'element-ui';

Vue.config.productionTip = false
Vue.use(InputNumber);
Vue.use(DatePicker);
Vue.use(ColorPicker);
Vue.use(Slider);

new Vue({
  render: h => h(App),
}).$mount('#app')
