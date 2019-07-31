import React, { Component, Fragment } from 'react';

import '../components/EmailConfirmation'

import EmailConfirmation from '../components/EmailConfirmation';
export default class EmailSent extends Component {

    render() {

        return (
            <Fragment>
                <EmailConfirmation />
            </Fragment>
        );
    }
}
