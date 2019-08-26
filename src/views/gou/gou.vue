<template>
  <div>
    <div>
      <form action class="from1">
        <div>
          <input type="checkbox" name="全选" id />
          <span>全选</span>
        </div>
        <div class="from2">
          <div class="div1">
            合计
            <span>￥</span>
          </div>
          <div class="div2">结算</div>
        </div>
      </form>
    </div>
    <div class="div6">
      <div>购物车</div>
      <div>管理</div>
    </div>
    <div class="jia">+添加商品</div>
    <div class="fen">
      <div v-for="(item,index) in list" :key="index" class="lei">
        <img :src="item.src" alt />
        {{item.text}}
        <div class="fen1">
          <div>{{item.money}}</div>
          <div>{{item.span}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { request } from "../../network/request";
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    request(
      {
        url: "ppp"
      },
      res => {
        this.list = res.data;
      },
      err => {}
    );
  }
};
</script>

<style>
.div6 {
  background: red;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  color: white;
  font-size: 20px;
}
.lei {
  width: 50%;
  flex: 1;
  margin: 5px;
}
.lei img {
  width: 160px;
}
.fen {
  display: flex;
  flex-wrap: wrap;
}
.fen1 {
  width: 160px;
  display: flex;
  justify-content: space-between;
}
.jia {
  border: 1px dashed #bbb;
  height: 100px;
  text-align: center;
  line-height: 100px;
  font-size: 20px;
  color: #ccc;
  margin: 10px;
}

.from1 {
  position: fixed;
  height: 60px;
  line-height: 60px;
  padding-left: 20px;
  bottom: 49px;
  background: white;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
}
.from2 {
  display: flex;
}
.from2 .div1 span {
  color: red;
}
.from2 .div2 {
  text-align: center;
  color: white;
  padding-left: 40px;
  padding-right: 56px;
  background: red;
}
</style>