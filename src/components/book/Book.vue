<template>
  <h1>book</h1>
</template>

<script>
  import store from  '@/vuex/store.js'
  export default({
    store,
    created(){
      this.$store.commit('routerLinks',{
        color:"red",
        title:"书籍",
      });
    }
  })
</script>

<style scoped>

</style>
