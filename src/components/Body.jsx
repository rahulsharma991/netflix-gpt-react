import { RouterProvider } from "react-router-dom";
import { appRoute } from "../routes/appRoute";

const Body = () => {
    return (
        <>
         <RouterProvider router={appRoute} />
        </>
    )
}
export default Body;