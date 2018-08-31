import axios from 'axios';//引入axios
import { Loading } from 'element-ui'
let loading
function startLoading() {
  loading = Loading.service({
    lock: true,
    text: '加载中……',
    background: 'rgba(0, 0, 0, 0.7)'
  })
}

function endLoading() {
  loading.close()
}

// axios.interceptors.request.use(function (config) {
//   console.log(">>>>>>请求123456<<<<<<<")
//   return config;
// })
//
// axios.interceptors.response.use(function (response) {
//   console.log(">>>>>>响应1232435<<<<<<<")
//   return response;
// })

let needLoadingRequestCount = 0

export function showFullScreenLoading() {
  if (needLoadingRequestCount === 0) {
    startLoading()
  }
  needLoadingRequestCount++
}

export function tryHideFullScreenLoading() {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    endLoading()
  }
}

// 请求拦截器
axios.interceptors.request.use((config) => {
  if (config.showLoading) {
    showFullScreenLoading()
  }
  return config
})

// 响应拦截器
axios.interceptors.response.use((response) => {
  if (response.config.showLoading) {
    tryHideFullScreenLoading()
  }
  return response
})

export function fetch(options){
  return new Promise((resolve, reject) => {
    const instance = axios.create({  //instance创建一个axios实例，可以自定义配置，可在 axios文档中查看详情
      //所有的请求都会带上这些配置，比如全局都要用的身份信息等。
      headers: {
        'Content-Type': 'application/json',
        // 'token_in_header': global_.token,//token从全局变量那里传过来
      },
      timeout:30 * 1000 // 30秒超时
    });
    // instance.interceptors.request.use(function () {
    //   console.log(">>>>>>请求<<<<<<<")
    //     showFullScreenLoading()
    // })
    //
    // instance.interceptors.response.use(function () {
    //   console.log(">>>>>>响应<<<<<<<")
    //
    //     tryHideFullScreenLoading()
    //
    // })
    instance(options).then(response => { //then 请求成功之后进行什么操作
        resolve(response);//把请求到的数据发到引用请求的地方
    }).catch(error => {
        console.log('请求异常信息：'+error);
        reject(error);
    });
  });
}


