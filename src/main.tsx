import './style.css';
// Vue App
import { App, createApp } from 'vue';
import VueApp from './vue-app/App.vue';

// React
import { App as ReactApp } from './react-app/app';
import { createRoot } from 'react-dom/client';
import { appToastEventHandler, toast } from './shared';
import { bootstrapLoginForm, getLoginForm } from './login-form';

// Boot React App
const root = createRoot(document.getElementById('react-app')!);
root.render(<ReactApp />);

// Globals
bootstrapLoginForm();
appToastEventHandler();

let vueApp: App<any> | undefined;

document.addEventListener('authchange', (e) => {
  if (e.detail.authenticated) {
    // Boot Vue App
    vueApp = createApp(VueApp);
    vueApp.mount('#vue-app');
  } else {
    if (vueApp) {
      vueApp.unmount();
    }
    getLoginForm().style.display = 'block';
  }
});
