import React from 'react';
import {  Route, Redirect } from "react-router-dom";


export default function AdminPublicRoute({children, adminAuth, ...rest}) {
    return (
        <Route {...rest} render={()=> adminAuth? <Redirect to='/Admin'/> : children }/>

    )
}
