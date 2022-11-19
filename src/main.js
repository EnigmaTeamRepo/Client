import 'reset-css';
import '@/scss/styles.scss'
import { createApp } from 'vue'
import App from './App.vue'
import { loadLayoutMiddleware } from './routes/middlewares/loadLayoutMiddleware';
import MiddlewarePlugin from 'vue-router-middleware-plugin'
import { router } from './routes';
import components from './components';

const app = createApp(App)

components.forEach((component) => {
    app.component(component.name, component)
})

app.use(router)
    .use(MiddlewarePlugin, { router, middleware: [loadLayoutMiddleware] }).mount('#app')