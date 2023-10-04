function solution(n) {
  let arr = [];

  for (let i = 1; i < n; i++) {
    if (n % i === 1) arr.push(i);
  }
  return Math.min(...arr);
}

function solution(n, k) {
  const FOOD_PRICE = 12000;
  const DRINK_PRICE = 2000;
  const discountDrink = Math.floor(n / 10);

  return FOOD_PRICE * n + DRINK_PRICE * (k - discountDrink);
}
