import { inject as service } from '@ember/service';
import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class PostsEditController extends Controller {
  @service('router') router;
  @action
  savePost(post) {
    post.save().then(() => {
      this.router.transitionTo('index');
    });
  }

  @action
  deletePost(post) {
    post.destroyRecord().then(() => {
      this.router.transitionTo('index');
    });
  }
}
