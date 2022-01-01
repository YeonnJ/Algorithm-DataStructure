function solution(n) {
  let answer = 0;
  answer = (n * (n + 1)) / 2;
  return answer;
}

console.log(solution(10));

//선생님답변
function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer = answer + i;
  }
  return answer;
}
