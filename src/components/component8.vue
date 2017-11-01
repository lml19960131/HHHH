<template>
    <div id="example">
        <p>message1: "{{message}}"</p>
        <p>message2: "{{reversedMessage}}"</p>
    </div>
</template>

<script>
    export default {
        name : 'component8',
        data(){
            return{
                message:'lianmingliang'
            }
        },
        computed: {
            reversedMessage: function () {
                return this.message.split('').reverse().join('')
            }
        }
    }
</script>