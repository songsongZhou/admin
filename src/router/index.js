import Vue from 'vue'
import Router from 'vue-router'

import login from '@/page/login'
import main from '@/page/main'

import users from '@/page/users'
import customers from '@/page/customers'
import orders from '@/page/order/orders'
import goodsList from '@/page/goods/goodsList'
import uploadGoods from '@/page/goods/uploadGoods'
import skuList from '@/page/goods/skuList'
import banner from '@/page/weixin/banner'
import customModel from '@/page/weixin/customModel'
import company from '@/page/company'
import category from '@/page/category'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:login
    },
    {
      path: '/main',
      name: '后台管理系统',
      component: main,
      children: [{
        path:'/users',
        component:users
      },
        {
          path:'/customers',
          component:customers
        },
        {
          path:'/orders',
          component:orders
        },
        {
          path:'/goodsList',
          component:goodsList
        },
        {
          path:'/uploadGoods',
          component:uploadGoods
        },
        {
          path:'/skuList',
          component:skuList
        },
        {
          path:'/banner',
          component:banner
        },{
          path:'/customModel',
          component:customModel
        },{
          path:'/company',
          component:company
        },{
          path:'/category',
          component:category
        }]
    }
  ]
})
