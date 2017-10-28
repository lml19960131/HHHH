<template>
    <div>
        <component1></component1>
        <component2></component2>
    </div>
</template>


<script>
    import component1 from './components/component1.vue'
    import component2 from './components/component2.vue'
    export default{
        name: 'components',
        components:{
            component1,
            component2,
        }
    }
</script>