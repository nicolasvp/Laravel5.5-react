import React, { Component } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ModalComponent from './Modal';

class Table extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal: false,
            newChamp: {
                name: '',
                line: '',
                type: '',
                date: '',
                genre: '',
                photo: ''
            },
            champEdit: {
                name: '',
                line: '',
                type: '',
                date: '',
                genre: '',
                photo: ''                
            }

        };
        this.handleInput = this.handleInput.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDestroy = this.handleDestroy.bind(this);        
        this.handleClick = this.handleClick.bind(this);
        this.cancelModal = this.cancelModal.bind(this);
        this.sendForm = this.sendForm.bind(this);
    }

    sendForm(e){
        e.preventDefault();

        const fileInput = document.querySelector('#photo');

        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }
        
        if(e.target.name === 'store'){

            let formData = new FormData();
            formData.append('photo-upload',fileInput.files[0]);
            formData.append('name',this.state.newChamp.name);
            formData.append('line',this.state.newChamp.line);
            formData.append('type',this.state.newChamp.type);
            formData.append('date',this.state.newChamp.date);
            formData.append('genre',this.state.newChamp.genre);

            axios.post('/test',formData,config)
            .then((response) => {
                this.props.updateChampList(response.data,'add');
                this.cleanModal();
            })
            .catch(function (error) {
                console.log(error.response.data.errors);
            });           
        }

        if(e.target.name === 'update'){
            const value = e.target.value;
            let formDataUpdate = new FormData();

            formDataUpdate.append('id',value);
            formDataUpdate.append('photo-upload',fileInput.files[0]);
            formDataUpdate.append('name',this.state.champEdit.name);
            formDataUpdate.append('line',this.state.champEdit.line_id);
            formDataUpdate.append('type',this.state.champEdit.type_id);
            formDataUpdate.append('date',this.state.champEdit.date);
            formDataUpdate.append('genre',this.state.champEdit.genre);

            axios({
              method: 'post',
              url: 'http://react.app/test/updateChamp/',
              data: formDataUpdate,
              headers: {'Content-Type': 'multipart/form-data'}
            })
            .then((response) => {
                this.props.updateChampList(response.data,'update');
                this.cleanModal();
            })
            .catch(function (error) {
                console.log(error);
            });        
        }

        this.setState({
                modal: !this.state.modal
              });        
    }

    cleanModal(){
        document.querySelector('#name').value = '';
        document.querySelector('#line').value = '';
        document.querySelector('#type').value = '';
        document.querySelector('#date').value = '';
        $("input:radio").attr("checked", false);
        document.querySelector('#remove').click();
    }

    handleInput(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.state.newChamp[[name]] = value;
    }

    handleEdit(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        
        this.state.champEdit[[name]] = value;
        this.setState({
            champEdit: this.state.champEdit
        });
    }

    handleDestroy(event){
        event.preventDefault();
        const value = event.target.value;

        axios.delete('/test/'+value,value)
        .then((response) => {
            const champions = this.props.data.champions.filter(champion =>
                        champion.id !== parseInt(value)
                    );
            this.props.updateChampList(champions,'delete');
        })
        .catch(function (error) {
            console.log(error);
        });
        
    }

    handleClick(event) {
        const name = event.target.name
        const value = event.target.value;

        if(name === 'add'){

        }

        if(name === 'edit'){  

            axios.get('/test/'+value+'/edit')
            .then((response) => {
                this.setState({
                    champEdit: response.data
                });
            })
            .catch(function (error) {
                console.log(error);
            });           
        }

        this.setState({
          modal: !this.state.modal
        });

    }

    cancelModal(){
      this.setState({
        modal: !this.state.modal,
        champEdit: {
                name: '',
                line: '',
                type: '',
                date: '',
                genre: '',
                photo: ''                
             }
      });
    }

    render(){
        return(
            <div>
                <div className="white-box">
                    <h3 className="box-title">Campeones ingresados</h3>
                    <Button className="btn btn-success float-right" color="secondary" name="add" size="lg" onClick={ this.handleClick.bind(this) }>Nuevo</Button>
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
                                                    <Button color="primary" name="edit" value={ champion.id } onClick={ this.handleClick.bind(this) }>Editar</Button>
                                                </td>
                                                <td>
                                                    <Button color="danger" name="destroy" value={ champion.id } onClick={ this.handleDestroy.bind(this) }>Eliminar</Button>
                                                </td>
                                            </tr>
                                        ) 
                                    }
                                </tbody>
                            </table>
                            <ModalComponent 
                                data={ this.state } 
                                handleClick={ this.handleClick } 
                                handleInput={ this.handleInput } 
                                handleEdit={ this.handleEdit }
                                sendForm={ this.sendForm } 
                                cancelModal={ this.cancelModal }
                            />  
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Table;