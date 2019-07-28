import React, { Component } from 'react';
import trash from '../assets/icons/trash.svg'
import edit from '../assets/icons/edit.svg'
import './AdressTable.css'
import Modal from 'react-awesome-modal'
import api from '../lib/api'
export default class components extends Component {
    state = {
        visible: false,
        adresses: []
    }

    async componentDidMount() {
        const alou = await api.get('/adresses')
        console.log(alou)
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
                                {/* {
                                    this.state.adresses.map((adress) =>
                                        <tr>
                                            <td> {adress.zip_code} </td>
                                            <td> {adress.street} </td>
                                            <td> {adress.number} </td>
                                            <td> {adress.complement} </td>
                                            <td> {adress.state} </td>
                                            <td> {adress.city} </td>
                                            <td> <img className="action" src={edit} alt="" /> <img className="action" src={trash} alt="" /> </td>
                                        </tr>
                                    )
                                } */}
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
                                        <input className="form-input" type="text" id="zip" />
                                    </div>
                                    <div>
                                        <button className="zip-btn">Buscar</button>
                                    </div>
                                </div>


                                <div className="num-comp">

                                    <div className="number-input">
                                        <label className="form-label" for="number">Nº</label>
                                        <input className="form-input-number" type="text" id="number" />
                                    </div>

                                    <div className="comp-input">
                                        <label className="form-label" for="complement">Complemento</label>
                                        <input className="form-input" type="text" id="complement" />
                                    </div>


                                </div>

                            </div>
                            <div className="modal-result">
                                <div>
                                    <h7>Resultado:</h7>
                                </div>
                                <div className="api-result">
                                    <span>Bairro:Cidade das Monçoes</span><br />
                                    <span>Cidade:São Paulo</span><br />
                                    <span>Logradouro:Rua doutor geraldo campos moreira</span><br />
                                    <span>CEP:12345-678</span><br />
                                    <span>Estado:SP</span>
                                </div>
                                <div className="modal-actions">
                                    <button className="cancel-btn" onClick={() => this.closeModal()}>Cancelar</button><button className="save-btn">Salvar</button>
                                </div>
                            </div>
                        </div>



                    </div>
                </Modal>

            </div>
        );
    }
}
