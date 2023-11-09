import Home from '../Layout/Home/Home/Home.jsx';
import Main from './Main.jsx'
import {
    createBrowserRouter,
} from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
]);