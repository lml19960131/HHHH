<template>
    <div class="c12">
        <p>{{message}}</p>
        <input v-model="message">
    </div>
</template>

<script>
    export default{
        name: 'component12',
        data(){
            return{
                message: 'lml'
            }
        }
    }
</script>

<style>

</style>