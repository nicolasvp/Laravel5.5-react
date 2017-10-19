import React, { Component } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FormAdd from './FormAdd';
import FormEdit from './FormEdit';

class ModalComponent extends Component {

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
    let form = null;
    let button = null;
    if(this.props.data.champEdit.name){
      form = <FormEdit data={ this.props.data } state={ this.state } handleEdit={ this.props.handleEdit }/>;
      button = <Button color="primary" name="update" value={ this.props.data.champEdit.id } onClick={ this.props.sendForm.bind(this) }>Aceptar</Button>;
    }
    else{
      form = <FormAdd data={ this.state } handleInput={ this.props.handleInput }/>;
      button = <Button color="primary" name="store" onClick={ this.props.sendForm.bind(this) }>Aceptar</Button>;
    }
    return(
      <div>
         <Modal isOpen={ this.props.data.modal } toggle={ this.props.cancelModal } className={ this.props.className }>
         <ModalHeader toggle={ this.props.cancelModal }> 
          { this.props.data.champEdit.name ? 'Editar campeón' : 'Nuevo campeón'}
         </ModalHeader>
         <ModalBody>
            { form }
         </ModalBody>
         <ModalFooter>
            { button }
            <Button color="secondary" onClick={ this.props.cancelModal }>Cancelar</Button>
         </ModalFooter>
         </Modal>              
      </div>
    )
  }
}
export default ModalComponent;