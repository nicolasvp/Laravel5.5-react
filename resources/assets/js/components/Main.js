import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Body from './Body';

export default class Main extends Component {

	constructor(props){
		super(props);
		this.state = {
			name: 'Nicolas',
			age: 25,
			gender: 'Male'
		}
	}

    render() {
        return (
            <div>
                <Header />
                <Body data={ this.state }/>
            </div>
        );
    }
}

if (document.getElementById('root-react')) {
    ReactDOM.render(<Main />, document.getElementById('root-react'));
}