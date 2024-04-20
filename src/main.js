import './assets/main.css'

import { createApp } from 'vue'
import App from './app.vue'

//Add PrimeVue
import PrimeVue from "primevue/config";

//Add Primeflex
//import 'primeflex/primeflex.css';

//Add PrimeVue Components
import Sidebar from "primevue/sidebar";
import Button from "primevue/button";
import Card from "primevue/card";
import SelectButton from "primevue/selectbutton";
import Avatar from "primevue/avatar";
import Menu from "primevue/menu";
import Menubar from "primevue/menubar";
import Toolbar from "primevue/toolbar";

createApp(App)
    .use(PrimeVue, { ripple: true})
    .component('pv-sidebar', Sidebar)
    .component('pv-button', Button)
    .component('pv-card', Card)
    .component('pv-select-button', SelectButton)
    .component('pv-avatar', Avatar)
    .component('pv-menu', Menu)
    .component('pv-menubar', Menubar)
    .component('pv-toolbar', Toolbar)
    .mount('#app')
