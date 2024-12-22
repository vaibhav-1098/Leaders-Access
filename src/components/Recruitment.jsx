import React from "react";

const Recruitment = () => {
    const timelineItems = [
        {
            title: "Consultation",
            description: "We begin by understanding your unique hiring needs and company culture",
            icon: "bi bi-bookmark-check",
        },
        {
            title: "Tailored Recruitment Strategy",
            description:
                "We start by carefully understanding your specific hiring needs and the unique culture of your company.",
            icon: "bi bi-gear-fill",
        },
        {
            title: "Screening and Assessment",
            description:
                "We meticulously screen and assess the candidates to ensure they meet the desired qualifications",
            icon: "bi bi-pencil-square",
        },
        {
            title: "Candidate Presentation",
            description:
                "We have identified potential candidates who meet your criteria, we present their profiles to you along with detailed information about their skills, experience, and suitability for the role",
            icon: "bi bi-people-fill",
        },
    ];

    return (
        <div className="flex flex-col md:flex-row justify-center items-stretch max-w-screen-xl mx-auto bg-purple-100 shadow-md rounded-3xl my-10 sm:my-20">
            {/* First section */}
            <div className="p-10 w-full md:w-1/2 flex flex-col">
                <div>
                    <h2 className="font-semibold text-3xl">
                        Our <span className="text-purple-800 cursive">recruitment</span> process
                    </h2>
                    <p className="text-gray-600 my-3">
                        Use this section to describe your company and the products you offer. You
                        could share your company's story and details about why you are in business.
                    </p>
                </div>
                <div
                    className="bg-yellow-300 bg-cover bg-center rounded-3xl h-72 mt-10 w-full"
                    style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/cv.png)` }}
                ></div>
            </div>

            {/* Second section */}
            <div className="w-full md:w-1/2 p-4">
                <div className="container max-w-5xl px-4 py-12 mx-auto">
                    <div className="grid gap-4 mx-4 sm:grid-cols-12">
                        <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                            <div className="col-span-12 space-y-12 relative px-4 sm:space-y-8 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:dark:bg-gray-300">
                                {timelineItems.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col relative before:absolute before:top-2 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:dark:bg-violet-600"
                                    >
                                        <h3 className="text-xl font-semibold tracking-wide flex items-center">
                                            <i className={`${item.icon} mr-3 `}></i>
                                            {item.title}
                                        </h3>
                                        <p className="mt-3 text-gray-700">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recruitment;
