import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserPage from "./pages/UserPage";
import React from "react";
import Home from './pages/index';
import TestPage from "./pages/TestPage";


export default function Routes() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/userpage" component={UserPage}/>
      <Route path="/testpage" component={TestPage}/>
    </Switch>
    </BrowserRouter>
  );
}