import React, { Component } from 'react';
import profileDefault from '../assets/icons/default-profile.png'
import './UserData.css'
import { withRouter } from 'react-router'
import api from '../lib/api'


class UserData extends Component {
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





    handleSave = async (e) => {
        e.preventDefault()
        await api.put('/update', this.state)
        console.log(this.state)

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

    handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData()

        data.append('image', this.state.imageFile)
        data.append('name', this.state.name)
        data.append('gender', this.state.gender)
        data.append('birthdate', this.state.birthdate)
        data.append('email', this.state.email)
        data.append('password', this.state.password)
        data.append('adresses', this.state.adresses)


        await api.put('/update', data)

        console.log(this.state)
    }

    handleImageChange = async (e) => {

        this.setState({ imageFile: e.target.files[0] })
    }
    handleLogout = async (e) => {
        e.preventDefault()
        await api.get('/logout')
        this.props.history.push('/')
    }
    checkPicture = () => {
        return this.state.image ? `http://localhost:3333/files/${this.state.image}` : profileDefault
    }






    render() {
        return (
            <div className="user-container">

                <div className="user-info">
                    <div className="user-content">
                        <div className="picture-details">
                            <img className="profile-picture-info" src={this.checkPicture()} />
                            <label for="files" class="file-btn">Alterar a Foto</label>
                            <input id="files" style={{ visibility: 'hidden' }} type="file" onChange={this.handleImageChange} />
                        </div>

                        <div className="user-data">
                            <div class="block">
                                <label className="form-user">E-mail</label>
                                <span className="email-data" >{this.state.email}</span>
                            </div>
                            <div class="block">
                                <label className="form-user">Nome</label>
                                <input className="input-user" type="text" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
                            </div>
                            <div class="block">
                                <label className="form-user">Sexo</label>
                                <input type="text" className="input-user" value={this.state.gender} onChange={e => this.setState({ gender: e.target.value })} />
                            </div>
                            <div class="block">
                                <label className="form-user">Nascimento</label>
                                <input type="text" className="input-user" value={this.state.birthdate} onChange={e => this.setState({ birthdate: e.target.value })} />
                            </div>

                        </div>
                    </div>

                    <div className="action-content">
                        <div>
                            <button className="action-btn btn-logout" onClick={(e) => this.handleLogout(e)}>Logout</button>
                        </div>
                        <div>
                            <button className="action-btn btn-cancel">Cancelar</button>
                            <button className="action-btn btn-save" onClick={(e) => this.handleSubmit(e)}> Salvar</button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
UserData = withRouter(UserData);
export default UserData