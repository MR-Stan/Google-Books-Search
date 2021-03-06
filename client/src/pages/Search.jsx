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
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    searchBooks = event => {
        event.preventDefault();
        axios.get('/api/search/' + this.state.search)
            .then(res => this.setState({ books: res.data.items ,  search: '' }));
    }

    saveBook = book => {
            book.saved = true;
            axios.post('/api/save/', book)
                .then(res => {
                
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
                                    image={
                                        book.volumeInfo.imageLinks
                                            ? book.volumeInfo.imageLinks.thumbnail
                                            : 'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
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