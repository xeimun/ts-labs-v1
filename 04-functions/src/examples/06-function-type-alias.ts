// [예시1] 연산(계산) 함수 타입 별칭 선언
type Calculator = (a: number, b: number) => number;

// [실제 함수 구현]
const add: Calculator = (x, y) => x + y;
const subtract: Calculator = (x, y) => x - y;
const multiply: Calculator = (x, y) => x * y;
const divide: Calculator = (x, y) => x / y;

// [함수 타입 별칭을 매개변수로 사용하는 고차 함수]
function calculateAndLog(a: number, b: number, operation: Calculator): void {
  const result = operation(a, b);
  console.log(`결과: ${result}`);
}

// [사용 예시]
calculateAndLog(10, 5, add); // 결과: 15
calculateAndLog(10, 5, subtract); // 결과: 5
calculateAndLog(10, 5, multiply); // 결과: 50
calculateAndLog(10, 5, divide); // 결과: 2

// [예시2] 문자열 변환 함수 타입 별칭 선언
type StringTransformer = (input: string) => string;

const toUpperCase: StringTransformer = (str) => str.toUpperCase();
const exclaim: StringTransformer = (str) => str + "!";

// [고차 함수: 문자열을 변환해서 반환]
function processString(str: string, transformer: StringTransformer): string {
  return transformer(str);
}

// [사용 예시]
console.log(processString("hello", toUpperCase)); // "HELLO"
console.log(processString("hello", exclaim)); // "hello!"
