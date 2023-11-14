import ContactUs from '../Layout/Contact/Contact/ContactUs.jsx';
import Home from '../Layout/Home/Home/Home.jsx';
import Menu from '../Layout/Menu/Menu/Menu.jsx';
import Shop from '../Layout/Shop/Shop/Shop.jsx';
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
            {
                path: "/menu",
                element: <Menu />,
            },
            {
                path: "/shop",
                element: <Shop />,
            },
            {
                path: "/contact",
                element: <ContactUs />,
            },
        ],
    },
]);