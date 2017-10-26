import React, { Component } from 'react';
import update from 'react-addons-update';
import Table from './Table';
import axios from 'axios';

class Body extends Component {

    constructor(props){
        super(props);
        this.state = {
            phrases: [],
            name: '',
            champions: []
        };
        this.updateChampList = this.updateChampList.bind(this);
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

    updateChampList(champion,action){

        if(action === 'add'){
            this.state.champions.push(champion);
            this.setState({
                champions: this.state.champions
            });            
        }

        if(action === 'update'){

            const champions = this.state.champions.forEach(function(value,index){
                                    if(value.id === champion.id){
                                        //value = champion;
                                        console.log(value);
                                        //const asdf = update(value, {id: {$set: champion}});
                                        //console.log(asdf);
                                    }
                                });

console.log(this.state.champions);
       //     const newObj2 = update(this.state.champions, {id: {$set: champion}});
      //      console.log(newObj2);
 /*
            console.log(champions);
            //champions.push(champion);            
            this.setState({
                champions: champions
            });
        */
       // console.log(this.state.champions);
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