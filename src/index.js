import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import {BrowserRouter} from "react-router-dom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'new',
                element: <New />,
            },
            {
                path: 'diary/:id',
                element: <Diary />,
            },
            {
                path: 'edit',
                element: <Edit />,
            },
        ],
    },
]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <BrowserRouter>
//         <App/>
//     </BrowserRouter>
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}>
        <App />
    </RouterProvider>
);
