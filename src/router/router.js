import {createRouter, createWebHistory} from 'vue-router'
import HelloWorld from "@/components/HelloWorld";
import Hello_2 from "@/components/Hello_2";
import HomePage from "@/components/HomePage";
import OneMore from "@/components/OneMore";
import RegisterForm from "@/components/RegisterForm";

const routes = [
    {path: '/', component: HomePage},
    {path: '/first', component: HelloWorld},
    {path: '/second', component: Hello_2},
    {path: '/second/:id', component: OneMore},
    {path: '/register', component: RegisterForm},
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router