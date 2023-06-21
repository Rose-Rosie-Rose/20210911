class SinginPage {
  constructor(props) {
    // console.log(props, 'props')
    this.props = props
  }
  // 로그인 성공
  // => home

  componentBindEvent() {
    const emailInputEl = document.getElementById('email')
    const passwordInputEl = document.getElementById('password')
    document.getElementById("btn__submit").addEventListener('click', async () => {
      const email = emailInputEl.value
      const password = passwordInputEl.value

      const response = await fetch('http://localhost:3000/user') // 1번째 작업
      // await fetch() // 2번째 작업
      const user = await response.json()

      console.log('user', user)

      if(user.email === email && user.password === password) {
        alert('로그인 성공')

        localStorage.setItem('user', JSON.stringify(user))

        // home page 로 이동
        this.props.router.push('/')
      }
    })
  }

  render () {
    return `
      <div>
        <input id="email" placeholder="email" />
        <input id="password" placeholder="password" />
        <button id="btn__submit">로그인</button>
      </div>
    `
  }
}

export default SinginPage