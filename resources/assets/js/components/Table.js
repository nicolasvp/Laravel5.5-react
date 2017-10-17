import React, { Component } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ModalComponent from './Modal';

class Table extends Component {
    constructor(props){
        super(props);
        this.state = {
             modal: false,
             champEdit: {
                name: '',
                line: '',
                type: '',
                date: '',
                genre: '',
                photo: ''                
             },

        };
        this.handleEdit = this.handleEdit.bind(this);
        this.cancelModal = this.cancelModal.bind(this);
    }

    handleEdit(event) {
        this.setState({
          modal: !this.state.modal
        });

        const value = event.target.value;
        axios.get('/test/'+value+'/edit',value)
        .then((response) => {
            this.setState({
                champEdit: response.data
            });
            console.log(this.state.champEdit);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    cancelModal(){
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
                                                    <Button color="primary" name="edit" value={ champion.id } onClick={ this.handleEdit.bind(this) }>Editar</Button>
                                                </td>
                                                <td>
                                                    <Button color="danger" name="destroy" value={ champion.id } onClick={ this.props.handleDestroy.bind(this) }>Eliminar</Button>
                                                </td>
                                            </tr>
                                        ) 
                                    }
                                </tbody>
                            </table>
                            <ModalComponent data={ this.state } handleEdit={ this.handleEdit } cancelModal={ this.cancelModal }/>  
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Table;