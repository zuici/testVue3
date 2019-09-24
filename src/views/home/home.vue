<template>
  <div
    class="home"
    ref="home"
    @scroll="homeScroll"
  >
    <div>
      <nar-header>
        <div slot="header_center">购物街</div>
      </nar-header>
      <!-- 轮播图 -->
      <swiper :banners="banners"></swiper>
      <recomm-view :recommends="recommends" />

      <div class="content_lx">
        <img
          src="../../assets/img/home/recommend_bg.jpg"
          alt=""
        >
      </div>

      <tabControl
        :titles="['流行','新款','精选']"
        @itemClick="itemsClick"
      />
      <goodsList :goodsList="showGoods"></goodsList>

      <backTop
        @click.native="backTop"
        v-show="backTopShow"
      />
    </div>
  </div>
</template>
<script>
import Scroll from '../../components/common/scroll/scroll'

import narHeader from '../../components/context/narHeader'
// import tabBar from '../../components/common/tabbar/TabBar'
import tabControl from '../../components/context/tabControl'
import swiper from '../../components/common/swiper/swiper'
import recommView from './RecommView'
import goodsList from '../shopView/goods/goodsList'
import backTop from '../../components/context/BackTop'

import { getHomeGoods, getHomeMultidata } from '../../network/home'
import { setInterval, clearInterval } from 'timers';
import { constants } from 'crypto';
// import tabBar from '@components/common/tabbar/TabBar';

export default {
  components: {
    goodsList,
    tabControl,
    Scroll,
    backTop,
    narHeader,
    swiper,
    recommView
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] }
      },
      currentType: 'pop',
      backTopShow: false,
      domHome: {},
      pageNo: 1,
      pageSize: 20
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  methods: {
    //时间监听相关方法
    itemsClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop';
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },

    //backtop返回顶部
    backTop() {
      // console.log(document.documentElement.scrollTop || document.body.scrollTop)
      // let html = document.documentElement;
      let scroll = this.domHome.scrollTop;

      const backTime = setInterval(() => {
        scroll -= 100;
        this.domHome.scrollTop = scroll;
        if (scroll <= 0) {
          clearInterval(backTime);
        }
      }, 10)
    },
    //backtop显示隐藏
    // backTopShows() {
    //   let scroll = document.documentElement.scrollTop || document.body.scrollTop;
    //   scroll > 500 ? this.backTopShow = true : this.backTopShow = false;
    // },

    //网络请求相关发放
    getMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        //以后请求的数据都要保存进list数组里面
        // for(let n of num1){
        //     this.goods[type].list.push(res.data.list);
        // }
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        // console.log(1111111)
        // console.log(this.goods[type].list)
      })
    },

    homeScroll() {
      this.backTopShow = this.domHome.scrollTop > 500;

      if (this.domHome.offsetHeight - this.domHome.scrollTop <= 200) {
        this.pushData();
      };
    },

    // pushData() {
    //   http("url", {
    //     pageNo: ++this.pageNo,
    //     pageSize: this.pageSize
    //   },res=>{
    //     // res.data.push
    //   });
    // }
    // backTop(){

    // }
  },
  created() {
    //请求商品数据(页面加载时把三个type的第一页都首先请求过来)
    // getHomeGoods('pop', 1).then(res => {
    //     console.log(res)
    //   })
    this.getGoods('pop');

    this.getGoods('new');
    this.getGoods('sell');
  },

  mounted() {
    this.domHome = this.$refs.home;
    this.getMultidata();
    // window.addEventListener('scroll', this.backTopShows, true)
  },
  destroyed() {
    // window.removeEventListener('scroll', this.backTopShows, true)
  }
}
</script>
<style lang="scss" scoped>
.home {
  position: absolute;
  left: 0;
  right: 0;
  top: 0.44rem;
  bottom: 0.49rem;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }
  .swiper {
    // height: 1.8rem;
    // background-color: burlywood;
  }
  .content {
    height: calc(100%);
  }
  .content_lx {
    box-shadow: 0px 2px 10px #ccc;
    img {
      width: 100%;
    }
  }
}
</style>