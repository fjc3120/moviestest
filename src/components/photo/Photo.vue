<template>
<h1>photo</h1>
</template>

<script>
  import store from  '@/vuex/store.js'
  export default({
    store,
    created(){
      this.$store.commit('routerLinks',{
        color:"black",
        title:"图片",
      });
    }
  })
</script>

<style scoped>

</style>
