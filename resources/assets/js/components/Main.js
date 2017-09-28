import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Body from './Body';
import axios from 'axios';

export default class Main extends Component {

	constructor(props){
		super(props);
		this.state = {
			name: 'Nicolas',
			age: 25,
			gender: 'Male',
            champions: []
		}
	}

    _fetchData(){
        axios({
          method:'get',
          url:'http://localhost/Laravel5.5-react/public/test',
          responseType:'JSON'
        })
        .then((champions) => {
            this.setState({
                champions: champions
            },
            (error) => {
                console.log(error);
            })
        });
            
        }

/*

        axios.get('/Laravel5.5-react/public/test')
          .then(function (response) {
            //console.log(response.data);
            return response.data;

            response.data.map(champion =>
                this.state.champions.push(champion)
            )
            
          })
          .catch(function (error) {
            console.log(error);
        });
  */
    }

    componentDidMount(){
        this._fetchData();
    }

    render() {
        return (
            <div>
                <Header />
                <Body data={ this.state } champions={ this._fetchData }/>
            </div>
        );
    }
}

if (document.getElementById('root-react')) {
    ReactDOM.render(<Main />, document.getElementById('root-react'));
}
