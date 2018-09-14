import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			component: resolve => require(['@/components/login/login'], resolve),
		},
		{
			path: '/xxgg',
			component: resolve => require(['@/components/xxgg/xxgg'], resolve),
		},
		{
			path: '/zxzx',
			component: resolve => require(['@/components/xxgg/zxzx'], resolve),
		},

		{
			path: '/zsjw',
			component: resolve => require(['@/components/zsjw/zsjw'], resolve),
		},

		{
			path: '/kxjs',
			component: resolve => require(['@/components/zsjw/kxjs'], resolve),
		},
		{
			path: '/cxjg',
			component: resolve => require(['@/components/zsjw/cxjg'], resolve),
		},
		{
			path: '/shfw',
			component: resolve => require(['@/components/shfw/shfw'], resolve),
		},
		{
			path: '/shfwSearch',
			component: resolve => require(['@/components/shfw/shfwSearch'], resolve),
		}, {
			path: '/shfwContent',
			component: resolve => require(['@/components/shfw/shfwContent'], resolve),
		},
		{
			path: '/xydh',
			component: resolve => require(['@/components/xydh/xydh'], resolve),
		},
		
    {
      path: '/xydhNav',
      component: resolve => require(['@/components/xydh/xydhNav'], resolve),
    },
		{
			path: '/xydhNav',
			component: resolve => require(['@/components/xydh/xydhNav'], resolve),
		},
		{
			path: '/mine',
			component: resolve => require(['@/components/grzx/mine'], resolve),
		},
	]
})
