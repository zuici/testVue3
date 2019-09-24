<template>
    <div class="goods_item">
        <img :src="goodsItem.show.img" alt="">
        <div class="goods_info">
            <p>{{goodsItem.title}}</p>
            <span class="price">{{goodsItem.price}}</span>
            <span class="cfav">{{goodsItem.cfav}}</span>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        goodsItem:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.goods_item{
    padding-bottom: 40px;
    position: relative;
    width: 48%;
    img{
        width:100%;
        border-radius: 5px;
    }
    .goods_info{
        position:absolute;
        left: 0;
        right: 0;
        bottom: 5px;
        font-size: 12px;
        overflow: hidden;
        text-align: center;
        p{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-bottom: 3px;
        }
    }
}
</style>