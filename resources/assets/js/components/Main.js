import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
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
                <Header />
                <Body data={ this.state }/>
                <Footer />
            </div>
        );
    }
}

if (document.getElementById('root-react')) {
    ReactDOM.render(<Main />, document.getElementById('root-react'));
}
