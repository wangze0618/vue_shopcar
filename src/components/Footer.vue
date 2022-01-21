<template>
  <!-- 底部 -->
  <div class="my-footer">
    <!-- 全选 -->
    <div class="custom-control custom-checkbox">
      <input
        type="checkbox"
        class="custom-control-input"
        id="footerCheck"
        v-model="isAllCheck"
      />
      <label class="custom-control-label" for="footerCheck">全选</label>
    </div>
    <!-- 合计 -->
    <div>
      <span>合计:</span>
      <span class="price">¥ {{ totalPrice }}</span>
    </div>
    <!-- 按钮 -->
    <button type="button" class="footer-btn btn btn-primary">
      结算 ({{ count }})
    </button>
  </div>
</template>

<script>
export default {
  props: {
    objList: Array,
  },
  computed: {
    /* 目标：全选
      1. v-model关联（绑定）全选复选框 
      2. 页面层（v-model）改变 -> 计算属性（完整写法）改变逻辑
     */
    isAllCheck: {
      set(value) {
        // 全选 影响 小选框
        this.objList.forEach((e) => {
          e.goods_state = value;
        });
      },
      get() {
        // 小选框 影响 全选框
        return this.objList.every((o) => o.goods_state === true);
      },
    },
    count() {
      return this.objList.reduce((sum, obj) => {
        if (obj.goods_state == true) {
          sum += obj.goods_count;
        }
        return sum;
      }, 0);
    },
    totalPrice() {
      return this.objList.reduce((total, obj) => {
        if (obj.goods_state == true) {
          total += obj.goods_count * obj.goods_price;
        }
        return total;
      }, 0);
    },
  },
};
</script>

<style lang="less" scoped>
.my-footer {
  position: fixed;
  z-index: 2;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background: #fff;

  .price {
    color: red;
    font-weight: bold;
    font-size: 15px;
  }
  .footer-btn {
    min-width: 80px;
    height: 30px;
    line-height: 30px;
    border-radius: 25px;
    padding: 0;
  }
}
</style>