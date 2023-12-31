import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import ErrorPage from "../Pages/ErrorPage";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import SignUpPage from "../Pages/SignUpPage";
import AssignmentPage from "../Pages/AssignmentPage";
import MyAssignmentPage from "../Pages/MyAssignmentPage";
import CreateAssignmentPage from "../Pages/CreateAssignmentPage";
import UpdateAssignment from "../Pages/UpdateAssignment";
import AssignmentDetails from "../Pages/AssignmentDetails";
import TakeAssignmenPage from "../Pages/TakeAssignmenPage";
import PendingPage from "../Pages/PendingPage";
import GiveMarkPage from "../Pages/GiveMarkPage";
import PrivetRouts from "./PrivetRouts";

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
                element: <PrivetRouts><MyAssignmentPage></MyAssignmentPage></PrivetRouts>
            },
            {
                path: '/createAssignment',
                element: <PrivetRouts><CreateAssignmentPage></CreateAssignmentPage></PrivetRouts>
            },
            {
                path: '/pendingAssignment',
                element: <PrivetRouts><PendingPage></PendingPage></PrivetRouts>
            },
            {
                path: '/givMark/:id',
                element: <PrivetRouts><GiveMarkPage></GiveMarkPage></PrivetRouts>,
                loader: ({params})=> fetch(`https://study-hub-bice.vercel.app/submitedAssignment/${params.id}`)
            },
            {
                path: '/updateAssignment/:id',
                element: <UpdateAssignment></UpdateAssignment>,
                loader: ({params})=> fetch(`https://study-hub-bice.vercel.app/newAssignment/${params.id}`)
            },
            {
                path: '/assignmentDetails/:id',
                element: <AssignmentDetails></AssignmentDetails>,
                loader: ({params})=> fetch(`https://study-hub-bice.vercel.app/newAssignment/${params.id}`)
            },
            {
                path: '/takeAssignment/:id',
                element: <PrivetRouts><TakeAssignmenPage></TakeAssignmenPage></PrivetRouts>,
                loader: ({params})=> fetch(`https://study-hub-bice.vercel.app/newAssignment/${params.id}`)
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
        ]
    },
   
])
export default Routs;