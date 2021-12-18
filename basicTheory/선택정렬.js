let selectionSort = function (arr) {
  let length = arr.length;
  let minIndex, temp, i, j;
  for (let i = 0; i < length - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
  return arr;
};

selectionSort([5, 1, 4, 7, 2, 6, 8, 3]);
