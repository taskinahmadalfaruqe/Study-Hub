import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import LodeMySubmition from "../Components/LodeMySubmition";


const MyAssignmentPage = () => {
    const { user, isUserLoding } = useContext(AuthContext);
    const [mysubmit, setMySubmit] = useState([]);
    const userEmail = user?.email;
    useEffect(() => {
        fetch(`https://study-hub-bice.vercel.app/submitedAssignment?user=${userEmail}`)
            .then(res => res.json())
            .then(data => setMySubmit(data))
    }, [userEmail])
    if (isUserLoding) {
        return <div className="flex justify-center items-center h-[100vh] w-full">
            <span className="loading loading-spinner loading-lg text-orangeColor"></span>
        </div>
    }
    console.log(mysubmit)
    return (
        <div className="container">
            <h2 className="text-center uppercase mx-auto text-blueColor mt-5 text-2xl font-semibold max-w-2xl">All Assignment Here That You Submit Yeat Now</h2>
            <div>
                {
                    mysubmit?.length === 0 ?
                        (<div className="flex justify-center items-center my-10 flex-col gap-10">
                            <img src={"https://i.ibb.co/BwkBpQb/clipart1533013.png"} alt="No Data Found Image" />
                            <h2 className="text-center uppercase text-orangeColor text-2xl font-semibold max-w-2xl">You Did Not Submit Any Response Till Now</h2>
                        </div>)
                        :
                        (<div className="grid grid-cols-1 gap-10 my-10">
                            {
                                mysubmit.map(singleSubmition => <LodeMySubmition
                                    key={singleSubmition._id}
                                    singleSubmition={singleSubmition}
                                ></LodeMySubmition>)
                            }
                        </div>)
                }
            </div>
        </div>
    );
};


export default MyAssignmentPage;