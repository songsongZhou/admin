import { fetch } from "./fetch"; //引用fetch.js
import api from './url'; //引用url.js

// 登录
export function login(loginName,password) {
  return fetch({
    url:api.Hallowmas+'/login',
    method:'post',
    params:{
      loginName:loginName,
      password:password
    }
  })
}


//获取用户列表
export function getUsers(current) {
  return fetch({
    url: api.Hallowmas+'/getUsers',
    method: 'get',//请求方法
    params:{
      current:current //传过去的参数
    }
  })
}

//获取用户列表
export function addUser(userName,password,nickname) {
  return fetch({
    url: api.Hallowmas+'/addOrUpdateUser',
    method: 'POST',//请求方法
    params:{
      userName:userName,
      password:password,
      nickname:nickname
    }
  })
}

//获取用户列表
export function delUser(id) {
  return fetch({
    url: api.Hallowmas+'/delUser',
    method: 'POST',//请求方法
    params:{
      id:id
    }
  })
}

//查看用户
export function lookOption(issuer,userId) { //lookOption是你要调用接口的名字，issuer,userId是传进来的参数
  return fetch({
    //api.Hallowmas 引用url.js里面的数据
    url: api.Hallowmas+'/halloween/'+issuer+'/question',
    method: 'get',//请求方法
    params:{
      id:userId //传过去的参数
    }
  })
}




//有新接口的时候像上面那样再来一次
// //修改昵称接口
// export function userID(name){
//   return fetch({
//     url:api.myself_name,
//     method:"put",
//     data:{
//       nickname:name
//     }
//   })
// }
//
//
// //取消转发赞踩接口
// export function cancelForward(articleId,type){
//   return fetch({
//     url:api.detail_article+articleId+"/forwarded_impress",
//     method:"delete",
//     params:{
//       type:type
//     }
//   })
// }
