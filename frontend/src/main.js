import { createApp } from 'vue'
import App from './App.vue'

import axios from 'axios';

const backendURL = process.env.VUE_APP_BACKEND_URL || 'http://localhost:5000';

axios.defaults.baseURL = backendURL;

createApp(App).mount('#app')
