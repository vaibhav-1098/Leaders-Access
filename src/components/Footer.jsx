import React from "react";

const Footer = () => {
    return (
        <footer>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 lg:px-20 max-w-screen-xl mx-auto">
                <div className="p-4 lg:col-span-2">
                    <div className="font-semibold block text-2xl mb-5">
                        <i className="bi bi-rocket-takeoff-fill"></i> <span>Leaders Access</span>
                    </div>
                    <p className="font-thin">
                        Precision Talent Solutions for Your Success. Streamline hiring with our
                        expert team, accelerating exceptional talent acquisition
                    </p>
                    <div className="mt-5 text-xl flex gap-5">
                        <div className="w-10 h-10 bg-blue-600 flex items-center justify-center rounded-full cursor-pointer">
                            <i className="bi bi-facebook"></i>
                        </div>
                        <div className="w-10 h-10 bg-sky-500 flex items-center justify-center rounded-full cursor-pointer">
                            <i className="bi bi-twitter"></i>
                        </div>
                        <div className="w-10 h-10 bg-blue-700 flex items-center justify-center rounded-full cursor-pointer">
                            <i className="bi bi-linkedin"></i>
                        </div>
                        <div className="w-10 h-10 bg-rose-600 instagram flex items-center justify-center rounded-full cursor-pointer">
                            <i className="bi bi-instagram"></i>
                        </div>
                    </div>
                </div>
                <div className="p-4 lg:col-span-1">
                    <ul className="space-y-2 font-thin">
                        <span className="font-semibold block text-xl mb-5">Quick Links</span>
                        <li>Industries</li>
                        <li>Professional Services</li>
                        <li>Why Leaders Access?</li>
                        <li>Marketing</li>
                        <li>Resources</li>
                    </ul>
                </div>
                <div className="p-4 lg:col-span-1">
                    <ul className="space-y-2 font-thin">
                        <span className="font-semibold block text-xl mb-5">rocketHire.com</span>
                        <li>Terms & condition</li>
                        <li>Privacy policy</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
            <hr className="max-w-screen-xl mx-auto border-gray-700" />
            <div className="text-center copyright text-xs flex justify-center items-center">
                © Copyright 2023, All Rights Reserved by Leaders Access
            </div>
        </footer>
    );
};

export default Footer;
