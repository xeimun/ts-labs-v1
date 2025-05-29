function getOrderTotal(...prices: number[]): number {
  return prices.reduce((sum, price) => sum + price, 0);
}

console.log(getOrderTotal(1500, 3000, 1200)); // 총합: 5700
console.log(getOrderTotal()); // 0
