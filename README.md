# @pologora/data-transformer

A lightweight npm package for data transformation utilities.

## Instalation

npm:

```javascript
npm install @pologora/data-transformer
```

## Usage

```javascript
const {
  invertBoolean,
  addValues,
  stringifyValue,
  coerceToType,
  convertToNumber,
  convertToBoolean,
  convertToBigInt,
  convertToObject,
  convertArrayToObject,
} = require('@pologora/data-transformer');
```

## Functions

- **invertBoolean**: Inverts a boolean value.
- **addValues**: Adds two values together.
- **stringifyValue**: Converts a value to its string representation.
- **coerceToType**: Coerces a value to a specified data type.
- **convertToNumber**: Converts a value to a number.
- **convertToBoolean**: Converts a value to a boolean.
- **convertToBigInt**: Converts a value to a BigInt.
- **convertToObject**: Converts a value to a Object.
- **convertArrayToObject**: Converts an array to a Object.

## Handling Null and Undefined Values

For most functions, passing `null` or `undefined` as input will result in an
error being thrown, except for the following cases:

- **coerceToType**: Passing `null` or `undefined` will throw an error for most
  data types, except when coercing to boolean using
  `coerceToType(value, 'boolean')`.
- **convertToBoolean**: Returns `false` when passed `null` or `undefined`.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature
requests, please
[open an issue](https://github.com/pologora/data-transformer-lib/issues).

## License

This package is licensed under the MIT License.
