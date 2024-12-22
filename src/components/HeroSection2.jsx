import React from "react";

const HeroSection = () => {
    return (
        <div className="hero max-w-screen-xl shadow-md mx-auto flex flex-col lg:flex-row items-center justify-center gap-4 p-4 bg-white rounded-3xl my-10 sm:my-20">
            <div data-aos="fade-right">
                <img src="/hero/II.png" alt="talent" draggable="false" />
            </div>
            <div className="p-4">
                <h2 className="font-semibold text-3xl">
                    RocketHire: Where{" "}
                    <span className="text-purple-800 cursive">exceptional talents</span> meet
                    unwavering determination
                </h2>
                <p className="py-5 text-gray-700">
                    Our exceptional team delivers tailored solutions, turning business aspirations
                    into astounding realities with a proven track record and a diverse range of
                    services.
                </p>
                <button className="rounded-full bg-blue-950 py-2 px-8 text-white">
                    Start Hiring <i className="bi bi-arrow-right"></i>
                </button>
            </div>
        </div>
    );
};

export default HeroSection;
