<template>
  <div class="content" :style="styleObj" @click="toPhoto">

  </div>
</template>

<script>
  import Vue from 'vue'
  import store from  '@/vuex/store.js'
  import VueTouch from 'vue-touch'
  Vue.use(VueTouch)
  export default({
    store,
    data(){
        return{
          styleObj:{
            background: `#000 url("/static/img/${this.$route.params.photoId+1}.jpg") no-repeat center/contain`,
          },
        }
    },
    created(){
      this.$store.commit('routerLinks',{
        color:"#9843A5",
        title:"图片",
      });
    },
    methods:{
      toPhoto(){
          this.$router.push('/photo')
      }
    },


  })
</script>

<style scoped>
.content{
  position: absolute;
  top:0;
  left:0;
  right:0;
  bottom: 0;
  z-index: -1;
}
</style>
