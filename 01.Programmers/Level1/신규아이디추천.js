function solution(new_id) {
  var answer = "";

  let step1 = new_id.toLowerCase();
  let step2 = step1.replace(/[^\w-._]*/g, ""); // [^문자] 는 괄호안의 문자 제외
  let step3 = step2.replace(/\.{2,}/g, ".");
  let step4 = step3.replace(/^\.|\.$/g, "");
  let step5 = step4.replace(/^$/g, "a");
  let step6;

  if (step5.length > 15) {
    step6 = step5.slice(0, 15).replace(/\.$/g, "");
  } else step6 = step5;

  let step7;

  if (step6.length < 3) {
    let addWord = step6.substr(-1);
    step7 = step6 += addWord.repeat(3 - step6.length);
  } else step7 = step6;

  answer = step7;

  return answer;
}
