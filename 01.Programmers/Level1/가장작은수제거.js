function solution(arr) {
  let minVal = Math.min(...arr); //배열의 최솟값
  for (let i = 0; i < arr.length; i++) {
    if (arr.length === 1) return [-1];
    if (arr[i] === minVal) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}

function solution(arr) {
  const removeIdx = arr.findIndex((el) => el === Math.min(...arr));

  arr.splice(removeIdx, 1);
  return arr.length > 1 ? arr : [-1];
}
