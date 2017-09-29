import React, { Component } from 'react';
	
let ID = 1;

class TextBox extends Component {

	handleKeyDown(e){
		if(this.refs.text.value != '' && e.keyCode === 13){
			this.props.addText({ 
				phrase: this.refs.text.value,
				id: ID
			});
			this.props.addChampion(this.refs.text.value);
			ID++;
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