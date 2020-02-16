import React from 'react';
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button
} from 'reactstrap';


const Book = props => {
    return (
        <Card className='bookCard' onClick={() => props.onImgClick(props.id)}>
            <CardImg className='bookImage' src={props.image}></CardImg>
            <CardBody>
                <CardTitle>{props.title}</CardTitle>
                <CardSubtitle>{props.authors}</CardSubtitle>
                <CardText>{props.description}</CardText>
                <Button>{props.link}</Button>
            </CardBody>
        </Card>
    )
}

export default Book;