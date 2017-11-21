<template>
    <div class="shopcar">
        <div class="shopcar-content">
            <div class="shopcar-content-left">
                <div class="logo-wrapper">
                    <div class="logo">
                        <i  class="fa fa-shopping-cart"></i>
                    </div>
                    <div class="allPrice"></div>
                    <div class="transPrice"></div>
                </div>
            </div>
            <div class="shopcar-content-right"></div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'shopcar'
    }
</script>

<style>
    @import "https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.css";

    .shopcar{
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: 1;
        width: 100%;
        height: 48px;
    }

    .shopcar-content{
        display: flex;
        background-color: #141d27;
    }

    .shopcar-content-left{
        flex: 1;
        font-size: 0;
    }

    .logo-wrapper{
        display: inline-block;
        position: relative;
        top: -10px;
        margin-left: 12px;
        margin-right: 10px;
        padding: 6px;
        width: 56px;
        height: 56px;
        box-sizing: border-box;
        vertical-align: top;
        border-radius: 50%;
        background-color: #141d27;
    }

    .logo{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: #2b343c;
        text-align: center;
    }

    .fa-shopping-cart{
        font-size: 24px;
        color: rgba(255,255,255,0.4);
        line-height: 44px;
    }
    .allPrice{
        display: inline-block;
        font-size: 16px;
        line-height: 24px;
        font-weight: 700;
        vertical-align: top;
        margin-top: 12px;
        padding-right: 12px;
        box-sizing: border-box;
        border-right: 1px solid rgba(255,255,255,0.1);
    }

    .transPrice{
        display: inline-block;
    }

    .shopcar-content-right{
        flex: 0 0 105px;
        width: 105px;
    }

</style>