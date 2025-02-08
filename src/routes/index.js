import { createRouter, createWebHistory } from 'vue-router';
import Contacts from '@/pages/Contacts.vue';
import Home from '@/pages/Home.vue';
import Profile from '@/pages/Profile.vue';
import Product from '@/pages/Product.vue';
import Sports from '@/pages/Sports.vue';
import Motors from '@/pages/Motors.vue';
import Tesla from '@/components/Tesla.vue';
import YZFR1 from '@/components/YZFR1.vue';
import Formula1 from '@/components/Formula1.vue';
import Fashion from '@/pages/Fashion.vue';


const routes = [
  {
    path: '/',
    redirect: '/home', // Redirect the root URL to the Home page
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/product',
    name: 'Product',
    component: Product,
  },
  {
    path: '/sports',
    name: 'Sports',
    component: Sports,
  },
  {
    path: '/motors',
    name: 'Motors',
    component: Motors,
  },
  {
    path: '/tesla',
    name: 'Tesla',
    component: Tesla,
  },
  {
    path: '/yzfr1',
    name: 'YZFR1',
    component: YZFR1,
  },
  {
    path: '/formula1',
    name: 'Formula1',
    component: Formula1,
  },
  {
    path: '/fashion',
    name: 'Fashion',
    component: Fashion,
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
