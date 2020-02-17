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
                <a href={props.link}><Button color='primary'>Read Here</Button></a>
                <Button
                    onClick={_ => props.saveBook({
                        title: props.title,
                        author: props.author,
                        image: props.image,
                        description: props.description,
                        link: props.link
                    })}
                    color='success'>Save</Button>
            </CardBody>
        </Card>
    )
}

export default Book;