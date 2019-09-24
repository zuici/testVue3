<template>
  <!--所有的item都展示同一个图片, 同一个文字-->
  <div
    class="tabbar_item"
    @click="itemClick"
  >
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :class="{activeColor:isActive}">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
      //   isActive: false,
    //   activeStyle: ""
    }
  },

  created() {
    // this.isActive = this.path === this.$route.path ? true : false;
  },
  computed: {
    isActive() {
      return '/homeshop' + this.path === this.$route.path ? true : false;
    },
    activeStyle(){
        return 
    }
  },
  methods: {
    itemClick() {
      this.$router.push('/homeshop' + this.path);
    }
  },
}
</script>

<style lang="scss" scoped>
.tabbar_item {
  flex: 1;
  text-align: center;
  height: 0.49rem;
  font-size: 0.14rem;
  img {
    width: 0.24rem;
    height: 0.24rem;
    vertical-align: middle;
    margin-top: .02rem;
  }
  .activeColor{
      color: red;
  }
}
</style>
