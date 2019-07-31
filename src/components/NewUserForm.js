import React, { Component } from 'react';
import logo from '../assets/images/logo.png'
import api from '../lib/api'
import './NewUserForm.css'
import { withRouter } from 'react-router'

class NewUserForm extends Component {

    state = {
        email: '',
        password: '',
        repPassword: ''
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const { email, password, repPassword } = this.state
        try {
            if (password === repPassword) { await api.post('/register', { email, password }) }
            this.props.history.push('/login')
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
                        <input className="form-input" type="text" id="user" onChange={e => this.setState({ email: e.target.value })} />
                        <label className="form-label" for="password">Senha</label>
                        <input className="form-input" type="password" id="password" onChange={e => this.setState({ password: e.target.value })} />
                        <label className="form-label" for="rep-password">Repita a senha</label>
                        <input className="form-input" type="password" id="rep-password" onChange={e => this.setState({ repPassword: e.target.value })} />
                        <div className="content-link">
                            <div className="form-links">
                                <a href="/forgetPassword">Esqueci minha senha</a>
                                <a href="/login">Já possuo um usuário</a>
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
NewUserForm = withRouter(NewUserForm);
export default NewUserForm
