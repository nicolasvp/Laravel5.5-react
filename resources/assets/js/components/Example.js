import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Body from './Body';

export default class Example extends Component {
    render() {
        return (
            <div>
                <Header />
                <Body />
            </div>
        );
    }
}

if (document.getElementById('root-react')) {
    ReactDOM.render(<Example />, document.getElementById('root-react'));
}
