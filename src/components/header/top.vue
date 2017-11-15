<template>
    <div class="top">
        <div class="content-wrapper">
            <div class="avatar">
                <img width="64px" :src="seller.avatar">
            </div>
            <div class="content">
                <div class="title">
                    <span class="brand"></span>
                    <span class="name">{{seller.name}}</span>
                </div>
                <div class="description">
                    {{seller.description}}/{{seller.deliveryTime}}分钟送达
                </div>
                <div class="supports" v-if="seller.supports">
                    <span class="icon" :class="">
                    </span><span class="text">{{seller.supports[0].description}}</span>
                </div>
            </div>
            <div class="support-count" v-if="seller.supports">
                <span class="count">{{seller.supports.length}}个</span>
                <i class="icon-keyboard_arrow_right">></i>
            </div>
        </div>
        <div class="bulletin-wrapper">
            <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
            <i class="icon-keyboard_arrow_right">></i>
        </div>
        <div class="background">
            <img :src="seller.avatar" width="100%" height="100%">
        </div>
    </div>
</template>

<script>
    export default{
        name: 'top',
        data(){
            return{
                "seller": {
                    "name": "粥品香坊（回龙观）",
                    "description": "蜂鸟专送",
                    "deliveryTime": 38,
                    "score": 4.2,
                    "serviceScore": 4.1,
                    "foodScore": 4.3,
                    "rankRate": 69.2,
                    "minPrice": 20,
                    "deliveryPrice": 4,
                    "ratingCount": 24,
                    "sellCount": 90,
                    "bulletin": "粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。",
                    "supports": [
                        {
                            "type": 0,
                            "description": "在线支付满28减5"
                        },
                        {
                            "type": 1,
                            "description": "VC无限橙果汁全场8折"
                        },
                        {
                            "type": 2,
                            "description": "单人精彩套餐"
                        },
                        {
                            "type": 3,
                            "description": "该商家支持发票,请下单写好发票抬头"
                        },
                        {
                            "type": 4,
                            "description": "已加入“外卖保”计划,食品安全保障"
                        }
                    ],
                    "avatar": "http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg",
                    "pics": [
                        "http://fuss10.elemecdn.com/8/71/c5cf5715740998d5040dda6e66abfjpeg.jpeg?imageView2/1/w/180/h/180",
                        "http://fuss10.elemecdn.com/b/6c/75bd250e5ba69868f3b1178afbda3jpeg.jpeg?imageView2/1/w/180/h/180",
                        "http://fuss10.elemecdn.com/f/96/3d608c5811bc2d902fc9ab9a5baa7jpeg.jpeg?imageView2/1/w/180/h/180",
                        "http://fuss10.elemecdn.com/6/ad/779f8620ff49f701cd4c58f6448b6jpeg.jpeg?imageView2/1/w/180/h/180"
                    ],
                    "infos": [
                        "该商家支持发票,请下单写好发票抬头",
                        "品类:其他菜系,包子粥店",
                        "北京市昌平区回龙观西大街龙观置业大厦底商B座102单元1340",
                        "营业时间:10:00-20:30"
                    ]
                }
            }
        },
//        created() {
//            this.classMap['descrease','discount','special','invoice','guarantee']
//        }
    }
</script>

<style>
    /*@import "../common/stylus/mixin.styl";*/


    .top{
        color: #fff;
        background-color: rgba(7,17,27,0.5);
        position: relative;
    }

    .content-wrapper{
        padding:24px 12px 18px 24px;
        font-size: 0;
        position: relative;
    }

    .content-wrapper>.avatar{
        display: inline-block;
        vertical-align: top;
    }

    .avatar>img{
        border-radius: 2px;
    }

    .content-wrapper>.content{
        display: inline-block;
        font-size: 14px;
        margin-left: 16px;
    }

    .content-wrapper>.content>.title{
        margin:2px 0 8px 0 ;
    }

    .content-wrapper>.content>.title>.brand{
        width: 30px;
        height: 18px;
        display: inline-block;
        background-size: 30px 18px;
        vertical-align: top;
        background-image: url("brand@2x.png");
        background-repeat: no-repeat;
    }

    .content-wrapper>.content>.title>.name{
        margin-left: 6px;
        font-size: 16px;
        line-height: 18px;
        font-weight: bold;

    }

    .description{
        font-size: 12px;
        font-weight: 200;
        line-height: 12px;
        margin-bottom: 10px;
    }

    .supports{

    }

    .icon{
        display: inline-block;
        width: 12px;
        height: 12px;
        margin-right: 4px;
        background-size: 12px 12px;
        background-repeat: no-repeat;
        vertical-align: top;
    }

    .icon>.descrease{
        background-image: url("decrease_1@2x.png");
    }

    .icon>.discount{
        background-image: url("discount_1@2x.png");
    }

    .icon>.guarantee{
        background-image: url("guarantee_1@2x.png");
    }

    .icon>.invoice{
        background-image: url("invoice_1@2x.png");
    }
    
    .icon>.special{
        background-image: url("special_1@2x.png");
    }

    .text{
        font-size: 10px;
        line-height: 12px;
        font-weight: 200;
    }

    .support-count{
        position: absolute;
        right: 12px;
        bottom: 18px;
        padding: 0 8px;
        height: 24px;
        line-height: 24px;
        border-radius: 14px;
        background-color: rgba(0,0,0,0.2);
        text-align: center;
    }

    .count{
        font-size: 10px;
    }

    .support-count>.icon-keyboard_arrow_right{
        font-size: 10px;
        margin-left: 2px;
    }

    .bulletin-wrapper{
        height: 28px;
        line-height: 28px;
        padding: 0 22px 0 12px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        /*font-size: 0;*/
        vertical-align: top;
        position: relative;
        background-color: rgba(7,17,27,0.2);
    }

    .bulletin-title{
        display: inline-block;
        width: 22px;
        height: 12px;
        background-image: url("bulletin@2x.png");
        background-size: 22px 12px;
        background-repeat: no-repeat;
        vertical-align: top;
        margin-top: 7px;
    }

    .bulletin-text{
        margin-left: 4px;
        margin-right: 4px;
        vertical-align: top;
        font-size: 10px;
    }

    .bulletin-wrapper>.icon-keyboard_arrow_right{
        position: absolute;
        font-size: 10px;
        right: 10px;
        /*top: 8px;*/
    }

    .background{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        filter: blur(10px);
    }
</style>