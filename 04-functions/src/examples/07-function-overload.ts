function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
  return a + b;
}

console.log(combine(10, 20)); // 숫자 덧셈
console.log(combine("안녕", "하세요")); // 문자열 연결
