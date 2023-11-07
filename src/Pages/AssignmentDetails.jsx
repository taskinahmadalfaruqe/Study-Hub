import { AiOutlineArrowRight,AiOutlineArrowLeft } from "react-icons/ai";
import { useLoaderData, useNavigate } from "react-router-dom";

const AssignmentDetails = () => {
    const assignmentData = useLoaderData();
    const navigate= useNavigate();
    const { lastDateOfSubmission, assignmentTitle, description, difficulty, imageURL, lastDateOfSubmition, marks, _id, } = assignmentData;
    return (
        <div className="container">
            <div className="p-5 rounded-md my-5 space-y-6 text-center">
                <div className="text-2xl md:text-3xl font-bold  max-w-3xl uppercase mx-auto">
                    <h2 >You Are Requested For <span className="text-orangeColor">{assignmentTitle} </span> Details</h2>
                </div>
                <div className="w-full flex justify-center items-center">
                    <img src={imageURL} alt="Assignment Image" className="max-h-[70vh] border border-orangeColor rounded-md" />
                </div>
                <div className="mt-5 space-y-4 lg:space-y-8">

                    <h2 className="text-2xl md:text-4xl font-bold text-blueColor">{assignmentTitle}</h2>

                    <div className='flex flex-col md:flex-row gap-2 justify-around items-center '>
                        <div className=" bg-whiteColor p-1 px-3 rounded-md flex flex-row gap-5 w-full justify-center items-center lg:flex-col lg:gap-3 lg:py-3 ">
                            <p className='text-blueColor font-semibold uppercase text-lg'>difficulty</p>
                            <p>{difficulty}</p>
                        </div>
                        <div className=" bg-whiteColor p-1 px-3 rounded-md flex flex-row gap-5 w-full justify-center items-center lg:flex-col lg:gap-3 lg:py-3 ">
                            <p className='text-blueColor font-semibold uppercase text-lg'>Marks</p>
                            <p>{marks}</p>
                        </div>
                        <div className=" bg-whiteColor p-1 px-3 rounded-md flex flex-row gap-5 w-full justify-center items-center lg:flex-col lg:gap-3 lg:py-3 ">
                            <p className='text-blueColor font-semibold uppercase text-lg'>Last Date</p>
                            <div>
                                {lastDateOfSubmition?.length > 10 ? lastDateOfSubmition.slice(0, 10) : lastDateOfSubmission}
                            </div>
                        </div>
                    </div>

                    <div className="text-xl font-semibold leading-10 ">
                        <p>{description}</p>
                    </div>

                    <div className="flex justify-between flex-col md:flex-row gap-5 md:pt-5 max-w-2xl mx-auto">
                        <button
                            onClick={()=>navigate("/assignment")}
                            className="bg-blueColor p-2 w-full rounded-md text-whiteColor hover:bg-whiteColor hover:text-blueColor transition-all duration-300 border border-blueColor flex justify-center items-center text-2xl font-bold gap-2">
                            <AiOutlineArrowLeft></AiOutlineArrowLeft>
                            <p>Back</p>
                        </button>
                        <button
                            onClick={()=> navigate(`/takeAssignment/${_id}`)}
                            className="bg-blueColor p-2 w-full rounded-md  text-whiteColor hover:bg-whiteColor hover:text-blueColor transition-all duration-300 border border-blueColor flex justify-center items-center text-2xl font-bold  gap-2">
                            <p>Take Assignment</p> 
                            <AiOutlineArrowRight></AiOutlineArrowRight>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AssignmentDetails;