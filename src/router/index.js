import Vue from 'vue';
import Router from 'vue-router';

import vIndex from 'component/index/index';
import vModel from 'component/model/model';
import vCourse from 'component/course/course';
import vActive from 'component/active/active';
import vList from 'component/vlist/vlist';
import varticle from 'component/article/article';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: vIndex,
      redirect: '/model',
      children: [
        {
          path: 'model',
          name: 'model',
          component: vModel
        },
        {
          path: 'course',
          name: 'course',
          component: vCourse
        },
        {
          path: 'active',
          name: 'active',
          component: vActive
        }
      ]
    },
    {
      path: '/index',
      redirect: '/model'
    },
    {
      path: '/:type/list',
      name: 'list',
      component: vList,
      children: [
        {
          path: ':id',
          component: varticle
        }
      ]
    }
  ],
  linkActiveClass: 'activeOn'
});
