import { install as VueMonacoEditorPlugin } from '@guolao/vue-monaco-editor'

import './styles.less';

import router from './router';

import { createApp } from 'vue';
import App from './app/App.vue';

const app = createApp(App);
app.use(VueMonacoEditorPlugin, {
  paths: {
    // 在这里更改 CDN 链接加载不同版本
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs'
  },
})
app.use(router);

app.mount('#root');
