import React, { Component } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FormAdd from './FormAdd';
import FormEdit from './FormEdit';
import FormShow from './FormShow';

class ModalComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
        types: [],
        lines: []
    }; 
  }

  // Trae la información de las lineas y tipos para listarlos en el modal
  _fetchData(){
      axios({
          method:'get',
          url:'http://react.test/champion',
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
    let form = null;
    let button = null;
    let header = null;
    // Muestra un formulario dependiendo si se creará o editará
    if(this.props.data.action === 'edit'){
      if(this.props.data.champEdit.name !== '')
      {
        header = 'Editar campeon: '+this.props.data.champEdit.name;
        form = <FormEdit data={ this.props.data } state={ this.state } handleEdit={ this.props.handleEdit }/>;
        button = <Button color="primary" name="update" value={ this.props.data.champEdit.id } onClick={ this.props.sendForm.bind(this) }>Aceptar</Button>;
      }
    }  
    if(this.props.data.action === 'show'){
      if(this.props.data.champEdit.name !== '')
      {
        header = this.props.data.champEdit.name;
        form = <FormShow data={ this.props.data } state={ this.state }/>;        
      }
    }
    if(this.props.data.action === 'add'){
      header = 'Nuevo Campeón';
      form = <FormAdd data={ this.state } errors={ this.props.data.errors } handleInput={ this.props.handleInput }/>;
      button = <Button color="primary" name="store" onClick={ this.props.sendForm.bind(this) }>Aceptar</Button>;
    }
    return(
      <div>
         <Modal isOpen={ this.props.data.modal } toggle={ this.props.closeModal } className={ this.props.className }>
         <ModalHeader toggle={ this.props.closeModal }> 
          <strong>{ header }</strong>
         </ModalHeader>
         <ModalBody>
            { form }
         </ModalBody>
         <ModalFooter>
            { button }
            <Button color="secondary" onClick={ this.props.closeModal }>Cancelar</Button>
         </ModalFooter>
         </Modal>              
      </div>
    )
  }
}
export default ModalComponent;