# ๐ป  Algorithm-DataStructure
### ์๊ณ ๋ฆฌ์ฆ/์๋ฃ๊ตฌ์กฐ ๋ฐ ์ฝ๋ฉํ์คํธ ๊ณต๋ถ ์ ์ฅ์
### ๋งค์ผ 1~2๋ฌธ์  ๊ผญ ํ๊ณ  commit ํ๊ธฐ! ๐ค

<br />

### ๐ Commit Message Convention
1. ๋ฐฑ์ค: Add(yeonjae): ํ์ผ์ด๋ฆ.js '

<br />

## ๐ฅ ์ฝ๋ฉํ์คํธ ๋ฌธ์  ์ฌ์ดํธ
- [programmers] : (https://programmers.co.kr/)
- [๋ฐฑ์ค] : (https://www.acmicpc.net/)

<br />

## ๐ ๋ฐฑ์ค) node.js ์๋ ฅ๊ฐ ๋ฐ๊ธฐ
```javascript
    const readline = require("readline"); 
    const rl = readline.createInterface({ 
        input: process.stdin, 
        output: process.stdout, 
    }); 

    //์ ์ญ ๋ณ์
    let input = [];

    rl.on("line", function (line) {
        input.push(line); 
    }).on("close", function () { 
        // ํ์ด ์ฝ๋
    })
```

<br />

## ๐ ํ๋ก๊ทธ๋๋จธ์ค) ํจ์ํ ์ฝ๋ฉํ์คํธ
### ex) Level1 - 3์ง๋ฒ ๋ค์ง๊ธฐ
```javascript
  function solution(n) {
    const reverseTernary = n.toString(3).split('').reverse();
    let answer = 0;
    
    let sum ='';
    reverseTernary.forEach(n => sum += n);
    
    return answer = parseInt(sum, 3);
  }
```

<br />
