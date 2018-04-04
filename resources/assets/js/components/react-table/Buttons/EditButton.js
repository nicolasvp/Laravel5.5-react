import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class EditButton extends Component {
	constructor(props){
		super(props);
	}
	
	render() {
		return (
			<Button bsStyle="warning" value={ this.props.data.id }>Editar</Button>
		);
	}
}

export default EditButton;