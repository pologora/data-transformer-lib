function addValues(a, b) {
  const firstType = typeof a;
  const secondType = typeof b;

  if (firstType !== secondType) {
    throw new Error('Addition not possible for values of different types');
  }

  switch (firstType) {
    case 'number':
    case 'string':
    case 'bigint':
      return a + b;
    case 'boolean':
      return Number(a) + Number(b);
    case 'object':
      if (Array.isArray(a) && Array.isArray(b)) {
        return a.concat(b);
      }
    default:
      throw new Error('Addition not supported for values of type ' + firstType);
  }
}

module.exports = addValues;
