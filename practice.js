function multiplyBiggerNumByTwo(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

function divideBiggerNumByThree(num1, num2) {
  return num1 > num2 ? num1 / 3 : num2 / 3;
}

function eatMostTacos(sum1, sum2) {
  return sum1 > sum2 ? `I ate${sum1}` : `I ate${sum2}`;
}

function adoptSmallerDog(weight1, weight2) {
  return weight1 < weight2
    ? `I adopted a dog that weighs ${weight1} pounds.`
    : `I adopted a dog that weighs ${weight2} pounds.`;
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog,
};
