export function checkEmptyProps(obj, props) {
  if (!obj) return false;

  return props.some((prop) => {
    const value = obj[prop];

    if (value === null || value === undefined) return false;

    if (typeof value === 'string' && value.trim() === '') return false;

    if (Array.isArray(value) && value.length === 0) return false;

    if (typeof value === 'object' && !Array.isArray(value)) {
      return Object.keys(value).length > 0;
    }

    return true;
  });
}
