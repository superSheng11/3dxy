<template>
  <div>
    <v-nav class="nav">
      <router-link tag="div" v-for="(val, index) in links" :key="index" :to="val.path" active-class="navOn">
        <a>{{val.text}}</a>
        <b></b>
      </router-link>
    </v-nav>
    <list @loadMore="loadMoreFun">
      <ul class="list">
        <li v-for="(val, index) in arr" :key="index">
          <div class="img">
            <img :src="val.img" alt="">
          </div>
          <h3>{{val.des}}</h3>
          <div class="people">
            <img :src="val.userimg" alt="">
            <span>{{val.username}}</span>
          </div>
        </li>
      </ul>
    </list>
  </div>
</template>
<script>
import list from 'base/list/list';
import vNav from 'base/nav/nav';
export default {
  data() {
    return {
      page: 0,
      arr: [],
      links: [
        {
          path: '/model/list',
          text: '单提模型'
        },
        {
          path: '/scene/list',
          text: '室内模型'
        },
        {
          path: '/zhanlan/list',
          text: '展览模型'
        },
        {
          path: '/vr/list',
          text: '全景模型'
        },
        {
          path: '/course/list',
          text: '教程集锦'
        }
      ]
    };
  },
  methods: {
    loadMoreFun($state) {
      const total = 5;
      setTimeout(() => {
        if (this.page < total) {
          this._meAjax();
          $state.loaded();
        } else {
          $state.complete();
        }
      }, 2000);
    },
    _meAjax() {
      this.arr.push(...this.createArr({len: 6}));
      this.page = this.page + 1;
    },
    createArr(config) {
      let arr = [];
      let len = config.len || 6;
      let obj = {
        des: '如何在矩形球面样式全景图做后期合成',
        img: 'http://f.3dxy.com/sub/Manual/pic/2018/0419/17/0_1803060422_325421804190540_53545_318x318_2.png',
        username: '非著名设计从业者',
        userimg: 'http://f.3dxy.com/headPic/file/shearphoto_file/shearphoto_59407eee50c85_771_big.jpg'
      };
      for (let i = 0; i < len; i++) {
        arr.push(obj);
      }
      return arr;
    }
  },
  components: {
    list,
    vNav
  }
};
</script>
<style lang="scss" scoped>
@import '~asset/scss/variable';
@import '~asset/scss/mixin';
.nav{
  height: 44px;
  line-height: 44px;
  font-size: 0;
  text-align: left;
  background: $back-white;
  white-space: nowrap;
  div{
    position: relative;
    display: inline-block;
    vertical-align: top;
    margin: 0 30px 0 10px;
    font-size: 15px;
    &:last-child{
      margin-right: 0;
    }
    &.navOn{
      a{
        color: $font-color-red;
      }
      b{
        display: block;
      }
    }
    a{
      display: block;
      text-decoration: none;
      color: $font-color-black;
    }
    b{
      display: none;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background: $back-red;
    }
  }
}
.list{
  overflow: hidden;
  padding: 0 10px;
  li{
    float: left;
    margin-top: 10px;
    width: 48%;
    height: auto;
    background: $back-white;
    &:nth-child(2n){
      margin-left: 4%;
    }
    .img{
      position: relative;
      width: 100%;
      padding-bottom: 80%;
      img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
    h3{
      margin-top: 5px;
      padding: 0 10px;
      height: 26px;
      line-height: 26px;
      font-size: 16px;
      color: $font-color-clearBlack;
      font-weight: normal;
      @include nowrapper;
    }
    .people{
      margin-bottom: 10px;
      padding: 0 10px;
      font-size: 0;
      img{
        margin-right: 5px;
        vertical-align: top;
        width: 24px;
        height: 24px;
        border-radius: 50%;
      }
      span{
        display: inline-block;
        vertical-align: top;
        height: 24px;
        line-height: 24px;
        font-size: 14px;
        color: $font-color-gray;
        @include nowrapper;
      }
    }
  }
}
</style>
