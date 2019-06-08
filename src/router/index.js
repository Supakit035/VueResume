import Vue from 'vue'
import Router from 'vue-router'
import MaterialKit from "../plugins/material-kit"
import MainNavBar from '../component/MainNavBar.vue'
import MainFooter from '../component/MainFooter.vue'
import Index from '../components/Index.vue'

Vue.use(Router)
Vue.use(MaterialKit)

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      components: { default: Index, header: MainNavBar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
  ],
  mode: 'history'
})
