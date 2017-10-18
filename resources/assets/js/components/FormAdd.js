import React, { Component } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class FormAdd extends Component {

  render(){
  return(
    <div>
        <form id="form-champ" encType="multipart/form-data">
         <div className="form-group">
            <label htmlFor="exampleInputuname">Nombre del campeón</label>
            <div className="input-group">
               <div className="input-group-addon"><i className="ti-user"></i></div>
                <input ref="name" type="text" className="form-control" id="name" name="name" placeholder="Nombre" onChange={ this.props.handleInput.bind(this) }></input>
            </div>
         </div>
        <div className="form-group">
            <label className="control-label">Linea</label>
            <select className="form-control" name="line" id="line" defaultValue="" onChange={ this.props.handleInput.bind(this) }>
                <option value="" disabled>Seleccione</option>
                {
                    this.props.data.lines.map(line =>
                        <option value={ line.id } key={ line.id }>{ line.name }</option>
                    )
                }
            </select>
        </div> 
        <div className="form-group">
            <label className="control-label">Tipo</label>
            <select className="form-control" name="type" id="type" defaultValue="" onChange={ this.props.handleInput.bind(this) }>
                <option value="">Seleccione</option>
                {
                    this.props.data.types.map(type =>
                        <option value={ type.id } key={ type.id }>{ type.name }</option>
                    )
                }
            </select>
        </div>  
        <div className="form-group">
            <label className="control-label">Género</label>
            <div className="radio-list">
                <label className="radio-inline p-0">
                    <div className="radio radio-info">
                        <input type="radio" name="genre" id="genre_m" value="Hombre" onChange={ this.props.handleInput.bind(this) }></input>
                        <label htmlFor="radio1">Hombre</label>
                    </div>
                </label>
                <label className="radio-inline">
                    <div className="radio radio-info">
                        <input type="radio" name="genre" id="genre_f" value="Mujer" onChange={ this.props.handleInput.bind(this) }></input>
                        <label htmlFor="radio2">Mujer</label>
                    </div>
                </label>
            </div>
        </div>
        <div className="form-group">
            <label className="control-label">Fecha de creación</label>
            <div className="input-group">
              <input type="text" name="date" id="date" className="form-control mydatepicker" placeholder="mm/dd/yyyy" onChange={ this.props.handleInput.bind(this) }></input>
            <span className="input-group-addon"><i className="icon-calender"></i></span>
            </div>
        </div>  
		<div className="form-group">
			<label className="control-label">Subir Imagen</label>
		    <div className="fileinput fileinput-new input-group" data-provides="fileinput">
		        <div className="form-control" data-trigger="fileinput">
		            <i className="glyphicon glyphicon-file fileinput-exists"></i>
		            <span className="fileinput-filename"></span>
		        </div>
		        <span className="input-group-addon btn btn-default btn-file">
		        <span className="fileinput-new">Seleccionar Foto</span>
		        <span className="fileinput-exists">Cambiar</span>
		            <input type="file" name="photo" id="photo" onChange={ this.props.handleInput.bind(this) }></input>
		        </span>
		        <a href="#" className="input-group-addon btn btn-default fileinput-exists" data-dismiss="fileinput" id="remove">Eliminar</a>
		    </div>
		</div>                                                        
      </form> 
    </div>
  )
  }
}
export default FormAdd;