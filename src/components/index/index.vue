<template>
  <div>
    <v-lide></v-lide>
    <v-tab></v-tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
import vLide from 'component/slide/slide';
import vTab from 'component/tab/tab';

export default {
  components: {
    vLide,
    vTab
  }
};
</script>
<style lang="scss" scoped>
</style>
