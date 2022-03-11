// function solution(s) {
//   var answer = "";

//   if (s.length % 2 == 0) {
//     // 짝수일 경우,
//     answer = s[s.length / 2 - 1] + s[s.length / 2];
//   } else {
//     answer = s[Math.floor(s.length / 2)]; // 홀수일 경우, 반내림 하기
//   }
//   return answer;
// }

//풀이2
function solution(s) {
  return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}
