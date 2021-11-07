//풀이1
function solution(absolutes, signs) {
  return absolutes
    .map((el, idx) => {
      if (signs[idx]) return el;
      return -el;
    })
    .reduce((acc, cur) => acc + cur);
}

//풀이2
function solution(absolutes, signs) {
  let result = 0;

  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i]) result += absolutes[i];
    else result -= absolutes[i];
  }

  return result;
}
