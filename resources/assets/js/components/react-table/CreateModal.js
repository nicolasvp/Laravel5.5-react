import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { FormGroup,FormControl,ControlLabel,DropdownButton,MenuItem,Col,Row } from 'react-bootstrap';

class CreateModal extends Component {

	constructor(props){
		super(props);
	}

    render() {
        return (
            <div>
                <Modal show={this.props.data.show} onHide={this.props.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Nuevo Campeón</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormGroup>
                            <ControlLabel>Nombre del campeón</ControlLabel>
                            <FormControl type="text" id="name" name="name" placeholder="Ingrese un nombre" onChange={this.props.handleInput.bind(this)}/>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Linea</ControlLabel>
                            <FormControl componentClass="select" placeholder="select" id="line_id" name="line" onChange={this.props.handleInput.bind(this)}>
                                <option value="">Seleccione</option>
                                {
                                    this.props.data.lines.map(line =>
                                        <option value={ line.id } key={ line.id }>{ line.name }</option>
                                    )
                                }
                            </FormControl>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Tipo</ControlLabel>
                            <FormControl componentClass="select" placeholder="select" id="type_id" name="type" onChange={this.props.handleInput.bind(this)}>
                                <option value="">Seleccione</option>
                                {
                                    this.props.data.types.map(type =>
                                        <option value={ type.id } key={ type.id }>{ type.name }</option>
                                    )
                                }
                            </FormControl>                          
                        </FormGroup>                                        
                        <FormGroup>
                            <ControlLabel>Imagen del campeón</ControlLabel>
                            <Row>
                                <Col md={12}><FormControl name="photo" id="photo" type="file" label="Imagen" onChange={this.props.handleInput.bind(this)}/></Col>
                            </Row>
                        </FormGroup>                    
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.submit}>Aceptar</Button>
                        <Button onClick={this.props.closeModal}>Cancelar</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default CreateModal;
