<template>
    <div v-show="showFlag" class="food">

    </div>
</template>

<script>
    export default{
        name: 'food',
        props:{
            food:{
                type: Object
            },
        },
        data(){

        }
    }
</script>

<style>
    .food{
        position: fixed;
        left: 0;
        top: 0;
        bottom: 48px;
        z-index:30;
        width: 100%;
        background-color: white;

    }
</style>