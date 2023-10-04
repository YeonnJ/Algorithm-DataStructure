function solution(s) {
  let str = s.toLowerCase().split("");
  console.log(str);

  let p = 0;
  let y = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "p") {
      p++;
    } else if (str[i] === "y") {
      y++;
    }
  }

  if (p === y) return true;
  else return false;
}

// function solution(s) {
//   const arrS = s.toLowerCase().split("");
//   let cntP = 0;
//   let cntY = 0;

//   for (let i = 0; i < arrS.length; i++) {
//     if (arrS[i] === "p") {
//       cntP++;
//     } else if (arrS[i] === "y") {
//       cntY++;
//     } else {
//       return true;
//     }
//   }

//   return cntP === cntY ? true : false;
// }
