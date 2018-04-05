import React, { Component } from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import EditButton from './Buttons/EditButton';
import DeleteButton from './Buttons/DeleteButton';
import ShowButton from './Buttons/ShowButton';
import paginationFactory from 'react-bootstrap-table2-paginator';
import CreateModal from './CreateModal';

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
  dataField: 'created_at',
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
            champions: [],
            lines: [],
            types: [],
            newChamp: {
                name: '',
                line: '',
                type: '',
                photo: ''
            },
            show: false        
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
            response.data.lines.map(line =>{
                this.state.lines.push(line);
            });  
            response.data.types.map(type =>{
                this.state.types.push(type);
            });                              
            this.setState({
                champions: this.state.champions,
                lines: this.state.lines,
                types: this.state.types
            });
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    componentDidMount(){
        this._fetchData();
    }

    showModal(){
      this.setState({ show: true });
    }

    closeModal(){
      this.setState({ show: false });
    }

    // Envia el formulario al controlador ya sea para guardar o para actualizar
    submit(e){
        e.preventDefault();

        const fileInput = document.querySelector('#photo');

        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }
        
        // Envia los valores del formulario para guardar el nuevo registro
        let formData = new FormData();
        formData.append('photo',fileInput.files[0]); 
        if(typeof(fileInput.files[0]) === 'undefined'){
          formData.append('photo','');  
        }
        formData.append('name',this.state.newChamp.name);
        formData.append('line',this.state.newChamp.line);
        formData.append('type',this.state.newChamp.type);

        axios.post('http://localhost/react/public/champion',formData,config)
        .then((response) => {
            this.state.champions.push(response.data);
            this.setState({
                champions: this.state.champions
            });   
            this.closeModal();
        })
        .catch((error) => {
            this.showErrors(error.response.data.errors);         
        });              
    }

    handleInput(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        
        this.state.newChamp[[name]] = value;
        console.log(this.state.newChamp);
    }

	render() {
  		return (
  			<div>
          <Button bsStyle="primary" onClick={ this.showModal.bind(this) }>Nuevo</Button>
  				<BootstrapTable keyField='id' 
  				data={ this.state.champions } 
  				columns={ columns } 
  				defaultSorted={ defaultSorted } 
  				filter={ filterFactory() }
  				/>
          <CreateModal data={ this.state } submit={ this.submit.bind(this) } closeModal={ this.closeModal.bind(this) } handleInput={ this.handleInput.bind(this) }/>
  			</div>
  		)	
	}
}

export default Table;