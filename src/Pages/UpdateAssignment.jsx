import { useContext} from "react";
import { AuthContext } from "../Provider/AuthProvider";


const UpdateAssignment = () => {
    const { user } = useContext(AuthContext);
    const handelAddProduct = (e) => {
        e.preventDefault();
        const formSubmitData = new FormData(e.currentTarget);
        const email = user?.email;
        const assignmentTitle = formSubmitData.get('title');
        const description = formSubmitData.get('description');
        const imageURL = formSubmitData.get('imageURL');
        const marks = formSubmitData.get('marks');
        const diffeculty = formSubmitData.get('diffeculty');
        const date = formSubmitData.get('date');
        const status = formSubmitData.get('status');
        const newAssignment = { email, assignmentTitle, description, imageURL, marks, diffeculty, date, status }
        console.log(newAssignment)
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
                                        <input required type="text" name="title" id="assignmentTitle" placeholder="Enter Assignment Title" className="p-1 rounded-sm mt-2 focus:outline-none" />
                                    </div>
                                    <div className="flex justify-start flex-col p-1 flex-1">
                                        <label htmlFor="description">Description</label>
                                        <input required type="text" name="description" id="description" placeholder="Enter Description" className="p-1 rounded-sm mt-2 focus:outline-none" />
                                    </div>
                                </div>
                                <div className="flex flex-col lg:flex-row gap-2  w-full">
                                    <div className="flex justify-start flex-col p-1 flex-1">
                                        <label htmlFor="photoURL">Thumbnail Image URL:</label>
                                        <input required type="text" name="imageURL" id="photoURL" placeholder="Image URL" className="p-1 rounded-sm mt-2 focus:outline-none" />
                                    </div>
                                    <div className="flex justify-start flex-col p-1 flex-1">
                                        <label htmlFor="marks">Marks:</label>
                                        <input required type="number" name="marks" id="marks" placeholder="Enter Marks" className="p-1 rounded-sm mt-2 focus:outline-none" />
                                    </div>
                                </div>
                                <div className="flex flex-col lg:flex-row gap-2  w-full">
                                    <div className="flex justify-start flex-col p-1 flex-1">
                                        <label htmlFor="diffeculty">Assignment Difficulty:</label>
                                        <select name="diffeculty" id="diffeculty" className="p-1 rounded-sm mt-2 focus:outline-none">
                                            <option value="easy">Easy</option>
                                            <option value="medium">Medium</option>
                                            <option value="hard">Hard</option>
                                        </select>
                                    </div>
                                    <div className="flex justify-start flex-col p-1 flex-1">
                                        <label htmlFor="submitDate">Deu Date:</label>
                                        <input required type="date" name="date" id="submitDate" placeholder="Select Date" className="p-1 rounded-sm mt-2 focus:outline-none" />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-start flex-col p-1 flex-1">
                                        <label htmlFor="assignmentStatus">Assignment Status:</label>
                                        <select name="status" id="assignmentStatus" className="p-1 rounded-sm mt-2 focus:outline-none">
                                            <option value="pending">Pending....</option>
                                        </select>
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

export default UpdateAssignment;