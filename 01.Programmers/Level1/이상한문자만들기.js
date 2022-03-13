function solution(s) {
  const result = [];
  const arr = s.split(" ");

  // arr : ["try", "hello", "world"];

  for (let el of arr) {
    // el : try hello world

    let temp = "";
    for (let i = 0; i < el.length; i++) {
      if (i % 2 === 0) {
        temp += el[i].toUpperCase();
      } else {
        temp += el[i].toLowerCase();
      }
    }
    // temp : TrY, HeLlO, WoRlD
    result.push(temp);
  }

  return result.join(" ");
}
