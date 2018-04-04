import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class DeleteButton extends Component {
	constructor(props){
		super(props);
	}	
	
	render() {
		return (
			<Button bsStyle="danger" value={ this.props.data.id }>Eliminar</Button>
		);
	}
}

export default DeleteButton;