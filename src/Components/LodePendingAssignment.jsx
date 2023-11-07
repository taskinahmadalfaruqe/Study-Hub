import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const LodePendingAssignment = ({ singleAssignment }) => {
    const {
        _id,
        assignmentTitle,
        // imageURL,
        marks,
        note,
        projectFile,
        status,
        submitBy,
        submitDate
    } = singleAssignment;
    const handelConform = (id) => {
        console.log(id)
    }
    console.log(singleAssignment)
    return (
        <div className="border border-orangeColor p-3 rounded-md text-center flex gap-5 justify-between flex-col lg:flex-row">

            <div className=' flex-1 space-y-3'>
                <div className='bg-whiteColor rounded-md text-xl font-semibold text-blueColor p-2'>
                    <h2>{assignmentTitle}</h2>
                </div>
                <div className='bg-whiteColor rounded-md p-2'>
                    <p className='text-blueColor font-semibold text-xl'>Submit By:</p>
                    <p>{submitBy}</p>
                </div>

                <div className='flex gap-3 w-full' >
                    <div className='bg-whiteColor rounded-md p-2 flex-1'>
                        <p className='text-blueColor font-semibold text-xl'>Marks</p>
                        <p>{marks}</p>
                    </div>
                    <div className='bg-whiteColor rounded-md p-2 flex-1'>
                        <p className='text-blueColor font-semibold text-xl'>Status</p>
                        <p>{status}</p>
                    </div>
                </div>
                <div className='bg-whiteColor rounded-md p-2'>
                    <p className='text-xl text-blueColor font-semibold'>Submit Date</p>
                    <p>{submitDate}</p>
                </div>
            </div>

            <div className=' flex-1 space-y-3 min-h-full flex  gap-3 flex-col  justify-between'>
                <div className='bg-whiteColor rounded-md p-2 h-[50%]'>
                    <p className='text-xl text-blueColor font-semibold border-b border-orangeColor'>Note For Project</p>
                    <p>{note}</p>
                </div>
                <div className='bg-whiteColor rounded-md p-2 h-[50%]'>
                    <div className='h-full flex  flex-col justify-between'>
                        <p className='text-xl text-blueColor font-semibold border-b border-orangeColor h-[50%] '>Read Submited Project</p>
                        <button className="bg-blueColor p-2 w-full rounded-md  text-whiteColor h-[50%] hover:bg-whiteColor hover:text-blueColor transition-all duration-300 border border-blueColor flex justify-center items-center text-xl font-bold">
                            <Link  to={projectFile} target="_blank">
                                Read The Submition
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex-1 space-y-3 h-full'>
                <form className='h-full flex justify-between flex-col gap-2'
                onSubmit={()=>handelConform(_id)}>
                    <div className="flex justify-start flex-col p-1 rounded-md bg-whiteColor flex-1">
                        <label htmlFor="name" className='text-xl text-blueColor font-semibold'>Examinar Name</label>
                        <input
                            required
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter  Name"
                            className="p-1 rounded-sm  focus:outline-none bg-plataniamColor" />
                    </div>

                    <div className="flex justify-start flex-col p-1 rounded-md bg-whiteColor flex-1">
                        <label htmlFor="giveMark" className='text-xl text-blueColor font-semibold'>Give Marks</label>
                        <input
                            required
                            type="number"
                            name="giveMark"
                            id="giveMark"
                            placeholder="Enter  Marks"
                            className="p-1 rounded-sm  focus:outline-none bg-plataniamColor" />
                    </div>

                    <div className="flex justify-start flex-col p-1 rounded-md bg-whiteColor flex-1">
                        <label htmlFor="feedback" className='text-xl text-blueColor font-semibold'>Give Feedback</label>
                        <input
                            required
                            type="text"
                            name="feedback"
                            id="feedback"
                            placeholder="Enter  Feedback"
                            className="p-1 rounded-sm  focus:outline-none bg-plataniamColor" />
                    </div>

                    <button type="submit" className="bg-blueColor  p-2 w-full rounded-md  text-whiteColor hover:bg-whiteColor hover:text-blueColor transition-all duration-300 border uppercase border-blueColor flex justify-center items-center text-xl font-bold">Submit</button>
                </form>
            </div>
        </div>
    )
}
LodePendingAssignment.propTypes = {
    singleAssignment: PropTypes.object.isRequired
}

export default LodePendingAssignment