<template>
  <div>
    <aplayer  v-if="isReady" :music='music' :list = 'musiclist'  :showLrc = 'true' />
  </div>

</template>

<script>
  import Aplayer from 'vue-aplayer'
  import axios from 'axios'
  export default({
    data(){
        return{
          music:{},
          musiclist:[],
          isReady : false
        }
    },
    methods:{
        getData(){
            axios.get('./static/data/musicdata.json')
              .then((res)=>{
               for(let i=0;i<res.data.musicData.length;i++){
                   this.musiclist.push({
                     title : res.data.musicData[i].title,
                     artist : res.data.musicData[i].artist,
                     src :res.data.musicData[i].src,
                     pic : res.data.musicData[i].pic,
                     lrc: 'http://localhost:8080/static/'+res.data.musicData[i].lrc,
                   })
               }
               let thisObj = {};
                thisObj.title = res.data.musicData[0].title;
                thisObj.artist = res.data.musicData[0].artist;
                thisObj.src = res.data.musicData[0].src;
                thisObj.pic = res.data.musicData[0].pic;
                thisObj.lrc= 'http://localhost:8080/static/'+res.data.musicData[0].lrc;
                this.music = thisObj;
                this.isReady = true;
              }).catch((res)=>{
                console.log("错误")
            })
        }
    },
    created(){
        this.getData();
    },
    components:{
      Aplayer,
    },
  })
</script>

<style scoped>

</style>
