<template>
  <div>
    <ul class="tab">
      <router-link v-for="(val, index) in guide" :key="index" :to="val.path" class="tabLi" tag="li">
        <a>{{val.content}}</a>
        <b></b>
      </router-link>
    </ul>
  </div>
</template>
<script>
import vLide from 'component/slide/slide';
export default {
  props: {
    guide: {
      type: Array,
      default() {
        return [
          {
            path: '/model',
            content: '模型推荐'
          },
          {
            path: '/course',
            content: '热门教程'
          },
          {
            path: '/active',
            content: '活动'
          }
        ];
      }
    }
  },
  components: {
    vLide
  }
};
</script>
<style lang="scss" scoped>
@import '~asset/scss/variable';
  .tab{
    display: flex;
    width: 100%;
    height: 44px;
    line-height: 44px;
    text-align: center;
    font-size: 14px;
    background: $back-white;
    >li{
      flex: 1;
      position: relative;
      a{
        display: block;
        text-decoration: none;
        color: $font-color-black;
      }
      &.activeOn{
        a{
          color: $font-color-red;
        }
        b{
          display: block;
        }
      }
      b{
        display: none;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 3px;
        background: $back-red;
      }
    }
  }
</style>
