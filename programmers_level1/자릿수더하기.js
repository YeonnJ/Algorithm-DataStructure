function solution(n) {
  let str = String(n);
  let arr = str.split("");

  return arr.reduce((acc, curr) => acc + Number(curr), 0);
}
