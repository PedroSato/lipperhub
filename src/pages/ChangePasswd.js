import React, { Component, Fragment } from 'react';

import '../components/ChangePwdForm'

import ChangePwdForm from '../components/ChangePwdForm';
export default class Login extends Component {

    render() {

        return (
            <Fragment>
                <ChangePwdForm />
            </Fragment>
        );
    }
}
