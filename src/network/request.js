import axios from 'axios'

export function request(config){
    const instance = axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:5000
    })

    instance.interceptors.request.use(config => {
        // console.log(config);
        return config
    },err => {
        // console.log(err);
    })
    instance.interceptors.response.use(result => {
        // console.log(result);
        return result.data
    },err => {
        // console.log(err);
    })
   return instance(config)
}
 //页面调用
 //import {request} from "./network/request"
// request({
//     url:'/home/multidata'
// }).then(res =>{
//     console.log(res)
// }).catch(err => {
//     console.log(err)
// })

