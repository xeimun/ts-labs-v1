/**
 * enum(열거형) 예제
 * - 회원 등급/상태, 결제 결과처럼 "한정된 값"을 안전하게 다루는 방법 실습
 * - 코드 가독성과 자동완성 이점
 */

enum UserRole {
  Guest = "GUEST",
  Member = "MEMBER",
  Admin = "ADMIN",
}

// 회원 등급별 권한 판별
function canEdit(role: UserRole): boolean {
  return role === UserRole.Admin || role === UserRole.Member;
}

const role: UserRole = UserRole.Member;
console.log(canEdit(role)); // true

enum PaymentStatus {
  Pending, // 결제 대기
  Success, // 결제 성공
  Fail, // 결제 실패
}
const payStatus: PaymentStatus = PaymentStatus.Pending;
console.log(PaymentStatus[payStatus]); // "Pending"
