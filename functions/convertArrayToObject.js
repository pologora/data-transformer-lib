function convertArrayToObject(array) {
  return array.reduce((acc, item, index) => {
    acc[index] = item;
    return acc;
  }, {});
}

module.exports = convertArrayToObject;
