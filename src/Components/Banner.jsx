/* eslint-disable react/no-unescaped-entities */
const Banner = () => {
    return (
        <div className="bg-plataniamColor dark:bg-darkbg">
            <div className=" container">
                <div className="relative">
                    <div className="rounded-lg overflow-hidden w-full h-full object-cover">
                        <img src={'https://i.ibb.co/nznJk6s/bg.jpg'} className="rounded-md object-cover w-full lg:h-[500px]" alt="BannerImage" />
                    </div>
                    <div className="absolute top-0 left-0 rounded-md w-full h-full flex justify-end items-center dark:bg-darkbg opacity-80">
                        <div className="max-w-xl flex flex-col gap-4 p-1">
                            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-blueColor dark:text-whiteColor text-center opacity-100">Unlocking the World of Knowledge: Your Study Destination</h1>
                            <p className="text-center mt-5 hidden md:flex text-blueColor dark:text-whiteColor">
                                "Welcome to our study haven, where learning meets innovation. Explore a wealth of resources, expert guidance, and interactive tools to enhance your academic journey. Whether you're a student seeking study tips, a researcher diving into the latest discoveries, or an enthusiast looking to expand your knowledge, we've got you covered!"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;