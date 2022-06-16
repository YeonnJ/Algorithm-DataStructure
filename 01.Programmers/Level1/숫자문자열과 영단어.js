function solution(s) {
  const numArr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let result = s;

  for (let i = 0; i < numArr.length; i++) {
    let array = result.split(numArr[i]); //문자열 => 배열을 생성
    result = array.join(i);
  }
  return Number(result);
}

//   function solution(s) {
//     var answer = 0;

//     s = s.replace(/zero/g, 0);
//     s = s.replace(/one/g, 1);
//     s = s.replace(/two/g, 2);
//     s = s.replace(/three/g, 3);
//     s = s.replace(/four/g, 4);
//     s = s.replace(/five/g, 5);
//     s = s.replace(/six/g, 6);
//     s = s.replace(/seven/g, 7);
//     s = s.replace(/eight/g, 8);
//     s = s.replace(/nine/g, 9);

//     answer = Number(s);

//     return answer;
// }
