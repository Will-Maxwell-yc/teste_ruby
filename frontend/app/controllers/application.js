import { inject as service } from '@ember/service';
import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @service('router') router;
  @action
  editPost(post) {
    // Navega para a página de edição do post
    this.router.transitionTo('posts.edit', post.id);
  }

  @action
  deletePost(post) {
    // Exclui o post e atualiza a lista
    post.destroyRecord().then(() => {
      this.refresh(); // Atualiza a lista de posts na tela
    });
  }
}
