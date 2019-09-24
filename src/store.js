import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter:1000,
    students:[
      {id:1,name:'sh1',age:10},
      {id:2,name:'sh2',age:20},
      {id:3,name:'sh3',age:22},
      {id:4,name:'sh4',age:18}
    ],
    info:{
      id:11,name:'sh11',age:11
    }
  },
  mutations: {
    icrementCount(state,count){
      state.counter+= count
    },
    addStu(state,stu){
      state.students.push(stu)
    },
    updateInfo(state){
      state.info.name='coderwhy'
    }
  },
  actions: {
    // aUpdateInfo(context,paload){
    //   setTimeout(()=>{
    //     context.commit('updateInfo')
    // console.log(paload.message)
    //     paload.success()
    //   },1000)
    
    // }
    aUpdateInfo(context,payload){
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          context.commit('updateInfo');
          console.log(payload);
          resolve('111111')
        },1000)
      })
    }
  },
  getters:{
    more20stu(state){
      return state.students.filter(s => s.age > 20)
    },
    more20stulen(state,getters){
      return getters.more20stu.length
    },
    moreAgestu(state){
      return function(age){
        return state.students.filter(s => s.age > age)
      }
    }
  },
  //模块
  modules:{
    a:{
      state:{
        name:'zhangsan'
      },
      mutations:{
        updateName(state,payload){
          state.name = payload
        }
      },
      actions:{
        AupdateName(context){
          setTimeout(()=>{
            context.commit('updateName','ayscname')
          },100)
         
        }
      },
      getters:{
        fullname(state){
          return state.name + '1111'
        },
        fullname2(state,getters){
          return getters.fullname + '22222'
        },
        //这里的getters里面可以有第三个参数，指的是前面的父级的state
        fullname3(state,getters,rootSate){
          return getters.fullname2 + rootSate.counter
        }
      }
    }
  }
})
