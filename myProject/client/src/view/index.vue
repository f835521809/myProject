<template>
  <div class="wrap">
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer";
export default {
  components:{
     Footer
}
};
</script>

<style>
.wrap {
  display: flex;
  flex-direction: column;
}
</style>
