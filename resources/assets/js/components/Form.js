import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {

    constructor(props){
        super(props);
        this.state = {
            types: [],
            lines: []
        };
    }

    _fetchData(){
        axios({
            method:'get',
            url:'http://react.app/test',
            responseType:'json'
        })
        .then((response) => {
            response.data.types.map(type =>{
                this.state.types.push(type);
            });
            response.data.lines.map(line =>{
                this.state.lines.push(line);
            });
            this.setState({
                types: this.state.types,
                lines: this.state.lines
            });
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    componentDidMount(){
        this._fetchData();
    }

    render(){
        return(
            <div className="white-box">
                <h3 className="box-title m-b-0">Formulario de ejemplo</h3>
                <p className="text-muted m-b-30 font-13"> Bootstrap Elements </p>
                <div className="row">
                    <div className="col-sm-12 col-xs-12">
                        <form id="form-champ" encType="multipart/form-data">
                            <div className="form-group">
                                <label htmlFor="exampleInputuname">Nombre del campeón</label>
                                <div className="input-group">
                                    <div className="input-group-addon"><i className="ti-user"></i></div>
                                    <input ref="name" type="text" className="form-control" id="name" name="name" onChange={ this.props.handleInput.bind(this) } placeholder="Nombre"></input>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="control-label">Linea</label>
                                <select className="form-control" name="line" id="line" onChange={ this.props.handleInput.bind(this) } defaultValue="">
                                    <option value="" disabled>Seleccione</option>
                                    {
                                        this.state.lines.map(line =>
                                            <option value={ line.id } key={ line.id }>{ line.name }</option>
                                        )
                                    }
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="control-label">Tipo</label>
                                <select className="form-control" name="type" id="type" onChange={ this.props.handleInput.bind(this) } defaultValue="">
                                    <option value="">Seleccione</option>
                                    {
                                        this.state.types.map(type =>
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
                                <input type="text" name="date" id="date" className="form-control mydatepicker" placeholder="mm/dd/yyyy" onSelect={ this.props.handleInput.bind(this) }></input>
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
                            <button className="btn btn-success waves-effect waves-light m-r-10" onClick={this.props.sendForm.bind(this)}>Submit</button>
                            <button className="btn btn-inverse waves-effect waves-light">Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form; 

Form.defaultProps = {
    name: 0
};   

Form.propTypes = {
  name: PropTypes.number.isRequired
};
