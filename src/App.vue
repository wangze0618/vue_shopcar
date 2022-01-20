<template>
  <div>
    <Header></Header>
    <div class="main">
      <Goods></Goods>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Goods from "./components/Goods.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Header,
    Goods,
    Footer,
  },
};
</script>

<style scoped>
.main {
  padding: 45px 0 0 0;
}
</style>