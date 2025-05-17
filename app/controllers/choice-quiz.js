import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class FruitController extends Controller {
  selectedFruit = '';
  fruits = [
    { id: 'apple', label: 'Apple' },
    { id: 'banana', label: 'Banana' },
    { id: 'orange', label: 'Orange' },
  ];

  @action
  updateFruit(value) {
    this.selectedFruit = value;
  }

  @action
  sendSelectedFruit() {
    console.log('Selected fruit:', this.selectedFruit.target.value);
  }
}
