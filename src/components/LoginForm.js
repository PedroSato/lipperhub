import React, { Component } from 'react';
import { withRouter } from 'react-router'
import logo from '../assets/images/logo.png'
import './LoginForm.css'
import api from '../lib/api'


class LoginForm extends Component {



    state = {
        email: '',
        password: ''
    }

    handleSubmit = async (e) => {

        e.preventDefault()

        const { email, password } = this.state

        try {

            const user = await api.post('/login', { email, password })
            if (user) { this.props.history.push('/adress') }
        } catch (err) {
            console.log(err.response)

        }





    }

    render() {
        return (

            <div className="login-container">
                <div className="box-container">
                    <img className="lh-logo" src={logo} />
                    <form className="form-login">
                        <label className="form-label" for="user" >Usuário</label>
                        <input className="form-input" type="text" id="user" onChange={e => this.setState({ email: e.target.value })} />
                        <label className="form-label" for="password">Senha</label>
                        <input className="form-input" type="password" id="password" onChange={e => this.setState({ password: e.target.value })} />
                        <div className="content-link">
                            <div className="form-links">
                                <a href="/forgetPassword">Esqueci minha senha</a>
                                <a href="/register">Criar novo usuário</a>
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
LoginForm = withRouter(LoginForm);
export default LoginForm
