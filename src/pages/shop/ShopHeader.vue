<template>
  <div class="shopheader">
    <div>
      <header class="header_nav">
        <div class="header_left">
          <img
            :src="shopheader.avatar"
            alt=""
          >
        </div>
        <div class="header_center">
          <div class="center_top">
            <span></span>
            <span>{{shopheader.name}}</span>
          </div>
          <div class="center_middle">{{shopheader.description}}{{shopheader.deliveryTime}}分钟送达</div>
          <div class="center_bottom">{{shopheader.supports && shopheader.supports[0].content}}</div>
        </div>
        <div class="header_right">
          <div class="header_info"><span>{{shopheader.supports && shopheader.supports.length}}个</span><i></i></div>
        </div>
      </header>
      <div class="header_backimg">
        <img
          :src="shopheader.bgImg"
          alt=""
        >
      </div>
      <div class="header_bt">
        <span class="hbottom_title">公告</span>
        <span class="hbottom_info">{{shopheader.bulletin}}</span>
        <i></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shopheader: []
    }
  },
  async mounted() {
    const res = await this.$http.get('/info');
    this.shopheader = res.data.data;
  }



}
</script>

<style lang="scss" scoped>
.shopheader {
  height: 1.34rem;
  background: rgba(7, 17, 27, 0.5);
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
  .header_nav {
    padding: 0.24rem 0.12rem 0.18rem 0.24rem;
    display: flex;
    color: #fff;
    font-size: 0.12px;
    .header_left {
      width: 0.64rem;
      height: 0.64rem;
    }
    .header_center {
      width: 2.1rem;
      height: 0.64rem;
      margin-left: 0.16rem;
      span {
        font-weight: 700;
        font-size: 0.16rem;
      }
      .center_top {
        margin-bottom: 0.08rem;
      }
      .center_middle {
        margin-bottom: 0.08rem;
      }
    }
    .header_right {
      height: 0.64rem;
      width: 0.43rem;
      position: relative;
      .header_info {
        span {
          display: block;
          height: 0.24rem;
          line-height: 0.24rem;
          padding: 0 0.08rem;
          background: rgba(7, 17, 27, 0.5);
          border-radius: 20px;
          position: absolute;
          bottom: 0;
          left: 0;
        }
      }
    }
  }
  .header_backimg {
    filter: blur(1px);
    height: 1.34rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  .header_bt {
    height: 0.28rem;
    line-height: 0.28rem;
    padding: 0 0.2rem;
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    background: rgba(7, 17, 27, 0.2);
    color: #fff;
    font-size: 0.12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    box-sizing: border-box;
    // display: -webkit-box;
    // -webkit-line-clamp: 1; //设置显示几行
    // -webkit-box-orient: vertical;
  }
}
</style>
