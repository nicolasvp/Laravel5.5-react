import React, { Component } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class FormEdit extends Component {

   constructor(props){
        super(props);
        this.state = {
            date: ''
        };
   }

  // Antes que se monte el componente convierte el formato de la fecha 
  componentWillMount(){
    const only_date = this.props.data.champEdit.date.split(" ")[0];
    const date_splited = only_date.split("-");
    const date_formated = date_splited[2]+"/"+date_splited[1]+"/"+date_splited[0];
    this.setState({
        date: date_formated
    });
  }

  render(){
  return(
    <div>
        <form id="form-champ" encType="multipart/form-data">
         <div className="form-group">
            <label htmlFor="exampleInputuname">Nombre del campeón</label>
            <div className="input-group">
               <div className="input-group-addon"><i className="ti-user"></i></div>
                <input ref="name" type="text" className="form-control" id="name" name="name" defaultValue={ this.props.data.champEdit.name } onChange={ this.props.handleEdit.bind(this) } placeholder="Nombre"></input>
            </div>
            <span className="help-block" style={{ color: 'red' }}>{ this.props.data.errors.name }</span>
         </div>
        <div className="form-group">
            <label className="control-label">Linea</label>
            <select className="form-control" name="line_id" id="line" defaultValue={ this.props.data.champEdit.line_id }  onChange={ this.props.handleEdit.bind(this) }>
                <option value="" disabled>Seleccione</option>
                {
                    this.props.state.lines.map(line =>
                        <option value={ line.id } key={ line.id }>{ line.name }</option>
                    )
                }
            </select>
            <span className="help-block" style={{ color: 'red' }}>{ this.props.data.errors.line }</span>
        </div> 
        <div className="form-group">
            <label className="control-label">Tipo</label>
            <select className="form-control" name="type_id" id="type" defaultValue={ this.props.data.champEdit.type_id }  onChange={ this.props.handleEdit.bind(this) }>
                <option value="">Seleccione</option>
                {
                    this.props.state.types.map(type =>
                        <option value={ type.id } key={ type.id }>{ type.name }</option>
                    )
                }
            </select>
            <span className="help-block" style={{ color: 'red' }}>{ this.props.data.errors.type }</span>
        </div>  
        <div className="form-group">
            <label className="control-label">Género</label>
            <div className="radio-list">
                <label className="radio-inline p-0">
                    <div className="radio radio-info">
                        <input type="radio" name="genre" id="genre_m" value="Hombre" defaultChecked={ this.props.data.champEdit.genre === "Hombre" } onChange={ this.props.handleEdit.bind(this) } ></input>
                        <label htmlFor="radio1">Hombre</label>
                    </div>
                </label>
                <label className="radio-inline">
                    <div className="radio radio-info">
                        <input type="radio" name="genre" id="genre_f" value="Mujer" defaultChecked={ this.props.data.champEdit.genre === "Mujer" } onChange={ this.props.handleEdit.bind(this) }></input>
                        <label htmlFor="radio2">Mujer</label>
                    </div>
                </label>
            </div>
            <span className="help-block" style={{ color: 'red' }}>{ this.props.data.errors.genre }</span>
        </div>
        <FormGroup>
          <Label for="date">Fecha de creación</Label>
          <Input type="date" name="date" id="date" placeholder="date placeholder" min="1979-12-31" max="2020-01-02" defaultValue={ this.state.date } onChange={ this.props.handleEdit.bind(this) }/>
          <span className="help-block" style={{ color: 'red' }}>{ this.props.data.errors.date }</span>
        </FormGroup>            
		<div className="form-group">
			<label className="control-label col-md-12">Subir Imagen</label>
		    <div className="fileinput fileinput-new input-group col-md-10" data-provides="fileinput">
		        <div className="form-control" data-trigger="fileinput">
		            <i className="glyphicon glyphicon-file fileinput-exists"></i>
		            <span className="fileinput-filename"></span>
		        </div>
		        <span className="input-group-addon btn btn-default btn-file">
		        <span className="fileinput-new">Seleccionar Foto</span>
		        <span className="fileinput-exists">Cambiar</span>
		            <input type="file" name="photo" id="photo" onChange={ this.props.handleEdit.bind(this) }></input>
		        </span>
		        <a href="#" className="input-group-addon btn btn-default fileinput-exists" data-dismiss="fileinput" id="remove">Eliminar</a>
		    </div>
            <div className="col-md-2 text-center">
                <img alt={ this.props.data.champEdit.name } src={ 'images/' + this.props.data.champEdit.photo } width='50' height='50'></img>
            </div>
            <span className="help-block" style={{ color: 'red' }}>{ this.props.data.errors.photo }</span>
		</div>                                                        
      </form> 
    </div>
  )
  }
}
export default FormEdit;