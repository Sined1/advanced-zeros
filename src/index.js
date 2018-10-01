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
  return primeArray;
}
