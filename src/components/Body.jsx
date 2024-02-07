import { RouterProvider } from "react-router-dom";
import { appRoute } from "../routes/appRoute";

import 'react-toastify/dist/ReactToastify.css';

 

const Body = () => {

    return (
    <RouterProvider router={appRoute} />

    );
}
export default Body;