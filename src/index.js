import HomePage from "./pages/home";
import MyPage from "./pages/my";
import SigninPage from "./pages/signin";
import SignupPage from "./pages/signup";

import Router from "./router";

const ROUTES = {
  '/': HomePage,
  '/my': MyPage,
  '/signin': SigninPage,
  '/signup': SignupPage
}

class App {
  constructor() {
    new Router({
      app: document.getElementById('app'),
      routes: ROUTES
    })
  }
}

new App()