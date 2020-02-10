import React from 'react';
import {
    Card, CardImg, CardText, CardBody
} from 'reactstrap';
import '../assets/css/Saved.css'

const Search = props => {
    return (
        <Card className='' onClick={() => props.onImgClick(props.id)}>
            <CardBody>
                {<CardText>{props.name}</CardText>}
            </CardBody>
            <CardImg className='' src={props.image}></CardImg>
        </Card>
    )
}

export default Search;