function solution(a, b) {
  let dayStr = new Date(2016, a - 1, b).toString();
  let week = dayStr.slice(0, 3).toUpperCase();
  return week;
}
