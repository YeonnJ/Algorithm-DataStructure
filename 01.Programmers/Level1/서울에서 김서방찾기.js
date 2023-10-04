function solution(seoul) {
  let answer = "";

  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") {
      answer = `김서방은 ${i}에 있다`;
    }
  }
  return answer;
}

function solution(seoul) {
  const kimLocation = seoul.findIndex((el) => el === "Kim");

  return `김서방은 ${kimLocation}에 있다`;
}
