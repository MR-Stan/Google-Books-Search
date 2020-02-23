import axios from 'axios';
import React, { Component } from 'react';
import {
    Card,
    CardBody,
    InputGroup,
    Input,
    InputGroupAddon,
    Button,
    Row,
    Col
} from 'reactstrap';
import Book from '../components/Book';
import '../assets/css/Page.css'

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
        axios.get('/api/search/' + this.state.search)
            .then(res => this.setState({ books: res.data.items }))
            .then(this.setState({ search: '' }));
    }

    saveBook = book => {
        console.log(book);
        axios.post('/api/save/', book)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <Card>
                <CardBody className='page-card'>
                    <Row>
                        <Col></Col>
                        <Col xs='12' md='6'xl='4'>
                            <InputGroup className='searchBar'>
                                <Input
                                    name='search'
                                    onChange={this.handleInputChange}
                                    placeholder="Find a book" />
                                <InputGroupAddon addonType="append">
                                    <Button
                                        onClick={this.searchBooks}
                                        color='primary'>
                                        Search
                                </Button>
                                </InputGroupAddon>
                            </InputGroup>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        {this.state.books.map((book, i) =>
                            <Col xs='12' sm='6' md='4' xl='3'>
                                <Book
                                    title={book.volumeInfo.title}
                                    authors={book.volumeInfo.authors}
                                    image={book.volumeInfo.imageLinks.thumbnail}
                                    description={book.volumeInfo.description}
                                    link={book.volumeInfo.link}
                                    saveBook={this.saveBook}
                                    key={'book_' + i}
                                />
                            </Col>
                        )}
                    </Row>
                </CardBody>
            </Card>
        )
    }
}

export default Search;