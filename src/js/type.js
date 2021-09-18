/*
1. 원시 타입
- String
- Number
- Boolean
- Null (선언조차 되어지지 않는 타입)
- Undefined (값이 할당되어지지 않은 상태)
- Symbol

2. 객체 타입
- function
- Array
- Object
*/

// 값을 할당하기 전에는 타입을 알 수 없다.
// => 동적 타입 언어
const s = "String"  // string name = "홍길동"
const n = 10
const b = true
const nu = null
const u = undefined
const sy = Symbol()

console.log(typeof s)
console.log(typeof n)

// 목적 : 두 가지의 숫자를 받아서 더해주는 함수
function add(a, b) {
  if(typeof a !== "number" || typeof b !== "number"){
    console.log("숫자만 받을 수 있습니다.")
    // 함수는 return을 만나면 역활을 끝낸다.
    return
  }
  return a + b
}

const result = add(10, 20)
console.log('result', result)

const name = add("홍", "길동")
console.log("name", name)

// 타입스크립트 (타입을 가진 자바스크립트)
// const name: string = "홍길동"
// function add(a:number, b:number): number {}
// add("홍") => Error