import { module, test } from 'qunit';
import { setupRenderingTest } from 'stepik-task/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | wrapper', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Wrapper />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Wrapper>
        template block text
      </Wrapper>
    `);

    assert.dom().hasText('template block text');
  });
});
