<template>

    <v-touch @tap="toPhoto" @swipeleft="onSwipeLeft" @swiperight="onSwipeRigth" class="content" :style="styleObj">
    </v-touch>
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
          thisIndex:this.$route.params.photoId+1,
        }
    },
    computed:{
      styleObj(){
          return `background: #000 url('/static/img/${this.thisIndex}.jpg') no-repeat center/contain;`
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
          this.$router.push('/photo');
      },

    onSwipeLeft(){
      if(this.thisIndex==0){

      }else{
        this.thisIndex++;
      }

    },
    onSwipeRigth(){
      this.thisIndex--;
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
