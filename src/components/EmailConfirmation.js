import React, { Component } from 'react';
import { withRouter } from 'react-router'
import logo from '../assets/images/logo.png'
import './LoginForm.css'



class EmailConfirmation extends Component {
    handleSubmit = (e) => {
        e.preventDefault()

        this.props.history.push('/login')
    }
    render() {
        return (

            <div className="login-container">
                <div className="box-container">
                    <img className="lh-logo" src={logo} />
                    <form className="form-login">
                        <p>Um e-mail foi enviado para realizar<br />a troca de senha</p>
                        <div className="content-link">
                            <div className="form-links">
                                <a href="/register">Criar novo usuário</a>
                            </div>
                            <div>
                                <button className="form-button" onClick={(e) => this.handleSubmit(e)}>Voltar</button>
                            </div>
                        </div>
                    </form>
                </div >
            </div >
        );
    }
}
EmailConfirmation = withRouter(EmailConfirmation);
export default EmailConfirmation
