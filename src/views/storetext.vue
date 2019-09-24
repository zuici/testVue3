<template>
  <div>
    <h1>----------store测试</h1>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.moreAgestu(20)}}</h2>
    <button @click="addStudent">加学生</button>
    <h2>{{$store.state.students}}</h2>
    <button @click="addCount(5)">+5</button>
    <h2>{{$store.state.counter}}</h2>
    <button @click="updateInfo">修改名字</button>
    <h2>{{$store.state.info}}</h2>

    <h1>----------------mmodules演示</h1>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改a模块的name</button>
    
    <h2>{{$store.getters.fullname}}</h2>
     <h2>{{$store.getters.fullname2}}</h2>
     <h2>{{$store.getters.fullname3}}</h2>

     <button @click="asyncUpdateName">异步改name</button>
  </div>
</template>

<script>
export default {
  computed: {

  },
  methods: {
    addCount(count) {
      this.$store.commit('icrementCount', count)
    },
    addStudent() {
      const stu = { id: 5, name: 'sh5', age: 25 };
      this.$store.commit('addStu', stu)
    },
    updateInfo() {
    //   this.$store.dispatch('aUpdateInfo', {        message: '我是携带的信息', success: () => {
    //       console.log('里面已经完成');
    //     }      })
      this.$store
      .dispatch('aUpdateInfo', '我是携带的信息')
      .then(res=>{
          console.log('里面完成了')
          console.log(res)
      })
    },
    updateName(){
        this.$store.commit('updateName','name')
    },
    asyncUpdateName(){
        this.$store.dispatch('AupdateName')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>