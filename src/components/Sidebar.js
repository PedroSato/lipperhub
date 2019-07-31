import React, { Component, Fragment } from 'react';
import logo from '../assets/images/logo.png'
import './Sidebar.css'
import profileDefault from '../assets/icons/default-profile.png'
import { withRouter } from 'react-router'
import api from '../lib/api'


class Sidebar extends Component {
    state = {
        email: '',
        password: '',
        name: '',
        gender: '',
        birthdate: null,
        imageFile: null,

        adresses: [{
            zip_code: null,
            street: '',
            number: null,
            comp: '',
            state: '',
            city: ''
        }]
    }
    async componentDidMount() {
        try {
            const user = await api.get('/adresses')

            this.setState(user.data)
            console.log(this.state)
        } catch (err) {
            console.log(err)
        }



    }

    handleAdress = () => {
        return this.props.history.push('/adress')
    }
    handleUser = () => {
        return this.props.history.push('/user')
    }
    checkPicture = () => {
        return this.state.image ? `http://localhost:3333/files/${this.state.image}` : profileDefault
    }

    render() {
        return (


            < div className="sidebar-nav" >
                <img className="logo-img" src={logo} />
                <div className="user-information">
                    <img className="profile-picture" src={this.checkPicture()} />
                    <div className="user-details">
                        <h3>{this.state.email}</h3>
                        <h5>Administrador</h5>
                    </div>
                </div>
                <div className="sidebar-options">

                    <span className="option" onClick={(e) => this.handleAdress(e)} >Endereços</span>
                    <span className="option" onClick={(e) => this.handleUser(e)} >Usuário</span>

                </div>
            </div >

        );
    }
}
Sidebar = withRouter(Sidebar);
export default Sidebar