import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/home/Home";
import RegisterPage from "../pages/auth/register/Register";
import LoginPage from "../pages/auth/login/Login";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/register" exact>
        <RegisterPage />
      </Route>
      <Route path="/login" exact>
        <LoginPage />
      </Route>
    </Switch>
  );
};
export default Routes;
