<template>
  <div class="container">
    <div v-if="model.length">
      <!-- model -->
      <div class="box">
        <div class="title">
          <h3>单体素材模型推荐</h3>
          <router-link to="/model/list" class="more">更多&gt;</router-link>
        </div>
        <div class="list">
          <ul>
            <li class="listLi" v-for="(val, index) in model" :key="index">
              <div class="listLiImg" v-if="index < 5">
                <div class="img">
                  <router-link :to="val.href">
                    <img v-lazy="val.img" alt="">
                  </router-link>
                </div>
                <h3 class="des">{{val.des}}</h3>
                <p class="text">
                  <img :src="val.userimg" alt="">
                  <span>{{val.username}}</span>
                </p>
              </div>
              <div class="listLiHot" v-else>
                <h3>热门搜索</h3>
                <p v-if="val.hot.length > 0">
                  <a v-for="(hotVal, hotIndex) in val.hot" :key="hotIndex" :href="hotVal.src">{{hotVal.text}}</a>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- scene -->
      <div class="box">
        <div class="title">
          <h3>室内整体模型推荐</h3>
          <router-link to="/scene/list" class="more">更多&gt;</router-link>
        </div>
        <div class="list">
          <ul>
            <li class="listLi" v-for="(val, index) in scene" :key="index">
              <div class="listLiImg" v-if="index < 5">
                <div class="img">
                  <router-link :to="val.href">
                    <img v-lazy="val.img" alt="">
                  </router-link>
                </div>
                <h3 class="des">{{val.des}}</h3>
                <p class="text">
                  <img :src="val.userimg" alt="">
                  <span>{{val.username}}</span>
                </p>
              </div>
              <div class="listLiHot" v-else>
                <h3>热门搜索</h3>
                <p v-if="val.hot.length > 0">
                  <a v-for="(hotVal, hotIndex) in val.hot" :key="hotIndex" :href="hotVal.src">{{hotVal.text}}</a>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!--  全景模型 -->
      <div class="box">
        <div class="title">
          <h3>全景模型推荐</h3>
          <router-link to="/vr/list" class="more">更多&gt;</router-link>
        </div>
        <div class="vr">
          <ul>
            <li class="vrLi" v-for="(val, index) in vr" :key="index">
              <div class="vrLiImg">
                <img v-lazy="val.img" alt="">
              </div>
              <span class="vrLiHeader">
                <img :src="val.userimg" alt="">
              </span>
              <p class="username">{{val.username}}</p>
              <h3 class="vrLiTitle">{{val.des}}</h3>
            </li>
          </ul>
        </div>

      </div>
      <!-- 展览 -->
      <div class="box">
        <div class="title">
          <h3>展览模型推荐</h3>
          <router-link to="/scene/list" class="more">更多&gt;</router-link>
        </div>
        <div class="list">
          <ul>
            <li class="listLi" v-for="(val, index) in zhanlan" :key="index">
              <div class="listLiImg" v-if="index < 3">
                <div class="img">
                  <router-link :to="val.href">
                    <img v-lazy="val.img" alt="">
                  </router-link>
                </div>
                <h3 class="des">{{val.des}}</h3>
                <p class="text">
                  <img :src="val.userimg" alt="">
                  <span>{{val.username}}</span>
                </p>
              </div>
              <div class="listLiHot" v-else>
                <h3>热门搜索</h3>
                <p v-if="val.hot.length > 0">
                  <a v-for="(hotVal, hotIndex) in val.hot" :key="hotIndex" :href="hotVal.src">{{hotVal.text}}</a>
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- 模型专题 -->
      <div class="box">
        <div class="title">
          <h3>模型专题</h3>
          <router-link to="/zt/list" class="more">往期回顾&gt;</router-link>
        </div>
        <div class="zt">
          <ul>
            <li class="ztLi" v-for="(val, index) in zt" :key="index">
              <div class="img">
                <router-link :to="val.href">
                  <img v-lazy="val.img" alt="">
                </router-link>
              </div>
              <div class="text">
                <h3 class="des">{{val.des}}</h3>
                <ul class="data">
                  <li>
                    <b class="iconfont icon-liulan"></b>
                    <span>{{val.see}}</span>
                  </li>
                  <li>
                    <b class="iconfont icon-shijian"></b>
                    <span>{{val.time}}</span>
                  </li>
                  <li></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="loadingBox" v-if="model.length === 0">
      <loading></loading>
    </div>
  </div>
