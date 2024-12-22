import React from "react";

const Banner = () => {
    return (
        <div
            className="banner max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 p-5 px-10 sm:h-60 text-white rounded-3xl items-center relative overflow-hidden my-10 sm:my-20"
            data-aos="zoom-in"
        >
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-48 h-48 bg-violet-600 rounded-full opacity-80 z-0"></div>
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-64 h-64 bg-violet-600 rounded-full opacity-60 z-0"></div>

            <div className="p-4 relative z-10">
                <h2 className="font-semibold text-3xl">
                    We Lead the Industry With Unparalleled <br />{" "}
                    <span className="text-yellow-300 cursive">Expertise & Dedication</span>
                </h2>
            </div>
            <div className="relative z-10">
                <p>
                    Let our seasoned consultants propel your success in Asia-Pacific. Amplify your
                    potential and embark on an exciting journey of expansion!
                </p>
                <br />
                <button className="banner-purple rounded-full bg-white py-2 px-8 font-semibold">
                    Start Hiring <i className="bi bi-arrow-up-right-circle-fill"></i>
                </button>
            </div>
        </div>
    );
};

export default Banner;
