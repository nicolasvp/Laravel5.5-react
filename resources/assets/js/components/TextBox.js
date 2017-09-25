import React, { Component } from 'react';

class TextBox extends Component {

	handleKeyDown(e){
		if(this.refs.text.value != '' && e.keyCode === 13){
			this.props.addText(this.refs.text.value);
			this.refs.text.value = '';
		}
	}

	render(){
		return(
			<input ref="text" type="text" placeholder="Escribe algo acá" onKeyDown={ this.handleKeyDown.bind(this) }></input>	
		)
	}
}

export default TextBox;