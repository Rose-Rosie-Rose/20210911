class SignInPage {
  constructor() {
      this.user = null

    // 클래스가 생성되었을 때 처음 실행되는 함수
    this.componentBindEvent()
  }

  // 이벤트를 걸어주는 함수
  componentBindEvent() {
    document.getElementById('btn_submit').addEventListener('click', e => {
      // componentBindEvent() 는 이벤트를 걸어주는 역할만 하고
      // 관심사를 가진 함수를 분리한다.
      this.handleSingInUser()
      // this.user = null
    })
  }

  handleSingInUser() {
    // GET, POST, PUT, DELETE
    // GET = 서버로부터 데이터를 받을 때
    // POST = 클라이언트 정보를 서보로 보낼 때
    // PUST = 클라이언트 정보를 서버로 보낼 때(업데이트 용도)
    // DELETE = 클라이언트 정보를 서버로 보낼 때(삭제 용도)
    fetch('http://localhost:3000/user').then((response) => {  // status: 200    성공
      if(response.ok) {
        return response.json()
      }
    }).then((user) => {
      const email = document.getElementById('email').value
      const password = document.getElementById('password').value

      // 1. 이메일이나 비밀번호를 입력하지 않은 경우
      // 2. 이메일 또는 비밀번호의 정보가 다른 경우
      // 3. 로그인이 성공했을 때 화면에 정보 노출
      // => render 함수를 이용 

      if(user.email === email && user.password === password){
        alert(`${user.email}님 환영합니다.`)
      } else if (email === "") {
        alert("이메일을 입력하세요.")
      } else if (password === "") {
        alert("비밀번호를 입력하세요.")
      } else if (user.email !== email && user.password !== password) {
        alert("이메일이나 비밀번호를 입력해주세요")
      }
      this.user = user
      this.render()
    })
  }

  // 요소가 그려진 후 동작하는 함수
  componentDidMount() {

  }

  // 화면에 보이는 요소를 그리는 함수
  render() {
    if (!this.user) {
      return <div>현재 로그인된 유저가 없습니다.</div>
    }
    return <div>로그인된 이메일: {this.user.email}</div>
  }
}

new SignInPage()