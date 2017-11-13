<template>
    <div class="c2">
        <span v-bind:title="message">
            鼠标悬停了解详细信息
        </span>
    </div>
</template>

<script>
    export default{
        name: 'component2',
        data(){
            return {
                message : '页面加载于 ' + new Date().toLocaleString()
            }
        }
    }
</script>