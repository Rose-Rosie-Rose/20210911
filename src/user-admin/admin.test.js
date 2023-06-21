//.test test 파일이다.

// 이름, 나이, 사는 곳, 레벨, 가지고 있는 포인트
class User {
  constructor({ name, age, address }) {
    this.id = Date.now()
    this.name = name
    this.age = age
    this.address = address 
    this.level = 0
    this.point = 0
  }
}

class UserAdmin {
  constructor() {
    this.users = []
  }
  addUser(user) {
    // 원본을 건들이고 싶지 않다!
    // this.users.push(10) x
    // 원본의 복사본을 수정하자!
    // [...this.users] 0
    this.users = [...this.users, user]
  }
  deleteUser(id) {
    // [].splice() // 원본 건들임
    // [].slice()  // 원본 X
    // array.filter 함수

    // 삭제되어야할 id 를 가지고 있지 않은 유저만 필터링한다.
    this.users = this.users.filter((user) => {
      return user.id !== id
    })
  }
  deleteUserUnder20() {
    this.users = this.users.filter((user) => {
      return user.age < 20 
    })
  }
  findUserLiveInAnyang() {
    this.users = this.users.filter(user => {
      return user.address === "안양"
    })
  }
}

describe('유저 어드민 테스트', () => {
  it('유저 생성 테스트', () => {
    const user = new User({ name: "홍길동", age: 40, address: "안양" })
    expect(user.name).toBe("홍길동")
    expect(user.age).toBe(40)
    expect(user.address).toBe("안양")
  })
  it("유저가 추가되면 유저 배열의 길이가 1 증가한다.", () => {
    const userAdmin = new UserAdmin()
    expect(userAdmin.users.length).toBe(0)
    const user = new User({ name: "홍길동", age: 40, address: "안양" })
    userAdmin.addUser(user)
    expect(userAdmin.users.length).toBe(1)
  })

  it("유저 삭제 테스트", () => {
    const userAdmin = new UserAdmin()
    const user = new User({ name: "홍길동", age: 40, address: "안양" })
    userAdmin.addUser(user)

    // 방금 추가된 요소를 삭제한다.
    userAdmin.deleteUser(user.id)
    expect(userAdmin.users.length).toBe(0)
  })
  it("10, 17, 32, 40 의 유저가 추가되었을 때, 20대 이상을 삭제하면 유저 배열 길이는 2일 것이다.", () => {
    // const userAdmin = new UserAdmin()
    // const user1 = new User({ name:"홍길동1", age: 10, address: "안양" })
    // userAdmin.addUser(user1)
    // const user2 = new User({ name:"홍길동2", age: 17, address: "안양" })
    // userAdmin.addUser(user2)
    // const user3 = new User({ name:"홍길동3", age: 32, address: "안양" })
    // userAdmin.addUser(user3)
    // const user4 = new User({ name:"홍길동4", age: 40, address: "안양" })
    // userAdmin.addUser(user4)
    // userAdmin.deleteUserAge(user1.age)
    // userAdmin.deleteUserAge(user2.age)
    // userAdmin.deleteUserAge(user3.age)
    // userAdmin.deleteUserAge(user4.age)
    // expect(userAdmin.users.length).toBe(2)
    // const userAdmin = new UserAdmin()
    // const user = new User(
    //   { name:"홍길동1", age: 10, address: "안양" },
    //   { name:"홍길동2", age: 17, address: "안양" },
    //   { name:"홍길동3", age: 32, address: "안양" },
    //   { name:"홍길동4", age: 40, address: "안양" }
    // )
    // userAdmin.addUser(user)
    // expect(userAdmin.users.length).toBe(4)
    const userAdmin = new UserAdmin()
    const user1 = new User({ name:"홍길동1", age: 10, address: "안양" })
    userAdmin.addUser(user1)
    const user2 = new User({ name:"홍길동2", age: 17, address: "안양" })
    userAdmin.addUser(user2)
    const user3 = new User({ name:"홍길동3", age: 32, address: "안양" })
    userAdmin.addUser(user3)
    const user4 = new User({ name:"홍길동4", age: 40, address: "안양" })
    userAdmin.addUser(user4)
    userAdmin.deleteUserAge()
    expect(userAdmin.users.length).toBe(2)
  })
  it("추가된 유저 4명 중에서 안양에 사는 유저만 필터링하면 유저 배열의 길이가 1이 된다.", () => {
    const userAdmin = new UserAdmin()
    const user1 = new User({ name:"홍길동1", age: 10, address: "안양" })
    userAdmin.addUser(user1)
    const user2 = new User({ name:"홍길동2", age: 17, address: "광명" })
    userAdmin.addUser(user2)
    const user3 = new User({ name:"홍길동3", age: 32, address: "가산" })
    userAdmin.addUser(user3)
    const user4 = new User({ name:"홍길동4", age: 40, address: "구로" })
    userAdmin.addUser(user4)
    userAdmin.findUseraddress()
    expect(userAdmin.users.length).toBe(1)
  })
  it("유저가 삭제되면 유저 배열의 길이가 1 감소한다.", () => {})
  
  it("유저 수정 테스트", () => {})
})
