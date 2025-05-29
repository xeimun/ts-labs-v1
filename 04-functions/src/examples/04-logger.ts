function log(message: string, isError: boolean = false): void {
  if (isError) {
    console.error("[ERROR]", message);
  } else {
    console.log("[INFO]", message);
  }
}

log("시스템이 시작되었습니다.");
log("디스크 공간 부족", true);
