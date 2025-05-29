const calculatePrice = function (price: number, taxRate: number = 0.1): number {
  return price + price * taxRate;
};

console.log(calculatePrice(10000)); // 세금 10%
console.log(calculatePrice(10000, 0.2)); // 세금 20%
