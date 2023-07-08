import React, {useState} from 'react';
import Navbar from "../../navbar/Navbar";
import {Button, Form} from "react-bootstrap";
import './SignUpPage.css'
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";

const SignUpPage = () => {

    const {register, watch, handleSubmit, reset,formState:{errors}} = useForm()


    const submitForm=(data)=>{
        console.log(data)
        reset()
    }

    console.log(watch("username"))

    return (
        <div>
            <Navbar/>
            <div className="form">
                <h1>Sign Up Page</h1>
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
