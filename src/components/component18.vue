<template>
    <div class="c18">
        <div v-bind:class="{active: isActive}"></div>
    </div>
</template>

<script>
    export default{
        name: 'component18',
        data(){
            return{
                isActive: true
            }
        }
    }
</script>

<style>
    .active{
        width: 100px;
        height: 100px;
        background: green;
    }
</style>