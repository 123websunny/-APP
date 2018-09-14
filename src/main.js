// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Vuex from 'vuex'
import store from './vuex/store'
//import Cookies from 'js-cookie'

Vue.use(ElementUI)
Vue.use(MintUI)
Vue.use(Vuex)
Vue.config.productionTip = false

/*设置与读取Cookie*/
Vue.prototype.setItem = (name, data, option) => {
	let strData = typeof data === 'string' ? data : JSON.stringify(data);
	sessionStorage.setItem(name, strData, option)
}
Vue.prototype.getItem = name => {
	return sessionStorage.getItem(name)
}

Vue.prototype.setCookie = (cname, cvalue, exdays) => {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
}
Vue.prototype.getCookie = (cname) => {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while(c.charAt(0) == ' ') c = c.substring(1);
		if(c.indexOf(name) != -1) return c.substring(name.length, c.length);
	}
	return "";
}

//Vue.prototype.setCookie('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MzAwNTM3NTAsInVzZXIiOiI3MyxsaXNpIn0.m07zjQTpsGMf3vsKXRsiNo7idBqR0xNRmmQ60DVLwh4')
//Vue.prototype.setCookie('perms', JSON.stringify(["system:manage:user", "system:manage:dept", "emergency:manage:upper:report", "emergency:manage:upper:under", "emergency:manage:upper:list", "emergency:manage:upper:score", "system:manage", "emergency:manage"]))

//Vue.prototype.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MjgyMTI0MjUsInVzZXIiOiI1NSxneHEifQ.IgpdtwoMJGxyCzjtNkPV5Qu0fC2wuhkQP8_rrgwr_oQ')
//Cookies.set('perms', JSON.stringify(["system:manage:user","system:manage:dept","emergency:manage:upper:report","emergency:manage:upper:under","emergency:manage:upper:list","emergency:manage:upper:score","system:manage","emergency:manage"]))

import { Toast } from 'mint-ui';
//axios请求
import axios from 'axios'
import qs from 'qs';
Vue.prototype.$qs = qs;

Vue.config.productionTip = false
//axios.defaults.baseURL = commandAjaxUrl;

//axios.defaults.baseURL = 'http://192.168.2.60:8001/emergency/'

//Vue.prototype.UpLoadFileUrl = UpLoadFileUrl;
//设置默认请求头
axios.defaults.headers = {
	'X-Requested-With': 'XMLHttpRequest',
	'Content-Type': 'application/x-www-form-urlencoded'
}

axios.defaults.timeout = 10000
Vue.prototype.$axios = axios

let cancel, promiseArr = {}
const CancelToken = axios.CancelToken;
//请求拦截器
axios.interceptors.request.use(config => {
	//config.headers['Authorization'] = Vue.prototype.getItem('token') || ''

	config.headers['Authorization'] = Vue.prototype.getCookie('token') || ''
	//发起请求时，取消掉当前正在进行的相同请求
	if(promiseArr[config.url]) {
		promiseArr[config.url]('操作取消')
		promiseArr[config.url] = cancel
	} else {
		promiseArr[config.url] = cancel
	}
	return config
}, error => {
	return Promise.reject(error)
})

//响应拦截器即异常处理
axios.interceptors.response.use(response => {
	if(response.data) {
		return response.data
	} else {
		return response
	}
}, error => {
	if(error && error.response) {
		switch(error.response.status) {
			case 400:
				error.message = '错误请求'
				break;
			case 401:
				error.message = '未授权'
				break;
			case 403:
				error.message = '拒绝访问'
				break;
			case 404:
				error.message = '请求错误,未找到该资源'
				break;
			case 405:
				error.message = '请求方法未允许'
				break;
			case 408:
				error.message = '请求超时'
				break;
			case 500:
				error.message = '服务器端出错'
				break;
			case 501:
				error.message = '网络未实现'
				break;
			case 502:
				error.message = '网络错误'
				break;
			case 503:
				error.message = '服务不可用'
				break;
			case 504:
				error.message = '网络超时'
				break;
			case 505:
				error.message = 'http版本不支持该请求'
				break;
			default:
				error.message = `连接错误${error.response.status}`
		}
	} else {
		error.message = "连接到服务器失败"
	}
	//	Vue.prototype.$Notice.error({
	//		title: '温馨提示',
	//		desc: error.message
	//	})
	Toast({
		message: error.message,
		position: 'bottom'
	});
	return Promise.resolve(error.response)
})
//axios请求end
/* eslint-disable no-new */

new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>'
})