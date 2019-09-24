import Vue from 'vue'
import Router from 'vue-router'
import HomeShop from './views/HomeShop.vue'
import Shop from './pages/shop/shop.vue'
import ShopInfo from './pages/shop/ShopInfo.vue'
import ShopGoods from './pages/shop/ShopGoods.vue'
import ShopRatings from './pages/shop/ShopRatings.vue'

import Home from './views/home/home.vue'
import CateGory from './views/category/category.vue'
import Cart from './views/cart/cart.vue'
import aboutMe from './views/aboutme/aboutMe.vue'

import StoreText from './views/storetext.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/homeshop',
      component: HomeShop,
      children: [{
          path: '/',
          redirect: '/homeshop/home'
        },
        {
          path: 'home',
          name: 'home',
          component: Home
        },
        {
          path: 'cate',
          name: 'cate',
          component: CateGory
        },
        {
          path: 'cart',
          name: 'cart',
          component: Cart
        },
        {
          path: 'aboutme',
          name: 'aboutme',
          component: aboutMe
        }
      ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // },
    {
      path: '/',
      component: Shop,
      children: [{
          path: '/',
          component: ShopGoods,
          meta: {
            keepAlive: true // 需要被缓存
          },
        },
        // {
        //   path: '/goods',
        //   name:'ShopGoods',
        //   component: ShopGoods
        // },
        {
          path: '/info',
          name: 'info',
          component: ShopInfo
        },
        {
          path: '/ratings',
          name: 'ratings',
          component: ShopRatings
        },
        {
          path: '/storetext',
          name: 'storetext',
          component: StoreText
        }
        // {
        //   path: '/',
        //   redirect: '/goods'
        // }
      ]
    }
  ]
})