<template>
    <div id="c20">
        <button @click="greet">click me</button>
    </div>
</template>

<script>
    export default{
        name: 'component20',
        data(){
            return{
                name: 'lianmingliang'
            }
        },
        methods:{
            greet:function () {
                alert('hello'+ this.name+'!')
            }
        }
    }
</script>

<style>

</style>