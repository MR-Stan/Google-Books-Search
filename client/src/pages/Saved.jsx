import axios from 'axios';
import React, { Component } from 'react';
import {
    Card,
    CardBody,
    Row,
    Col
} from 'reactstrap';
import SaveBook from '../components/SaveBook';

class Saved extends Component {

    state = {
        savedBooks: []
    }

    getSaved = _ => {
        axios.get('/api/books')
            .then(res => {
                this.setState({ savedBooks: res.data })
            })
            .catch(err => {
                console.log(err);
        })
    }

    removeSave = id => {
        axios.delete('/api/delete/' + id)
        .catch (err => {
            console.log(err);
        })
        this.getSaved();
    }

    componentDidMount() {
        this.getSaved();   
    }

    render() {
        return (
            <Card>
                <CardBody className='page-card'>
                    <Row>
                        {this.state.savedBooks.map((book, i) =>
                            <Col xs='12' sm='6' md='4' xl='3'>
                                <SaveBook
                                    title={book.title}
                                    authors={book.authors}
                                    image={book.image}
                                    description={book.description}
                                    link={book.link}
                                    removeSave={_=> this.removeSave(book._id)}
                                    key={book._id}
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