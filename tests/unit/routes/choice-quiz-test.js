import { module, test } from 'qunit';
import { setupTest } from 'stepik-task/tests/helpers';

module('Unit | Route | choice-quiz', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:choice-quiz');
    assert.ok(route);
  });
});
