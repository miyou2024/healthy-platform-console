import './styles.less';

import router from './router';

import App from './app/App.vue';

const app = createApp(App);

app.use(router);

app.mount('#root');
