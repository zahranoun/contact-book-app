import { createRouter, createWebHistory } from "vue-router";
import ContactListView from "../views/ContactListView.vue";
import ContactDetailView from "../views/ContactDetailView.vue";
import ContactFormView from "../views/ContactFormView.vue";

const routes = [
  { path: "/", component: ContactListView },
  { path: "/contact/:id", component: ContactDetailView },
  { path: "/new", component: ContactFormView },
  { path: "/edit/:id", component: ContactFormView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
