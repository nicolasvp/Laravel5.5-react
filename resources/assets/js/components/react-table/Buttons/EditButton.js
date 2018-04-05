import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import { FormGroup,FormControl,ControlLabel,DropdownButton,MenuItem,Col,Row } from 'react-bootstrap';
import '../styles.css';

class EditButton extends Component {
	constructor(props){
		super(props);
		console.log(this.props.lines);
		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = {
		  show: false
		};
	}

	handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}

	render() {
		return (
			<div>
				<Button bsStyle="warning" value={ this.props.data.id } onClick={ this.handleShow }>Editar</Button>
				<Modal show={this.state.show} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>{ this.props.data.name }</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<FormGroup>
							<ControlLabel>Nombre del campeón</ControlLabel>
							<FormControl type="text" defaultValue={ this.props.data.name } id="name" name="name" placeholder="Ingrese un nombre"/>
						</FormGroup>
						<FormGroup>
							<ControlLabel>Linea</ControlLabel>
							<FormControl componentClass="select" placeholder="select" id="line_id" name="line_id">
								<option value="select">select</option>
								<option value="other">...</option>
							</FormControl>
						</FormGroup>
						<FormGroup>
							<ControlLabel>Tipo</ControlLabel>
							<FormControl componentClass="select" placeholder="select" id="type_id" name="type_id">
								<option value="select">select</option>
								<option value="other">...</option>
							</FormControl>							
						</FormGroup>										
						<FormGroup>
							<ControlLabel>Imagen del campeón</ControlLabel>
							<Row>
								<Col md={10}><FormControl name="photo" id="photo" type="file" label="Imagen"/></Col>
								<Col md={2}><Image src={ 'images/' + this.props.data.photo } thumbnail width='50' height='50'/></Col>
							</Row>
						</FormGroup>					
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.handleClose}>Cerrar</Button>
					</Modal.Footer>
				</Modal>
			</div>	
		);
	}
}

export default EditButton;