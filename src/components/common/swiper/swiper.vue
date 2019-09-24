<template>
<div class="swiper">
    <div class="swiper_img" v-for="item in banners" :key="item.image">
        <a :href="item.link" class="">
            <img :src="item.image" alt="">
        </a>
    </div>
    <div class="swiper_icon">
        <div class="swiper_icon_item" v-for="item in banners" :key="item.image"></div>
    </div>
</div>    
</template>

<script>
export default {
    props:{
        banners:{
            type:Array,
            default(){
                return []
            }
        }
    },
    date(){
        return{
            swiperIconCount:0
        }
    },
    computed:{
        iconCount(){
            return this.banners.length
        }
        
    },
    methods:{

    },
    created(){
        this.swiperIconCount = this.banners.length;
    }
}
</script>
<style lang="scss" scoped>
.swiper{
    position: relative;
    overflow: hidden;
    white-space: nowrap;
.swiper_img{
    width: 100%;
    display: inline-block;
    img{
        width:100%;
    }
}
.swiper_icon{
    display: flex;
    position: absolute;
    width:100%;
    bottom: .08rem;
    justify-content: center;
    .swiper_icon_item{
        width: .08rem;
        height: .08rem;
        border-radius: 8px;
        background-color: #fff;
        margin: 0 .05rem;
    }
}
}
</style>