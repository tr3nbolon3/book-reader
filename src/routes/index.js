import * as paths from "./paths";
import Home from "../screens/Home";
import Auth from "../screens/Auth";
import { SignIn, SignUp } from "../screens/Auth/components";

export default [
  {
    name: "Home",
    path: paths.home,
    exact: true,
    component: Home
  },
  {
    name: "Auth",
    path: paths.auth,
    exact: true,
    component: Auth
  },
  {
    name: "SignIn",
    path: paths.signin,
    exact: true,
    component: SignIn
  },
  {
    name: "SignUp",
    path: paths.signup,
    exact: true,
    component: SignUp
  }
];
