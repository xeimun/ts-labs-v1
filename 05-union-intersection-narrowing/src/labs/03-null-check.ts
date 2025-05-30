// [문제] null 체크 패턴: 유저 정보 안전하게 출력
// user가 undefined일 수도 있으니 안전하게 id, name, (email이 있으면 email도) 출력

type User = { id: number; name: string; email?: string };

function printUserInfo(user?: User) {
    if (!user) {
        console.log("user 정보가 없습니다.");
        return;
    }

    const info =
        `ID: ${user.id}, 이름: ${user.name}` +
        (user.email ? `, 이메일: ${user.email}` : "");
    console.log(info);
}

// 사용 예시
printUserInfo();
printUserInfo({ id: 2, name: "Tom" });
printUserInfo({ id: 3, name: "Jane", email: "jane@example.com" });
