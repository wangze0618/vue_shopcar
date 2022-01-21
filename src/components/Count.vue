<template>
  <div class="my-counter">
    <button
      type="button"
      :disabled="obj.goods_count == 1"
      @click="reduceCount()"
      class="btn btn-light"
    >
      -
    </button>
    <input
      type="number"
      class="form-control inp"
      v-model.number="obj.goods_count"
    />
    <button type="button" @click="addCount()" class="btn btn-light">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  watch: {
    obj: {
      deep: true,
      handler() {
        // console.log(this.obj.goods_count);
        if (this.obj.goods_count <= 0) {
          return (this.obj.goods_count = 1);
        }
      },
    },
  },
  methods: {
    addCount() {
      this.obj.goods_count++;
    },
    reduceCount() {
      //   if (this.obj.goods_count <= 1) {
      //     alert("不能为0");
      //     this.obj.goods_count = 1;
      //   } else {
      this.obj.goods_count--;
      //   }
    },
  },
  props: { obj: Object },
  /* 因为数量控制要通过对象“相互引用的关系”来影响外面
     对象里的数量值，所以最好传 对象进来 */
};
</script>

<style lang="less" scoped>
.my-counter {
  display: flex;
  .inp {
    width: 45px;
    text-align: center;
    margin: 0 10px;
  }
  .btn,
  .inp {
    transform: scale(0.9);
  }
}
</style>