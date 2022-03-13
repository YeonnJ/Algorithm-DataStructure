// function solution(numbers) {
//   const compareList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//   let result = 0;

//   for (let i = 0; i < compareList.length; i++) {
//     if (!numbers.includes(compareList[i])) {
//       result += compareList[i];
//     }
//   }
//   return result;
// }

function solution(numbers) {
  return 45 - numbers.reduce((acc, cur) => acc + cur, 0);
}
