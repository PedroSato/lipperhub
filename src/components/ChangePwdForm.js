import React, { Component } from 'react';
import logo from '../assets/images/logo.png'
import { withRouter } from 'react-router'

class ChangePwdForm extends Component {
  
    handleSubmit = (e)=>{
        e.preventDefault()

        this.props.history.push('/emailConfirmation')
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
                                <a href="/register">Criar novo usuário</a>
                                <a href="/login">Já possuo um usuário</a>
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
ChangePwdForm = withRouter(ChangePwdForm);
export default ChangePwdForm
