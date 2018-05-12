<template>
  <ul>
    <li v-for="item in musicList" :key="item.id" class="music" @click="tomusic()">
        <img :src="item.bg" alt="">
    </li>
  </ul>
</template>

<script>
  import store from  '@/vuex/store.js'
  import axios from 'axios'
  export default({
    store,
    data(){
        return{
          musicList:[],
        }
    },
    created(){
      this.$store.commit('routerLinks',{
        color:"green",
        title:"音乐",
      });
      this.getData();
    },
    methods:{
      getData(){
          axios.get('/static/data/musiclist.json')
            .then((res)=>{
              this.musicList = res.data.albums;
            }).catch((res)=>{
              console.log("错误")
          })
      },
      tomusic(){
        this.$router.push('/musicdetail');
      },
    },

  })
</script>

<style scoped>
  .music{
    width: 50%;
    float: left;
  }
  .music img{
    width: 100%;
  }
</style>
