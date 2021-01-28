import "./assets/css/main.css";
import "./assets/scss/main.scss";
import firstComponent from "./components/firstComponent.vue";
import loading from "./components/loading.vue";




import router from './router'


window.Vue = require("vue");
import store from "./store/index";


Vue.component("example-component", firstComponent);
Vue.component('loading-screen', loading) //эксперимент


const app = new Vue({
  router,
  store,
  el: "#app",
  data: {
    isLoading: true
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false
    }, 3000)
  }
})





import Gl from "./js/gl";
const gl = new Gl();
gl.init();




