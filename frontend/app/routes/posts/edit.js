import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default class PostsEditRoute extends Route {
  @service('store') store;
  model(params) {
    return this.store.findRecord('post', params.post_id);
  }
}
