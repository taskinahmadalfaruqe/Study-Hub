import { Link, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { motion, useScroll } from "framer-motion";
import { IoIosArrowUp } from "react-icons/io";
import './styles.css'
import { useEffect, useState } from "react";

const MainLayouts = () => {
    const { scrollYProgress } = useScroll();
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 250) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const goToTop = () => {
        const delay = 500;
        const scrollStep = -window.scrollY / (delay / 15);
        const scrollInterval = setInterval(() => {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    }
    return (
        <div className="bg-plataniamColor text-blackColor dark:bg-darkbg dark:text-whiteColor">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

            <motion.div
                className="progress-bar z-[1111111]"
                style={{ scaleX: scrollYProgress }}
            />
            <div
                onClick={goToTop}
            >
                {
                    scrolled ?
                        <div className="backToTop_Show">
                            <Link>

                                <IoIosArrowUp className="text-whiteColor" ></IoIosArrowUp>
                            </Link>
                        </div>
                        : <div className="backToTop">
                            <Link>
                                <IoIosArrowUp className="text-whiteColor" ></IoIosArrowUp>
                            </Link>
                        </div>
                }

            </div>

        </div>
    );
};

export default MainLayouts;