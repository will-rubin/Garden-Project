import { createApp } from 'vue'
import router from './router/index'
import App from './App.vue'
import 'bulma/css/bulma.css'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faTableCells } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faHouse);
library.add(faLeaf);
library.add(faUser);
library.add(faTableCells);
library.add(faCircleQuestion);
library.add(faSignInAlt);


createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
