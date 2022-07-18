import App from '@/App.vue';
import routes from '~pages';
import vitedge from 'vitedge';

export default vitedge(App, { routes }, (context) => {
  const pluginModules = import.meta.globEager('./**/*.plugin.ts');
  Object.values(pluginModules).forEach((module) => {
    module.default.install(context);
  });
});
