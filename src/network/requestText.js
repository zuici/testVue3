import axios from 'axios'

export function request(config){
    //这里instance就是一个promis
    //1.创建实例
    const instance = axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:5000
    })
    //2.axios拦截器axios.interceptors,
    //请求拦截的作用（实用场景）：
    //  1.config中的一些信息不符合服务器要求，需要筛选合适数据
    //  2.每次发送网络请求时，希望在页面中显示一个请求图标
    //  3.某些网络请求（比如登录（token））,必须携带一些特殊信息。比如判断用户登录跳转登录
    //2.1请求拦截
    instance.interceptors.request.use(config => {
        console.log(config);
        //这里发送成功后，如果不返回config的话，在页面调用请求时，拿不到返回数据
        return config
    },err => {
        console.log(err);
    })
    //2.2响应拦截
    instance.interceptors.response.use(result => {
        console.log(result);
        return result.data
    },err => {
        console.log(err);
    })
    //3.发送真正的网络请求
   return instance(config)
}
 //页面调用
 //import {request} from "./network/request"
request({
    url:'/home/multidata'
}).then(res =>{
    console.log(res)
}).catch(err => {
    console.log(err)
})

// 方法一：promise方式
// export function request(config){
//    return new Promise((resolve,reject) => {
//     const instance = axios.create({
//         baseURL:'http://123.207.32.32:8000',
//         timeout:5000
//     })
//     instance(config)
//         .then(res => {
//             resolve(res);
//         }).catch(err => {
//             reject(err);
//         })
//    })
// }

// //页面调用
// request({
//     url:'/home/multidata'
// }).then(res =>{
//     console.log(res)
// }).catch(err => {
//     console.log(err)
// })

//success,failure是代表传入一个函数（回调函数）
// 方法二：
// export function request(config,success,failure){
//     const instance = axios.create({
//         baseURL:'http://123.207.32.32:8000',
//         timeout:5000
//     })
// }

// //发送真正的网络请求
// instance(config).then(res => {
//     console.log(res)
//     success(res);
// }).catch(err => {
//     console.log(err)
//     failure(err);
// })

// 在别的地方调用：
// import {request} from "./network/request"
// request({
//     url:'.home/multidata'
// },res => {
//     console.log(res)
// },err => {
//     console.log(err);
// })


//方法三：
//传过来的config必须传一个success
// export function request(config){
//     const instance = axios.create({
//         baseURL:'http://123.207.32.32:8000',
//         timeout:5000
//     })
// }

// //发送真正的网络请求
// instance(config.baseConfig).then(res => {
//     console.log(res)
//     config.success(res);
// }).catch(err => {
//     console.log(err)
//     config.failure(err);
// })


// //调用
// request({
//     baseConfig:{

//     },
//     success:function(res){

//     },
//     failure:function(err){

//     }
// })

