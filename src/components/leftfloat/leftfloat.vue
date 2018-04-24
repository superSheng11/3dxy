<template>
  <transition name="slide">
    <div class="mask" @click="hide" v-show="leftShow">
      <div class="left">
        <ul class="list">
          <li v-for="(val, index) in slide" :key="index">
            <router-link :to="val.path" active-class="listOn">{{val.content}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
import {mapGetters} from 'Vuex';
export default {
  props: {
    slide: {
      type: Array,
      default: function() {
        return [
          {
            path: '/login',
            content: '登录或注册'
          },
          {
            path: '/index',
            content: '首页'
          },
          {
            path: '/model',
            content: '模型素材'
          },
          {
            path: '/course',
            content: '3D教程'
          },
          {
            path: '/vr',
            content: 'VR全景图'
          },
          {
            path: '/task',
            content: '任务大厅'
          },
          {
            path: '/work',
            content: '行业招聘'
          }
        ];
      }
    },
    isshow: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      currindex: 0
    };
  },
  computed: {
    ...mapGetters([
      'leftShow'
    ])
  },
  methods: {
    hide() {
      this.$emit('trigger');
    }
  }
};
</script>
<style lang="scss" scoped>
@import '~asset/scss/variable';
  .mask{
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 99;
    background: rgba(0, 0, 0, .5);
    &.slide-enter, &.slide-leave-to{
      background: rgba(0, 0, 0, 0);
      .left{
        transform: translate3d(-100%, 0, 0);
      }

    }
    &.slide-enter-active, &.slide-leave-active{
      transition:  background 2s ease;
      .left{
        transition: transform 1s ease;
      }
    }
    .left{
      overflow-y: auto;
      -webkit-overflow-scrolling:touch;
      width: 60%;
      height: 100%;
      background: $back-black;
      .list{
        li{
          overflow: hidden;
          box-sizing: border-box;
          padding-left: 50px;
          width: 100%;
          height: 49px;
          line-height: 49px;
          white-space: nowrap;
          font-size: 14px;
          color: $theme-white;
          a{
            color: $theme-white;
            text-decoration: none;
            &.listOn{
              color: $theme-yellow;
            }
          }
        }
      }
    }
  }
</style>
