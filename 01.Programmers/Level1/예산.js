function solution(d, budget) {
  d = d.sort(function (a, b) {
    return a - b;
  });

  let answer = 0; //답
  let arrSum = 0; //배열

  for (let i = 0; i < d.length; i++) {
    arrSum += d[i]; //배열요소의 합

    if (arrSum <= budget) answer++;
    else break;
  }

  return an;
}

function solution(d, budget) {
  const sortBudget = d.sort((a, b) => a - b);
  let cnt = 0;

  for (const count of sortBudget) {
    if (budget - count >= 0) {
      budget = budget - count;
      cnt++;
    } else {
      return cnt;
    }
  }

  return cnt;
}
