function solution(N, stages) {
  let result = [];

  let totalLen = stages.length;
  let stageNum = 0;
  let rate = 0;

  for (let i = 1; i <= stages.length; i++) {
    totalLen -= stageNum; //분모
    stageNum = stages.filter((el) => el === i).length; //분자

    rate = stageNum / totalLen; // 실패율

    if (stageNum === 0) result.push({ i, rate: 0 });
    else result.push({ i, rate });
  }
  return result;
}
