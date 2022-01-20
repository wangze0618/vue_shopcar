<template>
  <div>
    <Header title="购物车"></Header>
    <div class="main">
      <Goods :obj="item" v-for="item in list" :key="item.id"></Goods>
    </div>
    <Footer :objList="list"></Footer>
  </div>
</template>

<script>
/* 
  目标：商品数据 铺设在MyGoods组件上
  1. 数据在data保存一下（页面只能用data里的值）
  2. 页面v-for循环MyGoods组件
  3. 分别传入obj数据对象（一对一关系）
*/
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
  padding: 45px 0 47px 0;
}
</style>