<!--没有完善的部分有@2x和@3x图片的判别-->
<!--关闭图标的实现-->
<!--弹层加载时的渐-->
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
                    <span class="icon" :class="classMap[seller.supports[0].type]"></span>
                    <span class="text">{{seller.supports[0].description}}</span>
                </div>
            </div>
            <div class="support-count" v-if="seller.supports" @click="showDetail">
                <span class="count">{{seller.supports.length}}个</span>
                <span class="font-right1"><i class="fa fa-angle-right"></i></span>

            </div>
        </div>
        <div class="bulletin-wrapper" @click="showDetail">
            <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
            <span class="font-right2"><i class="fa fa-angle-right"></i></span>
        </div>
        <div class="background">
            <img :src="seller.avatar" width="100%" height="100%">
        </div>
        <div class="detail" v-show="detailShow"  transition="fade">
            <div class="detail-wrapper clearfix">
                <div class="detail-main">
                    <h1 class="detail-name">{{seller.name}}</h1>
                    <div class="star-wrapper">
                        <star :size="48" :score="seller.score"></star>
                    </div>
                    <div class="detail-title">
                        <div class="detail-title-line"></div>
                        <div class="detail-title-text">优惠信息</div>
                        <div class="detail-title-line"></div>
                    </div>
                    <ul class="supports" v-if="seller.supports">
                        <li class="support-item" v-for="(item ,index) in seller.supports">
                            <span class="seller-support-icon" :class="classMap[index]"></span>
                            <span class="seller-support-text">{{seller.supports[index].description}}</span>
                        </li>
                    </ul>
                </div>
                <div class="detail-title">
                    <div class="detail-title-line"></div>
                    <div class="detail-title-text">商家公告</div>
                    <div class="detail-title-line"></div>
                </div>
                <div class="detail-bulletin">
                    <p class="detail-bulletin-text">{{seller.bulletin}}</p>
                </div>
            </div>
            <div class="detail-close">
                <i class="" @click="hiddenDetail">X</i>
            </div>
        </div>
    </div>
</template>

<script>
    import star from '../star/star.vue';

    export default{
        name: 'top',
        components: {
            star,
        },
        data(){
            return {
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
                },
                detailShow: false
            }
        },
        methods: {
            showDetail(){
                this.detailShow = true;
            },
            hiddenDetail() {
                this.detailShow = false;
            }
        },
        created() {
            this.classMap=['decrease','discount','special','invoice','guarantee']
        }
    }
</script>

<style>
    @import "https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.css";

    .top {
        color: #fff;
        background-color: rgba(7, 17, 27, 0.5);
        position: relative;
        overflow: hidden;
    }

    .content-wrapper {
        padding: 24px 12px 18px 24px;
        font-size: 0;
        position: relative;
    }

    .content-wrapper > .avatar {
        display: inline-block;
        vertical-align: top;
    }

    .avatar > img {
        border-radius: 2px;
    }

    .content-wrapper > .content {
        display: inline-block;
        font-size: 14px;
        margin-left: 16px;
    }

    .content-wrapper > .content > .title {
        margin: 2px 0 8px 0;
    }

    .content-wrapper > .content > .title > .brand {
        width: 30px;
        height: 18px;
        display: inline-block;
        background-size: 30px 18px;
        vertical-align: top;
        background-image: url("brand@2x.png");
        background-repeat: no-repeat;
    }

    .content-wrapper > .content > .title > .name {
        margin-left: 6px;
        font-size: 16px;
        line-height: 18px;
        font-weight: bold;
    }

    .description {
        font-size: 12px;
        font-weight: 200;
        line-height: 12px;
        margin-bottom: 10px;
    }

    .icon {
        display: inline-block;
        width: 12px;
        height: 12px;
        margin-right: 4px;
        background-size: 12px 12px;
        background-repeat: no-repeat;
        vertical-align: top;
    }

    .decrease {
        background-image: url("decrease_1@2x.png");
    }

    .discount {
        background-image: url("discount_1@2x.png");
    }

   .guarantee {
        background-image: url("guarantee_1@2x.png");
    }

    .invoice {
        background-image: url("invoice_1@2x.png");
    }

    .special {
        background-image: url("special_1@2x.png");
    }

    .text {
        font-size: 10px;
        line-height: 12px;
        font-weight: 200;
        vertical-align: top;
    }

    .support-count {
        position: absolute;
        right: 12px;
        bottom: 18px;
        padding: 0 8px;
        height: 24px;
        line-height: 24px;
        border-radius: 14px;
        background-color: rgba(0, 0, 0, 0.2);
        text-align: center;
    }

    .count {
        font-size: 10px;
    }

    .font-right1 {
        font-size: 10px;
        margin-left: 2px;
    }

    .bulletin-wrapper {
        height: 28px;
        line-height: 28px;
        padding: 0 22px 0 12px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        vertical-align: top;
        position: relative;
        background-color: rgba(7, 17, 27, 0.2);
    }

    .bulletin-title {
        display: inline-block;
        width: 22px;
        height: 12px;
        background-image: url("bulletin@2x.png");
        background-size: 22px 12px;
        background-repeat: no-repeat;
        vertical-align: top;
        margin-top: 8px;
    }

    .bulletin-text {
        margin-left: 4px;
        margin-right: 4px;
        vertical-align: top;
        font-size: 10px;
    }

    .font-right2{
        position: absolute;
        font-size: 10px;
        right: 10px;
    }

    .background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        filter: blur(10px);
    }

    .detail {
        position: fixed;
        z-index: 100;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(7, 17, 27, 0.8);
        filter: blur(10);
        top: 0;
        left: 0;
        backdrop-filter: blur(10px);
    }

    .detail-wrapper {
        min-height: 100%;
        width: 100%;
    }

    .clearfix {
        display: inline-block;
    }

    .clearfix:after {
        content: '.';
        display: block;
        height: 0;
        line-height: 0;
        clear: both;
        visibility: hidden;
    }

    .detail-main {
        margin-top: 64px;
        /*padding-bottom: 64px;*/
    }

    .detail-name {
        line-height: 16px;
        text-align: center;
        font-size: 16px;
        font-weight: 700;
    }

    .star-wrapper {
        margin-top: 18px;
        padding: 2px 0;
        text-align: center;
    }

    .detail-title {
        display: flex;
        width: 80%;
        margin: 28px auto 24px auto;
    }

    .detail-title-line {
        flex: 1;
        position: relative;
        top: -6px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }

    .detail-title-text {
        padding: 0 12px;
        font-size: 14px;
        color: rgb(255, 255, 255);
        font-weight: 700;
    }

    .supports {
        width: 80%;
        margin: 0 auto;
    }

    .support-item {
        padding: 0 12px;
        margin-bottom: 12px;
        font-size: 0;
    }

    .support-item:last-child {
        margin-bottom: 0;
    }

    .seller-support-icon {
        display: inline-block;
        width: 16px;
        height: 16px;
        vertical-align: top;
        margin-right: 6px;
        background-size: 16px 16px;
        background-repeat: no-repeat;
    }

    .seller-support-text {
        line-height: 16px;
        font-size: 12px;
        font-weight: 200;
        color: white;
    }

    .detail-bulletin{
        width: 80%;
        margin: 0 auto;
    }

    .detail-bulletin-text {
        padding: 0 12px;
        font-weight: 200;
        font-size: 12px;
        line-height: 24px;
        margin-bottom: 64px;
    }

    .detail-close{
        position: relative;
        height: 32px;
        width: 32px;
        margin: 0 auto 32px auto;
        clear: both;
        font-size: 32px;
    }
</style>