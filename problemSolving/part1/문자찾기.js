function solution(s, t) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) answer++;
  }
  return answer;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));
//1번풀이
function solution(s, t) {
  let answer = 0;
  for (let x of s) {
    if (x === t) answer++;
  }
  return answer;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));

//2번풀이
function solution(s, t) {
  let answer = s.split(t).length;
  return answer - 1;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));
