import { createWebHistory, createRouter } from "vue-router";
 
// import App from './App.vue'
import Create from './components/AddProduct.vue'
import Edit from './components/EditProduct.vue'
import Index from './components/ProductList.vue'
   
const routes = [
  {
    name: 'Create',
    path: '/create',
    component: Create
  },
  {
    name: 'Edit',
    path: '/edit/:id',
    component: Edit
  },
  {
    name: 'Index',
    path: '/',
    component: Index
  },
];
 
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;