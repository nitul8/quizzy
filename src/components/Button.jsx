import React from "react";
import {Link} from "react-router-dom";

const Button = ({to, children, className = "bg-gray-900 text-white"}) => {
    return (
        <div className="relative inline-flex items-center justify-center md:gap-4 group">
            {/* Glowing Background */}
            <div className="absolute inset-0 duration-1000 opacity-60 transition-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200" />

            {/* Button */}
            <Link
                to={to}
                className={`group relative inline-flex items-center justify-center text-xs md:text-base rounded-xl px-8 py-3 font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30 ${className}`}
            >
                {children}
                {/* Arrow Icon */}
                <svg
                    aria-hidden="true"
                    viewBox="0 0 10 10"
                    height={10}
                    width={10}
                    fill="none"
                    className="mt-0.5 ml-2 -mr-1 stroke-current stroke-2"
                >
                    <path
                        d="M0 5h7"
                        className="transition opacity-0 group-hover:opacity-100"
                    />
                    <path
                        d="M1 1l4 4-4 4"
                        className="transition group-hover:translate-x-[3px]"
                    />
                </svg>
            </Link>
        </div>
    );
};

export default Button;
