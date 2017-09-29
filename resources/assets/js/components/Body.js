import React, { Component } from 'react';
import TextBox from './TextBox';
import axios from 'axios';

class Body extends Component {

    constructor(props){
        super(props);
        this.state = {
            phrases: [],
            name: '',
            champions: []
        };
        this.addText = this.addText.bind(this);
        this.addChampion = this.addChampion.bind(this);
    }

    _fetchData(){
        axios({
            method:'get',
            url:'http://react.app/test',
            responseType:'json'
        })
        .then((champions) => {
            champions.data.map(champion =>{
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

    addText(string){
        this.state.phrases.push(string);
        this.setState({ phrases: this.state.phrases });
    }

    addChampion(name){
        axios.post('/test', {
            name: name
        })
        .then((champion) => {
            this.state.champions.push(champion.data);
            this.setState({ champions: this.state.champions });
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    componentDidMount(){
        this._fetchData();
    }

	render(){
		return(
		    <div>
                <div className="preloader">
                    <div className="cssload-speeding-wheel"></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="white-box">
                                <h3 className="box-title">Info Table</h3>
                                <div className="table-responsive">
                                    <table className="table color-bordered-table info-bordered-table">
                                        <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>First Name</th>
                                            <th>Age</th>
                                            <th>Genre</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>{ this.props.data.name }</td>
                                            <td>{ this.props.data.age }</td>
                                            <td>{ this.props.data.gender }</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 col-md-offset-2">
                            <div className="panel panel-default">
                                <div className="panel-heading">Resultados de la bdd</div>
                                    <div className="panel-body">
                                        <h1>Ingresa un campeón</h1>
                                        <TextBox addText = { this.addText } addChampion = { this.addChampion }/>
                                        <ul>
                                            {
                                                this.state.champions.map(champion =>
                                                    <li key={ champion.id }>{ champion.name }</li>
                                                )
                                            }
                                        </ul>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		)
	}
}

export default Body;