import Vue from 'vue';
import VueRouter from 'vue-router';
import Invitation from '../views/Invitation.vue';
import Venue from '../views/Venue.vue';
import Lodging from '../views/Lodging.vue';
import Registry from '../views/Registry.vue';
import NotFound from '../views/404.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
	},
	{ path: '/invitation',
		component: Invitation
	},
	{ path: '/Venue',
		component: Venue
	},
	{ path: '/lodging',
		component: Lodging
	},
	{ path: '/registry',
		component: Registry
	},
	// Separated into two routes so that you can also programmatically
	// direct the user to the /404 if missing some data, etc.
	{ path: '/404', component: NotFound },
	{ path: '*', redirect: '/404' }
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;
