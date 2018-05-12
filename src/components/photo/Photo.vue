<template>
<ul>
  <li v-for="item in photos" :key="item.id">
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
        color:"black",
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
        }
    }
  })
</script>

<style scoped>
ul{

}
  ul li{
float: left;
    width: 50%;
  }
ul li img{

}
</style>
