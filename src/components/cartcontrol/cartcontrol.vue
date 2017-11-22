<template>
    <div class="cartcontrol">
        <div class="cart-decrease" v-show="food.count>0">
            <i class="fa-minus-circle"></i>
        </div>
        <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
        <div class="cart-increase">
            <i class="fa fa-plus-circle" @click="addCart"></i>
        </div>
    </div>
</template>

<script>
    export default{
        name :'cartcontrol',
        props:{
            food:{
                type: Object
            }
        },
        method:{
            addCart(){
                if(!this.food.count){
                    this.food.count = 1;
                }
                else {
                    this.food.count++;
                }
            }
        }
    }
</script>

<style>
    @import "https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.css";

    .cartcontrol{
        font-size: 0;
    }

    .cart-decrease{
        display: inline-block;
        padding: 6px;

    }

    .cart-count{
        display: inline-block;
    }

    .cart-increase{
        display: inline-block;
        padding: 6px;
        font-size: 24px;
        line-height: 24px;
        color: rgb(0,160,220);
    }
</style>