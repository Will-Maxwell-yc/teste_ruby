import Component from '@glimmer/component';

export default class PostListComponent extends Component {
  get posts() {
    return this.args.posts;
  }
}
