<template>
  <div class="shopratings">
    <div class="ratings_top">
      <div class="top_left">
        <h3 class="left_score">4.2</h3>
        <div class="multiple">综合评分</div>
        <div class="appraise">高于周边商家69.2%</div>
      </div>
      <div class="top_right">
        <div class="right_content">
          <span class="right_word">服务态度</span>
          <div class="right_stars">
            <span class="star_item">1</span>
            <span class="star_item">1</span>
            <span class="star_item">1</span>
            <span class="star_item">1</span>
            <span class="star_item">1</span>
          </div>
          <span class="right_score">4.1</span>
        </div>
        <div class="right_content">
          <span class="right_word">服务态度</span>
          <div class="right_stars">
            <span class="star_item">1</span>
            <span class="star_item">1</span>
            <span class="star_item">1</span>
            <span class="star_item">1</span>
            <span class="star_item">1</span>
          </div>
          <span class="right_score">4.2</span>
        </div>
        <div class="right_content">
          <span class="right_word">送达时间</span>
          <div class="right_bttime">38分钟</div>
        </div>
      </div>
    </div>
    <div class="split"></div>
    <div class="ratings_nav">
      <ul>
        <li class="ratings_el">全部<span class="ra_el_count">24</span></li>
        <li class="ratings_el">满意<span class="ra_el_count">24</span></li>
        <li class="ratings_el negative">不满意<span class="ra_el_count">24</span></li>
      </ul>
      <div class="ratings_opt">
        <span class="opt_icon">1</span>
        <span class="opt_text">只看有内容的评价</span>
      </div>
    </div>
    <div class="ratings_content">
      <ul>
        <li class="ratings_con_item">
          <div class="content_left">
            <img
              src="../../assets/haize.jpg"
              alt=""
            >
          </div>
          <div class="content_right">
            <div class="content_usertop">
              <h3 class="content_userid">2131231</h3>
              <div class="content_usertime">2016-07-23 21:52</div>
            </div>
            <div class="content_userstar">
              <div class="con_star">
                <span class="con_sta_item">1</span>
                <span class="con_sta_item">1</span>
                <span class="con_sta_item">1</span>
                <span class="con_sta_item">1</span>
                <span class="con_sta_item">1</span>
              </div>
              <div class="con_sta_score">30</div>
            </div>
            <p class="content_userspeek">不错,粥很好喝,我经常吃这一家,非常赞,以后也会常来吃,强烈推荐.</p>
            <div class="content_speek_el">
              <span class="speek_icon">1</span>
              <span class="speek_el">南瓜粥</span>
              <span class="speek_el">娃娃菜炖豆腐</span>
              <span class="speek_el">扁豆焖面</span>
              <span class="speek_el">南瓜粥</span>
              <span class="speek_el">南瓜粥</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.shopratings {
  .ratings_top {
    display: flex;
    padding: 0.18rem 0;
    color: #07111b;
    font-size: 0.14rem;
    .top_left {
      width: 1.37rem;
      text-align: center;
      font-size: 0.12rem;
      border-right: 1px solid rgba(7, 17, 27, 0.1);
      .left_score {
        margin-bottom: 0.06rem;
        line-height: 0.28rem;
        font-size: 0.24rem;
        color: #f90;
        font-weight: normal;
      }
      .multiple {
        margin-bottom: 0.08rem;
        line-height: 0.12rem;
      }
      .appraise {
        color: #93999f;
        line-height: 0.12rem;
      }
    }
    .top_right {
      flex: 1;
      padding: 0.06rem 0 0.06rem 0.24rem;
      font-size: 0.12rem;
      .right_content {
        display: flex;
        margin-bottom: 0.08rem;
        .right_stars {
          margin: 0 0.12rem;
          .star_item {
            width: 0.15rem;
            height: 0.15rem;
            margin-right: 0.06rem;
          }
        }
        .right_score {
          color: #f90;
        }
        .right_bttime {
          margin: 0 0.12rem;
          color: #93999f;
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
  .ratings_nav {
    padding: 0.18rem 0.18rem 0.12rem;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    ul {
      display: flex;
      margin-bottom: 0.15rem;
      .ratings_el {
        list-style: none;
        background: rgba(0, 160, 220, 0.2);
        padding: 0.08rem 0.12rem;
        margin-right: 0.08rem;
        line-height: 0.16rem;
        border-radius: 1px;
        font-size: 0.12rem;
        color: #4d555d;
      }
      .negative {
        background: rgba(77, 85, 93, 0.2);
      }
    }
    .ratings_opt {
      padding: 0.15rem 0 0 0;
      display: flex;
      color: #93999f;
      align-items: center;
      .opt_icon {
        margin-right: 0.04rem;
      }
      .opt_text {
        font-size: 0.12rem;
        line-height: 0.12rem;
      }
    }
  }
  .ratings_content {
    padding: 0 0.18rem;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    ul {
      .ratings_con_item {
        display: flex;
        color: #07111b;
        font-size: 0.12rem;
        padding: 0.18rem 0;
        .content_left {
          margin-right: 0.12rem;
          width: 0.28rem;
          img {
            width: 100%;
            height: 0.28rem;
            border-radius: 50%;
          }
        }
        .content_right {
          flex: 1;
          .content_usertop {
            display: flex;
            .content_userid {
              flex: 1;
              font-weight: normal;
              font-size: 0.1rem;
            }
            .content_usertime {
              color: #93999f;
              width: 0.85rem;
              font-size: 0.1rem;
            }
          }
          .content_userstar {
            display: flex;
            margin-bottom: 0.03rem;
            .con_star {
              margin-right: 0.06rem;
              .con_sta_item {
                margin-right: 0.03rem;
              }
            }
            .con_sta_score {
              color: #93999f;
            }
          }
          .content_userspeek {
            word-break: break-all;
            margin-bottom: 0.08rem;
            line-height: 0.18rem;
          }
          .content_speek_el {
            // display: flex;
            // flex-wrap: wrap;
            .speek_icon {
              display: inline-block;
              margin-right: 0.08rem;
              color: #00a0dc;
            }
            .speek_el {
              display: inline-block;
              padding: 0 0.06rem;
              border: 0.01rem solid rgba(7, 17, 27, 0.1);
              border-radius: 0.01rem;
              color: #93999f;
              background: #fff;
              margin:0 0.08rem 0.04rem 0;
              font-size: 0.10rem;
            }
          }
        }
      }
    }
  }
}
</style>
<script>

export default {


}
</script>