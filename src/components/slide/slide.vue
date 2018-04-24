<template>
  <div class="slide">
    <slider class="slide-box" :pages="pages" :sliderinit="sliderinit">
      <!-- 设置loading,可自定义 -->
      <div slot="loading">loading...</div>
    </slider>
  </div>
</template>
<script>
import slider from 'vue-concise-slider';
export default {
  data() {
    return {
      pages: [
        {
          html: '<div class="slider1">slider1</div>',
          style: {
            'background': 'url(//f.expoon.com/sub/index_model/banner/1803261636051392_1000x500_0.jpg)'
          }
        },
        {
          html: '<div class="slider2">slider2</div>',
          style: {
            'background': 'url(//f.expoon.com/sub/index_model/banner/1803261527549395_1000x500_0.jpg)'
          }
        },
        {
          html: '<div class="slider3">slider3</div>',
          style: {
            'background': 'url(//f.expoon.com/sub/index_model/banner/1803211049019556_1000x500_0.jpg)'
          }
        }
      ],
      sliderinit: {
        currentPage: 0,
        thresholdDistance: 50,
        loop: true,
        direction: 'horizontal',
        duration: 1000
      }
    };
  },
  methods: {
  },
  components: {
    slider
  }
};
</script>
<style lang="scss" scoped>
  .slide{
    width: 100%;
    height: 180px;
    .slide-box{
      height: 180px;
    }
  }
</style>
