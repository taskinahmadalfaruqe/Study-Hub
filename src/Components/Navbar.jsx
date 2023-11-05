import { Link, NavLink } from "react-router-dom";
import { LiaBarsSolid } from "react-icons/lia";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
    const { user, handelLogOut } = useContext(AuthContext);

    const NavBar = (
        <div className="flex flex-col gap-1 xl:flex-row justify-start lg:justify-center lg:items-center">
            <NavLink
                to={"/"}
                className={({ isActive }) =>
                    isActive
                        ? "bg-blueColor font-semibold text-lg uppercase text-whiteColor p-1 px-3 rounded-md"
                        : " hover:bg-plataniamColor font-semibold text-lg uppercase text-blackColor p-1 px-3 round" +
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
                        : " hover:bg-plataniamColor font-semibold text-lg uppercase text-blackColor p-1 px-3 rounded-md"
                }
            >Assignment
            </NavLink>
            <NavLink
                to={"/myAssignment"}
                className={({ isActive }) =>
                    isActive
                        ? "bg-blueColor font-semibold text-lg uppercase text-whiteColor p-1 px-3 rounded-md"
                        : " hover:bg-plataniamColor font-semibold text-lg uppercase text-blackColor p-1 px-3 round" +
                        "ed-md"
                }
            >
                My Submition
            </NavLink>
            <NavLink
                to={"/createAssignment"}
                className={({ isActive }) =>
                    isActive
                        ? "bg-blueColor font-semibold text-lg uppercase text-whiteColor p-1 px-3 rounded-md"
                        : " hover:bg-plataniamColor font-semibold text-lg uppercase text-blackColor p-1 px-3 round" +
                        "ed-md"
                }
            >
                Create Assignment
            </NavLink>

            <div>
                {user ? (
                    <div className="flex flex-col xl:flex-row gap-2 justify-center items-center">
                        <div className="w-14 h-14 rounded-full border border-blueColor overflow-hidden">
                            {user ? (user && (user.photoURL ?
                                <img className="w-full h-full" src={user.photoURL} alt="User" /> : <img src="https://i.ibb.co/2nC8FF4/user.webp"></img>))
                                :
                                <img src="https://i.ibb.co/2nC8FF4/user.webp" className="w-full h-full" ></img>}
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
        <div className="container max-w-7xl font-Oswald flex justify-between items-center py-2 ">
            <div className="  logo  text-2xl font-bold text-blueColor">
                <Link to={"/"}>StudyHub</Link>
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
    );
};

export default Navbar;