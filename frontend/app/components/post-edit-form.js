import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class PostEditFormComponent extends Component {
  @action
  updateTitle(event) {
    this.args.post.title = event.target.value;
  }

  @action
  updateContent(event) {
    this.args.post.content = event.target.value;
  }
}
