// [문제] typeof 패턴: 입력값 타입 판별 및 처리
// 입력값이 문자열이면 모두 대문자로, 숫자면 세제곱 값 출력

function handleInput(input: string | number) {
    if (typeof input === "string") {
        console.log(input.toUpperCase());
    } else {
        console.log(input * input * input);
    }
}

// 사용 예시
handleInput("hello"); // "HELLO"
handleInput(2); // 8
