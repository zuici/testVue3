import {request} from "./request";

// 这里没有defult导出，所以引用时只能用大括号导入
export function getHomeMultidata(){
    return request({
        url:'/api/v1/home/multidata'
    })
}

export function getHomeGoods(type,page){
    return request({
        url:'/api/v1/home/data',
        params:{
            type,
            page
        }
    })
}