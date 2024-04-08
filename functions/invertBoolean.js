function invertBoolean(boolean) {
  if (typeof boolean !== 'boolean') {
    throw new Error(
      `Type of ${boolean} is not boolean. Should invert only boolean type.`
    );
  }

  return !boolean;
}

module.exports = invertBoolean;
