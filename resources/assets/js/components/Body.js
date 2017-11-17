import React, { Component } from 'react';
import update from 'react-addons-update';
import Table from './Table';
import Pagination from './Pagination';
import axios from 'axios';

class Body extends Component {

    constructor(props){
        super(props);
        // an example array of items to be paged
//        var exampleItems = _.range(1, 4).map(i => { return { id: i, name: 'Item ' + i }; });       

        this.state = {
            champions: [],
            exampleItems: [],
            pageOfItems: []            
        };

        this.updateChampList = this.updateChampList.bind(this);
        this.format_date = this.format_date.bind(this);
        this.onChangePage = this.onChangePage.bind(this);
    }

    // Trae todos los campeones de la bdd y actualiza el state
    _fetchData(){
        axios({
            method:'get',
            url:'http://react.app/champion',
            responseType:'json'
        })
        .then((response) => {
            response.data.champions.map(champion =>{
                champion.date = this.format_date(champion.date);
                this.state.champions.push(champion);
                this.state.exampleItems.push(champion);
              //  this.state.pageOfItems.push(champion);
            });
            this.setState({
                champions: this.state.champions,
                exampleItems: this.state.exampleItems,
             //   pageOfItems: this.state.pageOfItems
            });
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    componentDidMount(){
        this._fetchData();
    }

    format_date(date){
        const only_date = date.split(" ")[0];
        const separeted_date = only_date.split("-");
        const formated_date = separeted_date[2]+"/"+separeted_date[1]+"/"+separeted_date[0];  
        return formated_date;
    }

    // Actualiza la lista de campeones cuando se crea, edita o elimina
    updateChampList(champion,action){

        if(action === 'add'){
            champion.date = this.format_date(champion.date);
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
                                        const only_date = champion.date.split(" ")[0];
                                        const separeted_date = only_date.split("-");
                                        const formated_date = separeted_date[2]+"/"+separeted_date[1]+"/"+separeted_date[0]; 
                                        champion.date = formated_date;
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

                        <div className="text-center">
                            {this.state.pageOfItems.map(item =>
                                <div key={ item.id }>{item.name}</div>
                            )}
                        </div>
                        <Pagination items={ this.state.exampleItems } onChangePage={this.onChangePage} />
                    </div>
                </div>
            </div>           
		)
	}
}

export default Body;