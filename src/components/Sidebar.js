import React, { Component, Fragment } from 'react';
import logo from '../assets/images/logo.png'
import './Sidebar.css'
import profile from '../assets/icons/default-profile.png'

export default class Sidebar extends Component {
    render() {
        return (

            <div className="sidebar-nav">
                <img src={logo} />
                <div className="user-data">
                    <img className="profile-picture" src={profile} />
                    <div className="user-details">
                        <h3>Email do Usuário</h3>
                        <h5>Administrador</h5>
                    </div>
                </div>
                <div className="sidebar-options">

                    <span className="option">Endereços</span>
                    <span className="option">Usuário</span>

                </div>
            </div>

        );
    }
}
