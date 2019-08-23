<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
.slide-box {
  display: -webkit-box;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
}
.slide-box::-webkit-scrollbar {
  background-color: transparent;
}

.slide-box {
  -ms-overflow-style: none;
}

.slide-box {
  overflow: -moz-scrollbars-none;
}
.slide-item {
  width: 20%;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
</style>