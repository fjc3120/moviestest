<template>
  <swipe class="my-swipe">
    <swipe-item class="slide1"><img src="@/assets/img/1.jpg" alt=""></swipe-item>
    <swipe-item class="slide2"><img src="@/assets/img/2.jpg" alt=""></swipe-item>
    <swipe-item class="slide3"><img src="@/assets/img/3.jpg" alt=""></swipe-item>
    <swipe-item class="slide3"><img src="@/assets/img/4.jpg" alt=""></swipe-item>
    <swipe-item class="slide3"><img src="@/assets/img/5.jpg" alt=""></swipe-item>
  </swipe>
</template>

<script>
  require('vue-swipe/dist/vue-swipe.css');
  import store from  '@/vuex/store.js'
  import { Swipe, SwipeItem } from 'vue-swipe';
  export default {
    store,
    components: {
      'swipe': Swipe,
      'swipe-item': SwipeItem
    },
    created(){
      this.$store.commit('routerLinks',{
        color:"black",
        title:"书籍",
      });
    },
  }
</script>

<style scoped>

.my-swipe {
  height: 4rem;
  color: #fff;
  font-size: 30px;
  text-align: center;
}
</style>
