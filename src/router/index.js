import Vue from 'vue'
import Router from 'vue-router'

import login from '@/view/login'
import main from '@/view/main'

import users from '@/view/users'
import customers from '@/view/customers'
import orders from '@/view/order/orders'
import goodsList from '@/view/goods/goodsList'
import uploadGoods from '@/view/goods/uploadGoods'
import skuList from '@/view/goods/skuList'
import banner from '@/view/weixin/banner'
import customModel from '@/view/weixin/customModel'
import company from '@/view/company'
import category from '@/view/category'

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
