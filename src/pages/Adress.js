import React, { Component } from 'react';
import Sidebar from '../components/Sidebar'
import AdressTable from '../components/AdressTable'
import './Adress.css'

export default class Adress extends Component {
    render() {
        return (
            <div>
                <div className="parent-adresses">
                    <Sidebar />
                    <AdressTable />
                </div>
            </div>
        );
    }
}
