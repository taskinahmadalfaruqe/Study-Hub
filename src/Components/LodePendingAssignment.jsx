
import PropTypes from 'prop-types'
import { Link, useNavigate } from 'react-router-dom';

const LodePendingAssignment = ({ singleAssignment }) => {
    const navigate=useNavigate();
    const {
        _id,
        assignmentTitle,
        marks,
        note,
        projectFile,
        status,
        submitBy,
        submitDate
    } = singleAssignment;
    console.log(singleAssignment)
    const handleGivMarks=(id)=>{
        navigate(`/givMark/${id}`)
        console.log("button clicked",id)
    }
    return (
        <div className="border border-orangeColor p-3 rounded-md text-center flex gap-5 justify-between flex-col lg:flex-row">
            <div className="flex-1 space-y-3">
                <div className="bg-whiteColor rounded-md text-xl font-semibold text-blueColor p-2">
                    <h2>{assignmentTitle}</h2>
                </div>
                <div className="bg-whiteColor rounded-md p-2">
                    <p className="text-blueColor font-semibold text-xl">Submit By:</p>
                    <p>{submitBy}</p>
                </div>

                <div className="flex gap-3 w-full">
                    <div className="bg-whiteColor rounded-md p-2 flex-1">
                        <p className="text-blueColor font-semibold text-xl">Marks</p>
                        <p>{marks}</p>
                    </div>
                    <div className="bg-whiteColor rounded-md p-2 flex-1">
                        <p className="text-blueColor font-semibold text-xl">Status</p>
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
                    <p className="text-xl text-blueColor font-semibold border-b border-orangeColor">Note For Project</p>
                    <p>{note}</p>
                </div>
                <div className="bg-whiteColor rounded-md p-2 h-[50%]">
                    <div className="h-full flex flex-col justify-between">
                        <p className="text-xl text-blueColor font-semibold border-b border-orangeColor h-[50%]">Read Submitted Project</p>
                        <div className='flex gap-5'>
                            <button className="bg-blueColor p-2 w-full rounded-md text-whiteColor h-[100%] hover:bg-whiteColor hover:text-blueColor transition-all duration-300 border border-blueColor flex justify-center items-center text-xl font-bold">
                                <Link to={projectFile} target="_blank">
                                    Read The Submission
                                </Link>
                            </button>
                            <button 
                            onClick={()=>handleGivMarks(_id)}
                            className="bg-blueColor p-2 w-full rounded-md text-whiteColor h-[100%] hover:bg-whiteColor hover:text-blueColor transition-all duration-300 border border-blueColor flex justify-center items-center text-xl font-bold">
                                Give Mark
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

LodePendingAssignment.propTypes = {
    singleAssignment: PropTypes.object.isRequired,
}

export default LodePendingAssignment