import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Error from "./pages/Error";

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import SeaFieldPage from "./pages/SeaFieldPage/SeaFieldPage";
import ChessPage from "./pages/ChessPage/ChessPage";

const index = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error />,
    },
    {
        path: "/seafield",
        element: <SeaFieldPage/>,
    },
    {
        path: "/chess",
        element: <ChessPage/>
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={index} />
  </React.StrictMode>
);

