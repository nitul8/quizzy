import React from "react";
import {Link} from "react-router-dom";
import homebg from "../assets/homebg.png";

const Home = () => {
    return (
        <div className="w-full min-h-screen flex justify-center items-center">
            <img src={homebg} alt="" className="absolute bg-cover" />
            <div className="max-w-6xl w-full flex flex-col md:flex-row items-center">
                {/* Left Section */}
                <div className="md:w-1/2 text-center md:text-left space-y-4">
                    <p className="text-xl font-medium">
                        Introducing{" "}
                        <span className="text-purple-600 font-bold">
                            Instructional Suite
                        </span>
                    </p>
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                        "I had no idea Quizzy <br /> could do that."
                    </h1>
                    <p className="text-gray-500 text-lg">- Almost everybody</p>
                    <div className="border-t border-gray-300 w-20 my-4"></div>
                    <p className="text-gray-700 text-lg">
                        Create and deliver bell-to-bell curriculum <br />{" "}
                        resources that meet the needs of every student.
                    </p>
                    <div className="flex space-x-4 justify-center md:justify-start mt-6">
                        <Link
                            to="/signup"
                            className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-700 transition flex items-center"
                        >
                            <span className="mr-2">Sign up for free</span>
                            <img
                                src="https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/62fa641a161d3a38c7681d0e_Right%20Arrow%20Button.svg"
                                alt="Arrow"
                                className="w-5"
                            />
                        </Link>
                        <Link
                            to="/learn"
                            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg shadow-md hover:bg-gray-300 transition flex items-center"
                        >
                            <span className="mr-2">Learn more</span>
                            <img
                                src="https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/62fa6419161d3ac288681cdc_Purple%20Arrow%20Button.svg"
                                alt="Purple Arrow"
                                className="w-5"
                            />
                        </Link>
                    </div>
                </div>

                {/* Right Section: Image */}
                <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
                    <img
                        src={homebg}
                        alt="Quizzy Preview"
                        className="w-full max-w-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
