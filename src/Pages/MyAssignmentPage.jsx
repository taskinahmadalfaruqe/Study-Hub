import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const MyAssignmentPage = () => {
    const {user,isUserLoding}=useContext(AuthContext);
    const [mysubmit, setMySubmit]=useState([]);
    const userEmail= user?.email;
    useEffect(()=>{
        fetch(`https://study-hub-bice.vercel.app/submitedAssignment?user=${userEmail}`)
        .then(res=>res.json())
        .then(data=> setMySubmit(data))
    },[userEmail])
    if (isUserLoding) {
        return <div className="flex justify-center items-center h-[100vh] w-full">
            <span className="loading loading-spinner loading-lg text-orangeColor"></span>
        </div>
    }
    console.log(mysubmit.length)
    return (
        <div className="container">
            <h2>All Assignment Here That You Submit Yeat Now</h2>
            <div>
                {mysubmit.map(val=> <p key={val._id}>{val._id}</p>)}
            </div>
        </div>
    );
};

export default MyAssignmentPage;