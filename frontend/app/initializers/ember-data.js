import { initialize } from 'ember-data/initializers/store';

export function initialize(application) {
  // Adapte esta configuração de acordo com suas necessidades
  application.inject('route', 'store', 'service:store');
}

export default {
  initialize
};
