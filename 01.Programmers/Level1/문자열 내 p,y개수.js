function solution(s) {
  let str = s.toLowerCase().split("");
  console.log(str);

  let p = 0;
  let y = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "p") {
      p++;
    } else if (str[i] === "y") {
      y++;
    }
  }

  if (p === y) return true;
  else return false;
}
