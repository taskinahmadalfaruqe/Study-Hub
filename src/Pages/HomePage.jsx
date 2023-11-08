/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import LodeAssignment from "../Components/LodeAssignment";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const HomePage = () => {
    const navigate = useNavigate()
    const [showAssignment, setShowAssignment] = useState([]);
    useEffect(() => {
        fetch('https://study-hub-bice.vercel.app/newAssignment')
            .then(res => res.json())
            .then(data => {
                if (data.length > 6) {
                    const newArray = data.slice(0, 6)
                    setShowAssignment(newArray)

                } else {
                    setShowAssignment(data)
                }
            })
    }, [])

    return (
        <div>
            <Banner></Banner>


            <div className="my-10 container">
                <h2 className="text-center uppercase mx-auto text-blueColor mt-5 text-3xl font-semibold max-w-2xl">Show Some Assignment</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">
                    {
                        showAssignment?.map(singleAssignment => <LodeAssignment
                            key={singleAssignment._id}
                            singleAssignment={singleAssignment}
                        ></LodeAssignment>)
                    }
                </div>
                <div className="mt-10">
                    <button
                        onClick={() => navigate("/assignment")}
                        className="bg-blueColor  p-2 w-full rounded-md text-whiteColor hover:bg-whiteColor hover:text-blueColor transition-all duration-300 border border-blueColor flex justify-center items-center text-2xl font-bold gap-2">
                        <p>Show All</p>
                        <AiOutlineArrowRight></AiOutlineArrowRight>
                    </button>
                </div>
            </div>

            <div className="container ">
                <h2 className="text-center uppercase mx-auto text-blueColor mt-5 text-3xl font-semibold max-w-2xl">Some Fetures</h2>
                <div className="flex flex-col gap-6 space-y-6 felx justify-center items-center">
                    <p className="max-w-2xl text-center mt-6">
                        Certainly! When developing an education web project, there are several features you can consider implementing to enhance the learning experience and make your platform more appealing to users. Here are some feature ideas for your education web project.
                    </p>
                    <div className="grid grid-cols-2 gap-5">
                        <div>
                            <span className="text-blueColor font-semibold text-2xl">01. User Authentication:</span>
                            <p className="pl-5">Allow users to create accounts, log in, and personalize their learning experience.</p>
                        </div>
                        <div>
                            <span className="text-blueColor font-semibold text-2xl">02. Course Management:</span>
                            <p className="pl-5">
                                Create and manage courses with descriptions and content.
                                <br />
                                Allow instructors to add lessons, assignments, and quizzes to courses.</p>
                        </div>
                        <div>
                            <span className="text-blueColor font-semibold text-2xl">03. Progress Tracking:</span>
                            <p className="pl-5">
                                Allow students to track their progress within courses.
                                <br />
                                Display completion status for lessons and assignments.</p>
                        </div>
                        <div>
                            <span className="text-blueColor font-semibold text-2xl">04. Discussion Forums:</span>
                            <p className="pl-5">
                                Create discussion boards for course-related questions and interactions.
                                <br />
                                Enable students and instructors to post and reply to discussions.
                            </p>
                        </div>
                        <div>
                            <span className="text-blueColor font-semibold text-2xl">05. Certificates and Badges:</span>
                            <p className="pl-5">
                                Issue certificates or badges upon course completion.
                                <br />
                                Allow users to display these achievements on their profiles.
                            </p>
                        </div>
                        <div>
                            <span className="text-blueColor font-semibold text-2xl">06.
                                Search and Filter</span>
                            <p className="pl-5">
                                Implement a robust search and filtering system to help users find courses and resources.
                            </p>
                        </div>
                    </div>
                    These five features provide the foundation for an educational web platform and can be further extended with additional functionalities as your project evolves.


                </div>
            </div>

            <div className="container my-14 flex flex-col gap-5">
                <h2 className="text-center uppercase mx-auto text-blueColor text-3xl font-semibold max-w-2xl ">Here Some Question And Answer About Our Activite</h2>
                <div className="flex flex-col gap-5">
                    <div tabIndex={0} className="collapse collapse-plus border border-whiteColor bg-whiteColor">
                        <div className="collapse-title text-xl font-medium">
                            What is the main purpose of this project?
                        </div >
                        <div className="collapse-content">
                            <p>The main purpose of a project focused on education for the web can vary depending on the specific goals and objectives of the project. However, common purposes for such projects might include:</p><br />

                            <p>
                                <span className="text-blueColor font-semibold text-2xl">Online Learning:</span>
                                To provide a platform for online learning, where students can access educational materials, courses, and resources remotely. This can include video lectures, quizzes, assignments, and more.
                            </p>
                            <br />
                            <p>
                                <span className="text-blueColor font-semibold text-2xl">Accessibility:</span>
                                To make educational content more accessible to a wider audience, including individuals who may not have access to traditional in-person educational opportunities.
                            </p>
                            <br />
                            <p>
                                <span className="text-blueColor font-semibold text-2xl">Flexibility:</span>
                                To offer flexible learning options, allowing students to learn at their own pace and on their own schedules.</p>
                            <br />
                            <p>
                                <span className="text-blueColor font-semibold text-2xl">Interactive Learning:</span>
                                To engage students in interactive and immersive learning experiences, which can include simulations, virtual labs, and other multimedia content.</p>
                            <br />
                            <p>
                                <span className="text-blueColor font-semibold text-2xl">Tracking Progress:</span>
                                To enable students and educators to track and monitor progress through the use of learning management systems (LMS) or similar tools.</p>
                            <br />
                            <p>
                                <span className="text-blueColor font-semibold text-2xl">Teacher Support:</span>
                                To provide tools and resources for educators to create, manage, and deliver educational content effectively.</p>
                            <br />
                            <p>
                                <span className="text-blueColor font-semibold text-2xl">Resource Sharing:</span>
                                To facilitate the sharing of educational resources, lesson plans, and best practices among educators and learners.</p>
                            <br />
                            <p>
                                <span className="text-blueColor font-semibold text-2xl">Engagement and Communication:</span>
                                To foster communication and collaboration between students, teachers, and peers through discussion forums, chat, and other communication tools.</p>
                            <br />
                            <p>
                                <span className="text-blueColor font-semibold text-2xl">Personalized Learning:</span>
                                To offer personalized learning experiences, tailored to the needs and abilities of individual students, often with the help of adaptive learning technologies.</p>
                            <br />
                            <p>
                                <span className="text-blueColor font-semibold text-2xl">Research and Analysis:</span>
                                To collect data on student performance and engagement to improve the quality of education and make data-driven decisions.</p>
                            <br />
                            <p>
                                <span className="text-blueColor font-semibold text-2xl">Lifelong Learning:</span>
                                To support lifelong learning by offering courses and resources for individuals of all ages and backgrounds.</p>
                            <br />
                            <p>The specific goals and features of the project will depend on the intended audience, the educational domain (e.g., K-12, higher education, vocational training, professional development), and the technology stack used to implement it. It's essential to define clear objectives and use cases for the project to meet the needs of learners and educators effectively.</p>

                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border border-whiteColor bg-whiteColor">
                        <div className="collapse-title text-xl font-medium">
                            Is every one asscess ths web?
                        </div >
                        <div className="collapse-content">
                            Yes, Every Valid user Can do it.

                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border border-whiteColor bg-whiteColor">
                        <div className="collapse-title text-xl font-medium">
                            Is every post or take assignment?
                        </div >
                        <div className="collapse-content">
                            Yes, Every Valid user Can do it.

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;