</template>
<script>
import loading from 'base/loading/loading';
export default {
  data() {
    return {
      model: [],
      scene: [],
      zhanlan: [],
      vr: [],
      zt: []
    };
  },
  created() {
    /* ajax请求 */
    setTimeout(() => {
      this.model = this.createArr({ type: 'model' });
      this.scene = this.createArr({ type: 'scene' });
      this.vr = this.createArr({ type: 'vr', len: 2 });
      this.zhanlan = this.createArr({ type: 'zhanlan', len: 4 });
      this.zt = this.createArr({ type: 'zt', len: 3 });
    }, 3000);
  },
  methods: {
    createArr(config) {
      let arr = [];
      let len = config.len || 6;
      let obj = {
        des: '湘西部落VR全景展厅',
        userimg: '//f.3dxy.com/qq/2016/0411/82148.png',
        username: 'vue',
        href: `/${config.type}/list/1`,
        hot: [],
        time: '2018-4-20',
        see: (Math.random() * 20) | 0
      };
      if (config.type === 'model' || config.type === 'scene' || config.type === 'zhanlan') {
        obj.img = '//f.3dxy.com/sub/Manual/pic/2017/1121/09/0_1711050118_866351711210908_63600_318x318_0.png';
      } else if (config.type === 'vr') {
        obj.img = '//f.expoon.com/city/4/34/61617.jpg';
      } else if (config.type === 'zt') {
        obj.img = '//f.expoon.com/city/4/34/61617.jpg';
      }

      for (let i = 0; i < len; i++) {
        if (i === len - 1) {
          obj.hot = [
            {
              src: 'javascript:;',
              text: '热搜一'
            },
            {
              src: 'javascript:;',
              text: '热搜一'
            },
            {
              src: 'javascript:;',
              text: '热搜一'
            },
            {
              src: 'javascript:;',
              text: '热搜一'
            },
            {
              src: 'javascript:;',
              text: '热搜一'
            }
          ];
        }
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
.container {
  position: relative;
  .box {
    margin-top: 10px;
    padding: 0 10px;
    background: $back-white;
    .title {
      height: 56px;
      line-height: 56px;
      font-size: 16px;
      color: $font-color-clearBlack;
      h3 {
        float: left;
        font-size: 16px;
        font-weight: normal;
      }
      .more {
        float: right;
        font-size: 12px;
        text-decoration: none;
        color: $font-color-gray;
      }
    }
    .list {
      overflow: hidden;
      .listLi {
        overflow: hidden;
        margin-bottom: 20px;
        width: 48%;
        &:nth-child(odd) {
          float: left;
        }
        &:nth-child(even) {
          float: right;
        }
        .listLiImg {
          .img {
            position: relative;
            width: 100%;
            &:after {
              display: block;
              content: '';
              padding-bottom: 100%;
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
            @include nowrapper;
            height: 30px;
            line-height: 30px;
            font-size: 14px;
            font-weight: normal;
            color: $font-color-clearBlack;
          }
          .text {
            height: 22px;
            line-height: 22px;
            font-size: 0;
            img {
              vertical-align: top;
              margin-right: 5px;
              width: 22px;
              height: 22px;
              border-radius: 50%;
            }
            span {
              display: inline-block;
              vertical-align: top;
              @include nowrapper;
              font-size: 12px;
              color: $font-color-gray;
            }
          }
        }
        .listLiHot {
          overflow: hidden;
          h3 {
            font-size: 14px;
            line-height: 20px;
            font-weight: normal;
          }
          p {
            font-size: 0;
            a {
              &:nth-child(odd) {
                float: left;
              }
              &:nth-child(even) {
                float: right;
              }
              width: 48%;
              margin: 20px 0 0 0;
              vertical-align: top;
              height: 24px;
              line-height: 24px;
              text-align: center;
              font-size: 12px;
              color: $font-color-black;
              text-decoration: none;
              background: $back-clearGreen;
            }
          }
        }
      }
    }
    .vr {
      width: 100%;
      .vrLi {
        .vrLiImg {
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
        .vrLiHeader {
          position: relative;
          display: block;
          height: 26px;
          img {
            position: absolute;
            top: -20px;
            left: 50%;
            transform: translate3d(-50%, 0, 0);
            width: 46px;
            height: 46px;
            border-radius: 50%;
          }
        }
        .username {
          @include nowrapper;
          height: 22px;
          line-height: 22px;
          color: $font-color-pink;
          font-size: 12px;
          text-align: center;
        }
        .vrLiTitle {
          margin-bottom: 12px;
          height: 24px;
          line-height: 24px;
          text-align: center;
          font-size: 14px;
          color: $font-color-clearBlack;
          font-weight: normal;
        }
      }
    }
    .zt {
      .ztLi {
        display: flex;
        padding: 20px 0;
        @include border-1px(#f2f2f2, bottom);
        .img {
          flex: 0 0 153px;
          height: 94px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .text {
          position: relative;
          flex: 1;
          .des {
            padding-left: 10px;
            font-size: 14px;
            font-weight: normal;
          }
          .data {
            position: absolute;
            right: 0;
            bottom: 0;
            padding-left: 10px;
            width: 100%;
            font-size: 0;
            text-align: justify;
            box-sizing: border-box;
            li {
              @include nowrapper;
              display: inline-block;
              vertical-align: top;
              font-size: 12px;
              color: $font-color-gray;
              &:last-child {
                width: 100%;
              }
              b,
              span {
                display: inline-block;
                vertical-align: top;
                font-weight: normal;
              }
            }
          }
        }
      }
    }
  }
}
</style>
