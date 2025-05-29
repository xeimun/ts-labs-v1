// [문제 6] void와 undefined 구분 실습
// (1) void와 undefined 타입의 함수 예제를 직접 만들어보세요.

function logSuccess(): void {
    console.log("성공");
}

function returnUndef(): undefined {
    return undefined;
}

// (2) 두 함수의 반환값을 각각 변수에 담고 타입 추론 결과를 주석으로 써보세요.

let a = logSuccess();
let b = returnUndef();
// a, b의 타입은?

console.log(typeof a); // undefined
console.log(typeof b); // undefined
