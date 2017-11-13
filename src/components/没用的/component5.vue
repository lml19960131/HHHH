<template>
    <div id="c5">
        <p>{{message}}</p>
        <button v-on:click="reverseMessage">字符串逆转</button>
    </div>
</template>

<script>
    export default{
        name: 'component5',
        data(){
            return{
                message: 'Hello World'
            }
        },
        methods:{
            reverseMessage: function () {
                this.message = this.message.split('').reverse().join('')
            }
        }
    }
</script>