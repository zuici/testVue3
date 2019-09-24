<template>
    <div class="goods_list" >
        
        <goodsListItem v-for="item in goodsList" :key="item.iid" :goodsItem="item"/>
    </div>
</template>
<script>
import goodsListItem from './goodsListItem'
export default {
    components:{
        goodsListItem
    },
    props:{
        goodsList:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.goods_list{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
</style>