import SeaField from './pages/SeaFieldPage/SeaField'
import {BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import ChessPage from "./pages/ChessPage/ChessPage";
import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import Error from "./pages/Error";
import SeaFieldPage from "./pages/SeaFieldPage/SeaFieldPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import CreateRecipe from "./Recipe/CreateRecipe";


function App() {
    return (
          <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/seafield" element={<SeaFieldPage/>}/>
              <Route path="/chess" element={<ChessPage/>}/>
              <Route path="/signup" element={<SignUpPage/>}/>
              <Route path="/login" element={<LoginPage/>}/>
              <Route path="/admin" element={<CreateRecipe/>}/>

          </Routes>
  );
}

export default App;
