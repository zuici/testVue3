<template>
  <div class="shopgoods">
    <div class="goods_left">
      <ul>
        <li
          class="goods_left_title"
          v-for="(item,index) in goods"
          :key="index"
        >
          <span>
            <img
              :src="item.icon"
              v-if="item.icon"
              alt=""
            >
          </span>
          {{item.name}}
        </li>

      </ul>
    </div>
    <div class="goods_right">
      <ul>
        <li class="goods_list" v-for="(item,index) in goods" :key="index">
          <h1 class="goods_title">{{item.name}}</h1>
          <ul>
            <li class="goods_item" v-for="(foods,i) in item.foods" :key="i">
              <div class="g_img">
                <img
                  :src="foods.icon"
                  alt=""
                >
              </div>
              <div class="goods_content">
                <h2 class="g_name">{{foods.name}}</h2>
                <p class="g_desc" v-if="foods.description == ''?false:true">{{foods.description}}</p>
                <div class="g_extra">
                  <span class="g_count">月售{{foods.sellCount}}份</span>
                  <span class="g_perce">好评率{{foods.rating}}%</span>
                </div>
                <div class="g_price">
                  <span class="now">￥{{foods.price}}</span>
                  <span class="old" v-if="foods.oldPrice == ''?false:true">￥{{foods.oldPrice}}</span>
                </div>
              </div>
              <div class="cartcontrol">

              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="goods_bottom">
      <div class="bottom_left">
        <div class="bottom_gouwu">
          <div class="circular">gou</div>
        </div>
        <div class="bottom_money">￥0</div>
        <div class="bottom_middle">另需配送费￥4元</div>
      </div>
      <div class="bottom_right">
        <div class="right_n">￥20元起送</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goods: []
    }
  },
  async mounted() {
    const res = await this.$http.get('/goods');
    if (res.status === 200) {
      this.goods = res.data.data;
    }
  }
}
</script>

<style lang="scss" scoped>
.shopgoods {
  display: flex;
  ul li {
    list-style: none;
  }

  .goods_left {
    width: 0.8rem;
    
    ul {
      .goods_left_title {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 0.54rem;
        width: 0.56rem;
        padding: 0 0.12rem;
        font-size: 0.12rem;
        text-align: center;
        border-bottom: 1px solid #ccc;
        background: #f3f5f7;
        span {
          img {
            width: .12rem;
            height: .12rem;
            margin-right: .02rem;
          }
        }
      }
      .title_active{
          background: #d9dde1;
      }
    }
  }
  .goods_right {
    flex: 1;
    .goods_list {
      .goods_title {
        padding-left: 0.14rem;
        height: 0.26rem;
        line-height: 0.26rem;
        border-left: 0.02rem solid #d9dde1;
        font-size: 0.12rem;
        color: #93999f;
        background: #f3f5f7;
      }
      .goods_item {
        display: flex;
        margin: 0.18rem;
        padding-bottom: 0.18rem;
        position: relative;
        border-bottom: 0.005rem solid rgba(7, 17, 27, 0.1);
        .g_img {
          width: 0.57rem;
          height: 0.57rem;
          margin-right: 0.1rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .goods_content {
          font-size: 0.12rem;
          color: #93999f;
          .g_name {
            color: #07111b;
            font-weight: normal;
            font-size: 0.14rem;
            line-height: 0.14rem;
            margin-bottom: 0.08rem;
          }
          .g_desc {
            line-height: 0.12rem;
            margin-bottom: 0.08rem;
          }
          .g_extra {
            line-height: 0.12rem;
            .g_count {
              margin-right: 0.12rem;
            }
          }
          .g_price {
            line-height: 0.24rem;
            color: #f01414;
          }
        }
      }
    }
  }
  .goods_bottom {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 50;
    width: 100%;
    height: 0.48rem;
    background: #141d27;
    color: hsla(0, 0%, 100%, 0.4);
    display: flex;
    align-items: center;
    .bottom_left {
      display: flex;
      align-items: center;
      flex: 1;
      .bottom_gouwu {
        position: relative;
        width: 0.75rem;
        height: 0.48rem;
        .circular {
          position: absolute;
          width: 0.56rem;
          height: 0.56rem;
          top: -0.1rem;
          left: 0.16rem;
          border-radius: 50%;
          background: #141d27;
          text-align: center;
          line-height: 0.56rem;
        }
      }
      .bottom_money {
        border-right: 1px solid hsla(0, 0%, 100%, 0.4);
        padding: 0 0.1rem;
        font-weight: 700;
      }
      .bottom_middle {
        font-size: 0.12rem;
        margin: 0 0.12rem;
      }
    }
    .bottom_right {
      background: #2b333b;
      width: 1.05rem;
      height: 100%;
      font-size: 0.12rem;
      font-weight: 700;
      line-height: 0.48rem;
      text-align: center;
    }
  }
}
</style>
