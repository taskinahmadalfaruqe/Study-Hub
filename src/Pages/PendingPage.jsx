import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import LodePendingAssignment from "../Components/LodePendingAssignment";
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();


const PendingPage = () => {
    const { isUserLoading } = useContext(AuthContext); // Fix the typo in variable name

    const [allPendingAssignment, setAllPendingAssignment] = useState([]);

    useEffect(() => {
        fetch("https://study-hub-bice.vercel.app/submitedAssignment/status?status=pending")
            .then((res) => res.json())
            .then((data) => setAllPendingAssignment(data));
    }, []);

    if (isUserLoading) {
        return (
            <div className="flex justify-center items-center h-[100vh] w-full">
                <span className="loading loading-spinner loading-lg text-orangeColor"></span>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="my-10 space-y-5">
                <div className="flex justify-center items-center text-center">
                    <p className="text-center font-Rancho text-blueColor text-5xl">Wait For Teacher Response: {allPendingAssignment.length}</p>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    {allPendingAssignment.length < 1 ? (
                        <div className="flex justify-center items-center my-10 flex-col gap-10">
                            <img src={"https://i.ibb.co/BwkBpQb/clipart1533013.png"} alt="No Data Found Image" />
                            <h2 className="text-center uppercase text-orangeColor text-2xl font-semibold max-w-2xl">
                                No Submit Request Is Pending For Response Till Now
                            </h2>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-6">
                            {
                            allPendingAssignment?.map(singleAssignment=> <LodePendingAssignment
                            key={singleAssignment._id}
                            singleAssignment={singleAssignment}
                            ></LodePendingAssignment>)
                        }
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PendingPage;
