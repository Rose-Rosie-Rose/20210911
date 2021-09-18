// ES5
// 재할당이 가능하다
// 스코프 : 함수(function) 스코프
var a = 10

// ES6
// 스코프 : 블록({}) 스코프
// 재할당이 가능하다.
let b = 10

// 재할당이 불가능하다.
const c = 10

// 호이스팅(끌어올림)

console.log(name) // undefined
var name = '홍길동'

// => 실행단계
/*
var name;
console.log(name) =>  undefined
name = "홍길동" <= 여기서 할당이 일어난다.
*/

// let, const 의 호이스팅

console.log(age) // Error
let age = 40 // const 도 마찬가지

age = 50 // 재할당!

// TDZ(TEmporal Dead Zone)
// => 값이 할당되어지지 않는 요소들이 TDZ 안에 들어 있을 때
// => 값에 접근하려하면 에러가 난다.

/*
let age (TDZ 안으로 들어간다.)
console.log(age) // Error
age = 40
*/

// 요즘은 다 const 로 쓴다.
// const 는 한번 선언 후 값을 변경 할 수 없기 때문에 값의 흐름이 눈에 잘 보이고 안전하다.
const foo = []
