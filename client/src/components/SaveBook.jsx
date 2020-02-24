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
import '../assets/css/Book.css'

const SaveBook = props => {
    return (
        <Card className='text-center bg-light book-card'>
            <CardImg className='book-image' src={props.image}></CardImg>
            <CardBody>
                <CardTitle className='title'>{props.title}</CardTitle>
                <CardSubtitle>{props.authors}</CardSubtitle>
                <CardText>{props.description}</CardText>
                <a href={props.link}><Button color='primary'>Read</Button></a>
                <Button
                    onClick={_ => props.removeSave({
                        title: props.title,
                        author: props.author,
                        image: props.image,
                        description: props.description,
                        link: props.link,
                        save: false
                    })}
                    color='danger'>Remove</Button>
            </CardBody>
        </Card>
    )
}

export default SaveBook;