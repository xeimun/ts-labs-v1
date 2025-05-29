/**
 * 타입 별칭(type alias) 예제
 * - 자주 쓰는 객체 구조에 별명을 붙여서, 타입 선언을 더 쉽고 명확하게 만드는 실전 활용법
 * - 구조가 반복되는 데이터 모델링(상품 등)에 매우 유용
 */

type Product = {
  id: number;
  name: string;
  price: number;
  tags?: string[]; // 태그는 있을 수도, 없을 수도 있음
};

// 여러 상품을 타입 안전하게 관리
const products: Product[] = [
  { id: 1, name: "노트북", price: 1500000, tags: ["전자제품", "IT"] },
  { id: 2, name: "책상", price: 200000 },
];

// 타입 별칭을 사용하지 않을 때와 비교해볼 것!
// const products2: { id: number; name: string; price: number; tags?: string[] }[] = ...

// 상품 정보를 출력하는 함수에도 타입 별칭을 바로 활용 가능
function printProduct(p: Product): void {
  console.log(`${p.name} - ${p.price}원`);
}

products.forEach(printProduct);
