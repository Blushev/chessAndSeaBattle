import React, {useEffect, useState} from 'react';
import Navbar from "../../navbar/Navbar";
import {Link} from "react-router-dom";
import {useAuth} from "../../auth";
import recipe from "../../Recipe/Recipe";
import Recipe from "../../Recipe/Recipe";

const LoggingHome =()=>{
    const[recipes, setRecipes]=useState([]);

    useEffect(
        ()=>{
            fetch('http://127.0.0.1:5000/recipe/recipes')
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setRecipes(data)
                })
                .catch(err => console.log(err))
        },[]
    )

    return(
        <div className="lorem">
            <h1>Lorem, Congratulations</h1>
            {
                recipes.map(
                    (recipe) => (
                        <Recipe title={recipe.title} description={recipe.description}/>
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
