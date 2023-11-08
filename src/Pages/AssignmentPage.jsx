import { useEffect, useState } from "react";
import LodeAssignment from "../Components/LodeAssignment";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"

const AssignmentPage = () => {
    const [allAssignment, setAllAssignment] = useState([]);
    const [total, setTotal] = useState([]);
    const [difficultyStatus, setDifficultyStatus] = useState("");
    const [page, setpage] = useState(1)


    useEffect(() => {
        let apiUrl = `http://localhost:5000/assignments?page=${page}&limit=6&difficulty=${difficultyStatus}`;
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                setAllAssignment(data.assignments)
                setTotal(data.total)
            }
            );
    }, [difficultyStatus,page]);


    const neadPage = Math.ceil(total / 6);
    

    if (allAssignment?.length == 0) {
        return <div className="flex justify-center items-center h-[100vh] w-full">
            <span className="loading loading-spinner loading-lg text-orangeColor"></span>
        </div>
    }
    const handelPrevious = () => {
        if(page>1){
           setpage(page-1)
        }
    }
    const handelNext = () => {
        if(page<neadPage){
            setpage(page+1)
        }
        
    }

    return (
        <div className="container my-5">
            <div>
                <h2 className="text-xl lg:text-3xl text-center md:px-10 lg:px-16 font-Raleway font-semibold uppercase text-blueColor">The Number Of Total Assignment is: {total} Every Valid User Can Post Or Take An Assignment</h2>
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
            <div className="flex justify-end mt-10">
                <div className="join border border-blueColor p-2">
                    <button onClick={handelPrevious} className="join-item btn ">
                        <AiOutlineArrowLeft></AiOutlineArrowLeft>
                    </button>
                    {
                        Array(neadPage).fill(0).map((data, index) => {
                            const pageindex= index+1;
                            return (<button 
                                onClick={()=>setpage(pageindex)}
                                key={pageindex} 
                                className={`${pageindex === page?
                                "bg-blueColor text-white btn":"join-item btn"}`}>{pageindex}</button>)
                        })
                    }

                    <button onClick={handelNext} className="join-item btn ">
                        <AiOutlineArrowRight></AiOutlineArrowRight>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default AssignmentPage;
