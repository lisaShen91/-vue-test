/**
 * Created by shenlisha on 2017/7/12.
 */
import Vue from 'vue';
import Hello from './components/hello.vue';

new Vue({
	el: '#app',
	template: '<div><hello></hello></div>',
	components: {Hello}
});
/*
new Vue({
	el: "#app",
	data: {
		message: "hello"
	}
});*/
