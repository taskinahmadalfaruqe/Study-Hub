/* eslint-disable no-unused-vars */
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Swal from 'sweetalert2';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const GiveMarkPage = () => {
    const navigate = useNavigate()
    const singleAssignment = useLoaderData();

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

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
    console.log(projectFile)

    const handleConfirm = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const examinerName = data.get('name');
        const giveMark = data.get('giveMark');
        const feedback = data.get('feedback');

        if (giveMark >= 0 && giveMark <= marks) {
            const sendNewResponse = {
                examinerName,
                giveMark,
                feedback,
                assignmentTitle,
                marks,
                note,
                projectFile,
                status,
                submitBy,
                submitDate
            };
            fetch(`https://study-hub-bice.vercel.app/submitedAssignment/${_id}`, {
                method: "PATCH",
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify(sendNewResponse)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
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
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Sorry, Give Mark must be greater than or equal to 0 and less than or equal to Total Marks',
                timer: 2500
            });
        }
    };

    return (
        <div className='container my-10 flex flex-col  gap-10'>
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
                            <p className="text-xl text-blueColor font-semibold border-b border-orangeColor">Read Submitted Project</p>
                            <button
                                className="bg-blueColor p-2 w-full rounded-md text-whiteColor h-[50%] hover:bg-whiteColor hover:text-blueColor transition-all duration-300 border border-blueColor flex justify-center items-center text-xl font-bold">
                                <Link to={projectFile} target="_blank">
                                    Read The Submission
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex-1 space-y-3 h-full">
                    <form
                        className="h-full flex justify-between flex-col gap-2"
                        onSubmit={handleConfirm}>
                        <div className="flex justify-start flex-col p-1 rounded-md bg-whiteColor flex-1">
                            <label htmlFor="name" className="text-xl text-blueColor font-semibold">Examiner Name</label>
                            <input
                                required
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter Your Name"
                                className="p-1 rounded-sm focus:outline-none bg-platinumColor" />
                        </div>

                        <div className="flex justify-start flex-col p-1 rounded-md bg-whiteColor flex-1">
                            <label htmlFor="giveMark" className="text-xl text-blueColor font-semibold">Give Marks</label>
                            <input
                                required
                                type="number"
                                name="giveMark"
                                id="giveMark"
                                placeholder="Enter Marks"
                                className="p-1 rounded-sm focus:outline-none bg-platinumColor" />
                        </div>

                        <div className="flex justify-start flex-col p-1 rounded-md bg-whiteColor flex-1">
                            <label htmlFor="feedback" className="text-xl text-blueColor font-semibold">Give Feedback</label>
                            <input
                                required
                                type="text"
                                name="feedback"
                                id="feedback"
                                placeholder="Enter Feedback"
                                className="p-1 rounded-sm focus:outline-none bg-platinumColor" />
                        </div>

                        <button
                            type="submit"
                            className="bg-blueColor p-2 w-full rounded-md text-whiteColor hover:bg-whiteColor hover:text-blueColor transition-all duration-300 border uppercase border-blueColor flex justify-center items-center text-xl font-bold">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <div className='border border-orangeColor p-2 rounded-md mx-auto'>
                <Document
                    file={projectFile}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} />
                </Document>
                <p>
                    Page {pageNumber} of {numPages}
                </p>
            </div>
        </div>
    );
};

export default GiveMarkPage;
