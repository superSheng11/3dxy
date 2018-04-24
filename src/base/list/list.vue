<template>
  <div>
    <slot></slot>
    <infinite-loading @infinite="infiniteHandler" :distance="distance">
      <div class="loadingBox" slot="spinner">
        <loading></loading>
      </div>
      <span slot="no-more">暂无更多数据...</span>
    </infinite-loading>
  </div>
</template>
<script>
import InfiniteLoading from 'vue-infinite-loading';
import loading from 'base/loading/loading';
export default {
  props: {
    distance: {
      type: Number,
      default: 50
    }
  },
  methods: {
    infiniteHandler($state) {
      setTimeout(() => {
        this.$emit('loadMore', $state);
      }, 1500);
    }
  },
  components: {
    loading,
    InfiniteLoading
  }
};
</script>
<style lang="scss" scoped>

</style>
