import { inject as service } from '@ember/service';
import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class PostsNewController extends Controller {
  @service('router') router;
  @action
  savePost(post) {
    post.save().then(() => {
      this.router.transitionTo('index');
    });
  }
}
