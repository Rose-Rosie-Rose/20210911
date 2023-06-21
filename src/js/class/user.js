// 유저
// 속성: 이름, 레벨, 주소, 포인트

class User {
  constructor(name, address) {
    this.name = name
    this.address = address
    this.level = 0
    this.point = 0
  }
  getLeveltText() {
    // if (this.level === 0) {
    //   console.log('일반회원')
    // } else if (this.level === 1) {
    //   console.log('실버회원')
    // } else if (this.level === 2) {
    //   console.log('골드회원')
    // }
    switch (this.level) {
      case 1: {
        console.log('실버회원')
        return
      }
      case 2: {
        console.log('골드회원')
        return
      }
      default: {
        console.log('일반회원')
      }
    }
  }
  hasAvailablePoint() {
    return this.point > 0
  }
}

const user = new User('홍길동', '안양')
const user2 = new User('홍길동2', '광명')

user.getLevelText() // 일반회원
console.log(user.hasAvailablePoint()) // false

// 1. 레벨에 따른 등급 텍스트 노출
// 0 -> 일반회원, 1 -> 실버회원, 2 -> 골드회원
// 2. 포인트를 사용 할 수 있는 유저인가?
// 3. 안양에 사는 유저인가?
