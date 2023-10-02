module.exports = function reverse (n) {
    let res = 0;
    n = Math.abs(n);
    let i = n.toString().length - 1;
    while (n / 10 > 0) {
        res += (n % 10) * 10**i;
        n = Math.floor(n / 10);
        i--;
  }
  return res;
}
