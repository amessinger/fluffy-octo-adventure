import Controller from '@ember/controller';
import config from '../../../config/environment';

export default Controller.extend({
  name: 'amessinger',
  content: 'hello world',
  actions: {
    doCreate(event) {
      event.preventDefault();
      let name = this.name;
      let content = this.content;
      fetch(`${config.lambdaURL}new-post`, {
        method: 'POST',
        body: JSON.stringify({ name, content }),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
    }
  }
});
