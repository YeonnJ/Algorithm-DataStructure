function solution(n, m) {
  var answer = [];

  if (n > m) {
    for (i = 2; i <= n; i++) {
      if (n % i === 0 && m % i === 0) answer[0] = i;
    }

    if (answer[0]) {
      answer[1] = (n * m) / answer[0];
    }

    if (!answer[0]) {
      answer[0] = 1;
      answer[1] = n * m;
    }
  } else {
    for (i = 2; i <= m; i++) {
      if (n % i === 0 && m % i === 0) answer[0] = i;
    }

    if (answer[0]) {
      answer[1] = (n * m) / answer[0];
    }

    if (!answer[0]) {
      answer[0] = 1;
      answer[1] = n * m;
    }
  }

  return answer;
}
