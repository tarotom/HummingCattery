import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Mollies",
    name: "Mollies",
    component: Mollies,
  },
  {
    path: "/Tomcats",
    name: "Tomcats",
    component: Tomcats,
  },
  {
    path: "/Castrates",
    name: "Castrates",
    component: Castrates,
  },
  {
    path: "/InMemoriam",
    name: "InMemoriam",
    component: InMemoriam,
  },
  {
    path: "/News",
    name: "News",
    component: News,
  },
  {
    path: "/KittenBasket",
    name: "KittenBasket",
    component: KittenBasket,
  },
  {
    path: "/KittenInfo",
    name: "KittenInfo",
    component: KittenInfo,
  },
  {
    path: "/Breeder",
    name: "Breeder",
    component: Breeder,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
