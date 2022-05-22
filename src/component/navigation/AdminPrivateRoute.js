import React from 'react';
import {  Route, Redirect } from "react-router-dom";


export default function AdminPrivateRoute({ children, adminAuth, ...rest}) {
    return (
        
        <Route {...rest} render={()=> adminAuth? children : <Redirect to='/AdminLogin'/> }/>
    )
}
