import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class UserHistory extends Controller {
  @tracked userHistory = null;

  constructor() {
    super(...arguments);
    this.userHistory = JSON.parse(localStorage.getItem('history'));
  }
}
