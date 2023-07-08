import React, {useState} from 'react';
import Navbar from "../../navbar/Navbar";
import {Alert, Button, Form} from "react-bootstrap";
import './SignUpPage.css'
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import HomePage from "../HomePage/HomePage";

const SignUpPage = () => {

    const {register, handleSubmit, reset,formState:{errors}} = useForm()
    const [show, setShow] = useState(false)
    const [serverResponse, setServerResponse] = useState('')

    const submitForm=(data)=> {

        if (data.password === data.confirmPassword) {

            const body={
                username: data.username,
                email: data.email,
                password: data.password
            }

            const requestOptions = {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(body)
            }

            fetch('http://127.0.0.1:5000/auth/signup', requestOptions)
                .then(res => res.json())
                .then(data =>{
                    console.log(data)
                    setServerResponse(data.message)
                    setShow(true)
                })
                .catch(err => console.log(err))

            reset()
            window.location.href = '/'

        }
        else{
            alert("Пароль не совпадает")
        }
    }


    return (
        <div>
            <Navbar/>
            <div className="form">

                {show?
                    <>
                        <Alert variant="success" onClose={() => {setShow(false)
                        }} dismissible>
                            <p>
                                {serverResponse}
                            </p>
                        </Alert>

                        <h1>Sign Up Page</h1>

                    </>
                    :
                    <h1>Sign Up Page</h1>

                }


                <form>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Введите имя"
                            {...register("username",{required:true,maxLength:25})}
                        />
                        {errors.username && <span style={{color: "red"}}>Поле должно быть заполненным!</span>}
                        {errors.username?.type==="maxLength"&&<span style={{color: "red"}}>Максимальная длина 25 символов!</span>}
                    </Form.Group>

                    <br/>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Введите почту"
                            {...register("email",{required:true,maxLength:80})}
                        />
                        {errors.email && <span style={{color: "red"}}>Поле должно быть заполненным!</span>}
                        {errors.email?.type==="maxLength"&&<span style={{color: "red"}}>Максимальная длина 80 символов!</span>}

                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Введите пароль"
                            {...register("password",{required:true,minLength:8})}
                        />
                        {errors.password && <p style={{ color: "red" }}><small>Поле должно быть заполненным!</small></p>}
                        {errors.password?.type === "minLength" && <p style={{ color: "red" }}><small>Минимальная длина 8 символов!</small></p>}
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <Form.Label>Confirm password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Повторите пароль"
                            {...register("confirmPassword",{required:true,minLength:8})}
                        />
                        {errors.confirmPassword && <p style={{ color: "red" }}><small>Поле должно быть заполненным!</small></p>}
                        {errors.confirmPassword?.type === "minLength" && <p style={{ color: "red" }}><small>Минимальная длина 8 символов!</small></p>}

                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <Button as="sub" variant="primary" onClick={handleSubmit(submitForm)}>Sign Up</Button>
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <small>Уже есть аккаунт? <Link to={"/login"}>Войти</Link> </small>
                    </Form.Group>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;
