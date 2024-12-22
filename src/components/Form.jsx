import React from "react";

const Form = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Form submitted!");
        event.target.reset();
    };

    return (
        <div className="hero max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 p-3 bg-white rounded-3xl my-10 sm:my-20">
            <div className="flex flex-col justify-evenly items-center h-full w-full gap-4">
                <div
                    className="bg-yellow-300 bg-cover bg-center rounded-3xl h-full w-full"
                    style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/office/1.png)` }}
                    data-aos="fade-out"
                ></div>
                <div
                    className="bg-yellow-300 bg-cover bg-center rounded-3xl h-full w-full"
                    style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/office/2.png)` }}
                    data-aos="fade-out"
                ></div>
                <div
                    className="bg-yellow-300 bg-cover bg-center rounded-3xl h-full w-full"
                    style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/office/3.png)` }}
                    data-aos="fade-out"
                ></div>
            </div>

            <div className="p-4">
                <h2 className="font-semibold text-3xl text-center">
                    Let's level up your brand, together
                </h2>
                <p className="text-center my-5 text-gray-500">
                    You can reach us anytime via{" "}
                    <span className="text-purple-600">hi@LeadersAccess</span>
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="text-gray-700 pb-3 p-1">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-2 rounded-md shadow-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="text-gray-700 pb-3 p-1">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="you@company.com"
                            className="w-full p-2 rounded-md shadow-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="text-gray-700 pb-3 p-1">
                            Ph. Number
                        </label>
                        <input
                            id="phone"
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            className="w-full p-2 rounded-md shadow-md"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="text-gray-700 pb-3 p-1">
                            How can we help?
                        </label>
                        <textarea
                            id="message"
                            placeholder="tell us a bit about the project..."
                            className="w-full p-2 rounded-md shadow-md h-32 resize-none"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <div className="mb-2">Services</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col">
                                <label className="flex items-center space-x-2">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span>Website design</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span>UX design</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span>User research</span>
                                </label>
                            </div>
                            <div className="flex flex-col">
                                <label className="flex items-center space-x-2">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span>Content creation</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span>Strategy & consulting</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span>Other</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="rounded-full bg-blue-950 text-xl py-2 w-full text-white"
                    >
                        Get Started
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form;
