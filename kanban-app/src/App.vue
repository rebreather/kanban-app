<template>
  <ErrorBoundary id="app">
    <router-view/>
  </ErrorBoundary>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background: -webkit-linear-gradient(right, #E5E8E1, #9FB8B4); /*백그라운드 배경*/
	background: -moz-linear-gradient(right, #e5e8e1, #9fb8b4); /*오른쪽 색상이 왼쪽색상으로 그라데이션*/
	background: -o-linear-gradient(right, #E5E8E1, #9FB8B4);
	background: linear-gradient(to left, #E5E8E1, #9FB8B4);
}
</style>
