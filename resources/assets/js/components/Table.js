import React, { Component } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class Table extends Component {
    constructor(props){
        super(props);
        this.state = {
             modal: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
          modal: !this.state.modal
        });
    }

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
                                                    <Button color="primary" onClick={this.toggle}>Editar</Button>
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
                                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                <ModalHeader toggle={this.toggle}>Editar el campeón: </ModalHeader>
                                <ModalBody>
                                    ACA DEBEN IR LOS CAMPOS PARA EDITAR
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={this.toggle}>Aceptar</Button>{' '}
                                    <Button color="secondary" onClick={this.toggle}>Cancelar</Button>
                                </ModalFooter>
                                </Modal>   
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Table;