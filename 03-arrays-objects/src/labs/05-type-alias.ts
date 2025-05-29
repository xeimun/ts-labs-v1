/**
 * [문제] 강의(Lecture) 정보를 타입 별칭으로 선언하고, 강좌 목록을 다루세요.
 * 1. Lecture 타입: title(제목), instructor(강사명), students(수강생 수, number)
 * 2. lectures 배열에 3개 이상 입력
 * 3. 수강생이 30명 이상인 강좌만 popularLectures에 저장
 * 4. 모든 강좌의 제목을 titleList에 모으기
 */

// TODO: Lecture 타입, lectures 배열, popularLectures, titleList 완성
type Lecture = {
    title: string;
    instructor: string;
    students: number;
};

const lecture1 = {
    title: "화학",
    instructor: "김",
    students: 40,
};
const lecture2 = {
    title: "물리",
    instructor: "이",
    students: 30,
};
const lecture3 = {
    title: "컴공",
    instructor: "박박",
    students: 20,
};

const lectures: Lecture[] = [lecture1, lecture2, lecture3];

const popularLectures = [];

for (let lecture of lectures) {
    if (lecture.students >= 30) {
        popularLectures.push(lecture.title);
    }
}

console.log(popularLectures);
