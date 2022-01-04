module.exports = function reverse (n) {
  let nStr = String(Math.abs(n));
  let nLength = nStr.length;
  let result = '';
  for (let count = nLength - 1; count >= 0; count--) {
    result = result + nStr[count];
  }
  return Number(result);
}