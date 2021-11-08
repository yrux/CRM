<template>
    <h1>{{payment_id}}</h1>
</template>
<script>
export default {
    data(){
        return{
            payment_id: '',
        }
    },
    mounted(){
        this.payment_id = this.$route.params.id
    }
}
</script>