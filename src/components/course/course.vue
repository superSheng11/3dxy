<template>
  <div class="container">

    <div class="banner" v-show="course.length">
      <h3 class="title">VR全景效果图上传教程</h3>
      <div class="img">
        <a href="#/course/list/20">
          <img src="//f.expoon.com/sub/news/2018/04/13/465761_688x386_0.jpg" alt="">
        </a>
      </div>
      <div class="des">
        <div>
          <span class="iconfont icon-ren"></span>
          <b>小一</b>
        </div>
        <b>1232人学过</b>
      </div>
    </div>

    <div class="list" v-show="course.length">
      <div class="listLi" v-for="(val, index) in course" :key="index" v-if="getOdd(index)">
        <div class="text">
          <h3>{{val.des}}</h3>
          <div class="text-data">
            <span class="username">{{val.username}}</span>
            <div class="text-see">
              <i class="iconfont icon-ren"></i>
              {{val.people}}人学过
            </div>
          </div>
        </div>
        <div class="img">
          <img :src="val.img" alt="">
        </div>
      </div>
      <div class="listLiOther" v-else>
        <h3>{{val.des}}</h3>
        <ul class="img">
          <li v-for="n in 3" :key="n">
            <img :src="val.img" :alt="n">
          </li>
        </ul>
        <div class="text-data">
          <span>{{val.username}}</span>
          <span><i class="iconfont icon-ren"></i>{{val.people}}</span>
        </div>
      </div>
    </div>

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
  data() {
    return {
      course: [],
      distance: 50,
      page: 0
    };
  },
  methods: {
    createArr(config) {
      let arr = [];
      let len = config.len || 6;
      let obj = {
        des: '如何在矩形球面样式全景图做后期合成',
        img: '//f.3dxy.com/sub/sub/taskOrderFile/task_1521357250620_97027_KQS6r_258x158_0_258x158_0.jpg',
        username: '小一',
        people: Math.random() * 1000 | 0
      };
      for (let i = 0; i < len; i++) {
        arr.push(obj);
      }
      return arr;
    },
    getOdd(index) {
      /* 拆分长度 */
      let splitLen = 5;
      /* 默认为true */
      let flag = true;
      /* 索引值已1开始 */
      let newIndex = index + 1;
      /* 取余为0或者是splitLen - 1 */
      if (newIndex % splitLen === 0 || newIndex % splitLen === (splitLen - 1)) {
        flag = false;
      }
      return flag;
    },
    infiniteHandler($state) {
      setTimeout(() => {
        if (this.page < 5) {
          let addArr = this.createArr({len: 5});
          this.course.push(...addArr);
          this.page = this.page + 1;
          /* 加载完成 */
          $state.loaded();
        } else {
          /* 加载完毕 */
          $state.complete();
        }
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
@import '~asset/scss/variable';
@import '~asset/scss/mixin';
$threeoffset: 3px;
.container {
  margin-top: 10px;
  .banner {
    padding: 0 10px;
    background: $back-white;
    .title {
      height: 56px;
      line-height: 56px;
      font-size: 16px;
      font-weight: normal;
    }
    .img {
      position: relative;
      width: 100%;
      &:after {
        display: block;
        content: '';
        padding-bottom: 50%;
      }
      img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }
    .des {
      height: 40px;
      line-height: 40px;
      @include border-1px(#f2f2f2, bottom);
      font-size: 12px;
      color: $font-color-gray;
      div {
        float: left;
      }
      > b {
        float: right;
        font-weight: normal;
      }
    }
  }
  .list{
    padding: 0 10px;
    background: $back-white;
    .listLi{
      display: flex;
      padding: 22px 0;
      @include border-1px(#f2f2f2, bottom);
      .text{
        flex: 1;
        padding-right: 10px;
        box-sizing: border-box;
        h3{
          overflow: hidden;
          height: 80px;
          font-size: 14px;
          line-height: 22px;
          word-break: break-all;
          color: $font-color-clearBlack;
          font-weight: normal;
        }
        .text-data{
          display: flex;
          font-size: 12px;
          color: $font-color-gray;
          line-height: 18px;
          text-align: justify;
          .username{
            flex: 1;
            text-align: left;
            @include nowrapper;
          }
          .text-see{
            flex: 0 0 80px;
            width: 80px;
            text-align: right;
            @include nowrapper;
          }
        }
      }
      .img{
        flex: 0 0 153px;
        width: 153px;
        height: 94px;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
    .listLiOther{
      padding: 22px 0;
      @include border-1px(#f2f2f2, bottom);
      h3{
        font-size: 14px;
        line-height: 22px;
        word-break: break-all;
        color: $font-color-clearBlack;
        font-weight: normal;
      }
      .img{
        display: flex;
        li{
          flex: 1;
          padding: 0 $threeoffset;
          height: auto;
          img{
            width: 100%;
          }
          &:first-child {
            transform: translate3d(-$threeoffset, 0, 0);
          }
          &:last-child {
            transform: translate3d($threeoffset, 0, 0);
          }
        }
      }
      .text-data{
        margin-top: 8px;
        width: 100%;
        text-align: justify;
        font-size: 0;
        &:after{
          display: inline-block;
          vertical-align: top;
          content: '';
          width: 100%;
        }
        span{
          display: inline-block;
          vertical-align: top;
          font-size: 12px;
          line-height: 16px;
          color: $font-color-gray;
          @include nowrapper;
        }
      }
    }
    &:last-child{
      border: none;
    }
  }
}
</style>
