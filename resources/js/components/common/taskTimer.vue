<template>
    <span>{{time_cur}}</span>
</template>
<script>
export default {
    props:['time','status'],
    data(){
        return{
            time_cur: '00:00:00',
        }
    },
    mounted(){
        this.time_cur = this.time
        // if(parseInt(this.status)==0||parseInt(this.status)==1){
        //     setInterval(()=>{
        //         this.updateTimer()
        //     },1000)
        // }
    },
    methods:{
        updateTimer(){
            // console.log(this.time_cur)
        }
    }
}
</script>