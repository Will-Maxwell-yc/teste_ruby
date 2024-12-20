import Application from '@ember/application';
import { setApplication } from '@ember/test-helpers';
import Resolver from 'ember-resolver';

class MyApp extends Application {
  modulePrefix = 'frontend';  // Prefixo de módulos
  podModulePrefix = 'frontend/pods';  // Prefixo de pods
  Resolver = Resolver;  // Resolver
}

// Inicializa a aplicação no elemento do DOM
setApplication(MyApp.create());

export default MyApp;
