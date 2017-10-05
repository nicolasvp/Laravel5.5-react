import React, { Component } from 'react';
import TextBox from './TextBox';
import Form from './Form';
import Table from './Table';
import axios from 'axios';

class Body extends Component {

    constructor(props){
        super(props);
        this.state = {
            phrases: [],
            name: '',
            champions: [],
            newChamp: {
                name: '',
                line: '',
                type: '',
                date: '',
                genre: ''
            }
        };
    }

    _fetchData(){
        axios({
            method:'get',
            url:'http://react.app/test',
            responseType:'json'
        })
            .then((response) => {
                response.data.champions.map(champion =>{
                    this.state.champions.push(champion);
                });
                this.setState({
                    champions: this.state.champions
                });

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    componentDidMount(){
        this._fetchData();
    }

    sendForm(e){
        this.setState({newChamp: this.props.data.newChamp});
       // e.preventDefault();
       /*
        axios.post('/test', {
            newChamp : this.state.newChamp
        })
            .then((response) => {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
*/
     //  console.log(this.state.newChamp);
       console.log(e);
    }

    handleInput(event)
    {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.state.newChamp[[name]] = value;
       // this.setState({newChamp: this.props.data.newChamp});
    }

	render(){
		return(
		    <div>
                <div className="preloader">
                    <div className="cssload-speeding-wheel"></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <Form data={ this.state } handleInput={ this.handleInput } sendForm={ this.sendForm }/>
                        </div>
                        <div className="col-md-6">
                            <Table data={ this.state }/>
                        </div>
                    </div>
                </div>
            </div>
		)
	}
}

export default Body;