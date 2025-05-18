import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { task } from 'ember-concurrency';
import { checkAnswers } from '../utils/check-answers';
import { saveHistory } from '../utils/save-history';
import { checkEmptyProps } from '../utils/check-empty-props';

export default class ChoiceQuiz extends Controller {
  @tracked result = null;

  userAnswers = {};

  firstQuestionOptions = [
    { label: 'Apple', type: 'singleOption', question: 'firstQuestion' },
    { label: 'Banana', type: 'singleOption', question: 'firstQuestion' },
    { label: 'Orange', type: 'singleOption', question: 'firstQuestion' },
  ];

  secondQuestionOptions = [
    { label: 'Cat', type: 'multipleOption', question: 'secondQuestion' },
    { label: 'Dog', type: 'multipleOption', question: 'secondQuestion' },
    { label: 'Elephant', type: 'multipleOption', question: 'secondQuestion' },
    { label: 'Wolf', type: 'multipleOption', question: 'secondQuestion' },
  ];

  correctFirstQuestionAnswers = 'Banana';
  correctSecondQuestionAnswers = ['Dog', 'Cat'];

  @action
  updateQuestion(label, type, question) {
    if (type === 'singleOption') {
      this.userAnswers[question] = label;
      return;
    }

    if (type === 'multipleOption') {
      if (
        Array.isArray(this.userAnswers[question]) &&
        this.userAnswers[question].includes(label)
      ) {
        this.userAnswers[question] = this.userAnswers[question].filter(
          (answer) => answer !== label,
        );
      } else {
        this.userAnswers[question] = this.userAnswers[question]
          ? [...this.userAnswers[question], label]
          : [label];
      }
      return;
    }
  }

  @task
  *checkAnswerTask() {
    yield new Promise((resolve) => setTimeout(resolve, 2000)); // задержка

    console.log('this.userAnswer', this.userAnswers);

    this.result = checkAnswers(
      this.userAnswers,
      this.correctFirstQuestionAnswers,
      this.correctSecondQuestionAnswers,
    );

    saveHistory(this.result);
  }

  @action
  submitResult() {
    if (
      !checkEmptyProps(this.userAnswers, ['firstQuestion', 'secondQuestion'])
    ) {
      return;
    }
    this.checkAnswerTask.perform();
  }
}
