// [문제] in 패턴: 알림(Notification) 객체 타입 분기
// 이메일/문자/푸시알림 타입별로 메시지 출력

type EmailNotification = { to: string; subject: string; body: string };
type SmsNotification = { phone: string; message: string };
type PushNotification = { deviceId: string; alert: string };

type Notification = EmailNotification | SmsNotification | PushNotification;

function sendNotification(notif: Notification) {
    if ("subject" in notif) {
        console.log(
            `이메일 발송 → 받는 사람: ${notif.to}, 제목: ${notif.subject}`
        );
    } else if ("message" in notif) {
        console.log(`문자 발송 → 번호: ${notif.phone}, 내용: ${notif.message}`);
    } else {
        console.log(
            `푸시 발송 → 디바이스: ${notif.deviceId}, 알림: ${notif.alert}`
        );
    }
}

// 사용 예시
// sendNotification({ to: "a@b.com", subject: "Hi", body: "내용" });
// sendNotification({ phone: "010-1234-5678", message: "문자" });
// sendNotification({ deviceId: "xyz", alert: "푸시" });
