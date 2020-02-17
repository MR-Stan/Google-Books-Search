import axios from 'axios';
import React, { Component } from 'react';
import {
    Card,
    CardBody,
    CardText
} from 'reactstrap';
import Book from '../components/Book';

class Search extends Component {

    state = {
        search: '',
        books: []
    }

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        });
    }

    searchBooks = e => {
        e.preventDefault();
        axios.post('/api/query/' + this.state.search)
            .then(res => this.setState({ books: res.items }))
            .then(this.setState({ search: '' }));
    }

    saveBook = book => {
        axios.post('/api/save/' + book)
            .then(res => {
                console.log(res);
            })
    }

    render() {
        return (
            <Card>
                <CardBody>
                    <CardText>Search Page</CardText>
                    {this.state.books.map((book, i) => {
                        console.log(book);
                        //         <Book
                        //             title:
                        //     author:
                        //     image:
                        //     description:
                        //     link:
                        // />
                    })}
                </CardBody>
            </Card >
        )
    }
}

export default Search;