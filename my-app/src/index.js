import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Error from "./pages/Error";


import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import SeaFieldPage from "./pages/SeaFieldPage/SeaFieldPage";
import ChessPage from "./pages/ChessPage/ChessPage";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <App/>
      </BrowserRouter>
  </React.StrictMode>
);

