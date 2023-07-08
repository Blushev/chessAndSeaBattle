import React, {useState} from 'react';
import Navbar from "../../navbar/Navbar";
import {Button, Form} from "react-bootstrap";
import {Link} from "react-router-dom";

const LoginPage = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const loginUser = () => {
        console.log(username)
        console.log(password)

        setUsername('')
        setPassword('')
    }


    return (
        <div>
            <Navbar/>
            <div className="form">
                <h1>Login Page</h1>
                <form>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Введите имя"
                            value={username}
                            name="username"
                            onChange={(e)=>{setUsername(e.target.value)}}
                        />
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Введите пароль"
                            value={password}
                            name="password"
                            onChange={(e)=>{setPassword(e.target.value)}}
                        />
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <Button as="sub" variant="primary" onClick={loginUser}>Login</Button>
                    </Form.Group>
                    <br/>
                    <Form.Group>
                        <small>Нет аккаунта? <Link to={"/signup"}>Создай</Link> </small>
                    </Form.Group>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
