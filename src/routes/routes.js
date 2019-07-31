import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Adress from '../pages/Adress'
import Login from '../pages/Login'
import NewUser from '../pages/NewUser';
import ChangePasswd from '../pages/ChangePasswd';
import EmailSent from '../pages/EmailSent';
import UserInfo from '../pages/UserInfo';

function Routes() {

    return (
        <Switch>
            <Route exact path="/" render={() => (
                <Redirect to="/login" />
            )} />
            <Route path="/adress" component={Adress} />
            <Route path="/User" component={UserInfo} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={NewUser} />
            <Route path="/forgetPassword" component={ChangePasswd} />
            <Route path="/emailConfirmation" component={EmailSent} />
        </Switch>
    )
}

export default Routes;