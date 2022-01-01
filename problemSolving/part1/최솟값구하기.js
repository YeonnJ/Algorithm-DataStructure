function solution(arr) {
  let answer = Math.min(...arr);
  //Math.min.apply(null, arr);
  return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));

//선생님답변
function solution(arr) {
  let answer,
    min = Number.MAX_SAFE_INTEGER; //안정적인 큰 수 설정;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  answer = min;
  return answer;
}
