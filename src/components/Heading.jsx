import React from "react";

const Heading = () => {
    return (
        <section className="my-10 sm:my-20">
            <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-7 gap-0 md:gap-4 max-w-screen-xl mx-auto p-4">
                <div className="col-span-1 md:col-span-2 lg:col-span-3 p-4 flex justify-center items-center">
                    <h1 className="text-5xl font-semibold text-center">
                        We help you find
                        <div className="relative inline-block">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute top-2 left-0 w-full h-full z-0"
                                viewBox="0 0 200 40"
                            >
                                <path
                                    d="M0,20 Q50,-10 100,20 Q150,-10 200,20 Q150,50 100,40 Q50,50 0,20 Z"
                                    fill="#F0C9FF"
                                />
                            </svg>

                            <span className="text-purple-800 cursive relative z-10">
                                exceptional talent
                            </span>
                        </div>
                    </h1>
                </div>
                <div className="col-span-1 md:col-span-3 lg:col-span-4 p-4 flex justify-center items-center">
                    <div>
                        <p className="pb-5 bigger-text text-gray-700">
                            Precision Talent Solutions for Your Success. <br /> Streamline hiring
                            with our expert team, accelerating exceptional talent acquisition.
                        </p>
                        <button className="rounded-md bg-blue-950 py-2 px-8 text-white">
                            Start Hiring <i className="bi bi-arrow-up-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Heading;
