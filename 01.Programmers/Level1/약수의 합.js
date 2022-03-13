function solution(n) {
  const arr = [];

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }

  return arr.reduce((acc, curr) => acc + curr, 0);
}
