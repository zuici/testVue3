<template>
  <div class="tabbar">
    <!-- 传值，传相对应跳转的路由路径 -->
    <!-- 当前活跃页面如果需要动态改变颜色，也可从这里传入颜色 -->
    <!-- <TabBarItem path="/home" activeColor="red"> -->
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.tabbar {
  display: flex;
  position: fixed;
  z-index:10;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f6f6f6;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
}
</style>
