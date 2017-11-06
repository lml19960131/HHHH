<template>
    <div class="c11">
        {{6+6}}<br/>
        <!--{{ var a=1}}<br/>-->
        <!--{{ var a}}<br/>-->
        <!--{{a=1}}<br/>-->
        {{message}}
    </div>
</template>

<script>
    export default{
        name: 'component11',
        data(){
            return {
                message: 'lml',
            }
        }
    }
</script>

<style>

</style>