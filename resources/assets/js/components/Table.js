import React, { Component } from 'react';
import axios from 'axios';
import Modal from './Modal.js';

class Table extends Component {

    render(){
        return(
            <div>
                <div className="white-box">
                    <h3 className="box-title">Campeones ingresados</h3>
                    <div className="table-responsive">
                        <div>
                            <table className="table color-bordered-table info-bordered-table">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nombre</th>
                                    <th>Tipo</th>
                                    <th>Linea</th>
                                    <th>Genero</th>
                                    <th>Fecha</th>
                                    <th>Foto</th>
                                    <th>Editar</th>
                                    <th>Eliminar</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.props.data.champions.map((champion,index) =>
                                            <tr key={ champion.id }>
                                                <td>{ index + 1 }</td>
                                                <td>{ champion.name }</td>
                                                <td>{ champion.type.name }</td>
                                                <td>{ champion.line.name }</td>
                                                <td>{ champion.genre }</td>
                                                <td>{ champion.date.split(" ")[0] }</td>
                                                <td><img alt={ champion.name } src={ 'images/' + champion.photo } width='50' height='50'></img></td>
                                                <td>
                                                    <button type="button" name="edit" className="btn btn-info btn-sm" data-animation="false" data-toggle="modal" data-target="#myModal">
                                                      Editar
                                                    </button>                                                    
                                                </td>
                                                <td>
                                                    <button type="button" name="destroy" className="btn btn-danger btn-sm" value={ champion.id } onClick={this.props.handleDestroy.bind(this)}>
                                                      Eliminar
                                                    </button>
                                                </td>
                                            </tr>
                                        ) 
                                    }
                                </tbody>
                            </table>
                            <Modal />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Table;