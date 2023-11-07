import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";


const UpdateAssignment = () => {
    const update = useLoaderData();
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date());
    const { _id, assignmentTitle, description, imageURL, marks, difficulty, lastDateOfSubmition } = update

    const handleUpdateAssignment = (e) => {
        e.preventDefault();
        const formSubmitData = new FormData(e.currentTarget);
        const assignmentTitle = formSubmitData.get('title');
        const description = formSubmitData.get('description');
        const imageURL = formSubmitData.get('imageURL');
        const marks = formSubmitData.get('marks');
        const difficulty = formSubmitData.get('difficulty');
        const lastDateOfSubmition = startDate;
        const theUpdatedAssignment = { assignmentTitle, description, imageURL, marks, difficulty, lastDateOfSubmition }

        Swal.fire({
            title: "Are you sure?",
            text: "You Won't Be Update this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Update it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://study-hub-bice.vercel.app/newAssignment/${_id}`, {
                    method: "PATCH",
                    headers: {
                        'content-type': "application/json"
                    },
                    body: JSON.stringify(theUpdatedAssignment)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount == 1) {
                            navigate('/assignment')
                            Swal.fire({
                                title: "Updated!",
                                text: "Your Assignment Has Been Successfully Updated.",
                                icon: "success",
                                timer: "1500"
                            });
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Sorry Something Is Wrong',
                                timer: 2500
                            })
                        }
                    })
            }else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Sorry Something Is Wrong',
                    timer: 2500
                })
            }
          });

        
    }


    return (
        <div className="my-10">
            <div>
                <div className="space-y-4 w-full md:w-2/3  mx-auto mt-5">
                    <div className="bg-whiteColor p-2 rounded-md border border-orangeColor">
                        <h2 className="text-center font-Rancho text-blueColor text-5xl">Update The Assignment</h2>
                        <p className="text-center font-Raleway text-blackColor text-lg my-3">Explore our e-shop is vast selection of cutting-edge technology and electronic products. From sleek smartphones and powerful laptops to innovative smart home gadgets, we offer the latest in digital innovation. Upgrade your life with reliable, high-quality devices, and stay ahead in the world of tech and electronics.</p>
                        <div>
                            <form className="space-y-5 mb-5 text-blackColor" onSubmit={handleUpdateAssignment}>

                                <div className="flex flex-col lg:flex-row gap-2  w-full">
                                    <div className="flex justify-start flex-col p-1 flex-1">
                                        <label htmlFor="assignmentTitle">Assignment Title:</label>
                                        <input required type="text" defaultValue={assignmentTitle} name="title" id="assignmentTitle" placeholder="Enter Assignment Title" className="p-1 rounded-sm mt-2 focus:outline-none bg-plataniamColor" />
                                    </div>
                                    <div className="flex justify-start flex-col p-1 flex-1">
                                        <label htmlFor="description">Description</label>
                                        <input required type="text" defaultValue={description} name="description" id="description" placeholder="Enter Description" className="p-1 rounded-sm mt-2 focus:outline-none bg-plataniamColor" />
                                    </div>
                                </div>
                                <div className="flex flex-col lg:flex-row gap-2  w-full">
                                    <div className="flex justify-start flex-col p-1 flex-1">
                                        <label htmlFor="photoURL">Thumbnail Image URL:</label>
                                        <input required type="text" defaultValue={imageURL} name="imageURL" id="photoURL" placeholder="Image URL" className="p-1 rounded-sm mt-2 focus:outline-none bg-plataniamColor" />
                                    </div>
                                    <div className="flex justify-start flex-col p-1 flex-1">
                                        <label htmlFor="marks">Marks:</label>
                                        <input required type="number" defaultValue={marks} name="marks" id="marks" placeholder="Enter Marks" className="p-1 rounded-sm mt-2 focus:outline-none bg-plataniamColor" />
                                    </div>
                                </div>
                                <div className="flex flex-col lg:flex-row gap-2  w-full">
                                    <div className="flex justify-start flex-col p-1 flex-1">
                                        <label htmlFor="difficulty">Assignment Difficulty:</label>
                                        <select name="difficulty" defaultValue={difficulty} id="difficulty" className="p-1 rounded-sm mt-2 focus:outline-none bg-plataniamColor">
                                            <option value="easy">Easy</option>
                                            <option value="medium">Medium</option>
                                            <option value="hard">Hard</option>
                                        </select>
                                    </div>
                                    <div className="flex justify-start flex-col p-1 flex-1">
                                        <label htmlFor="submitDate">Deu Date:</label>
                                        <DatePicker id="submitDate" defaultValue={lastDateOfSubmition} selected={startDate} onChange={(date) => setStartDate(date)} className="p-1 rounded-sm mt-2 focus:outline-none bg-plataniamColor w-full" />

                                    </div>
                                </div>
                                <div>
                                    <button type="submit" className="font-Rancho bg-blueColor text-white w-full border border-blueColor rounded-sm text-xl "> Update An Assignment</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateAssignment;