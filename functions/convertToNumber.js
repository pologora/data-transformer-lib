function convertToNumber(value) {
  const valueType = typeof value;

  if (value == null) {
    throw new Error(
      'Impossible to convert null or underfind to number. Please consider alternative data types or methods.',
    );
  }

  if (valueType === 'number') {
    return value;
  }

  if (valueType === 'string') {
    const result = parseFloat(value);
    if (Object.is(result, NaN)) {
      throw new Error(
        `Impossible to convert ${value} to number. Please consider alternative data types or methods.`,
      );
    }

    return result;
  }

  if (valueType === 'boolean') {
    return Number(value);
  }

  throw new Error(
    `Impossible to convert ${valueType} to number. Please consider alternative data types or methods.`,
  );
}

module.exports = convertToNumber;
