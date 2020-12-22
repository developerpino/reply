<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
}
</script>
<style scoped>
  #app {
      position: relative;
      z-index: 1;
      width: 100%;
      height: 1000px;
  }
  #app:after {
      background-image: url(//img1a.coupangcdn.com/image/static/login/logo-coupang.x1.20160902.png);
      top: 0;
      left: 0;
      position: absolute;
      background-size: 300px;
      opacity: 0.1 !important;
      filter: alpha(opacity=50);
      z-index: -1;
      content: "";
      width: 100%;
      height: 100%;
  }
</style>
