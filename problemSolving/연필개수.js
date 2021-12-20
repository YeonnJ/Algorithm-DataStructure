function solution(n) {
  let answer;
  answer = Math.floor(n / 12) + 1;
  return answer;
}

console.log(solution(178));

//선생님답변
function solution(n) {
  let answer = Math.ceil(n / 12);
  return answer;
}
//ceil: 올림
//floor: 내림
//round: 반올림
