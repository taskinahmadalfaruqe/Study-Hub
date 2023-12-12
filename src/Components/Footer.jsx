import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-blackColor mt-12 text-neutral-content border-t border-orangeColor">
            <div className="container w-full text-center">
                <div className="flex flex-col md:flex-row gap-5 justify-center md:justify-between items-center p-2 md:p-10">
                    <aside>
                        <img src={"https://i.ibb.co/Bqg6CFT/Screenshot-4-removebg-preview.png"} alt="SiteLogo" />
                        <p>StudyHub Industries Ltd.<br />Providing reliable tech since 1992</p>
                    </aside>
                    <nav>
                        <header className="footer-title text-whiteColor">You Can Also Visit</header>
                        <div className="grid grid-cols-1 xl:grid-cols-1 xl:grid-flow-col">
                            <NavLink
                                to={"/"}
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-blueColor font-semibold text-lg uppercase text-whiteColor p-1 px-3 rounded-md"
                                        : " hover:bg-whiteColor font-semibold text-lg uppercase text-orangeColor p-1 px-3 round" +
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
                                        : " hover:bg-whiteColor font-semibold text-lg uppercase text-orangeColor p-1 px-3 rounded-md"
                                }
                            >Assignment
                            </NavLink>
                            <NavLink
                                to={"/myAssignment"}
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-blueColor font-semibold text-lg uppercase text-whiteColor p-1 px-3 rounded-md"
                                        : " hover:bg-whiteColor font-semibold text-lg uppercase text-orangeColor p-1 px-3 round" +
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
                                        : " hover:bg-whiteColor font-semibold text-lg uppercase text-orangeColor p-1 px-3 round" +
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
                                        : " hover:bg-whiteColor font-semibold text-lg uppercase text-orangeColor p-1 px-3 round" +
                                        "ed-md"
                                }
                            >
                                Create Assignment
                            </NavLink>
                        </div>
                    </nav>
                </div>

            </div>
            <aside className="border-t border-orangeColor p-5">
                <p className=" container text-center text-2xl">Copyright &copy; 2023 - All right reserved by StudyHub Industries Ltd</p>
            </aside>
        </footer>
    );
};

export default Footer;