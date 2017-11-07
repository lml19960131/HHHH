<template>
    <div id="c13">
        <p>Original message :{{message}}</p>
        <p>reversed message :{{reversedMessage()}}</p>
    </div>
</template>

<script>
    export default{
        name: 'component13',
        data(){
            return{
                message:'lianmingliang',
            }
        },
        methods:{
            reversedMessage: function () {
                return this.message.split('').reverse().join('')
            }
        }
    }
</script>


<style>

</style>