<template>
    <div id="c14">
        <p>{{fullName}}</p>
    </div>
</template>

<script>
    export default{
        name: 'component14',
        data(){
            return{
                firstName :"lian",
                lastName :"mingliang"
            }
        },
        computed:{
            fullName: {
                get :function () {
                    return this.firstName+' '+this.lastName
            },
                set :function (newValue) {
                    var names =newValue.split(' ');
                    this.firstName=names[0];
                    this.lastName=names[name.length-1]
                }}
        }
    }
    //fullName="adsa dsadas";
    //document.write("firstname:" +data.fullName.firstName);
    //document.write("lastname:" +data.fullName.lastName );
</script>

<style>

</style>