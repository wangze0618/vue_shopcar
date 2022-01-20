<template>
  <div class="my-goods-item">
    <div class="left">
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="input" />
        <label class="custom-control-label" for="input">
          <img :src="obj.goods_img" alt="" />
        </label>
      </div>
    </div>
    <div class="right">
      <div class="top">{{ obj.goods_name }}</div>
      <div class="bottom">
        <span class="price">￥{{ obj.goods_price }}</span>
        <span><Count :count="obj.goods_count"></Count></span>
      </div>
    </div>
  </div>
</template>

<script>
import Count from "./Count.vue";
export default {
  props: ["obj"],
  created() {
    console.log(this.obj);
  },
  components: {
    Count,
  },
};
</script>

<style lang="less" scoped>
.my-goods-item {
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  // margin: 43px 0 45px 0;
  .left {
    img {
      width: 120px;
      height: 120px;
      margin-right: 8px;
      border-radius: 10px;
    }
    .custom-control-label {
      padding-left: 10px;
    }
    .custom-control-label::before,
    .custom-control-label::after {
      top: 50px;
    }
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .top {
      font-size: 14px;
      font-weight: 700;
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      padding: 5px 0;
      align-items: center;
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
}
</style>