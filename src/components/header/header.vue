<template>
  <div class="header">
    <i class="iconfont icon-liebiao" @click="clickShow"></i>
    <div class="logo">
      <img src="./logo.png" alt="logo" height="34">
      </div>
    <i class="iconfont icon-iconfontsousuo"></i>
    <i class="iconfont icon-denglu"></i>
  </div>
</template>
<script>
import {mapMutations} from 'vuex';
export default {
  methods: {
    ...mapMutations({
      clickShow: 'change_show'
    })
  }
};
</script>
<style lang="scss" scoped>
@import '~asset/scss/variable';
.header {
  display: flex;
  padding: 0 10px;
  height: 44px;
  line-height: 44px;
  background: $theme-main;
  .logo {
    flex: 1;
    margin-top: 5px;
    text-align: center;
  }
  i {
    flex: 0 0 30px;
    font-size: 18px;
    text-align: center;
    color: #ffffff;
  }
}
</style>
