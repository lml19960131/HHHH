<template>
    <div v-html="rawHtml"></div>
</template>

<script>
    export default{
        name: 'component10',
        data() {
            return {
                rawHtml: '<h1>连明亮</h1>',
            }

        }
    }
</script>

<style>

</style>