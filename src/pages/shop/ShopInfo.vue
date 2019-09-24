<template>
  <div class="shopinfo">
    <div class="shopinfo_top">
      <div class="infotop_title">
        <div class="top_left">
          <h3 class="info_name">{{shopInfo.name}}</h3>
          <div class="info_msg">
            <div class="info_star">
              <span class="info_star_s">1</span>
              <span class="info_star_s">1</span>
              <span class="info_star_s">1</span>
              <span class="info_star_s">1</span>
              <span class="info_star_s">1</span>
            </div>
            <span class="info_star_perce">（24）</span>
            <span class="info_star_num">月售{{shopInfo.sellCount}}单</span>
          </div>
        </div>
        <div class="info_favorite">
          <span class="fav_icon"></span>
          <span class="fav_text">收藏</span>
        </div>
      </div>
      <div class="infotop_show">
        <ul>
          <li class="show_msg">
            <h6>起送价</h6>
            <div class="show_content">
              <span class="content_num">{{shopInfo.minPrice}}</span>元
            </div>
          </li>
          <li class="show_msg">
            <h6>商家配送</h6>
            <div class="show_content">
              <span class="content_num">{{shopInfo.deliveryPrice}}</span>元
            </div>
          </li>
          <li class="show_msg">
            <h6>平均配送时间</h6>
            <div class="show_content">
              <span class="content_num">{{shopInfo.deliveryTime}}</span>分钟
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="split"></div>
    <div class="shopinfo_notice">
      <h5>公告与活动</h5>
      <div class="notice_text">
        <p>{{shopInfo.bulletin}}</p>
      </div>
      <ul>
        <li class="notice_support" v-for="item in shopInfo.supports" :key="item.content">
          <span class="support_icon">{{item.name}}</span>
          <span class="support_text">{{item.content}}</span>
        </li>
       
      </ul>
    </div>
    <div class="split"></div>
    <div class="shopinfo_rscene">
      <h5>商家实景</h5>
      <div class="rscene_wrapper">
        <ul>
          <li
            class="rscene_wra_item"
            v-for="item in shopInfo.pics"
            :key="item"
          >
            <img :src="item">
          </li>
        </ul>
      </div>
    </div>
    <div class="split"></div>
    <div class="shopinfo_news">
      <h5>商家信息</h5>
      <div class="news_info">
        <ul>
          <li class="news_item">该商家支持发票,请下单写好发票抬头</li>
          <li class="news_item">品类:{{shopInfo.category}}</li>
          <li class="news_item">{{shopInfo.address}}</li>
          <li class="news_item">营业时间:{{shopInfo.workTime}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      shopInfo: {}
    }
  },
  async mounted() {
    const res = await this.$http.get('/info');
    this.shopInfo = res.data.data;
    console.log(res.data.data)
  }


}
</script>
<style lang="scss" scoped>
.shopinfo {
  .shopinfo_top {
    padding: 0.18rem;
    .infotop_title {
      display: flex;
      padding-bottom: 0.18rem;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      .top_left {
        flex: 1;
        .info_name {
          margin-bottom: 0.08rem;
          line-height: 0.14rem;
          font-weight: normal;
          color: #07111b;
          font-size: 0.14rem;
        }
        .info_msg {
          display: flex;
          .info_star {
            .info_star_s {
              width: 0.15rem;
              height: 0.15rem;
              margin-right: 0.06rem;
              background-size: 0.15rem 0.15rem;
            }
          }
          .info_star_perce,
          .info_star_num {
            margin-right: 0.12rem;
            line-height: 0.18rem;
            vertical-align: top;
            font-size: 0.1rem;
            color: #4d555d;
          }
        }
      }
      .info_favorite {
        width: 0.5rem;
        .fav_icon {
          display: block;
          width: 0.24rem;
          height: 0.24rem;
          margin-bottom: 0.04rem;
          line-height: 0.24rem;
          font-size: 0.24rem;
          color: #d4d6d9;
        }
        .fav_text {
          line-height: 0.1rem;
          font-size: 0.1rem;
          color: #4d555d;
        }
      }
    }
    .infotop_show {
      ul {
        display: flex;
        padding-top: 0.18rem;
        li:last-child {
          border: none;
        }
        .show_msg {
          flex: 1;
          text-align: center;
          list-style: none;
          border-right: 1px solid rgba(7, 17, 27, 0.1);
          h6 {
            margin-bottom: 0.04rem;
            line-height: 0.1rem;
            font-size: 0.1rem;
            color: #93999f;
            font-weight: normal;
          }
          .show_content {
            line-height: 0.24rem;
            font-size: 0.1rem;
            color: #07111b;
            .content_num {
              font-size: 0.24rem;
            }
          }
        }
      }
    }
  }
  .split {
    width: 100%;
    height: 0.16rem;
    border-top: 1px solid rgba(7, 17, 27, 0.1);
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    background: #f3f5f7;
  }
  .shopinfo_notice {
    padding: 0.18rem 0.18rem 0;
    h5 {
      margin-bottom: 0.08rem;
      line-height: 0.14rem;
      color: #071.08rem;
      font-size: 0.14rem;
    }
    .notice_text {
      padding: 0 0.12rem 0.16rem;
      border-bottom: 0.005rem solid rgba(7, 17, 27, 0.1);
      p {
        line-height: 0.24rem;
        font-size: 0.12rem;
        color: #f01414;
      }
    }
    ul {
      .notice_support {
        border-bottom: 0.005rem solid rgba(7, 17, 27, 0.1);
        list-style: none;
        padding: 0.16rem 0.12rem;
        .support_icon {
        //   width: 0.16rem;
        //   height: 0.16rem;
          font-size:0.12rem;
          display: inline-block;
          background-color: #071;
          color: #f3f5f7;
          margin-right: 0.06rem;
          background-size: 0.16rem 0.16rem;
          background-repeat: no-repeat;
        }
        .support_text {
          line-height: 0.16rem;
          font-size: 0.12rem;
          color: #07111b;
        }
      }
    }
  }
  .shopinfo_rscene {
    padding: 0.18rem;
    width: 100%;
    white-space: nowrap;
    box-sizing: border-box;
    h5 {
      margin-bottom: 0.12rem;
      line-height: 0.14rem;
      color: #07111b;
      font-size: 0.14rem;
    }
    .rscene_wrapper {
      overflow: hidden;
      ul {
          overflow-x: auto;
        .rscene_wra_item {
          display: inline-block;
          list-style: none;
          margin-right: 0.06rem;
          width: 1.2rem;
          height: 0.9rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  .shopinfo_news {
    padding: 0.18rem 0.18rem 0;
    h5 {
      margin-bottom: 0.12rem;
      line-height: 0.14rem;
      color: #07111b;
      font-size: 0.14rem;
    }
    .news_info {
      ul {
        .news_item:last-child {
          border: none;
        }
        .news_item {
          font-size: 0.12rem;
          border-bottom: 0.005rem solid rgba(7, 17, 27, 0.1);
          list-style: none;
          padding: 0.16rem 0.12rem;
        }
      }
    }
  }
}
</style>
