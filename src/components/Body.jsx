import { RouterProvider } from "react-router-dom";
import { appRoute } from "../routes/appRoute";

const Body = () => {
    console.log(appRoute)
    return (
        <>
         <RouterProvider router={appRoute} />
        </>
    )
}
export default Body;