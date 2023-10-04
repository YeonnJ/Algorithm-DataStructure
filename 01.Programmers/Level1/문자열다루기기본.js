function solution(s) {
  if (!(s.length == 4 || s.length == 6)) {
    return false;
  } else {
    let arr = s.split("");
    for (let i = 0; i < arr.length; i++) {
      if (isNaN(arr[i])) {
        return false;
      }
    }
  }
  return true;
}

// function solution(s) {
//   const arr = s.split("");
//   let result = arr.length === 4 || arr.length === 6 ? true : false;

//   for (let i = 0; i < arr.length; i++) {
//     if (isNaN(arr[i])) {
//       result = false;
//     }
//   }
//   return result;
// }

