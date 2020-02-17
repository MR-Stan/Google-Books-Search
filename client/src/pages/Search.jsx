import axios from 'axios';
import React, { Component } from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    Container,
    InputGroup,
    Input,
    InputGroupAddon,
    Button,
    Row,
    Col
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
                <CardBody>
                    <CardTitle>Search Page</CardTitle>
                    <InputGroup>
                        <Input
                            name='search'
                            onChange={this.handleInputChange}
                            placeholder="Book Name" />
                        <InputGroupAddon addonType="append">
                            <Button
                                onClick={this.searchBooks}
                                color='primary'>
                                Search
                                </Button>
                        </InputGroupAddon>
                    </InputGroup>
                    <Container fluid>
                        <Row>
                            {this.state.books.map((book, i) =>
                                <Col xs='12' sm='6' md='4' lg='3' xl='2'>
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
                    </Container>
                </CardBody>
            </Card>
        )
    }
}

export default Search;