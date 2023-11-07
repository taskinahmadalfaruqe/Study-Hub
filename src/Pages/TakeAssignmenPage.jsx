import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const TakeAssignmenPage = () => {
    const { user } = useContext(AuthContext);
    const submitBy = user?.email;
    console.log(user.email)
    const assignmentData = useLoaderData();
    // eslint-disable-next-line no-unused-vars
    const navigate = useNavigate();
    const currentDate = new Date();
    const date = currentDate.toDateString();
    const time = currentDate.toLocaleTimeString();
    const submitDate =date+' '+time
    const { lastDateOfSubmission, assignmentTitle, description, difficulty, imageURL, lastDateOfSubmition, marks,_id} = assignmentData;
    const submitAssignmentData = {
        _id,
        assignmentTitle,
        submitBy,
        marks,
        submitDate,
        status: "pending",
    }
    console.log(submitAssignmentData)
    
    
    return (
        <div className="container">
            <div>

            </div>
        </div>
    );
};

export default TakeAssignmenPage;