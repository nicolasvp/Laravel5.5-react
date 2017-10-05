import React, { Component } from 'react';
import axios from 'axios';

class Table extends Component {

    render(){
        return(
            <div>
                <div className="white-box">
                    <h3 className="box-title">Info Table</h3>
                    <div className="table-responsive">
                        <div>
                            <table className="table color-bordered-table info-bordered-table">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nombre</th>
                                    <th>Tipo</th>
                                    <th>Linea</th>
                                    <th>Genero</th>
                                    <th>Fecha</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.props.data.champions.map(champion =>
                                            <tr key={ champion.id }>
                                                <td>{ champion.id }</td>
                                                <td>{ champion.name }</td>
                                                <td>{ champion.type.name }</td>
                                                <td>{ champion.line.name }</td>
                                                <td>{ champion.genre }</td>
                                                <td>{ champion.date.split(" ")[0] }</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Table;