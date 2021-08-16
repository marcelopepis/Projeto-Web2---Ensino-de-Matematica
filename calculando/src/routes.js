import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserPage from "./pages/UserPage";
import React from "react";
import Home from './pages/index';
import TestPage from "./pages/TestPage";
import MyClasses from "./pages/MyClasses";
import UserResults from "./pages/UserResults";
import PrivateRoute from "./PrivateRoute";


export default function Routes() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}/>
      <PrivateRoute path="/userpage" exact component={UserPage}/>
      <PrivateRoute path="/testpage" exact component={TestPage}/>
      <PrivateRoute path="/myclasses" exact component={MyClasses}/>
      <PrivateRoute path="/userresults" exact component={UserResults}/>
    </Switch>
    </BrowserRouter>
  );
}