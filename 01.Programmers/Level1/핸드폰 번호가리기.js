function solution(phone_number) {
  const phoneStr = phone_number.length - 4;
  return "*".repeat(phoneStr) + phone_number.slice(-4);
}
