import axios from 'axios';
import React, { Component } from 'react';
import {
    Card,
    CardBody,
    // CardTitle,
    // Container,
    // InputGroup,
    // Input,
    // InputGroupAddon,
    // Button,
    Row,
    Col
} from 'reactstrap';
import Book from '../components/Book';

class Saved extends Component {

    state = {
        savedBooks: []
    }

    getSaved = _ => {
        axios.get('/api/books')
            .then(res => {
                console.log(res.data.items);
                this.setState({ savedBooks: res.data.items })
            })
            .catch(err => {
                console.log(err);
        })
    }

    componentDidMount() {
        console.log(this.state.savedBooks)
        // this.getSaved();   
    }

    render() {
        return (
            <Card>
                <CardBody className='page-card'>
                    <Row>
                        {this.state.savedBooks.map((book, i) =>
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

export default Saved;