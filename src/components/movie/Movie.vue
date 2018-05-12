<template>
  <div>
    <ul>
      <li  class="items" v-for="val in datas" :key="val.id">
        <div class="item-img" >
          <router-link :to="{name:'MovieDetail',params:{movieId:val.id}}">
            <img :src="val.img" alt="">
          </router-link>
        </div>
        <div class="item-info">
          <h4>{{val.nm}}</h4>
          <p>{{val.ver}}</p>
          <p>主演：{{val.star}}</p>
          <p>{{val.showInfo}}</p>
          <button>购票</button>
        </div>
      </li>
    </ul>
    <div class="loading" v-show="isLoading">
      <img src="@/assets/img/jiaza.gif" alt="" >
    </div>
    <div>
      <h3 v-show="isEnd">到底了</h3>
    </div>
  </div>
</template>

<script>
  import store from  '@/vuex/store.js'
  import axios from 'axios'
  export default({
    store,
    data (){
        return{
            datas:[],
          isLoading:false,
          isEnd:false,
        }
    },
    created(){
      this.$store.commit('routerLinks',{
        color:'rgb(33,150,243)',
        title:'电影'
      });
      this.getData();
    },
    mounted () {
      window.onscroll=()=>{
        let scrollTop = document.documentElement.scrollTop;
        let scrollHeigth = document.documentElement.scrollHeight;
        let clientHeight = document.documentElement.clientHeight;
        if(scrollTop+clientHeight+1>=scrollHeigth){
            if(this.isLoading == false){
                if(this.isEnd) {

                }
                  else{
                  this.isLoading = true;
                  this.getData();
                }
            }
        }
      }
    },
    methods:{
        getData(){
            axios.get('https://bird.ioliu.cn/v2?url=http://m.maoyan.com/movie/list.json?type=hot&offset='+this.datas.length +'&limit=10')
              .then((res)=>{
                this.datas =this.datas.concat(res.data.data.movies);
                this.isLoading = false;
                if(res.data.data.movies.length == 0){
                  this.isEnd = true;
                }
              }).catch((res)=>{
                console.log("加载失败");
            })
        }
    },
  })
</script>

<style scoped>
  ul:first-child{

  }
  .items{
    border-bottom: 1px solid #333;
    margin-bottom: .1rem;
    padding-bottom: .1rem;
    display: flex;

  }

  .item-img{
    flex-grow: 1;
    width: 0;
  }
  .item-info{
    flex-grow: 2.5;
    padding-left: 0.1rem;
    width: 0;
    /*float: left;*/
  }
  button{
      float: right;
      margin-right: 0.2rem;
      position: relative;
      top:-1rem;
      z-index: -1;
  }
</style>
