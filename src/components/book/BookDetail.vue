<template>
  <ul>
    <li v-for="(image,index) in img" :key="index">
      <img :src="image" alt="">

    </li>
  </ul>
</template>

<script>
  export default({
    data(){
        return{
            mark:0,
            img:[
              '@/assets/img/1.jpg',
              '@/assets/img/2.jpg',
              '@/assets/img/3.jpg',
              '@/assets/img/4.jpg',
              '@/assets/img/5.jpg',

            ],
        }
    },
  })
</script>

<style scoped>
img {
  width: 2rem;
  height: 2rem;
}
ul{
  height: 2rem;
}
  li{
    background: #fff000;
  }
</style>
