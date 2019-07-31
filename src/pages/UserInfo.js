import React, { Component } from 'react';
import Sidebar from '../components/Sidebar'
import UserData from '../components/UserData'
import './UserInfo.css'

export default class UserInfo extends Component {
    render() {
        return (
            <div>
                <div className="parent-data">
                    <Sidebar />
                    <UserData />
                </div>
            </div>
        );
    }
}
