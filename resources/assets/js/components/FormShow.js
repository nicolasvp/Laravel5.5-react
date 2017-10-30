import React, { Component } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class FormShow extends Component {

   constructor(props){
        super(props);
        this.state = {
            date: ''
        };
   }

  // Antes que se monte el componente convierte el formato de la fecha 
  componentWillMount(){
    const only_date = this.props.data.champEdit.date.split(" ")[0];
    const separeted_date = only_date.split("-");
    const formated_date = separeted_date[2]+"/"+separeted_date[1]+"/"+separeted_date[0];  
    this.setState({
        date: formated_date
    });
  }

  render(){
  return(
    <div>
        <div className="white-box">
            <div className="row">
                <div className="col-md-4 col-sm-4 text-center">
                    <img src={ 'images/' + this.props.data.champEdit.photo } alt={ this.props.data.champEdit.name } className="img-circle img-responsive"></img>
                </div>
                <div className="col-md-8 col-sm-8">
                    <h3 className="box-title m-b-0"></h3>
                    <small></small>
                    <p>
                        <strong>Nombre: </strong>{ this.props.data.champEdit.name }
                        <br/>
                        <strong>Tipo: </strong>{ this.props.data.champEdit.type.name }
                        <br />
                        <strong>Linea: </strong>{ this.props.data.champEdit.line.name }
                        <br />
                        <strong>Género: </strong>{ this.props.data.champEdit.genre }
                        <br />
                        <strong>Fecha de creación: </strong>{ this.state.date }
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
  }
}
export default FormShow;