import { createHashRouter } from "react-router-dom";
import App from "../App";
import A from "../views/A";
import B from "../views/B";
import B1 from "../views/B1";
import B2 from "../views/B2";
import C from "../views/C";
import About from "../components/About";
import NotFound from "../components/NotFound/NotFound";


const router = createHashRouter([
    {
        path: "*",
        element: <NotFound />
    },
    {
        path: "/",
        element: <App />
    },
    {
        path: "/a",
        element: <A />
    },
    {
        path: "/b",
        element: <B />,
        children: [
            {
                path: "/b/b1",
                element: <B1 />
            },
            
        ]
    },
    {
        path: "/b2",
        element: <B2 />
    },
    {
        path: "/c",
        element: <C />
    },
    {
        path: "/about",
        element: <About />
    },
]);

export default router;