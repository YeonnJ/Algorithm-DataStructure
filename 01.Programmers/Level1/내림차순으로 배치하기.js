function solution(n) {
  let str = String(n);
  let arr = str.split("");
  let result = Number(arr.sort().reverse().join(""));

  return result;
}
