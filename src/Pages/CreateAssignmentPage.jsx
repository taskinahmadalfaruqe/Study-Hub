import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
// import axios from "axios";


const CreateAssignmentPage = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [startDate, setStartDate] = useState(new Date());
    const handelAddProduct = (e) => {
        e.preventDefault();
        const formSubmitData = new FormData(e.currentTarget);
        const assignmentCreatorEmail = user?.email;
        const assignmentTitle = formSubmitData.get('title');
        const description = formSubmitData.get('description');
        const imageURL = formSubmitData.get('imageURL');
        const marks = formSubmitData.get('marks');
        const difficulty = formSubmitData.get('difficulty');
        const lastDateOfSubmition = startDate;
        const newAssignment = { assignmentCreatorEmail, assignmentTitle, description, imageURL, marks, difficulty, lastDateOfSubmition}
        fetch("http://localhost:5000/newAssignment",{
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAssignment)
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your Assignment Uploded SuccessFully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/assignment')
            }else{
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
                        <h2 className="text-center font-Rancho text-blueColor text-5xl">Create A New Assignment</h2>
                        <p className="text-center font-Raleway text-blackColor text-lg my-3">Explore our e-shop is vast selection of cutting-edge technology and electronic products. From sleek smartphones and powerful laptops to innovative smart home gadgets, we offer the latest in digital innovation. Upgrade your life with reliable, high-quality devices, and stay ahead in the world of tech and electronics.</p>
                        <div>
                            <form className="space-y-5 mb-5 text-blackColor" onSubmit={handelAddProduct}>

                                <div className="flex flex-col lg:flex-row gap-2  w-full">
                                    <div className="flex justify-start flex-col p-1 flex-1">
                                        <label htmlFor="assignmentTitle">Assignment Title:</label>
                                        <input required type="text" name="title" id="assignmentTitle" placeholder="Enter Assignment Title" className="p-1 rounded-sm mt-2 focus:outline-none bg-plataniamColor" />
                                    </div>
                                    <div className="flex justify-start flex-col p-1 flex-1">
                                        <label htmlFor="description">Description</label>
                                        <input required type="text" name="description" id="description" placeholder="Enter Description" className="p-1 rounded-sm mt-2 focus:outline-none bg-plataniamColor" />
                                    </div>
                                </div>
                                <div className="flex flex-col lg:flex-row gap-2  w-full">
                                    <div className="flex justify-start flex-col p-1 flex-1">
                                        <label htmlFor="photoURL">Thumbnail Image URL:</label>
                                        <input required type="text" name="imageURL" id="photoURL" placeholder="Image URL" className="p-1 rounded-sm mt-2 focus:outline-none bg-plataniamColor" />
                                    </div>
                                    <div className="flex justify-start flex-col p-1 flex-1">
                                        <label htmlFor="marks">Marks:</label>
                                        <input required type="number" name="marks" id="marks" placeholder="Enter Marks" className="p-1 rounded-sm mt-2 focus:outline-none bg-plataniamColor" />
                                    </div>
                                </div>
                                <div className="flex flex-col lg:flex-row gap-2  w-full">
                                    <div className="flex justify-start flex-col p-1 flex-1">
                                        <label htmlFor="difficulty">Assignment Difficulty:</label>
                                        <select name="difficulty" id="difficulty" className="p-1 rounded-sm mt-2 focus:outline-none bg-plataniamColor">
                                            <option value="easy">Easy</option>
                                            <option value="medium">Medium</option>
                                            <option value="hard">Hard</option>
                                        </select>
                                    </div>
                                    <div className="flex justify-start flex-col p-1 flex-1">
                                        <label htmlFor="submitDate">Deu Date:</label>
                                        {/* <input required type="date" name="date" id="submitDate" placeholder="Select Date" className="p-1 rounded-sm mt-2 focus:outline-none" /> */}
                                        <DatePicker id="submitDate" selected={startDate} onChange={(date) => setStartDate(date)} className="p-1 rounded-sm mt-2 focus:outline-none bg-plataniamColor w-full" />

                                    </div>
                                </div>
                                <div>
                                    <button type="submit" className="font-Rancho bg-blueColor text-white w-full border border-blueColor rounded-sm text-xl "> Add New Assignment</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CreateAssignmentPage;