import React from "react";

const HeroSection1 = () => {
    return (
        <div className="hero max-w-screen-xl shadow-md mx-auto flex flex-col lg:flex-row items-center justify-center gap-4 p-4 bg-white rounded-3xl my-10 sm:my-20">
            <div className="p-4">
                <h2 className="font-semibold text-3xl">
                    Embrace flexibility with <br />
                    <span className="text-purple-800 cursive">Remote Virtual Professionals</span>
                </h2>
                <p className="py-5 text-gray-700">
                    Ace Virtual's remote virtual professionals offer the perfect solution for your
                    company. Save on overhead costs, eliminate expensive commutes, and access talent
                    from anywhere.
                </p>
                <button className="rounded-full bg-blue-950 py-2 px-8 text-white">
                    Start Hiring <i className="bi bi-arrow-right"></i>
                </button>
            </div>
            <div data-aos="fade-left">
                <img src="/hero/I.png" alt="talent" draggable="false" />
            </div>
        </div>
    );
};

export default HeroSection1;
