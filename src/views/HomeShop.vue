<template>
  <div class="homeshop">
    <router-view></router-view>
    <maintab-Bar></maintab-Bar>
  </div>
</template>

<script>
import maintabBar from '../components/context/MaintabBar';

// import { getHomeMultidata } from '../network/home';
export default {

  data() {
    return {

    }
  },
  components: {
    maintabBar
      },
  created() {
    //请求多个数据
    // getHomeMultidata().then(res => {
    //   console.log(res)
    // })

  }
}
</script>

<style lang="scss">
.home {
}
</style>