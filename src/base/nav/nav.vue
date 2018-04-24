<template>
  <div class="container">
    <slot></slot>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import '~asset/scss/variable';
@import '~asset/scss/mixin';
.container{
  width: 100%;
  height: 44px;
  line-height: 44px;
  text-align: center;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
</style>
