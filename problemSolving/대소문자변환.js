function solution(s) {
  let answer = "";
  for (let x of s) {
    if (x === x.toLowerCase()) {
      answer += x.toUpperCase();
    } else {
      answer += x.toLowerCase();
    }
  }
  return answer;
}

console.log(solution("StuDY"));
