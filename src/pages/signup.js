class SingupPage {
  constructor() {

  }
  render () {
    const reset = document.getElementById('btn__reset')
    return `
      <div>
        <form>
          <table>
            <tr>
              <th>아이디</th>
              <td>
                <input type="text" name="id" placeholder="아이디">
              </td>
            </tr>
            <tr>
              <th>비밀번호</th>
              <td>
                <input type="password" name="pw" placeholder="비밀번호">
              </td>
            </tr>
            <tr>
              <th>비밀번호 확인</th>
              <td>
                <input type="password" name="confirmpw" placeholder="비밀번호확인">
              </td>
            </tr>
            <tr>
              <th>이름</th>
              <td>
                <input type="text" name="name" placeholder="이름">
              </td>
            </tr>
            <tr>
              <th>전화번호</th>
              <td>
                <input type="text" name="phone" placeholder="전화번호">
              </td>
            </tr>
          </table>
          <div>
            <input type="submit" id="btn__join" value="가입" title="가입하기">
            <input type="submit" id="btn__reset" value="리셋" title="초기화하기" >
          </div>
        </form>
      </div>
    `
  }
}

export default SingupPage