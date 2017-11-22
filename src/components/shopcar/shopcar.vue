<template>
    <div class="shopcar">
        <div class="shopcar-content">
            <div class="shopcar-content-left">
                <div class="logo-wrapper">
                    <div class="logo" :class="{highlight1:totalCount>0}">
                        <i class="fa fa-shopping-cart" :class="{highlight2: totalCount > 0}">
                        </i>
                    </div>
                    <div class="num" v-show="totalCount>0">{{totalCount}}</div>
                </div>
                <div class="allPrice" :class="{highlight2:totalPrice>0}">￥{{totalPrice}}</div>
                <div class="transPrice">另需配送费￥{{seller.deliveryPrice}}元</div>
            </div>
            <div class="shopcar-content-right">
                <div class="pay" :class="{enough: totalCount >= seller.minPrice}">
                    {{payDesc}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'shopcar',
        props:{
          selectFoods: {
              type: Array,
              default(){
                  return [{
                      price:10,
                      count: 1
                  }
                  ];
              }
          }
        },
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
                },
            }
        },
        computed:{
            totalPrice() {
                let total = 0;
                this.selectFoods.forEach((food)=>{
                    total += food.price*food.count;
                });
                return total;
            },
            totalCount() {
                let count = 0;
                this.selectFoods.forEach((food)=>{
                    count +=food.count;
                });
                return count;
            },
            payDesc() {
                if(this.totalPrice===0) {
                    return `￥${this.seller.minPrice}元起送`;
                }
                else if(this.totalPrice<this.seller.minPrice){
                    let diff = this.seller.minPrice - this.totalPrice;
                    return `还差￥${diff}元起送`
                }
                else{
                    return '去结算'
                }
            }
        }
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

    .highlight1{
        background-color: rgb(0,160,220);
    }

    .fa-shopping-cart{
        font-size: 24px;
        color: rgba(255,255,255,0.4);
        line-height: 44px;
    }



    .num{
        position: absolute;
        top: 0;
        right: 0;
        width: 24px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        border-radius: 16px;
        font-size: 9px;
        font-weight: 700;
        color: #ffffff;
        background-color: rgb(240,20,20);
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
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
        color: rgba(255,255,255,0.4);
    }

    .highlight2{
        color: #fff;
    }

    .transPrice{
        display: inline-block;
        color: rgba(255,255,255,0.4);
        font-size: 12px;
        font-weight: 200;
        line-height: 24px;
        margin-left: 12px;
        margin-top: 14px;
    }

    .shopcar-content-right{
        flex: 0 0 105px;
        width: 105px;
    }

    .pay{
        color: rgba(255,255,255,0.4);
        background-color: #2b343c;
        font-size: 12px;
        font-weight: 700;
        line-height: 48px;
        height: 48px;
        text-align: center;
    }

    .enough{
        background-color: #00b43b;
        color: #fff;
    }
</style>