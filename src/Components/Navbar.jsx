import { Link, NavLink } from "react-router-dom";
import { LiaBarsSolid } from "react-icons/lia";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { AiOutlineClose } from "react-icons/ai"

const Navbar = () => {
    const { user, handelLogOut } = useContext(AuthContext);
    const [clicked, setClicked] = useState(false)

    const handelUserInfo = () => {
        setClicked(!clicked)
    }
    const NavBar = (
        <div className="flex flex-col gap-1 xl:flex-row justify-start lg:justify-center lg:items-center">
            <NavLink
                to={"/"}
                className={({ isActive }) =>
                    isActive
                        ? "bg-blueColor font-semibold text-lg uppercase text-whiteColor p-1 px-3 rounded-md"
                        : " hover:bg-whiteColor font-semibold text-lg uppercase text-blackColor p-1 px-3 round" +
                        "ed-md"
                }
            >
                Home
            </NavLink>
            <NavLink
                to={"/assignment"}
                className={({ isActive }) =>
                    isActive
                        ? "bg-blueColor font-semibold text-lg uppercase text-whiteColor p-1 px-3 rounded-md"
                        : " hover:bg-whiteColor font-semibold text-lg uppercase text-blackColor p-1 px-3 rounded-md"
                }
            >Assignment
            </NavLink>
            <NavLink
                to={"/myAssignment"}
                className={({ isActive }) =>
                    isActive
                        ? "bg-blueColor font-semibold text-lg uppercase text-whiteColor p-1 px-3 rounded-md"
                        : " hover:bg-whiteColor font-semibold text-lg uppercase text-blackColor p-1 px-3 round" +
                        "ed-md"
                }
            >
                My Submition
            </NavLink>
            <NavLink
                to={"/pendingAssignment"}
                className={({ isActive }) =>
                    isActive
                        ? "bg-blueColor font-semibold text-lg uppercase text-whiteColor p-1 px-3 rounded-md"
                        : " hover:bg-whiteColor font-semibold text-lg uppercase text-blackColor p-1 px-3 round" +
                        "ed-md"
                }
            >
                Pending Response
            </NavLink>
            <NavLink
                to={"/createAssignment"}
                className={({ isActive }) =>
                    isActive
                        ? "bg-blueColor font-semibold text-lg uppercase text-whiteColor p-1 px-3 rounded-md"
                        : " hover:bg-whiteColor font-semibold text-lg uppercase text-blackColor p-1 px-3 round" +
                        "ed-md"
                }
            >
                Create Assignment
            </NavLink>
            <div>
                {user ? (
                    <div className="flex flex-col xl:flex-row gap-2 justify-center items-center">
                        <div
                            onClick={handelUserInfo}
                            className=" relative w-full flex justify-center items-center">
                            <div className="w-14 h-14 rounded-full border border-blueColor  cursor-pointer overflow-hidden">
                                {user ? (user && (user.photoURL ?
                                    <img className="w-full h-full" src={user.photoURL} alt="User" /> : <img src="https://i.ibb.co/2nC8FF4/user.webp"></img>))
                                    :
                                    <img src="https://i.ibb.co/2nC8FF4/user.webp" className="w-full h-full" ></img>}
                            </div>

                            {/* ABSOLUTE PART  */}
                            {
                                clicked ? <div className="top-0 left-[50%] -translate-x-[50%] -xl:translate-x-0  xl:top-14 xl:right-0 xl:w-[25vw] absolute z-20 border border-blueColor bg-plataniamColor rounded-md p-5 text-center  flex justify-center items-center gap-3 flex-col text-blackColor text-lg font-semibold">
                                    <div className="flex justify-end items-center w-full">
                                        <AiOutlineClose className="text-3xl font-bold text-whiteColor cursor-pointer bg-blueColor rounded-md hover:bg-whiteColor hover:text-blueColor border border-blueColor transition-all duration-300"></AiOutlineClose>
                                    </div>
                                    <div className="w-14 h-14 rounded-full border border-blueColor  cursor-pointer relative overflow-hidden">
                                        {user ? (user && (user.photoURL ?
                                            <img className="w-full h-full" src={user.photoURL} alt="User" /> : <img src="https://i.ibb.co/2nC8FF4/user.webp"></img>))
                                            :
                                            <img src="https://i.ibb.co/2nC8FF4/user.webp" className="w-full h-full" ></img>}
                                    </div>
                                    <div>
                                        <h2>{user.displayName}</h2>
                                        <h2>{user.email}</h2>
                                    </div>
                                    <Link>
                                        <button
                                            onClick={handelLogOut}
                                            className="btn border-blueColor bg-blueColor hover:bg-whiteColor hover:text-blueColor hover:border-blueColor font-semibold text-lg uppercase text-whiteColor p-1 px-3 rounded-md"
                                        >
                                            logout
                                        </button>
                                    </Link>
                                </div> : ""
                            }


                        </div>
                        <Link>
                            <button
                                onClick={handelLogOut}
                                className="btn border-blueColor bg-blueColor hover:bg-whiteColor hover:text-blueColor hover:border-blueColor font-semibold text-lg uppercase text-whiteColor p-1 px-3 rounded-md"
                            >
                                logout
                            </button>
                        </Link>
                    </div>
                ) : (
                    <Link to={"/login"}>
                        <button className="btn border-blueColor bg-blueColor hover:bg-whiteColor hover:text-blueColor hover:border-blueColor font-semibold text-lg uppercase text-whiteColor p-1 px-3 rounded-md">
                            login
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );

    return (
        <div className="bg-plataniamColor border-b border-orangeColor ">
            <div className="container  flex justify-between items-center">
                <div className="  logo  text-2xl font-bold text-blueColor">
                    <Link to={"/"}>
                        <img src={"https://i.ibb.co/4tHXVTF/android-chrome-192x192.png"} className="w-20" alt="logo" />
                    </Link>
                </div>

                <div className="dropdown">
                    <label
                        tabIndex={0}
                        className="btn btn-ghost xl:hidden text-2xl bg-plataniamColor text-blueColor"
                    >
                        <LiaBarsSolid></LiaBarsSolid>
                    </label>
                    <ul
                        tabIndex={0}
                        className="dropdown-content rounded-md  z-[10000] p-3 shadow bg-slate-100  absolute top-14 w-[100vw] md:w-[60vw] lg:w-[30vw] text-center right-0"
                    >
                        {NavBar}
                    </ul>
                </div>
                <div className="hidden xl:flex">
                    <ul className="menu menu-horizontal px-1">{NavBar}</ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;