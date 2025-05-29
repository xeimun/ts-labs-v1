/**
 * [문제] 책(Book) 객체 타입을 선언하고, 책 목록을 다루는 코드를 작성하세요.
 * 1. Book 타입은 title, author, publishedYear(출간년도), isAvailable(대출가능여부) 필수
 * 2. books 배열을 만들고 2권 이상 입력
 * 3. 현재 대출 가능한 책만 availableBooks에 추출
 */

// TODO: Book 타입, books 배열, availableBooks 필터링
type Book = {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
};

const book1: Book = {
    title: "코끼리",
    author: "해리슨",
    publishedYear: 2025,
    isAvailable: true,
};

const book2: Book = {
    title: "하마",
    author: "제니",
    publishedYear: 2025,
    isAvailable: false,
};

const books: Book[] = [book1, book2];

for (let book of books) {
    if (book.isAvailable) {
        console.log(book.title);
    }
}
