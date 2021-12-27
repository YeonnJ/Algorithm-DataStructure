function solution(s) {
  let answer = 0;
  for (let x of s) {
    if (x === x.toUpperCase()) answer++;
  }

  return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str));

//2번째풀이
function solution(s) {
  return s.toUpperCase();
}
