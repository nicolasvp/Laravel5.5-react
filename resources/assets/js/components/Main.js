import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Body from './Body';

export default class Main extends Component {

	constructor(props){
		super(props);
		this.state = {
            champions: []
		}
	}

    render() {
        return (
            <div>
                <Body data={ this.state }/>
            </div>
        );
    }
}

if (document.getElementById('root-react')) {
    ReactDOM.render(<Main />, document.getElementById('root-react'));
}
