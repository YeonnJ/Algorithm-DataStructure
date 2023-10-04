function solution(a, b) {
  var answer = 0;
  let max = Math.max(a, b);
  let min = Math.min(a, b);

  for (let i = min; i <= max; i++) {
    answer += i;
  }
  return answer;
}

function solution(a, b) {
  const [min, max] = [Math.min(a, b), Math.max(a, b)];
  let sum = 0;

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
}
