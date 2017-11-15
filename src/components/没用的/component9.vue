<template>
    <div>{{fullName}}</div>
</template>

<script>
    export default{
        name: 'component9',
        data() {
            return {
                firstName : 'Foo',
                lastName : 'Bar'
            }
        },
        computed:{
            fullName:function () {
                return this.firstName+' '+this.lastName;
            }
        }
    }
</script>