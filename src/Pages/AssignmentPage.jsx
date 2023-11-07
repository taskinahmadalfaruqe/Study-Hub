import { useEffect, useState } from "react";
import LodeAssignment from "../Components/LodeAssignment";

const AssignmentPage = () => {
    const [allAssignment, setAllAssignment] = useState([]);
    const [difficultyStatus, setDifficultyStatus] = useState("");


    useEffect(() => {
        let apiUrl = "https://study-hub-bice.vercel.app/newAssignment";

        if (difficultyStatus) {
            apiUrl += `?difficulty=${difficultyStatus}`;
        }

        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => setAllAssignment(data));
    }, [difficultyStatus]);

    if (allAssignment.length == 0) {
        return <div className="flex justify-center items-center h-[100vh] w-full">
            <span className="loading loading-spinner loading-lg text-orangeColor"></span>
        </div>
    }

    return (
        <div className="container my-5">
            <div>
                <h2 className="text-xl lg:text-3xl text-center md:px-10 lg:px-16 font-Raleway font-semibold uppercase text-blueColor">The Number Of Total Assignment is: {allAssignment.length} Every Valid User Can Post Or Take An Assignment</h2>
            </div>
            <div>
                <div className="flex justify-start flex-col p-1 flex-1">
                    <label htmlFor="difficulty">Assignment Difficulty:</label>
                    <select
                        name="difficulty"
                        id="difficulty"
                        className="p-1 rounded-sm mt-2 focus:outline-none"
                        onChange={(e) => setDifficultyStatus(e.target.value)}
                    >
                        <option value="">All Assignment</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">
                {
                    allAssignment?.map(singleAssignment => <LodeAssignment
                        key={singleAssignment._id}
                        singleAssignment={singleAssignment}
                    ></LodeAssignment>)
                }
            </div>
        </div>
    )
};

export default AssignmentPage;
