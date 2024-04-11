function stringifyValue(value) {
  if (value === null) {
    return String(value);
  }

  if (typeof value === 'object') {
    return JSON.stringify(value);
  }

  return String(value);
}

module.exports = stringifyValue;
