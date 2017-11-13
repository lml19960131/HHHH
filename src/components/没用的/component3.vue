<template>
    <div id="c3">
        <span v-if = 'seen'>你能看到我吗？</span>
    </div>
</template>

<script>
    export default{
        name: 'component3',
        data(){
            return{
                seen:true
            }
        }
    }
</script>