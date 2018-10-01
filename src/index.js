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
  
}
