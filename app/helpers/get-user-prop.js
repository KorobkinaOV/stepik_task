import { helper } from '@ember/component/helper';

export default helper(function getUserProp([obj, ...keys]) {
  return keys.reduce((acc, key) => acc?.[key], obj);
});
