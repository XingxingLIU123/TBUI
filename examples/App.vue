<template>
  <div id="app">
    <nav-header></nav-header>
    <div class="tb-wrapper">
      <nav-side></nav-side>
      <transition name="routerChange">
        <router-view class="tb-router"/>
      </transition>
    </div>
  </div>
</template>

<script>
import navSide from '@/components/sideNav'
import navHeader from '@/components/header'
export default {
  name: 'App',
  components: {
    navSide,
    navHeader
  }
}
</script>

<style lang="less">
body, html{
  height: 100%;
}
  // 路由切换，从右到左
  .routerChange-enter-active {
    transition: all .3s ease;
    transform: translateX(0);
  }
  .routerChange-leave-active {
    opacity: 0;
  }
  .routerChange-enter, .routerChange-leave-to {
    transform: translateX(5%);
    opacity: 0;
  }
::-webkit-scrollbar {
    width: 8px;
    border-radius: 4px;
    background-color: #fafafa;
}

::-webkit-scrollbar-track {
    background-color: #fafafa;
}

::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: #ddd;
}

::-webkit-scrollbar-button:start {
    background-size: 12px 12px;
}

::-webkit-scrollbar-button:end {
    background-size: 12px 12px;
}
#app {
  margin: 0 auto;
  width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .tb-wrapper{
    display: flex;
    height: 100%;
    .tb-side{
      width: 240px;
      padding: 10px;
    }
    .tb-router{
      width: 960px;
      padding: 10px;
      overflow: auto;
    }
  }
}
</style>
