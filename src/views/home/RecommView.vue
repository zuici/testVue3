<template>
  <div class="recommview">
    <div
      class="recomm"
      v-for="item in recommends"
      :key="item.acm"
    >
      <div class="recomm_img">
        <a
          :href="item.link"
          class=""
        >
          <img
            :src="item.image"
            alt=""
          >
        </a>
      </div>
      <div class="recomm_text">{{item.title}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        []
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.recommview {
  display: flex;
  justify-content: space-around;
  padding: 0 0.1rem;
  font-size: .14rem;
  text-align: center;
  .recomm {
    .recomm_img {
        margin-bottom: .03rem;
      img {
        width: 0.65rem;
        height: 0.65rem;
      }
    }
  }
}
</style>