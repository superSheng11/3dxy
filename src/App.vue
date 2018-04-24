<template>
  <div id="app">
    <v-header></v-header>
    <v-float @trigger="isLeftShow"></v-float>
    <router-view></router-view>
  </div>
</template>

<script>
import {mapMutations} from 'vuex';
import vHeader from 'component/header/header';
import vLide from 'component/slide/slide';
import vFloat from 'component/leftfloat/leftfloat';

export default {
  name: 'App',
  methods: {
    isLeftShow() {
      this.clickShow();
    },
    ...mapMutations({
      clickShow: 'change_show'
    })
  },
  components: {
    vHeader,
    vLide,
    vFloat
  }
};
</script>
<style lang="scss" scoped>
@import '~asset/scss/variable';
</style>
