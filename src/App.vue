<template>
    <div>
        <top></top>
        <div class="tab">
            <div class="tab-item">
                <router-link to='/goods'>商品</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/ratings">评价</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/seller">商家</router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>


<script>
    import top from './components/header/top.vue'
    export default{
        name: 'components',
        components: {
            top,
        },
        data() {
            return{
                sellers:{}
            }
        }
    }
</script>

<style>

    .tab{
        display: flex;
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-bottom: 1px solid rgba(7,17,27,0.1);

    }
    .tab-item{
        flex: 1;
        text-align: center;

    }
    a{
        display:inline-block;
        text-decoration: none;
        font-size: 14px;
        color:rgb(77,85,93);
        line-height: 14px;

    }

    .router-link-active{
        color:rgb(240,20,20);
    }

</style>