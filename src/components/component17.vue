<template>
    <li v-for="n in even(numbers)">{{ n }}</li>
</template>

<script>
    export default{
        data(){
            return{
                numbers:[1,2,3,4,5,6,7,8,9]
            }
        },
        methods:{
            even :function (numbers) {
                return numbers.filter(function (number) {
                    return number % 2 === 0
                })
            }
        }
    }
</script>