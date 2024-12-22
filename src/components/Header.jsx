import React, { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <section className={`flex justify-between items-center p-4 my-5 mx-auto bg-gray-200 text-blue-950 max-w-screen-2xl rounded-full ${isMenuOpen ? 'nav-corners' : ''}`}>
            <div className="font-semibold text-2xl flex justify-center items-center gap-2">
                <div className="w-10 h-10 bg-blue-950 flex items-center justify-center cursor-pointer rounded-full">
                    <i className="bi bi-rocket-takeoff-fill text-white"></i>
                </div>
                <span>Leaders Access</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:block">
                <ul className="text-black flex justify-center items-center gap-5">
                    <li>Why Leaders Access?</li>
                    <li>Professional Services</li>
                    <li>Contact Us</li>
                </ul>
            </div>

            {/* Hamburger Menu */}
            <div className="lg:hidden flex items-center">
                <button onClick={toggleMenu} className="text-black text-2xl">
                    <i className={`bi ${isMenuOpen ? "bi-x" : "bi-list"}`}></i>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-20 left-0 right-0 bg-gray-200 p-4 lg:hidden mx-4 z-50 rounded-b-3xl">
                    {/* Navigation links aligned left */}
                    <ul className="flex flex-col items-start gap-2">
                        <li>Why Leaders Access?</li>
                        <li>Professional Services</li>
                        <li>Contact Us</li>
                    </ul>
                    {/* Group Login and Get Started buttons together, centered */}
                    <div className="flex justify-center items-center gap-2 mt-4">
                        <button className="px-4 py-2 rounded-full">Login</button>
                        <button className="border-2 border-blue-950 px-4 py-2 rounded-full">
                            Get Started
                        </button>
                    </div>
                </div>
            )}

            {/* Desktop Login & Get Started */}
            <div className="flex justify-center items-center gap-4 hidden lg:flex">
                <button className="px-4 py-2 rounded-full">Login</button>
                <button className="border-2 border-blue-950 px-4 py-2 rounded-full">
                    Get Started
                </button>
            </div>
        </section>
    );
};

export default Header;
