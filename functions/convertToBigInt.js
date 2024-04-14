function convertToBigInt(value) {
  try {
    return BigInt(value);
  } catch (error) {
    throw new Error(
      `Impossible to convert ${value} to BigInt. Please consider alternative data types or methods.`,
    );
  }
}

module.exports = convertToBigInt;
