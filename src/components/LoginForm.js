import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import './LoginForm.css'
import api from '../lib/api'
export default class LoginForm extends Component {

    state = {
        email: '',
        password: ''
    }

    handleSubmit = async (e) => {

        e.preventDefault()

        const { email, password } = this.state

        try {

            var user = await api.post('/login', { email, password })

        } catch (err) {
            console.log(err)
        }
        if (user) {
            const redirect = () =>{ window.location.href = '/adress' }
            await redirect()
        }




    }

    render() {
        return (

            <div className="login-container">
                <div className="box-container">
                    <img className="lh-logo" src={logo} />
                    <form className="form-login">
                        <label className="form-label" for="user">Usuário</label>
                        <input className="form-input" type="text" id="user" onChange={e => this.setState({ email: e.target.value })} />
                        <label className="form-label" for="password">Senha</label>
                        <input className="form-input" type="password" id="password" onChange={e => this.setState({ password: e.target.value })} />
                        <div className="content-link">
                            <div className="form-links">
                                <a>Esqueci minha senha</a>
                                <a>Criar novo usuário</a>
                            </div>
                            <div>
                                <button className="form-button" onClick={(e) => this.handleSubmit(e)}>Entrar</button>
                            </div>
                        </div>
                    </form>
                </div >
            </div>
        );
    }
}
