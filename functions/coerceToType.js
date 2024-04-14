const convertToBigInt = require('./convertToBigInt');
const convertToBoolean = require('./convertToBoolean');
const convertToNumber = require('./convertToNumber');
const convertToObject = require('./convertToObject');
const stringifyValue = require('./stringifyValue');

function coerceToType(value, type) {
  if (type === 'boolean') {
    return convertToBoolean(value);
  }

  if (value == null) {
    throw new Error(
      `Impossible to convert null or underfind to ${type}. Please consider alternative data types or methods.`,
    );
  }

  if (type === 'string') {
    return stringifyValue(value);
  }

  if (type === 'number') {
    return convertToNumber(value);
  }

  if (type === 'bigint') {
    return convertToBigInt(value);
  }

  if (type === 'object') {
    return convertToObject(value);
  }

  throw new Error(
    `Impossible to convert ${value} to ${type}. Please consider alternative data types or methods.`,
  );
}

module.exports = coerceToType;
