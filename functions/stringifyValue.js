function stringifyValue(value) {
  if (value == null) {
    throw new Error(
      'Impossible to convert null or underfind to string. Please consider alternative data types or methods.',
    );
  }

  if (typeof value === 'object') {
    return JSON.stringify(value);
  }

  return String(value);
}

module.exports = stringifyValue;
