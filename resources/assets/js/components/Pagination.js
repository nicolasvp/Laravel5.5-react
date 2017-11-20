import React, { Component } from 'react';
import axios from 'axios';
import { Pagination, PaginationItem, PaginationComponent, PaginationLink } from 'reactstrap';

var breaker = true;  

class PaginationListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { pager: {} };
               
    }
 
    componentWillMount() {
        // Setea las paginas si los items no están vacios
        if (this.props.items && this.props.items.length) {
            this.setPage(this.props.initialPage);
        }
    }
 
    componentWillUpdate() {
        // Condicion para romper el loop que se genera con componentdidupdate
        if(breaker){
            if (this.props.items && this.props.items.length) {
                this.setPage(this.props.initialPage);
            }      
            breaker = false;        
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // Resetea las paginas si cambiaron los items
        if (this.props.items !== prevProps.items) {
            this.setPage(this.props.initialPage);
        }
    }
 
    setPage(page) {
        var items = this.props.items;
        var pager = this.state.pager;
 
        if (page < 1 || page > pager.totalPages) {
            return;
        }
 
        pager = this.getPager(items.length, page);
 
        var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
 
        this.setState({ pager: pager });

        this.props.onChangePage(pageOfItems,pager.currentPage);
    }
 
    getPager(totalItems, currentPage, pageSize) {
        currentPage = currentPage || 1;
 
        // Cantidad de paginas por default = 2
        pageSize = pageSize || 2;
 
        // Calcula el total de páginas
        var totalPages = Math.ceil(totalItems / pageSize);
 
        var startPage, endPage;
        if (totalPages <= 10) {
            // Si el total es menor que 10 entonces muestra todo
            startPage = 1;
            endPage = totalPages;
        } else {
            // Si es mayor a 10 entonces calcula el inicio y fin
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
 
        // Calcula el index de inicio y fin
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
 
        var pages = _.range(startPage, endPage + 1);
 
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
 
    render() {
        var pager = this.state.pager;
 
        if (!pager.pages || pager.pages.length <= 1) {
            // No muestra la paginación si sólo hay una 1 página
            return null;
        }
 
        return (
            <ul className="pagination">
                <li className={pager.currentPage === 1 ? 'disabled' : ''}>
                    <a onClick={() => this.setPage(1)}>Primero</a>
                </li>
                <li className={pager.currentPage === 1 ? 'disabled' : ''}>
                    <a onClick={() => this.setPage(pager.currentPage - 1)}>Anterior</a>
                </li>
                {pager.pages.map((page, index) =>
                    <li key={index} className={pager.currentPage === page ? 'active' : ''}>
                        <a onClick={() => this.setPage(page)}>{page}</a>
                    </li>
                )}
                <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                    <a onClick={() => this.setPage(pager.currentPage + 1)}>Siguiente</a>
                </li>
                <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                    <a onClick={() => this.setPage(pager.totalPages)}>Último</a>
                </li>
            </ul>
        );
    }
}


export default PaginationListComponent;