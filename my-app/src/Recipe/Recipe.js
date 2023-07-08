import React from 'react';
import {Card} from "react-bootstrap";
import './Recipe.css'

const Recipe = ({title, description}) => {
    return (
        <Card className='recipe'>
            <Card.Body>
                <h2>{title}</h2>
                <p>{description}</p>
            </Card.Body>
        </Card>
    );
};

export default Recipe;
