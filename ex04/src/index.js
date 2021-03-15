function localScope() {
  var myVariable = "I'am here!";
  console.log('text with the value', myVariable);
}

localScope();

if (typeof myVariable != "undefined") {
  console.log('outside localScope', myVariable);
} else {
  console.log('outside localScope UNDEFINED!!!');
}

module.exports = localScope;
