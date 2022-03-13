function solution(array, commands) {
  let start = 0;
  let end = 0;
  let k = 0;
  let answer = [];

  for (let i = 0; i < commands.length; i++) {
    const start = commands[i][0];
    const end = commands[i][1];
    const k = commands[i][2];

    let result = array.slice(start - 1, end).sort((a, b) => a - b);
    answer.push(result[k - 1]);
  }
  return answer;
}
