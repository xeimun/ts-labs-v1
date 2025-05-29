/**
 * 배열(Array) 예제
 * - string 배열을 선언하고, 추가/검색/필터 등 실전에서 자주 쓰는 메서드 활용법 실습
 */

const usernames: string[] = ["윤유저", "김유저", "최유저"];
usernames.push("박유저"); // 배열 끝에 요소 추가

// 배열에서 특정 사용자가 존재하는지 확인
function hasUser(name: string): boolean {
  return usernames.includes(name);
}

// '김'으로 시작하는 사용자 이름만 추출
const aUsers = usernames.filter((u) => u.startsWith("김")); // ['김유저']

console.log(hasUser("김유저")); // true
console.log(aUsers); // ['alice']
