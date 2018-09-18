import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:()=> import("@/page/login")
    },
    {
      path: '/main',
      component:()=> import("@/page/main"),
      children: [{
        path:'/',
        component:()=> import("@/page/default")
      },{
        path:'/users',
        component:()=> import("@/page/users")
      },
        {
          path:'/customers',
          component:()=> import("@/page/customers")
        },
        {
          path:'/orders',
          component:()=> import("@/page/order/orders")
        },
        {
          path:'/goodsList',
          component:()=> import("@/page/goods/goodsList")
        },
        {
          path:'/uploadGoods',
          component:()=> import("@/page/goods/uploadGoods")
        },
        {
          path:'/skuList',
          component:()=> import("@/page/goods/skuList")
        },
        {
          path:'/banner',
          component:()=> import("@/page/weixin/banner")
        },{
          path:'/customModel',
          component:()=> import("@/page/weixin/customModel")
        },{
          path:'/company',
          component:()=> import("@/page/company")
        },{
          path:'/category',
          component:()=> import("@/page/category")
        }]
    }
  ]
})
