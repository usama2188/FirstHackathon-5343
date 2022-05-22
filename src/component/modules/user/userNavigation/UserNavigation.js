import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import User from '../User'
import UserNavigationBar from "../userNavigationBar/UserNavigationBar";

import createBrowserHistory from "history/createBrowserHistory";
import ChangePassword from "../modules/ChangePassword";

import Profile from "../modules/Profile";
import Restaurant from "../modules/Restaurant";

export default function UserNavigation() {
  const history = createBrowserHistory();

  return (
    <Router>
      <UserNavigationBar/>
      <Switch>    
        <Route exact path="/User/">
          <User />
        </Route>

        <Route exact path="/User/ChangePassword">
          <ChangePassword />
        </Route>AddCourse
       
        <Route exact path="/User/Profile">
          <Profile />
        </Route>

        <Route exact path={`/:RestaurantName/:id`}>
          <Restaurant />
        </Route>
        

       
        {/* <Route exact path="/Admin/AddPic">
          <AddPic />
        </Route> */}
      </Switch>
    </Router>
  );
}
