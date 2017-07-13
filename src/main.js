/**
 * Created by shenlisha on 2017/7/12.
 */
import Vue from 'vue';
import router from './router';
import App from './app';
import '../dist/reset.css'
//import Hello from './components/hello';

console.log(router);

new Vue({
	el: '#app',
	template: '<App />',
	components: {App},
	router
//	render(h) {
//		return h('div', null, 'sdfsdf')
//	}
});
