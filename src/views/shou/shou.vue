<template>
  <div>
    <div class="shouye">
      <heard></heard>
      <div class="slide-box">
        <div class="slide-item">推荐</div>
        <div class="slide-item">寄售</div>
        <div class="slide-item">新品</div>
        <div class="slide-item">推荐</div>
        <div class="slide-item">寄售</div>
        <div class="slide-item">新品</div>
        <div class="slide-item">推荐</div>
        <div class="slide-item">寄售</div>
        <div class="slide-item">新品</div>
        <div class="slide-item">推荐</div>
        <div class="slide-item">寄售</div>
        <div class="slide-item">新品</div>
      </div>
      <swiper></swiper>
    </div>
    <div class="shouye1">
      <div>
        <ul>
          <li>正品保障</li>
          <li>逐渐查验</li>
          <li>多重鉴别</li>
        </ul>
      </div>
      <div id="shou">
        <div v-for="(item,index) in list" :key="index" class="shou">
          <img :src="item.src" alt />
          {{item.name}}
        </div>
      </div>
      <div id="shou1">
        <div v-for="(item,index) in ppp" :key="index" class="shou1">
          <img :src="item.src" alt />
          {{item.text}}
          {{item.span}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import swiper from "../../components/swiper/swiper";
import heard from "../../components/heard/heard";
import { request } from "../../network/request";
import shouul from "./shou-ul";
import shoudiv2 from "./shou-div2";
export default {
  data() {
    return {
      list: [],
      ppp: []
    };
  },
  created() {
    request(
      {
        url: "ming"
      },
      res => {
        this.list = res.data;
      },
      err => {
        console.log(err);
      }
    );
    request(
      {
        url: "ppp"
      },
      res => {
        this.ppp = res.data;
        console.log(res.data);
      },
      err => {
        console.log(err);
      }
    );
  },
  components: {
    heard,
    swiper,
    shouul
  }
};
</script>

<style>
#shou {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border-bottom: 1px solid rgb(245, 232, 232);
}
.shou img {
  width: 110px;
  height: 110px;
}
.shou {
  text-align: center;
  flex: 1;
  width: 25%;
}
#shou1 {
  display: flex;
  flex-wrap: wrap;
}
.shou1 {
  text-align: center;
  flex: 1;
  width: 50%;
}
.shou1 img {
  width: 180px;
  height: 180px;
}
.shouye {
  position: fixed;
  background: white;
}
.shouye1 {
  padding-top: 300px;
}
</style>