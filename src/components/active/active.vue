<template>
  <div class="container">
    <ul class="list" v-show="active.length">
      <li v-for="(val, index) in active" :key="index">
        <div class="img">
          <img v-lazy="val.img" alt="">
        </div>
        <h3 class="title">{{val.des}}</h3>
        <div class="text">
          <span :class="{'red': val.state}">{{val.text}}</span>
          <p v-if="val.state"><i class="iconfont icon-shalou"></i>{{`距结束还剩${val.time}天`}}</p>
          <span><i class="iconfont icon-ren"></i>{{val.people}}</span>
        </div>
      </li>
    </ul>
    <div class="loadingBox" v-show="!active.length">
      <loading></loading>
    </div>
  </div>
</template>
<script>
import loading from 'base/loading/loading';
export default {
  data() {
    return {
      active: []
    };
  },
  created() {
    setTimeout(() => {
      this.active = this.createArr({len: 3});
    }, 2000);
  },
  computed: {
  },
  methods: {
    createArr(config) {
      let arr = [];
      let len = config.len || 6;
      for (let i = 0; i < len; i++) {
        let obj = {
          des: '《大圣归来》灯光合成师手摸手教你打灯光',
          img: 'http://s.3dxy.com/assets/dist/pc/images/zt/cj_index.jpg',
          state: Math.random() * 2 > 1,
          time: Math.random() * 10 | 0,
          people: Math.random() * 1000 | 0
        };
        obj.text = obj.state ? '正在进行' : '已完成';
        arr.push(obj);
      }
      return arr;
    }
  },
  components: {
    loading
  }
};
</script>
<style lang="scss" scoped>
@import '~asset/scss/variable';
@import '~asset/scss/mixin';
.container{
  margin-top: 10px;
  .list{
    li{
      margin-bottom: 10px;
      padding: 20px 10px 10px;
      background: $back-white;
      .img{
        position: relative;
        padding-bottom: 50%;
        width: 100%;
        height: auto;
        img{
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
        }
      }
      .title{
        height: 33px;
        line-height: 33px;
        font-size: 14px;
        color: $font-color-clearBlack;
        font-weight: normal;
        @include nowrapper;
        @include border-1px(#f2f2f2, bottom);
      }
      .text{
        display: flex;
        height: 32px;
        line-height: 32px;
        font-size: 12px;
        color: $font-color-gray;
        .red{
          color: $font-color-red;
        }
        p{
          flex: 0 0 130px;
          width: 130px;
          text-align: center;
        }
        span{
          flex: 1;
          &:last-of-type{
            text-align: right;
          }
        }
      }
    }
  }
}
</style>
