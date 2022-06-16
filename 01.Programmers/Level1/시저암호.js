function solution(s, n) {
  var answer = "";

  answer = s
    .split("")
    .map((v) => {
      if (v === " ") {
        return " ";
      }
      const tmp = v.charCodeAt(); // 문자 하나를 아스키코드로 변환한 변수
      return v.toUpperCase().charCodeAt() + n > 90
        ? String.fromCharCode(tmp + n - 26)
        : String.fromCharCode(tmp + n);
    })
    .join("");

  console.log(answer);

  return answer;
}
