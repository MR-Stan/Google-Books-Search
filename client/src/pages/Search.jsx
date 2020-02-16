import React from 'react';
import {
    Card,
    CardImg,
    CardBody,
    CardText
} from 'reactstrap';
import Book from '../components/Book';

const Search = props => {
    return (
        <Card>
            <CardImg src='../assets/images/header.jpg'><span>Google Books Search</span></CardImg>
            <CardBody>
                <CardText>Test</CardText>
                <Book />
            </CardBody>
        </Card>
    )
}

export default Search;