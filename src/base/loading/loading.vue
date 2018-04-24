<template>
  <div class="loading"></div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.loading {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  -webkit-animation: typing 1s linear infinite alternate;
  -moz-animation: Typing 1s linear infinite alternate;
  animation: typing 1s linear infinite alternate;
  margin: 46px auto;
  position: relative;
  left: -12px;
}
@-webkit-keyframes typing {
  0% {
    background-color: rgba(164, 0, 1, 1);
    box-shadow: 12px 0px 0px 0px rgba(164, 0, 1, 0.2), 24px 0px 0px 0px rgba(164, 0, 1, 0.2);
  }
  25% {
    background-color: rgba(164, 0, 1, 0.4);
    box-shadow: 12px 0px 0px 0px rgba(164, 0, 1, 2), 24px 0px 0px 0px rgba(164, 0, 1, 0.2);
  }
  75% {
    background-color: rgba(164, 0, 1, 0.4);
    box-shadow: 12px 0px 0px 0px rgba(164, 0, 1, 0.2), 24px 0px 0px 0px rgba(164, 0, 1, 1);
  }
}

@-moz-keyframes typing {
  0% {
    background-color: rgba(164, 0, 1, 1);
    box-shadow: 12px 0px 0px 0px rgba(164, 0, 1, 0.2), 24px 0px 0px 0px rgba(164, 0, 1, 0.2);
  }
  25% {
    background-color: rgba(164, 0, 1, 0.4);
    box-shadow: 12px 0px 0px 0px rgba(164, 0, 1, 2), 24px 0px 0px 0px rgba(164, 0, 1, 0.2);
  }
  75% {
    background-color: rgba(164, 0, 1, 0.4);
    box-shadow: 12px 0px 0px 0px rgba(164, 0, 1, 0.2), 24px 0px 0px 0px rgba(164, 0, 1, 1);
  }
}

@keyframes typing {
  0% {
    background-color: rgba(164, 0, 1, 1);
    box-shadow: 12px 0px 0px 0px rgba(164, 0, 1, 0.2), 24px 0px 0px 0px rgba(164, 0, 1, 0.2);
  }
  25% {
    background-color: rgba(164, 0, 1, 0.4);
    box-shadow: 12px 0px 0px 0px rgba(164, 0, 1, 2), 24px 0px 0px 0px rgba(164, 0, 1, 0.2);
  }
  75% {
    background-color: rgba(164, 0, 1, 0.4);
    box-shadow: 12px 0px 0px 0px rgba(164, 0, 1, 0.2), 24px 0px 0px 0px rgba(164, 0, 1, 1);
  }
}
</style>
