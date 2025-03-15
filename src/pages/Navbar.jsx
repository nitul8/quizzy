import React, {useState} from "react";
import {Link} from "react-router-dom";
import {IoMdSearch} from "react-icons/io";

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleSearch = () => {
        setIsVisible((prev) => !prev);
    };

    return (
        <>
            <nav className="w-full flex justify-center items-center fixed z-10 ">
                <div className="w-4/5 flex justify-between items-center border-b py-2">
                    {/* Logo Section */}
                    <Link to="/" className="flex items-center">
                        <p className="font-extrabold text-6xl chewy-regular text-red-400 stroke-black">
                            Q
                        </p>
                        <p className="font-extrabold text-7xl chewy-regular text-blue-400 stroke-black">
                            u
                        </p>
                        <p className="font-extrabold text-7xl chewy-regular text-pink-400 stroke-black">
                            i
                        </p>
                        <p className="font-extrabold text-7xl chewy-regular text-yellow-400 stroke-black">
                            z
                        </p>
                        <p className="font-extrabold text-7xl chewy-regular text-green-400 stroke-black">
                            z
                        </p>
                        <p className="font-extrabold text-6xl chewy-regular text-white stroke-black">
                            y
                        </p>
                    </Link>

                    {/* Navigation Links */}

                    <div className="flex items-center space-x-3">
                        {/* Search Box */}
                        <div className="flex items-center justify-end relative">
                            <input
                                type="text"
                                className={`border rounded-full pl-4 pr-10 transition-all duration-300 ease-in-out ${
                                    isVisible
                                        ? "w-60 h-10 placeholder-opacity-100"
                                        : "w-10 h-10 opacity-0"
                                }`}
                                placeholder="Search..."
                            />
                            <IoMdSearch
                                className="absolute right-3 text-2xl cursor-pointer hover:scale-110 transition-transform duration-200"
                                onClick={toggleSearch}
                            />
                        </div>

                        {/* Sign-in Button */}
                        <Link
                            to="/signin"
                            className="cursor-pointer transition-all bg-lime-400 px-6 py-2 rounded-2xl border-lime-600 border-b-[4px] 
                        hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] 
                        active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
                        >
                            Sign in
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
