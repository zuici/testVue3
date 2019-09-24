<template>
  <div class="tabControl">
    <div
      v-for="(item,index) in titles"
      :key="item"
      class="tabControl_item"
      :class="{active:index === currentIndex}"
      @click="tabItemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data(){
      return{
          currentIndex:0
      }
  },
  methods:{
      tabItemClick(index){
          this.currentIndex = index; 
          this.$emit('itemClick',index)
      }
  }
}
</script>

<style lang="scss" scoped>
.tabControl {
  display: flex;
  text-align: center;
  font-size: 14px;
  .tabControl_item {
      flex:1;
      height: 40px;
      line-height: 40px;
    span{
        padding: 5px;
    }
  }
  .active{
      color:pink;   
      span{
          border-bottom: 2px solid pink;    
      }
  }
}
</style>