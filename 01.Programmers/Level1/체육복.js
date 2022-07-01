function solution(n, lost, reserve) {
  let answer = n;

  // 1. 현재 학생별 운동복 보유 수
  let student = new Array(n).fill(1);
  for (let i = 0; i < student.length; i++) {
    if (lost.includes(i + 1)) {
      student[i] -= 1;
    }
    if (reserve.includes(i + 1)) {
      student[i] += 1;
    }
  }

  // 2. 운동복이 2개 있는 학생들이 0인 친구들에게 빌려주기
  for (let i in student) {
    if (student[i] == 2 && student[i - 1] == 0) {
      student[i] -= 1;
      student[i - 1] += 1;
    }
    if (student[i] == 0 && student[i - 1] == 2) {
      student[i] += 1;
      student[i - 1] -= 1;
    }
  }

  for (let s of student) {
    if (s == 0) {
      answer--;
    }
  }
  return answer;
}
