<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  components:{
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  list-style: none;
  box-sizing: border-box;
}
body,
html {
  width: 100%;
  height: 100%;
}
#app{
  height: 100%;
  width: 100%;
}
</style>
