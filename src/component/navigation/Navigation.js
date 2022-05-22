import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "../commonComponent/navigationBar/NavigationBar";
import Login from "../modules/auth/login/Login";
import SignUp from "../modules/auth/signUp/SignUp";
import Home from "../modules/home/Home";
import Footer from "../commonComponent/footer/Footer";
import AdminNavigation from "../modules/Admin/adminNavigation/AdminNavigation";
import createBrowserHistory from "history/createBrowserHistory";
import UserNavigation from "../modules/user/userNavigation/UserNavigation";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import AdminPrivateRoute from "./AdminPrivateRoute";
import AdminPublicRoute from "./AdminPublicRoute";
import Verify from "../../Verify";
import AdminLogin from '../modules/Admin/adminLogin/AdminLogin'
import AdminSignup from "../modules/Admin/adminLogin/AdminSignup";

export default function Navigation() {
  const history = createBrowserHistory();
  const authState = useSelector((state) => state.AuthReducer.isUserLoggedIn);
  const adminAuthState = useSelector((state) => state.AdminLoginReducer.isAdminLoggedIn);
 
  
  const userEmail = useSelector((state) => state.AuthReducer.user?.emailVerified);
  const AdminEmail = useSelector((state) => state.AdminLoginReducer.Admin?.emailVerified);

  return (
    <Router>
      
      <Switch>
        <Route exact path="/">
            
          <Home />
          <Footer />
        </Route>

        <PublicRoute path="/Login" auth={authState}>
          <Login />
        </PublicRoute>

        <PrivateRoute path="/User" auth={authState}>
          {!userEmail ? <Verify /> : <UserNavigation />}
          {/* <Footer /> */}
        </PrivateRoute>

        <Route path="/SignUp">
          <SignUp />
        </Route>

        <Route path="/Admin/AdminSignup">
          <AdminSignup />
        </Route>



        <AdminPublicRoute path="/AdminLogin" adminAuth={adminAuthState}>
          <AdminLogin />
        </AdminPublicRoute>


        <AdminPrivateRoute path="/Admin"  adminAuth={adminAuthState}>
        {!AdminEmail ? <Verify /> :  <AdminNavigation />}
        
          <Footer />
          
        </AdminPrivateRoute>
      
      </Switch>

      
    </Router>
  );
}
