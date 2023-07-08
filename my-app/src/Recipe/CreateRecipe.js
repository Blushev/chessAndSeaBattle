import React from 'react';
import {Button, Form} from "react-bootstrap";
import {useForm} from "react-hook-form";
import Navbar from "../navbar/Navbar";

const CreateRecipe = () => {

    const {register, handleSubmit, reset, formState:{errors}} = useForm()

    const createRecipe=(data)=>{
        console.log(data)
        const token = localStorage.getItem('REACT_TOKEN_AUTH_KEY');
        console.log(token)

        const requestOptions = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${JSON.parse(token)}`
            },
            body: JSON.stringify(data)
        }

        fetch('http://127.0.0.1:5000/recipe/recipes', requestOptions)
            .then(res => res.json())
            .then(data => reset())
            .catch(err => console.log(err))

    }

    return (
        <div>
            <Navbar/>
            <div className="container">
                <h1>Create Recipe Page</h1>
                <form>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text"
                                      {...register('title', { required: true, maxLength: 25 })}/>
                    </Form.Group>
                    {errors.title && <p style={{ color: 'red' }}><small>Необходимо название</small></p>}
                    {errors.title?.type === "maxLength" && <p style={{ color: 'red' }}>
                        <small>Название может быть меньше 25 символов!</small>
                    </p>}
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={5}
                                      {...register('description', { required: true, maxLength: 255 })}/>
                    </Form.Group>
                    {errors.description && <p style={{ color: 'red' }}><small>Необходимо описание</small></p>}
                    {errors.description?.type === "maxLength" && <p style={{ color: 'red' }}>
                        <small>Описание может быть меньше 255 символов!</small></p>}
                    <Form.Group>
                        <Button variant="primary" onClick={handleSubmit(createRecipe)}>Save</Button>
                    </Form.Group>

                </form>
            </div>

        </div>
    );
};

export default CreateRecipe;
