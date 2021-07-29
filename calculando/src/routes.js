import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserPage from "./pages/UserPage";
import React from "react";
import Home from './pages/index';


export default function Routes() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/userpage" component={UserPage}/>
    </Switch>
    </BrowserRouter>
  );
}