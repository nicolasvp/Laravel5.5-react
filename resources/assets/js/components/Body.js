import React, { Component } from 'react';
import TextBox from './TextBox';

class Body extends Component {

    constructor(props){
        super(props);
        this.state = {
            phrases: []
        }
    }

    addText(string){
        console.log(this.state.phrases);
        this.state.phrases.push(string);
        this.setState({ phrases: this.state.phrases });
        console.log(this.state.phrases);
    }

	render(){
		return(
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">Example Component</div>
                                <div className="panel-body">
                                    <TextBox addText = { this.addText }/>
                                    <h1>{ this.props.data.name }</h1>
                                    <h3>{ this.props.data.age }</h3>
                                    <h4>{ this.props.data.gender }</h4>

                                </div>
                        </div>
                    </div>
                </div>
            </div>	 		
		)
	}
}

export default Body;