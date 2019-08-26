<template>
  <div class="deng">
    <div class="div1"><a href="">登录/注册</a></div>
    <div class="div2">
      <div>
        <img src="../../assets/img/denglu/3.jpg" alt />我的订单
        <span>></span>
      </div>
      <div>
        <img src="../../assets/img/denglu/4.jpg" alt />账户
        <span>></span>
      </div>
      <div>
        <img src="../../assets/img/denglu/5.jpg" alt />卡券
        <span>></span>
      </div>
      <div>
        <img src="../../assets/img/denglu/2.jpg" alt />地址管理
        <span>></span>
      </div>
      <div>
        <img src="../../assets/img/denglu/1.jpg" alt />消息通知
        <span>></span>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.div1 {
  height: 100px;
  line-height: 100px;
  margin:0 40px;
}

.div2 div{
   height: 50px;
   padding-right:0px;
   margin-top:15px;
   padding:0px 20px;
   border-bottom:1px solid #eee;
}
.div2 div img {
   vertical-align: middle;
}
span{
   display: inline-block;
   float: left;
}
.div2 div:after{
   clear: both;
   display: block;
   content: "";   
}
</style>