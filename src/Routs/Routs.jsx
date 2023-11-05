import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import ErrorPage from "../Pages/ErrorPage";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import SignUpPage from "../Pages/SignUpPage";
import AssignmentPage from "../Pages/AssignmentPage";
import MyAssignmentPage from "../Pages/MyAssignmentPage";
import CreateAssignmentPage from "../Pages/CreateAssignmentPage";

const Routs =createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts></MainLayouts>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <HomePage></HomePage>
            },
            {
                path: '/assignment',
                element: <AssignmentPage></AssignmentPage>
            },
            {
                path: '/myAssignment',
                element: <MyAssignmentPage></MyAssignmentPage>
            },
            {
                path: '/createAssignment',
                element: <CreateAssignmentPage></CreateAssignmentPage>
            },
        ]
    },
    {
        path: "/login",
        element: <LoginPage></LoginPage>,
        errorElement: <ErrorPage></ErrorPage>,
    },
    {
        path: "/signup",
        element: <SignUpPage></SignUpPage>,
        errorElement: <ErrorPage></ErrorPage>,
    },
])
export default Routs;