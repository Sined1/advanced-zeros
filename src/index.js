module.exports = function getZerosCount(number, base) {

  function isPrime(value) {
    let ar = [true];
    for (let i = 2; i <= value; i++) {
      if (value % i == 0) {
        ar.push(true);
      }
    }
    if (ar.length == 2) {
      return true;
    } else {
      return false;
    }
  }

  //get primeArray
  let primeArray = [];
  for (i = 2; i <= base; ) {
    if (isPrime(i) && (base % i == 0)) {
      primeArray.push(i);
      base /= i;
    } else {
      i++;
    }
  }

  //algorithm of counting zeros for every value from primeArray
  let ans = [];
  for (i = 0; i < primeArray.length; i++) {
    let x = primeArray[i];
    let div = 0;
    let sum = 0;
    for (j = 0; j < primeArray.length; j++) {
      if (x == primeArray[j]) div++;
    }
    for (k = 1; Math.pow(x, k) <= number; k++) {
      sum += parseInt(number / Math.pow(x, k));
    }
    ans.push(parseInt(sum/div));
  }

  //find min in ans array
  let a = ans[0];
  if (ans.length > 1) {
    for (i = 1; i < ans.length; i++) {
      if (a > ans[i]) {
        a = ans[i];
      }
    }
  }
  return a;
}
