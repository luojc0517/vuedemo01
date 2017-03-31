import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import LoadMore from '@/components/LoadMore'
import VideoList from '@/components/VideoList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      path: '/LoadMore',
      name: 'LoadMore',
      component: LoadMore
    }, {
      path: '/VideoList',
      name: 'VideoList',
      component: VideoList
    }

  ]
})
