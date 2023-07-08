import React, {useState} from 'react';
import Navbar from "../../navbar/Navbar";
import {Button, Form} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {login} from "../../auth"

const LoginPage = () => {

    const {register,handleSubmit,reset,formState:{errors}} = useForm()

    const history = useNavigate()



    const loginUser = (data)=>{
        console.log(data)

        const requestOptions = {
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        }

        fetch('http://127.0.0.1:5000/auth/login',requestOptions)
            .then(res => res.json())
            .then(data => {
                console.log(data.access_token)

                if (data){
                    login(data.access_token)
                    history('/')
                }
                else{
                    alert('Неправильный пароль!')
                }
            })
        reset()
    }

    return (
        <div>
            <Navbar/>
            <div className="form">
                <h1>Login Page</h1>
                <form>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text"
                                      placeholder="Your username"
                                      {...register('username',{required:true,maxLength:25})}
                        />
                    </Form.Group>
                    {errors.username && <p style={{color:'red'}}><small>Username is required</small></p>}
                    {errors.username?.type === "maxLength" && <p style={{color:'red'}}><small>Имя пользователя не более 25 символов</small></p>}
                    <br></br>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"
                                      placeholder="Your password"
                                      {...register('password',{required:true,minLength:8})}
                        />
                    </Form.Group>
                    {errors.username && <p style={{color:'red'}}><small>Введите пароль</small></p>}
                    {errors.password?.type === "maxLength" && <p style={{color:'red'}}>
                        <small>Пароль должен быть больше 8 символов</small>
                    </p>}
                    <br></br>
                    <Form.Group>
                        <Button as="sub" variant="primary" onClick={handleSubmit(loginUser)}>Войти</Button>
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <small>Нет аккаунта? <Link to='/signup'>Создай</Link></small>
                    </Form.Group>

                </form>
            </div>
        </div>
    );
};

export default LoginPage;
