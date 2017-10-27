import React, { Component } from 'react';
import update from 'react-addons-update';
import Table from './Table';
import axios from 'axios';

class Body extends Component {

    constructor(props){
        super(props);
        this.state = {
            champions: []
        };
        this.updateChampList = this.updateChampList.bind(this);
    }

    // Trae todos los campeones de la bdd y actualiza el state
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

    // Actualiza la lista de campeones cuando se crea, edita o elimina
    updateChampList(champion,action){

        if(action === 'add'){
            this.state.champions.push(champion);
            this.setState({
                champions: this.state.champions
            });            
        }

        if(action === 'update'){
            // Busca el champion y lo reemplaza por el actualizado
            const champ_list = this.state.champions;
            const champions = this.state.champions.forEach(function(value,index){
                                    if(value.id === champion.id){
                                        champ_list[index] = champion;
                                    }
                                });
            this.setState({
                champions: champ_list
            });

        }

        if(action === 'delete'){
            this.setState({
                champions: champion
            });
        }
    }

	render(){
		return(
		    <div>
                <div className="preloader">
                    <div className="cssload-speeding-wheel"></div>
                </div>

                <div className="container" style={{ width: 1600 }}>              
                    <div className="row">
                        <div className="col-md-12">
                            <Table data={ this.state } updateChampList={ this.updateChampList }/>
                        </div>
                    </div>
                </div>
            </div>
		)
	}
}

export default Body;