class Router {
  /*
  app = 어디에 그려질지 ?
  routes = 어떤 경로로 왔을 떄 어떤 컴포넌트가 그려질지?
  */
  constructor({ app, routes }) {
    this.app = app
    this.routes = routes

    // 최초에 한번 그린다.
    this.render()
    this.componentBindEvent()
  }

  componentBindEvent() {
    window.onhashchange = () =>{
      this.render()
    }
  }

  // push('/home') => #home 페이지로 이동
  push(path) {
    // 페이지 이동시키는 함수
    window.location.hash = path.replace('/', '#')
  }

  render() {
    // 정의: /home => 실제 해쉬값: #home
    // # 을 /로 변환해주어야한다.
    const path = window.location.hash.replace('#', '/') || '/'

    const props = {
      router: { // router라는 이름으로 묶어주는 것 의미는 없음
        push: this.push
      },
      user: JSON.parse(localStorage.getItem('user') || 'null')
    }
    
    // const Component = this.routes[path]  // page
    // this.routes[path] = new Conponent(props)
    const Component = this.routes[path] ? new this.routes[path](props) : null

    if(!Component){
      alert('정의되지 않은 페이지입니다.')
      window.history.back()
    }
    
    // console.log('path', path) // #signin -> /signin
      
    // render 전에는 이벤트를 걸 수 없다.
    // => dom 을 잡아 올수가 없어서
    this.app.innerHTML = Component.render()
    // 이벤트는 render 후에 걸 수 있다.
    if(Component.componentBindEvent) {
      Component.componentBindEvent()
    }
  }
}

export default Router