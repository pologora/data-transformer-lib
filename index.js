const addValues = require('./functions/addValues');
const coerceToType = require('./functions/coerceToType');
const convertToBoolean = require('./functions/convertToBoolean');
const convertToNumber = require('./functions/convertToNumber');
const invertBoolean = require('./functions/invertBoolean');
const stringifyValue = require('./functions/stringifyValue');

module.exports = {
  invertBoolean,
  addValues,
  stringifyValue,
  coerceToType,
  convertToNumber,
  convertToBoolean,
};
