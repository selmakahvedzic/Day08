var sum = 0;
function addThree() {
  sum = sum + 3;
  console.log("addFive:", sum);
}

function addFive() {
  sum = sum + 5;
  console.log("addFive:", sum);
}

addThree();
addFive();

module.exports = {
  addThree,
  addFive,
};
