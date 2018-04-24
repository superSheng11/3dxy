<template>
  <div>
    内容页
  </div>
</template>
<script>
export default {
  created() {
    console.log(this.$route.params.type);
    console.log(this.$route.params.id);
  }
};
</script>
<style lang="scss" scoped>

</style>
