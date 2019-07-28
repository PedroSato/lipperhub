import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Adress from '../pages/Adress'
import Login from '../pages/Login'
import NewUser from '../pages/NewUser';
import ChangePasswd from '../pages/ChangePasswd';

function Routes() {

    return (
        <Switch>
            <Route path="/adress" component={Adress} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={NewUser} />
            <Route path="/forgetPassword" component={ChangePasswd} />
        </Switch>
    )
}

export default Routes;