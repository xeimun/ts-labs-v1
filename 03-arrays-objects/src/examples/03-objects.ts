/**
 * 객체(Object) 예제
 * - type을 사용해 실전에서 많이 쓰는 사용자 데이터 모델을 안전하게 설계하는 방법
 * - 선택적 프로퍼티와 읽기 전용(readonly) 속성 실습
 */

type User = {
  id: number;
  name: string;
  email?: string; // 없어도 되는 값(선택적)
  readonly createdAt: Date; // 한 번 정해지면 바꿀 수 없는 값
};

const user: User = {
  id: 1,
  name: "선유저",
  createdAt: new Date(),
};

const user2: User = {
  id: 2,
  name: "박유저",
  email: "park@example.com",
  createdAt: new Date(),
};

// user.createdAt = new Date(); // (x) 에러! readonly 속성은 수정 불가
