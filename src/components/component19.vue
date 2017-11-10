<template>
    <div id="c19">
        <button @click="counter+=1">增加1</button>
        <p>这个按钮被点击了{{ counter }}次</p>
    </div>
</template>

<script>
    export default{
        name: 'component19',
        data(){
            return{
                counter: 0
            }
        }
    }
</script>

<style>

</style>