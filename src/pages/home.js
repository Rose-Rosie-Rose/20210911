class HomePage {
  constructor(props) {
    console.log('props', props)
    this.props = props
  }
  render () {
    const isLogined = this.props.user != null

    console.log('isLogined', isLogined)
    
    return `
      <div>
        ${isLogined ? `<button>로그아웃</button>` : `<button>로그인</button>`}
      </div>
    `
  }
}

export default HomePage