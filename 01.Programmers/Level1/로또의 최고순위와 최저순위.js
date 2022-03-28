function solution(lottos, win_nums) {
  // let countZero = lottos.filter((element) => 0 === element).length; //0의개수
  // let minNum = lottos.filter((x) => win_nums.includes(x)).length; //최소순위
  // let maxNum = minNum + countZero; //최대순위
  const answer = [];
  let minNum = 0;
  let maxNum = 0;

  lottos.forEach((lotto) => {
    if (win_nums.includes(lotto)) {
      minNum++;
      maxNum++;
    }
    if (lotto === 0) {
      maxNum++;
    }
  });

  checkGrade(maxNum);
  checkGrade(minNum);

  return answer;

  function checkGrade(num) {
    switch (num) {
      case 2:
        answer.push(5);
        break;
      case 3:
        answer.push(4);
        break;
      case 4:
        answer.push(3);
        break;
      case 5:
        answer.push(2);
        break;
      case 6:
        answer.push(1);
        break;
      default:
        answer.push(6);
    }
  }
}
