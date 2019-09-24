<template>
    <div class="nar_header">
        <div class="header_left">
            <slot name="header_left"></slot>
        </div>
        <div class="header_center">
            <slot name="header_center"></slot>
        </div>
        <div class="header_right">
            <slot name="header_right"></slot>
        </div>
        </div>    
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.nar_header{
    display: flex;
    position: fixed;
    z-index: 10;
    left: 0;
    right: 0;
    top: 0;
    height: .44rem;
    line-height: .44rem;
    box-shadow: 0 1px 1px rgba(100,100,100,.1);
    background-color: #FF5677;
    color: #fff;
    .header_left,.header_right{
        width:.8rem;
    }
    .header_center{
        flex: 1;
        text-align: center;
    }
}
</style>