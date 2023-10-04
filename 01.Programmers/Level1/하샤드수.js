function solution(x) {
  let answer = 0;
  let arr = (x + "").split("");
  for (let i = 0; i < arr.length; i++) {
    answer += Number(arr[i]);
  }
  return x % answer == 0 ? true : false;
}

// function solution(x) {
//   const sum = String(x)
//     .split("")
//     .reduce((acc, cur) => acc + Number(cur), 0);

//   return x % sum === 0 ? true : false;
// }
