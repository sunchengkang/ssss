<template>
  <div>
   <heard></heard>
   <swiper></swiper>
   <div v-for="(item,index) in list" :key="index"> 
     <img :src="item.src" alt="">
     {{item.name}}
   </div>
   
  </div>
</template>
<script>
import swiper from "../../components/swiper/swiper";
import heard from "../../components/heard/heard";
import { request } from "../../network/request";
export default {
  data() {
    return {
      list:[]
    };
  },
  created() {
    request(
      {
        url: "ming"
      },
      res => {
        this.list = res.data;
        console.log(res.data)
        // console.log(res);
      },

      err => {
        console.log(err);
      }
    );
  },
  components: {
    heard,
    swiper
  }
};
</script>

<style>

</style>