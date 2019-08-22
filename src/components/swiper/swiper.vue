<template>
  <mt-swipe :auto="4000" class="swiper">
    <mt-swipe-item>
      <img src="../../assets/img/swiper/0.jpg" alt />
    </mt-swipe-item>
    <mt-swipe-item>
      <img src="../../assets/img/swiper/1.jpg" alt />
    </mt-swipe-item>
    <mt-swipe-item>
      <img src="../../assets/img/swiper/2.jpg" alt />
    </mt-swipe-item>
    <mt-swipe-item>
      <img src="../../assets/img/swiper/3.jpg" alt />
    </mt-swipe-item>
  </mt-swipe>
</template>

<script>
export default {};
</script>

<style>
.swiper {
  height: 250px;
}
.swiper img {
  height: 200px;
  width: 100%;
  margin-top:60px;
}
</style>