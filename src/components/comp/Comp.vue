<template>
<div>
  <div class="header" :style="'background-color: '+$store.state.color">
    <div class="btn">
      <router-link to="/">首页</router-link>
    </div>
    <div class="title">{{$store.state.title}}</div>

  </div>
  <div class="footer" :style="'background-color: '+$store.state.color">
    <ul>
      <li>
        <router-link to="/">电影</router-link>
      </li>
      <li>

        <router-link to="/music">音乐</router-link>
      </li>
      <li>

        <router-link to="/book">书籍</router-link>
      </li>
      <li>

        <router-link to="/photo">图片</router-link>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import store from  '@/vuex/store.js'
  export default({
    store,


  })
</script>

<style scoped>
.header{
  height: 1rem;
  background: rgb(33,150,243);
  position: fixed;
  width:100%;
  color: #fff;
  top:0;
  left: 0;
}
.header .btn{
  height: 1rem;
  line-height: 1rem;
  padding-left: 0.1rem;
}
.header .btn a{
  color: #fff;
  display: block;

}
.header .title{
  font-size: 0.5rem;
  display: block;
  text-align: center;
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
}
.footer{
  height: 1rem;
  background: rgb(33,150,243);
  position: fixed;
  bottom: 0;
  left:0;
  width:100%;
  }
.footer ul{
  display: flex;
  width: 100%;
  text-align: center;
}
.footer ul li{
  flex-grow: 1;
  width: 0;
  color: #fff;
  line-height: 1rem;
}
.footer ul li a{
  color: #fff;
  display: block;
  width: 100%;
}

</style>
