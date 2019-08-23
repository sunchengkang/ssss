<template>
  <dir>
    <heard></heard>
    <div class="fen">
      <div v-for="(item,index) in list" :key="index" class="lei">
        <img :src="item.src" alt />
        {{item.money}}
      </div>
    </div>
  </dir>
</template>

<script>
import heard from "../../components/heard/heard";
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
  },
  components: {
    heard
  }
};
</script>
<style scope>
*{
  margin:0;
  padding:0;
}
.lei {
  width:50%;
  flex: 1;
  margin:5px;
  
}
.lei img{
  width:160px;
}
.fen {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom:50px;
}
</style>
