const convertArrayToObject = require('./convertArrayToObject');

function convertToObject(value) {
  const valueType = typeof value;

  if (value == null) {
    throw new Error(
      'Impossible to convert null or underfind to object. Please consider alternative data types or methods.',
    );
  }

  if (valueType === 'object') {
    if (Array.isArray(value)) {
      return convertArrayToObject(value);
    }

    return value;
  }

  if (
    valueType === 'bigint' ||
    valueType === 'string' ||
    valueType === 'number' ||
    valueType === 'boolean'
  ) {
    return { [valueType]: value };
  }

  throw new Error(
    `Impossible to convert ${value} to object. Please consider alternative data types or methods. `,
  );
}

module.exports = convertToObject;
