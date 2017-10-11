import React, { Component } from 'react';
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
                genre: '',
                photo: ''
            }
        };
        this.handleInput = this.handleInput.bind(this);
        this.sendForm = this.sendForm.bind(this);
        this.handleDestroy = this.handleDestroy.bind(this);
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
        e.preventDefault();

        const fileInput = document.querySelector('#photo');
        let formData = new FormData();
        formData.append('photo-upload',fileInput.files[0]);
        formData.append('name',this.state.newChamp.name);
        formData.append('line',this.state.newChamp.line);
        formData.append('type',this.state.newChamp.type);
        formData.append('date',this.state.newChamp.date);
        formData.append('genre',this.state.newChamp.genre);
        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }
        
        axios.post('/test',formData,config)
        .then((response) => {
            this.state.champions.push(response.data);
            this.setState({
                champions: this.state.champions
            });
            document.querySelector('#name').value = '';
            document.querySelector('#line').value = '';
            document.querySelector('#type').value = '';
            document.querySelector('#date').value = '';
            $("input:radio").attr("checked", false);
            document.querySelector('#remove').click();
        })
        .catch(function (error) {
            console.log(error.response.data.errors);
        });
    }

    handleInput(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.state.newChamp[[name]] = value;
    }

    handleDestroy(event){
        event.preventDefault();
        const target = event.target;
        const value = target.value;
        const name = target.name;

        axios.delete('/test/'+value,value)
        .then((response) => {
            const champions = this.state.champions.filter(champion =>
                champion.id !== parseInt(value)
            );

            this.setState({
                champions: champions
            });
        
        })
        .catch(function (error) {
            console.log(error);
        });
        
    }

	render(){
		return(
		    <div>
                <div className="preloader">
                    <div className="cssload-speeding-wheel"></div>
                </div>
                <div className="container" style={{ width: 1600 }}>
                    <div className="row">
                        <div className="col-md-5">
                            <Form data={ this.state } handleInput={ this.handleInput } sendForm={ this.sendForm }/>
                        </div>
                        <div className="col-md-7">
                            <Table data={ this.state } handleDestroy={ this.handleDestroy }/>
                        </div>
                    </div>
                </div>
            </div>
		)
	}
}

export default Body;