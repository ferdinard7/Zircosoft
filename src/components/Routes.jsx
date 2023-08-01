import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

function Routes() {
    return (
   <div>
    <Switch>
        <Route path="/" exact>
            <Home />
        </Route>
        <Route path="/register" exact >
            <Register />
        </Route>
        <Route path="/login"  exact>
            <Login />
        </Route>
    </Switch>
   </div>
    )
}


export default Routes;