import React, { Component } from 'react';
import logo from '../assets/images/logo.png'
import api from '../lib/api'

export default class ChangePwdForm extends Component {

    state = {
        email: '',
    }


    render() {
        return (
            <div className="login-container">
                <div className="box-container">
                    <img className="lh-logo" src={logo} />
                    <form className="form-login">
                        <h7>Entre com seu e-mail para trocar<br /> sua senha</h7>
                        <label className="form-label" for="email">E-mail</label>
                        <input className="form-input" type="email" id="email" />

                        <div className="content-link">
                            <div className="form-links">
                                <a>Criar novo usuário</a>
                                <a>Já possuo um usuário</a>
                            </div>
                            <div>
                                <button className="form-button" onClick={this.handleSubmit}>Entrar</button>
                            </div>
                        </div>
                    </form>
                </div >
            </div>
        );
    }
}
