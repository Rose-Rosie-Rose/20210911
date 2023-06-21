// 1. 리터럴 방식
const user = {
  id: 0,
  name: '홍길동',
  level: 0,
  point: 3000,
  getName: function () {
    return this.name
  },
}
// 100
const user100 = {
  id: 0,
  name: '홍길동100',
  level: 0,
  point: 30000000,
  getName: function () {
    return this.name
  },
}

// 2. 생성자함수 (ES5 버전)
// 붕어빵틀
function User(name) {
  this.name = name
  this.level = 0
  this.point = 0
  this.address = "" 
}

// 프로토타입이란 자신을 만든 부모격인 객체와 연결된 링크이다.
// 중복적으로 메모리에 올라가느 함수를 부모의 프로토타입 영역에 넣어서
// 메모리 효율을 높일 수 있다.
User.prototype.getName = function() {
  return this.name
}

const user1 = new User("홍길동1")
const user100 = new User("홍길동100")

// Class (생성자 함수의 ES6)
class UserES6 {
  constructor(name) {
    // 생성될 때 제일 먼저 실행되는 곳
    // 한번만 실행된다.
    this.name = name
    this.level = 0
    this.point = 0
    this.address = ""
  }
  // prototype
  getName() {
    return this.name
  }
}