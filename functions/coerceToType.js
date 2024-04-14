const convertToBigInt = require('./convertToBigInt');
const convertToBoolean = require('./convertToBoolean');
const convertToNumber = require('./convertToNumber');
const convertToObject = require('./convertToObject');
const stringifyValue = require('./stringifyValue');

function coerceToType(value, type) {
  if (value == null && type !== 'boolean') {
    throw new Error(
      `Impossible to convert null or underfind to ${type}. Please consider alternative data types or methods.`,
    );
  }

  switch (type) {
    case 'boolean':
      return convertToBoolean(value);
    case 'string':
      return stringifyValue(value);
    case 'number':
      return convertToNumber(value);
    case 'bigint':
      return convertToBigInt(value);
    case 'object':
      return convertToObject(value);
    default:
      throw new Error(
        `Impossible to convert ${value} to ${type}. Please consider alternative data types or methods.`,
      );
  }
}

module.exports = coerceToType;
