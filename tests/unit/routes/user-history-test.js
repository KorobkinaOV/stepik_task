import { module, test } from 'qunit';
import { setupTest } from 'stepik-task/tests/helpers';

module('Unit | Route | user-history', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:user-history');
    assert.ok(route);
  });
});
