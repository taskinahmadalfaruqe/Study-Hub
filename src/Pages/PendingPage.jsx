import { useContext, useEffect, useState } from "react";
import LodePendingAssignment from "../Components/LodePendingAssignment";
import { AuthContext } from "../Provider/AuthProvider";

const PendingPage = () => {
    
    const { isUserLoding } = useContext(AuthContext);
    const [allPendaingAssignment, setAllPendingAssignment] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/submitedAssignment/status?status=pending")
            .then(res => res.json())
            .then(data => setAllPendingAssignment(data))
    }, [setAllPendingAssignment])

    if (isUserLoding) {
        return <div className="flex justify-center items-center h-[100vh] w-full">
            <span className="loading loading-spinner loading-lg text-orangeColor"></span>
        </div>
    }

    return (
        <div className="container">
            <div className="my-10 space-y-5">
                <div className="flex justify-center items-center text-center">
                    <p className="text-center font-Rancho text-blueColor text-5xl">Wait For Teacher Response: {allPendaingAssignment.length}</p>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    {
                        allPendaingAssignment?.length < 1 ?
                            (<div className="flex justify-center items-center my-10 flex-col gap-10">
                                <img src={"https://i.ibb.co/BwkBpQb/clipart1533013.png"} alt="No Data Found Image" />
                                <h2 className="text-center uppercase text-orangeColor text-2xl font-semibold max-w-2xl">No Submit Request Is Pending For Response Till Now</h2>
                            </div>)
                            :
                            <div>
                                {
                                    allPendaingAssignment?.map(singleAssignment => <LodePendingAssignment
                                        key={singleAssignment._id}
                                        singleAssignment={singleAssignment}
                                    ></LodePendingAssignment>)
                                }
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default PendingPage;