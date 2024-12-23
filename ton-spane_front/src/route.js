import { createRouter, createWebHistory } from 'vue-router';
import NotificationsPage from './components/Page/NotificationsPage.vue';
import ClipsPage from './components/Page/ClipsPage.vue';
import MessagePage from './components/Page/MessagePage.vue';
import TapePage from './components/Page/TapePage.vue';
import SearchPage from './components/Page/SearchPage.vue';
import PurchasedPage from './components/Page/PurchasedPage.vue';
import MorePage from './components/Page/MorePage.vue';

import userTemplate from './components/Page/UserPage/UserPage.vue'
import UserSubscribe from './components/Page/UserSubsribeModal/UserSubscribe.vue';


const routes = [
  { path: '/',  component: TapePage },
  { path: '/tape',  component: TapePage },
  { path: '/notifications', component: NotificationsPage },
  { path: '/clips', component: ClipsPage },
  { path: '/message', component: MessagePage },
  { path: '/search', component: SearchPage },
  { path: '/purchased', component: PurchasedPage },
  { path: '/more', component: MorePage },

  { path: '/userTemplate', component: userTemplate },
  { path: '/userSubscribeDonate', component: UserSubscribe },




];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
