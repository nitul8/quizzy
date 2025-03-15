import React from "react";
import {Link} from "react-router-dom";

import logo from "../assets/logo.png";

const Navbar = () => {
    return (
        <nav className="w-full flex justify-center items-center py-4 fixed z-10">
            <div className="w-4/5 flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center">
                    <img src={logo} alt="Quizzy" className="w-20 h-auto" />
                    <p className="font-bold text-2xl">Quizzy</p>
                </div>

                {/* Navigation Links */}
                <div className="space-x-8 hidden md:flex">
                    <Link
                        to="/"
                        className="text-lg font-medium hover:scale-105 transition-transform duration-200"
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="text-lg font-medium hover:scale-105 transition-transform duration-200"
                    >
                        About
                    </Link>
                    <Link
                        to="/create"
                        className="text-lg font-medium hover:scale-105 transition-transform duration-200"
                    >
                        Create Room
                    </Link>
                    <Link
                        to="/join"
                        className="text-lg font-medium hover:scale-105 transition-transform duration-200"
                    >
                        Join Quiz
                    </Link>
                    <Link
                        to="/login"
                        className="text-lg font-medium hover:scale-105 transition-transform duration-200"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
