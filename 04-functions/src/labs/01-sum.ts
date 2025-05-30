// [문제] 총합 계산 함수
// numbers라는 숫자 배열을 받아 총합을 반환하는 함수를 작성하세요.
// 함수 선언식으로 작성하고, 매개변수와 반환값에 타입을 명시하세요.

/*
예시)
sum([1, 2, 3]) // 6
*/
function sum(nums: number[]): number {
    return nums.reduce((acc, cur) => (acc += cur), 0);
}

console.log(sum([1, 2, 3]));
