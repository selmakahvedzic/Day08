function convertStrToInt(num) {
  return parseInt(num);
}

console.log(convertStrToInt("03"));
console.log(convertStrToInt("44"));
console.log(convertStrToInt("27"));
console.log(convertStrToInt("JeffBezos"));
module.exports = convertStrToInt;
