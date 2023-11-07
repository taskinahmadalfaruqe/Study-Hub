import PropTypes from 'prop-types'

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
        submitDate } = singleSubmition;

    return (
        <div className='flex flex-col lg:flex-row justify-between gap-5 items-center border border-orangeColor rounded-md p-3 space-y-3'>
            <div className='w-full lg:w-52 max-h-72 mx-auto bg-red-50'>
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
                        <p>{projectFile}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

LodeMySubmition.propTypes = {
    singleSubmition: PropTypes.object.isRequired
}

export default LodeMySubmition
