import React, { Component } from 'react';
import logo from '../assets/images/logo.png'
import api from '../lib/api'
import './NewUserForm.css'

export default class LoginForm extends Component {

    state = {
        email: '',
        password: '',
        repPassword: ''
    }

    handleSubmit = async (e) => {
        const { email, password } = this.state
        try {
            await api.post('/register', { email, password })
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div className="new-container">
                <div className="box-container">
                    <img className="lh-logo" src={logo} />
                    <form className="form-new">
                        <label className="form-label" for="user">Usuário</label>
                        <input className="form-input" type="text" id="user" />
                        <label className="form-label" for="password">Senha</label>
                        <input className="form-input" type="password" id="password" />
                        <label className="form-label" for="rep-password">Repita a senha</label>
                        <input className="form-input" type="password" id="rep-password" />
                        <div className="content-link">
                            <div className="form-links">
                                <a>Esqueci minha senha</a>
                                <a>Já possuo um usuário</a>
                            </div>
                            <div>
                                <button className="form-button" onClick={this.handleSubmit}>Criar</button>
                            </div>
                        </div>
                    </form>
                </div >
            </div>
        );
    }
}
