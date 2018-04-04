import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import { Row,Col } from 'react-bootstrap';
import '../styles.css';

class ShowButton extends Component {
	constructor(props){
		super(props);

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
				<Button bsStyle="info" value={ this.props.data.id } onClick={ this.handleShow }>Mostrar</Button>
				<Modal show={this.state.show} onHide={this.handleClose}>
					<Modal.Header closeButton>
						<Modal.Title><h3>{ this.props.data.name }</h3></Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<ListGroup>
						  <ListGroupItem>
							<Row>
							    <Col md={6}><strong>Nombre: </strong></Col>
							    <Col md={6} style={{ textAlign: 'right' }}>{ this.props.data.name }</Col>
							</Row>						  
						  </ListGroupItem>
						  <ListGroupItem>
							<Row>
							    <Col md={6}><strong>Tipo: </strong></Col>
							    <Col md={6} style={{ textAlign: 'right' }}>{ this.props.data.type.name }</Col>
							</Row>
						  </ListGroupItem>						  
						  <ListGroupItem>
							<Row>
							    <Col md={6}><strong>Linea: </strong></Col>
							    <Col md={6} style={{ textAlign: 'right' }}>{ this.props.data.line.name }</Col>
							</Row>						  
						  </ListGroupItem>
						  <ListGroupItem>
							<Row>
							    <Col md={6}><strong>Género: </strong></Col>
							    <Col md={6} style={{ textAlign: 'right' }}>{ this.props.data.genre }</Col>
							</Row>						  
						  </ListGroupItem>
						  <ListGroupItem>
							<Row>
							    <Col md={6}><strong>Fecha de creación: </strong></Col>
							    <Col md={6} style={{ textAlign: 'right' }}>{ this.props.data.date }</Col>
							</Row>						  
						  </ListGroupItem>
						  <ListGroupItem>
							<Row>
							    <Col md={6}><strong>Imagen: </strong></Col>
							    <Col md={6} style={{ textAlign: 'right' }}><Image src={ 'images/' + this.props.data.photo } thumbnail width='50' height='50'/></Col>
							</Row>						  
						  </ListGroupItem>						  
						</ListGroup>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.handleClose}>Cerrar</Button>
					</Modal.Footer>
				</Modal>
		  </div>
		);
	}
}

export default ShowButton;