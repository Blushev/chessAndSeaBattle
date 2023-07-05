import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Error from "./pages/Error";

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import SeaFieldPages from "./pages/SeaFieldPage/SeaFieldPages";
import Chess from "./pages/ChessPage/Chess";

const index = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error />,
    },
    {
        path: "/seafield",
        element: <SeaFieldPages/>,
    },
    {
        path: "/chess",
        element: <Chess/>
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={index} />
  </React.StrictMode>
);

