const convertToBoolean = require('./convertToBoolean');
const convertToNumber = require('./convertToNumber');
const stringifyValue = require('./stringifyValue');

function coerceToType(value, type) {
  if (type === 'string') {
    return stringifyValue(value);
  }

  if (type === 'boolean') {
    return convertToBoolean(value);
  }

  if (type === 'number') {
    return convertToNumber(value);
  }

  if (type === 'bigint') {
    convertToBigInt(value);
  }

  throw new Error(
    `Impossible to convert ${value} to ${type}. Please consider alternative data types or methods.`
  );
}

module.exports = coerceToType;
