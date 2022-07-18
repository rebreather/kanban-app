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
  background: #012c4f;
}
</style>
