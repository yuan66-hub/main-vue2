import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'normalize.css'
import { registerMicroApps,start,creatStore,Custom } from '@yuanjianming/micro-frontend-app'
import { subList } from './store/sub'
Vue.config.productionTip = false;

const custom = new Custom()
// 主应用监听子应用发送的消息
custom.on('test',(data)=>{
      console.log('sub-vue3---',data);
})

const store = creatStore()
window.custom = custom
window.store = store

store.subscribeStore((newVal,oldValue)=>{
  console.log('newVal===',newVal);
  console.log('oldValue===',oldValue);
})


registerMicroApps(subList,{
  beforeLoad: [
    app => {
      console.log('主应用挂载前 -- ', app.name);
    },
  ],
  mounted: [
    app => {
      console.log('主应用挂载完成 -- ', app.name);
    },
  ],
  destoryed: [
    app => {
      console.log('主应用卸载完成 -- ', app.name);
    },
  ],
})
start()

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
