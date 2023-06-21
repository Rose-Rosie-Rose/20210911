class User {
  constructor(name, address) {
    this.name = name
    this.address = address
    this.level = 0
    this.point = 0
  }
  getLeveltText() {
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

// 유저 매니저
// 1. 유저 추가
// 2. 유저 삭제
// 3. 유저 정보 수정
// 4. 포인트를 사용 할 수 있는 유저만 골라보기
// 5. 특정 지역에 사는 유저만 골라보기

class UserManager {
  constructor() {
    this.users = []
  }
}
