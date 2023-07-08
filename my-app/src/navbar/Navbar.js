import React from 'react';
import {createBrowserRouter, Link, Route, RouterProvider, Routes} from "react-router-dom";
import App from "../App";
import Error from "../pages/Error";
import SeaFieldPage from "../pages/SeaFieldPage/SeaFieldPage";
import ChessPage from "../pages/ChessPage/ChessPage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import Chess from "../pages/ChessPage/Chess";
import 'bootstrap/dist/css/bootstrap.min.css'



const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Игры</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/login">Войти</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/signup">Зарегистрироваться</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/chess">Шахматы</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/seafield">Морской бой</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
