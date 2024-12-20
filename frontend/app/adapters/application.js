import RESTAdapter from '@ember-data/adapter/rest';

export default class ApplicationAdapter extends RESTAdapter {
  namespace = 'api'; // Ajuste conforme necessário para sua API
}
