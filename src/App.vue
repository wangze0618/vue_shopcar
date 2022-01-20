<template>
  <div>
    <Header title="购物车"></Header>
    <div class="main">
      <Goods :obj="item" v-for="item in list" :key="item.id"></Goods>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Goods from "./components/Goods.vue";
import Footer from "./components/Footer.vue";

export default {
  data() {
    return {
      list: [],
    };
  },
  components: { Header, Goods, Footer },
  async created() {
    const res = await this.$axios({
      method: "get",
      url: "/api/cart",
    });
    this.list = res.data.list;
  },
};
</script>

<style scoped>
.main {
  padding: 45px 0 0 0;
}
</style>