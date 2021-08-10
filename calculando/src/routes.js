import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserPage from "./pages/UserPage";
import React from "react";
import Home from './pages/index';
import TestPage from "./pages/TestPage";
import MyClasses from "./pages/MyClasses";
import UserResults from "./pages/UserResults";


export default function Routes() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/userpage" exact component={UserPage}/>
      <Route path="/testpage" exact component={TestPage}/>
      <Route path="/myclasses" exact component={MyClasses}/>
      <Route path="/userresults" exact component={UserResults}/>
    </Switch>
    </BrowserRouter>
  );
}