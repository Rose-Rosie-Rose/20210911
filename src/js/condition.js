const name = ''

if (name) {
} // name = false

// falsy = 거짓으로 판단되는 값
// 1. "" 빈 문자열
// 2. 0
// 3. undefined
// 4. null
// 5. false
// 6. Symbol (ES6)

if (!name) {
  // false -> true
  window.alert('이름을 입력해주세요')
}

if (name === undefined) {
}
if (name === null) {
}

// 위의 코드를 요런식으로 접근이 가능
if (!name) {
}

// 레벨 0 회원 -> 일반회원
// 1 회원 -> 실버회원

const userLevel = 0
let level = undefined

if (userLevel === 0) {
  level = '일반회원'
} else if (userLevel === 1) {
  level = '실버회원'
}

// let X -> const
// A 아니면 B -> 삼항연산자
const levelText = userLevel === 0 ? '일반회원' : '실버회원'
