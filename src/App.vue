<template>
    <div>
        <component1></component1>
        <component2></component2>
        <component3></component3>
        <component4></component4>
        <component5></component5>
        <component6></component6>
        <component7></component7>
    </div>
</template>


<script>
    import component1 from './components/component1.vue'
    import component2 from './components/component2.vue'
    import component3 from './components/component3.vue'
    import component4 from './components/component4.vue'
    import component5 from './components/component5.vue'
    import component6 from './components/component6.vue'
    import component7 from './components/component7.vue'
    export default{
        name: 'components',
        components:{
            component1,
            component2,
            component3,
            component4,
            component5,
            component6,
            component7,
        }
    }
</script>