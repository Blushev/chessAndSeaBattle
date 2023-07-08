import React, {useEffect, useState} from 'react';
import Navbar from "../../navbar/Navbar";
import {Link} from "react-router-dom";
import {useAuth} from "../../auth";
import recipe from "../../Recipe/Recipe";
import Recipe from "../../Recipe/Recipe";
import {Button, Form, Modal} from "react-bootstrap";
import {useForm} from "react-hook-form";

const LoggingHome =()=>{
    const[recipes, setRecipes]=useState([]);
    const[show, setShow] = useState(false)
    const {register, reset, handleSubmit, setValue,formState:{errors}}=useForm()
    const [recipeId, setRecipeId] = useState(0)


    useEffect(
        ()=>{
            fetch('http://127.0.0.1:5000/recipe/recipes')
                .then(res => res.json())
                .then(data => {
                    setRecipes(data)
                })
                .catch(err => console.log(err))
        },[]
    )

    const closeModal=()=>{
        setShow(false)
    }

    const showModal=(id)=>{
        setShow(true)
        setRecipeId(id)
        console.log("Hello " + id)

        recipes.map(
            (recipe)=>{
                if(recipe.id==id){
                    setValue('title', recipe.title)
                    setValue('description', recipe.description)
                }
            }
        )
    }

    let token=localStorage.getItem('REACT_TOKEN_AUTH_KEY')

    const updateRecipe=(data)=>{
        console.log(data)

        const requestOptions={
            method:'PUT',
            headers:{
                'content-type':'application/json',
                'Authorization':`Bearer ${JSON.parse(token)}`
            },
            body:JSON.stringify(data)
        }

        fetch(`http://127.0.0.1:5000/recipe/recipe/${recipeId}`,requestOptions)
            .then(res=>res.json())
            .then(data=>{
                console.log(data)

                const reload =window.location.reload()
                reload()
            })
            .catch(err=>console.log(err))
    }


    return(
        <div className="lorem">
            <Modal
            show={show}
            size={"lg"}
            onHide={closeModal}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Update Recipe
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                            <Button variant="primary" onClick={handleSubmit(updateRecipe)}>Save</Button>
                        </Form.Group>

                    </form>
                </Modal.Body>
            </Modal>
            <h1>Lorem, Congratulations</h1>
            {
                recipes.map(
                    (recipe, index) => (
                        <Recipe title={recipe.title}
                                key={index}
                                description={recipe.description}
                                onClick={()=>{showModal(recipe.id)}}
                        />
                    )
                )
            }
        </div>
    )
}


const LoggedOutHome = () =>{
    return(
        <div className="home container">
            <h1 className="heading">Welcome</h1>
            <Link to='/signup' className="btn btn-primary btn-lg">Зарегистрироваться</Link>
            <Link to='/login' className="btn btn-primary btn-lg">Войти</Link>

        </div>
    )
}


const HomePage = () => {
    const [logged] = useAuth()

    return (
        <div>
            <Navbar/>
            {logged ? <LoggingHome/> : <LoggedOutHome />}
        </div>
    )
};

export default HomePage;
