import { createApp } from 'vue'

import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue'

// VIEWS
import Home from './components/home/Home.vue'
import About from './components/about/About.vue'
import Skills from './components/skills/Skills.vue'
import Contact from './components/contact/Contact.vue'
import Hour from './components/hour/Hour.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/about', name: 'About', component: About },
        { path: '/skills', name: 'Skills', component: Skills },
        { path: '/contact', name: 'Contact', component: Contact },
        { path: '/hour', name: 'Hour', component: Hour }
    ]
})

createApp(App)
    .use(router)
    .mount('#app')