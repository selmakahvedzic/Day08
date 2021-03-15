function convertToInt(num) {
  return parseInt(num, 16);
}

console.log(convertToInt("BA"));
console.log(convertToInt("F1"));
console.log(convertToInt("JeffBezos"));
module.exports = convertToInt;
