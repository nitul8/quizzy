import React from "react";
import {Link} from "react-router-dom";

import Button from "../components/Button";

const Home = () => {
    return (
        <div className="w-full min-h-screen flex justify-center items-center relative">
            <div className="max-w-5xl flex flex-col md:flex-row items-center justify-center bg-white shadow-2xl rounded-xl p-8 md:p-12">
                {/* Left Side - Text Content */}
                <div className="text-center md:text-left space-y-6 max-w-xl">
                    <p className="text-2xl font-medium text-gray-800">
                        Introducing{" "}
                        <span className="text-purple-600 font-extrabold">
                            Instructional Suite
                        </span>
                    </p>
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
                        "I had no idea Quizzy <br className="hidden md:block" />{" "}
                        could do that."
                    </h1>
                    <div className="border-t border-gray-300 w-20 mx-auto md:mx-0 my-4"></div>
                    <p className="text-gray-700 text-lg">
                        Create and deliver bell-to-bell curriculum{" "}
                        <br className="hidden md:block" />
                        resources that meet the needs of every student.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-8">
                        {/* Primary Button */}
                        <Button to="/learn" className="bg-gray-900 text-white">
                            Get Started
                        </Button>

                        <Button
                            to="/explore"
                            className="bg-white text-gray-900 border border-gray-300"
                        >
                            Explore Features
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
