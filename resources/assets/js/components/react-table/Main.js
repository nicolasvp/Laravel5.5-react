import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Table from './Table.js';
import { Row,Col } from 'react-bootstrap';

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
                <Row>
                    <Col md={2}></Col>
                    <Col md={8}>
                      <code> <Table/></code>
                    </Col>
                    <Col md={2}></Col>
                </Row>
            </div>
        );
    }
}

if (document.getElementById('root-react')) {
    ReactDOM.render(<Main />, document.getElementById('root-react'));
}
