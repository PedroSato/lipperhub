import React, { Component } from 'react';
import trash from '../assets/icons/trash.svg'
import edit from '../assets/icons/edit.svg'
import './AdressTable.css'
import Modal from 'react-awesome-modal'
import api from '../lib/api'
import apiCep from '../lib/apiCep'
export default class components extends Component {
    state = {
        userdata: {

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

        },
        newAdress: {
            zip_code: null,
            street: '',
            number: null,
            comp: '',
            state: '',
            city: ''
        },
        endereco: {},
        cep: '',
        number: '',
        comp: ''
    }

    async componentDidMount() {
        try {
            const user = await api.get('/adresses')

            await this.setState({ userdata: user.data })
            console.log(this.state, "userdata")
        } catch (err) {
            console.log(err)
        }



    }
    handleSubmitCep = async (e) => {

        e.preventDefault()

        try {
            const endereco = await apiCep.get(`/${this.state.cep}/json`)

            this.setState({ endereco: endereco.data })
            const { logradouro, cep, uf, localidade, bairro } = this.state.endereco
            const newAdress = {
                zip_code: cep,
                street: logradouro,
                city: localidade,
                state: uf

            }
            this.setState({ newAdress: newAdress })
            console.log(this.state)

        } catch (err) {
            console.log(err.response)

        }


    }

    handleSubmit = async (e) => {

        e.preventDefault()

        try {
            this.state.newAdress.number = this.state.number
            this.state.newAdress.comp = this.state.comp
            const stateDummy = this.state.userdata            
            stateDummy.adresses.push(this.state.newAdress)
            this.setState(stateDummy)

            console.log("ISSO IRIA PRA API", this.state.userdata)

            await api.put('/update', this.state.userdata)
            this.setState(await api.get('/adresses'))
        } catch (err) {
            console.log(err)

        }


    }



    openModal() {
        this.setState({
            visible: true
        });
    }

    closeModal() {
        this.setState({
            visible: false
        });
    }

    render() {
        return (
            <div className="table-window">
                <div className="table-main">
                    <div className="table-title">
                        <h1>Endereços</h1>
                    </div>
                    <div className="table-filter">

                        <form className="form-filter">
                            <div className="filter-div">
                                <label for="filter">Filtro</label>
                                <input className="form-input-filter" type="text" id="filter" />
                            </div>
                            <div className="state-div">
                                <label for="state">Estado</label>
                                <select className="form-input-state" id="state" name="state">
                                    <option ></option>
                                    <option value="AC">Acre</option>
                                    <option value="AL">Alagoas</option>
                                    <option value="AP">Amapá</option>
                                    <option value="AM">Amazonas</option>
                                    <option value="BA">Bahia</option>
                                    <option value="CE">Ceará</option>
                                    <option value="DF">Distrito Federal</option>
                                    <option value="ES">Espírito Santo</option>
                                    <option value="GO">Goiás</option>
                                    <option value="MA">Maranhão</option>
                                    <option value="MT">Mato Grosso</option>
                                    <option value="MS">Mato Grosso do Sul</option>
                                    <option value="MG">Minas Gerais</option>
                                    <option value="PA">Pará</option>
                                    <option value="PB">Paraíba</option>
                                    <option value="PR">Paraná</option>
                                    <option value="PE">Pernambuco</option>
                                    <option value="PI">Piauí</option>
                                    <option value="RJ">Rio de Janeiro</option>
                                    <option value="RN">Rio Grande do Norte</option>
                                    <option value="RS">Rio Grande do Sul</option>
                                    <option value="RO">Rondônia</option>
                                    <option value="RR">Roraima</option>
                                    <option value="SC">Santa Catarina</option>
                                    <option value="SP">São Paulo</option>
                                    <option value="SE">Sergipe</option>
                                    <option value="TO">Tocantins</option>
                                </select>
                            </div>
                            <div className="city-div">
                                <label for="city">Cidade</label>
                                <input className="form-input-city" type="text" id="city" />
                            </div>
                            <button className="filter-btn">Filtrar</button>

                        </form>
                        <div className="add-btn-div">
                            <input className="add-btn" type="button" value="Adicionar" onClick={() => this.openModal()} />
                        </div>

                    </div>
                    <div className="table-adress">
                        <table>
                            <thead>
                                <tr>
                                    <th>CEP</th>
                                    <th>Logradouro</th>
                                    <th>Nº</th>
                                    <th>Complemento</th>
                                    <th>Estado</th>
                                    <th>Cidade</th>
                                    <th>Ação</th>
                                </tr>
                            </thead>
                            <tbody>

                                {


                                    this.state.userdata.adresses.map((adress) =>
                                        <tr>
                                            <td> {adress.zip_code} </td>
                                            <td> {adress.street} </td>
                                            <td> {adress.number ? adress.number : '-'} </td>
                                            <td> {adress.comp ? adress.comp : '-'} </td>
                                            <td> {adress.state} </td>
                                            <td> {adress.city} </td>
                                            <td> <img className="action" src={edit} alt="" /> <img className="action" src={trash} alt="" /> </td>
                                        </tr>
                                    )
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
                <Modal
                    visible={this.state.visible}
                    width="700"
                    height="250"
                    effect="fadeInUp"

                >
                    <div className="modal-new">
                        <div className="modal-title">
                            <h7>Novo Endereço</h7>
                        </div>
                        <div className="modal-content">
                            <div className="adress-form">

                                <div className="zip-content">
                                    <div className="zip-input">
                                        <label className="form-label" for="zip">CEP</label>
                                        <input className="form-input" type="text" id="zip" onChange={e => this.setState({ cep: e.target.value })} />
                                    </div>
                                    <div>
                                        <button className="zip-btn" onClick={(e) => this.handleSubmitCep(e)} > Buscar</button>
                                    </div>
                                </div>


                                <div className="num-comp">

                                    <div className="number-input">
                                        <label className="form-label" for="number">Nº</label>
                                        <input className="form-input-number" type="text" id="number" onChange={e => this.setState({ number: e.target.value })} />
                                    </div>

                                    <div className="comp-input">
                                        <label className="form-label" for="complement">Complemento</label>
                                        <input className="form-input" type="text" id="complement" onChange={e => this.setState({ comp: e.target.value })} />
                                    </div>


                                </div>

                            </div>
                            <div className="modal-result">
                                <div>
                                    <h7>Resultado:</h7>
                                </div>
                                <div className="api-result">

                                    <span>Bairro:{this.state.endereco.bairro}</span><br />
                                    <span>Cidade:{this.state.endereco.localidade}</span><br />
                                    <span>Logradouro:{this.state.endereco.logradouro}</span><br />
                                    <span>CEP:{this.state.endereco.cep}</span><br />
                                    <span>Estado:{this.state.endereco.uf}</span>
                                </div>
                                <div className="modal-actions">
                                    <button className="cancel-btn" onClick={() => this.closeModal()}>Cancelar</button>
                                    <button className="save-btn" onClick={(e) => this.handleSubmit(e)}>Salvar</button>
                                </div>
                            </div>
                        </div>



                    </div>
                </Modal>

            </div>
        );
    }
}
