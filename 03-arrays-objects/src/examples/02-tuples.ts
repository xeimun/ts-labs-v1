/**
 * 튜플(Tuple) 예제
 * - [number, number] 형태 좌표 등, 순서와 타입이 고정된 데이터를 안전하게 다루는 방법 실습
 */

type Point = [number, number]; // (x, y) 좌표
const start: Point = [0, 0];
const end: Point = [128, 256];

// [string, number] 형태로 사용자 정보를 튜플로 표현
type UserTuple = [string, number];
const leader: UserTuple = ["윤유저", 33];

// 두 좌표 간 거리 계산 함수 (튜플 분해 활용)
function getDistance(p1: Point, p2: Point): number {
  const [x1, y1] = p1;
  const [x2, y2] = p2;
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

console.log(getDistance(start, end));
