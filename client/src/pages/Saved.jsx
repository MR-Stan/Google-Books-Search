import React, { Component } from 'react';
import {
    Card,
    CardBody,
    CardText
} from 'reactstrap';
import Book from '../components/Book';

const Saved = _ => {
    return (
        <Card>
            <CardBody>
                <CardText>Saved Page</CardText>
                <Book />
            </CardBody>
        </Card>
    )
}

export default Saved;