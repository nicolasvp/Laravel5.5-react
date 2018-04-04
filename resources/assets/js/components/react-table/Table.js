import React, { Component } from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import { ButtonGroup } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import EditButton from './Buttons/EditButton';
import DeleteButton from './Buttons/DeleteButton';
import ShowButton from './Buttons/ShowButton';

import paginationFactory from 'react-bootstrap-table2-paginator';

function actionButtons(column, colIndex) {
	  return (
	  	<div>
	  		<ButtonGroup>
	  			<ShowButton data={ colIndex }/>
			    <EditButton data={ colIndex }/>
			    <DeleteButton data={ colIndex }/>
		    </ButtonGroup>
	    </div>
	  );
	}

function renderImage(column, colIndex) {
	return (
		<Image src={ 'images/' + column } circle width='50' height='50'/>
		)
}

const columns = [{
  dataField: 'id',
  text: 'ID',
  headerAlign: 'center',
  headerTitle: true,
  sort: true
}, {
  dataField: 'name',
  text: 'Nombre',
  headerAlign: 'center',
  headerTitle: true,
  sort: true
}, {
  dataField: 'date',
  text: 'Fecha',
  headerAlign: 'center',
  headerTitle: true,
  sort: true
}, {
  dataField: 'photo',
  text: 'Imagen',
  formatter: renderImage,
  headerAlign: 'center',
  headerTitle: true,
  align: 'center'
}, 
{
	dataField: 'actions',
	text: 'Acciones',
	headerAlign: 'center',
	headerTitle: true,
	formatter: actionButtons
}];

const defaultSorted = [{
  dataField: 'id',
  order: 'asc'
}];


class Table extends Component {

    constructor(props){
        super(props);
        this.state = {
            champions: []           
        };
    }

    // Trae todos los campeones de la bdd y actualiza el state
    _fetchData(){
        axios({
            method:'get',
            url:'http://localhost/react/public/champion',
            responseType:'json'
        })
        .then((response) => {
            response.data.champions.map(champion =>{
                this.state.champions.push(champion);
            });
            this.setState({
                champions: this.state.champions,
            });
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    componentDidMount(){
        this._fetchData();
    }

	render() {
  		return (
  			<div>
  				<BootstrapTable keyField='id' 
  				data={ this.state.champions } 
  				columns={ columns } 
  				defaultSorted={ defaultSorted } 
  				filter={ filterFactory() }
  				/>
  			</div>
  		)	
	}
}

export default Table;