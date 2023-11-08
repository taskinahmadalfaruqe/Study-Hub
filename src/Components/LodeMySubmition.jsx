import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

// import * as React from "react";
// import { motion } from "framer-motion"
// import { render } from "react-dom";
// <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />

// import "./animation.css";

const LodeMySubmition = ({ singleSubmition }) => {
    const {
        assignmentTitle,
        imageURL,
        marks,
        note,
        projectFile,
        status,
        submitBy,
        submitDate,
        giveMark,
        examinerName,
        feedback } = singleSubmition;
    return (
        <div>
            {
                status === "conform" ?
                    <div className="border border-greenColor p-3 rounded-md text-center flex gap-5 justify-between flex-col lg:flex-row">
                        <div className="flex-1 space-y-3">
                            <div className="bg-whiteColor rounded-md text-xl font-semibold text-blueColor p-2">
                                <h2>{assignmentTitle}</h2>
                            </div>
                            <div className="bg-whiteColor rounded-md p-2">
                                <p className="text-blueColor font-semibold text-xl">Submit By:</p>
                                <p>{submitBy}</p>
                            </div>

                            <div className="flex gap-3 w-full text-whiteColor">
                                <div className="bg-greenColor rounded-md p-2 flex-1">
                                    <p className=" font-semibold text-xl">Marks</p>
                                    <p>{giveMark}/{marks}</p>
                                </div>
                                <div className="bg-greenColor rounded-md p-2 flex-1">
                                    <p className=" font-semibold text-xl">Status</p>
                                    <p>{status}</p>
                                </div>
                            </div>
                            <div className="bg-whiteColor rounded-md p-2">
                                <p className="text-xl text-blueColor font-semibold">Submit Date</p>
                                <p>{submitDate}</p>
                            </div>
                        </div>

                        <div className="flex-1 space-y-3 min-h-full flex gap-3 flex-col justify-between">
                            <div className="bg-whiteColor rounded-md p-2 h-[50%]">
                                <p className="text-xl text-blueColor font-semibold border-b border-greenColor">Note For Project</p>
                                <p>{note}</p>
                            </div>
                            <div className="bg-whiteColor rounded-md p-2 h-[50%]">
                                <div className="h-full flex flex-col justify-between">
                                    <p className="text-xl text-blueColor font-semibold border-b border-greenColor">Read Submitted Project</p>
                                    <button
                                        className="bg-blueColor p-2 w-full rounded-md text-whiteColor h-[50%] hover:bg-whiteColor hover:text-blueColor transition-all duration-300 border border-blueColor flex justify-center items-center text-xl font-bold">
                                        <Link to={projectFile} target="_blank">
                                            Read The Submission
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 space-y-3 min-h-full flex gap-3 flex-col justify-between">
                            <div className="bg-whiteColor rounded-md p-2 h-[50%]">
                                <p className="text-xl text-blueColor font-semibold border-b border-greenColor">Examinar Name</p>
                                <p>{examinerName}</p>
                            </div>
                            <div className="bg-whiteColor rounded-md p-2 h-[50%]">
                                <div className="h-full flex flex-col justify-between">
                                    <p className="text-xl text-blueColor font-semibold border-b border-greenColor">Eximinar Feedback</p>
                                    <button className='p-3 w-full bg-greenColor rounded-md text-whiteColor'>{feedback}</button>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                    :
                    <div className='flex flex-col lg:flex-row justify-between gap-5 items-center border border-orangeColor rounded-md p-3 space-y-3 md:flex-col'>

                        <div className='w-full  lg:w-64  mx-auto bg-red-50'>
                            <img src={imageURL} alt="Project Image" className='rounded-md h-full w-full' />
                        </div>

                        <div className='w-full flex-1 flex flex-col md:flex-row gap-5'>

                            <div className='flex gap-3 flex-col flex-1'>
                                <h2 className='bg-whiteColor p-2 px-3 rounded-md text-center text-2xl font-semibold text-blueColor'>{assignmentTitle}</h2>
                                <div className='bg-whiteColor p-2 px-3 rounded-md text-center'>
                                    <p className='text-blueColor font-semibold text-xl'>Submit By:</p>
                                    <p>{submitBy}</p>
                                </div>
                                <div className='flex gap-5'>
                                    <div className='bg-whiteColor p-2 px-3 rounded-md text-center flex-1'>
                                        <p className='text-blueColor font-semibold text-xl'>Marks</p>
                                        <p>{marks}</p>
                                    </div>
                                    <div className='bg-whiteColor p-2 px-3 rounded-md text-center flex-1'>
                                        <p className='text-blueColor font-semibold text-xl'>Status</p>
                                        <p>{status}</p>
                                    </div>
                                </div>
                                <div className='bg-whiteColor p-1 px-3 rounded-md text-center flex flex-col justify-center items-center gap-1'>
                                    <p className='text-xl text-blueColor font-semibold'>Submit Date</p>
                                    <p>{submitDate}</p>
                                </div>
                            </div>

                            <div className='flex-1 text-center flex flex-col gap-5 justify-between '>
                                <div className='flex flex-col gap-5 bg-whiteColor p-2 px-3 rounded-md text-center flex-1'>
                                    <p className='text-blueColor text-xl font-semibold border-b border-orangeColor'>Your Comment That You Submit</p>
                                    <p>{note}</p>
                                </div>
                                <div className='flex flex-col gap-5 bg-whiteColor p-2 px-3 rounded-md text-center flex-1'>
                                    <p className='text-blueColor text-xl font-semibold border-b border-orangeColor'>Your Project That You Submit</p>
                                    <button
                                        className="bg-blueColor p-2 w-full rounded-md text-whiteColor h-[50%] hover:bg-whiteColor hover:text-blueColor transition-all duration-300 border border-blueColor flex justify-center items-center text-xl font-bold">
                                        <Link to={projectFile} target="_blank">
                                            Read The Submission
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

            }
        </div>


    )
}

LodeMySubmition.propTypes = {
    singleSubmition: PropTypes.object.isRequired
}

export default LodeMySubmition
