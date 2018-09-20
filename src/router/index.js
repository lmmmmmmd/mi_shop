import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
    	path:'/home',
    	name:'home',
    	component(resolve){
    		require(['@/page/home/home.vue'],resolve)
    	}
    },
    {
    	path:'/type',
    	name:'type',
    	component(resolve){
    		require(['@/page/type/type.vue'],resolve)
    	}
    },
    {
    	path:'/shoppingCart',
    	name:'shoppingCart',
    	component(resolve){
    		require(['@/page/shoppingCart/shoppingCart.vue'],resolve)
    	}
    },
    {
    	path:'/mine',
    	name:'mine',
    	component(resolve){
    		require(['@/page/mine/mine.vue'],resolve)
    	}
    }
  ]
})
