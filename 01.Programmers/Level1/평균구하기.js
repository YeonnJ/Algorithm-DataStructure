function solution(arr) {
  return arr.reduce((cur, acc) => cur + acc, 0) / arr.length;
}
