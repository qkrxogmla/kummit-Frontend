import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>,
        children: [{
            path: 'createBand',
            element: <div>123</div>,
        }]
    },
])

export default router