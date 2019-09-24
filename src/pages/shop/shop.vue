<template>
  <div>
    <ShopHeader></ShopHeader>
    <div class="conter">
      <div
        class="conter_nav"
        :class="{ con_active : flag === 1}"
      >
        <router-link to="/">商品</router-link>
      </div>
      <div
        class="conter_nav"
        :class="{ con_active : flag === 2}"
      >
        <router-link to="/ratings">评论</router-link>
      </div>
      <div
        class="conter_nav"
        :class="{ con_active : flag === 3}"
      >
        <router-link to="/info">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import ShopHeader from './ShopHeader'

export default {
  data() {
    return {
      flag: 1 // 默认值
    }
  },
  components: {
    ShopHeader
  },
  created() {
    this.flag = this.$route.path === '/' ? 1 : this.$route.path === '/ratings' ? 2 : 3;
  },
  //   async mounted() {
  //     const res = await this.$http.get('/info');
  //     const data = res.data.data;
  //     console.log(data)
  //   }
  beforeRouteUpdate(to, from, next) {
    this.flag = to.path === '/' ? 1 : to.path === '/ratings' ? 2 : 3;
    next();
  }
}

// let a = document.querySelector('html');
// a.style.fontSize = document.documentElement.clientWidth/100+'px';

// console.log(a.style.fontSize)
</script>

<style lang="scss" scoped>
.conter {
  display: flex;
  //   justify-content: center;
  background: #fff;
  height: 0.4rem;
  line-height: 0.4rem;
  .conter_nav {
    width: 33%;
    text-align: center;
    a {
      display: block;
      text-decoration: none;
      color: #4d555d;
    }
  }
}
.con_active {
  color: #f01414;
  a {
    color: #f01414 !important;
  }
}
</style>