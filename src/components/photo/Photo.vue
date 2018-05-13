<template>
<ul class="clearfix">
  <li v-for="(item,index) in photos" :key="index" @click="toDetail(index)">
     <img :src="item.src "alt="">
  </li>
</ul>
</template>

<script>
  import store from  '@/vuex/store.js'
  import axios from 'axios'
  export default({
    store,
    created(){
      this.$store.commit('routerLinks',{
        color:"#9843A5",
        title:"图片",
      });
      this.getData();
    },
    data(){
      return{
          photos:[],
      }
    },

    methods:{
        getData(){
            axios.get('./static/data/photodata.json')
              .then((res)=>{
               this.photos = res.data.photoData
              }).catch((res)=>{
                console.log("错误");
            })
        },
      toDetail(index){
            this.$router.push({name:'PhotoDetail',params:{photoId:index}})
      },
    }
  })
</script>

<style scoped>
.clearfix:after{
  content:"";
  display: block;
  clear:both;
}
  ul li{
   float: left;
    width: 50%;
  }
ul li img{

}
</style>
