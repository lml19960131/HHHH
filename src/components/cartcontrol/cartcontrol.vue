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
    import Vue from 'vue'

    export default{
        name :'cartcontrol',
        props:{
            food:{
                type: Object
            },
            click:{
                type: Boolean
            }
        },
        method:{
            addCart(event){
                if(!event._constructed){
                    return
                }
                if(!this.food.count){
                    Vue.set(this.food , 'count' , 1);
                }
                else {
                    this.food.count++;
                }
            },
            decreaseCart(event){
                if(!event._constructed){
                    return
                }
                if(this.food.count){
                    this.food.count--;
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
        vertical-align: top;
        width: 12px;
        font-size: 10px;
        color: rgb(147,153,159);
        line-height: 24px;
    }

    .cart-increase{
        display: inline-block;
        padding: 6px;
        font-size: 24px;
        line-height: 24px;
        color: rgb(0,160,220);
    }
</style>