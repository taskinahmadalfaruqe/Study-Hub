import { AiFillDelete } from "react-icons/ai"
import { MdEdit } from "react-icons/md"
import { BsFillEyeFill } from "react-icons/bs"
import PropTypes from 'prop-types'
import { useContext } from "react"
import { AuthContext } from "../Provider/AuthProvider"
import Swal from "sweetalert2"
import {  useNavigate } from "react-router-dom"

const LodeAssignment = ({ singleAssignment }) => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    
    const { _id, assignmentCreatorEmail, assignmentTitle, description, difficulty, imageURL, lastDateOfSubmition, marks, lastDateOfSubmission } = singleAssignment;

    // HANDLE DELETE AN ASSIGNMENT 
    const handelDelete = (id, email) => {
        const userEmail = user?.email;
        const query = userEmail === email;
        if (query) {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://study-hub-bice.vercel.app/newAssignment/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount == 1) {
                                navigate('/')
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
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

                }
            });
            console.log("You Can Delete Assignment", true)
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Only The Assignment Creator Is Able To Delete The Assignment',
                timer: 2500
            })
        }
    }

    // HANDEL UPDATE AN ASSIGNMENT 
    const handleUpdate = (id, email) => {
        const userEmail = user?.email;
        const query = userEmail === email;
        if (!query) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Only The Assignment Creator Is Able To Update The Assignment',
                timer: 2500
            })
        } else {
            navigate(`/updateAssignment/${id}`)
        }
    }


    const handleDetails = (id) => {
        navigate(`/assignmentDetails/${id}`)
    }
    return (
        <div className='min-h-20 rounded p-2 flex gap-2 flex-col justify-between border border-blueColor relative transform transition-transform hover:scale-105 hover:z-10'>
            <div className='absolute top-1 right-1'>
                <button
                    onClick={() => handelDelete(_id, assignmentCreatorEmail)}
                    className="bg-orangeColor text-2xl p-2 w-full rounded-md text-whiteColor hover:bg-whiteColor hover:text-orangeColor transition-all duration-300 border border-orangeColor">
                    <AiFillDelete></AiFillDelete>
                </button>
            </div>

            <div>
                <img src={imageURL} alt="AssignmentImage" className='rounded-md h-52 md:h-80 w-[100%]' />
            </div>

            <div className='p-5 flex-1 flex flex-col justify-between bg-plataniamColor rounded-md space-y-3'>
                <div>
                    <h2 className='text-2xl font-bold text-blueColor'>{assignmentTitle}</h2>
                </div>

                <div>
                    <p className='text-xl'>Assignment Creator:</p>
                    <p>{assignmentCreatorEmail}</p>
                </div>

                <div className='text-xl'>
                    <div>{description.length > 50 ?
                        (<p>{description.slice(0, 55)}..........</p>)
                        :
                        (description)}
                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-2 justify-around items-center text-center'>
                    <div className=" bg-whiteColor p-1 px-3 rounded-md flex flex-row gap-5 w-full justify-center items-center lg:flex-col lg:gap-1 lg:w-fit">
                        <p className='text-blueColor font-semibold uppercase text-lg'>difficulty</p>
                        <p>{difficulty}</p>
                    </div>
                    <div className=" bg-whiteColor p-1 px-3 rounded-md flex flex-row gap-5 w-full justify-center items-center lg:flex-col lg:gap-1 lg:w-fit">
                        <p className='text-blueColor font-semibold uppercase text-lg'>Marks</p>
                        <p>{marks}</p>
                    </div>
                    <div className=" bg-whiteColor p-1 px-3 rounded-md flex flex-row gap-5 w-full justify-center items-center lg:flex-col lg:gap-1 lg:w-fit">
                        <p className='text-blueColor font-semibold uppercase text-lg'>Last Date</p>
                        <div>
                            {lastDateOfSubmition?.length > 10 ? lastDateOfSubmition.slice(0, 10) : lastDateOfSubmission}
                        </div>
                    </div>
                </div>

                <div className="flex justify-between gap-5 pt-5">
                    <button
                        onClick={() => handleUpdate(_id, assignmentCreatorEmail)}
                        className="bg-blueColor p-2 w-full rounded-md text-whiteColor hover:bg-whiteColor hover:text-blueColor transition-all duration-300 border border-blueColor flex justify-center items-center text-3xl font-bold">
                        <MdEdit></MdEdit>
                    </button>
                    <button
                        onClick={() => handleDetails(_id)}
                        className="bg-blueColor p-2 w-full rounded-md  text-whiteColor hover:bg-whiteColor hover:text-blueColor transition-all duration-300 border border-blueColor flex justify-center items-center text-3xl font-bold">
                        <BsFillEyeFill></BsFillEyeFill>
                    </button>
                </div>
            </div>
        </div>
    )
}

LodeAssignment.propTypes = {
    singleAssignment: PropTypes.object.isRequired
}

export default LodeAssignment