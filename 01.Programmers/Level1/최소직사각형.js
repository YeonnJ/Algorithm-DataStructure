function solution(sizes) {
  let answer = [];

  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] < sizes[i][1]) {
      answer.push(sizes[i].reverse());
    } else {
      answer.push(sizes[i]);
    }
  }
  let width = [];
  let height = [];
  for (let i = 0; i < answer.length; i++) {
    width.push(answer[i][0]);
    height.push(answer[i][1]);
  }
  let widthVal = width.sort((a, b) => b - a);
  let heightVal = height.sort((a, b) => b - a);

  return widthVal[0] * heightVal[0];
}

// function solution(sizes) {
//   const newSizes = sizes;
//   const width = [];
//   const height = [];

//   for (let i = 0; i < newSizes.length; i++) {
//     newSizes[i].sort((a, b) => b - a);
//     width.push(newSizes[i][0]);
//     height.push(newSizes[i][1]);
//   }

//   return Math.max(...width) * Math.max(...height);
// }
