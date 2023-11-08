import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

const TakeAssignmenPage = () => {

    const navigate = useNavigate();
    const assignmentData = useLoaderData();
    const { user } = useContext(AuthContext);

    // GET CURRENT DATE AND TIME
    const currentDate = new Date();
    const date = currentDate.toDateString();
    const time = currentDate.toLocaleTimeString();

    const { assignmentTitle, imageURL, marks} = assignmentData;
    const submitDate = date + ' ' + time
    const submitBy = user?.email;


    const handelSubmit = (e) => {
        e.preventDefault();
        const formSubmitData = new FormData(e.currentTarget);
        const note = formSubmitData.get('note');
        const projectFile  = formSubmitData.get('project');
        const submitAssignmentData = {
            assignmentTitle,
            submitBy,
            marks,
            submitDate,
            note,
            projectFile ,
            imageURL,
            status: "pending",
        }
        fetch("https://study-hub-bice.vercel.app/submitedAssignment", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(submitAssignmentData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your Response Submit SuccessFully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/assignment')
                } else {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div className="my-10">
            <div>
                <div className="space-y-4 w-full md:w-2/3  mx-auto mt-5">
                    <div className="bg-whiteColor p-2 rounded-md border border-orangeColor">
                        <h2 className="text-center font-Rancho text-blueColor text-5xl">Submit Your Response</h2>
                        <div className="my-10">
                            <form
                                onSubmit={handelSubmit}
                                className="space-y-5 mb-5 text-blackColor"
                                encType="multipart/form-data">
                                <div className="flex flex-col lg:flex-row gap-2  w-full">
                                    <div className="flex justify-start flex-col p-1 flex-1">
                                        <label htmlFor="note">Enter Comment About Your Presentation</label>
                                        <textarea 
                                        required 
                                        type="text" 
                                        name="note" 
                                        id="note" 
                                        rows="4" 
                                        cols="50"
                                        placeholder="Enter Your Comment" 
                                        className="p-1 rounded-sm mt-2 focus:outline-none bg-plataniamColor" />
                                    </div>
                                    <div className="flex justify-start flex-col p-1 flex-1">
                                        <label htmlFor="project">Add Your PDF Project Link:</label>
                                        <textarea 
                                        required 
                                        type="text" 
                                        name="project" 
                                        id="project" 
                                        rows="4" 
                                        cols="50"
                                        placeholder="Enter Your Project"
                                        className="p-1 rounded-sm mt-2 focus:outline-none bg-plataniamColor" />
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" className="bg-blueColor font-Rancho p-2 w-full rounded-md  text-whiteColor hover:bg-whiteColor hover:text-blueColor transition-all duration-300 border border-blueColor flex justify-center items-center text-3xl font-bold"> Submit Your Response</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TakeAssignmenPage;