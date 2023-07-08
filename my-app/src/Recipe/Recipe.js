import React from 'react';
import {Button, Card} from "react-bootstrap";
import './Recipe.css'

const Recipe = ({title, description, onClick, onDelete}) => {
    return (
        <Card className='recipe'>
            <Card.Body>
                <h2>{title}</h2>
                <p>{description}</p>
                <Button variant='primary' onClick={onClick}>Update</Button>
                <Button variant='danger' onClick={onDelete}>Delete</Button>
            </Card.Body>
        </Card>
    );
};

export default Recipe;
