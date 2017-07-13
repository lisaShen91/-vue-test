/**
 * Created by shenlisha on 2017/7/12.
 */
import Vue from 'vue'
import vueRouter from 'vue-router'
import routers from './routers'

Vue.use(vueRouter);

const router = new vueRouter({routes: routers});

export default router;