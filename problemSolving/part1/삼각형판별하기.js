function solution(a, b, c) {
  let answer, max;
  let sum = a + b + c;
  if (a < b) max = b;
  else max = a;
  if (c > max) max = c;

  if (sum - max <= max) answer = `No`;
  else answer = `Yes`;

  return answer;
}

console.log(solution(13, 33, 17));
