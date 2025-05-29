let calculator: (a: number, b: number) => number;

calculator = (x, y) => x + y;
console.log("합:", calculator(3, 7));

calculator = (x, y) => x * y;
console.log("곱:", calculator(3, 7));
