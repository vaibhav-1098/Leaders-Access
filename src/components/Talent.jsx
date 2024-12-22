import React from "react";

const Talent = () => {
    const talentCategories = [
        { name: "General Virtual Assistant", count: "3.2K talents" },
        { name: "Customer Service", count: "5.1K talents" },
        { name: "Outbound Sales", count: "2.7K talents" },
        { name: "Business Developer", count: "6.4K talents" },
        { name: "Marketing & Social Media Support", count: "4.9K talents" },
        { name: "Executive VP Senior Developer", count: "1.8K talents" },
        { name: "Virtual Support", count: "3.6K talents" },
        { name: "Tech Support", count: "4.3K talents" },
        { name: "Virtual Professional Content Creator", count: "5.8K talents" },
        { name: "Graphic Designers", count: "2.3K talents" },
        { name: "UI/UX Designer", count: "3.9K talents" },
        { name: "Virtual Professional Content Creator", count: "7.0K talents" },
    ];

    return (
        <div className="flex flex-col md:flex-row justify-center items-center max-w-screen-xl mx-auto gap-4 md:gap-0 my-10 sm:my-20">
            {/* First section */}
            <div className="bg-yellow-100 h-96 p-5 px-8 w-full md:w-2/5 flex flex-col justify-evenly items-center rounded-2xl md:rounded-r-none">
                <div>
                    <img src="/man.png" alt="man" className="h-52" />
                </div>
                <div className="text-center">
                    <h2 className="text-xl sm:text-2xl font-semibold">
                        Discover <span className="banner-purple">talents</span> across popular roles
                    </h2>
                    <p className="text-gray-600 font-semibold">
                        Select a role and we will show you relevant talents for it.
                    </p>
                </div>
            </div>

            {/* Second section */}
            <div className="rounded-2xl bg-white shadow-md p-10 grid grid-cols-2 gap-4 w-full md:w-3/5">
                {talentCategories.map((category, index) => (
                    <div
                        key={index}
                        className="bg-white border-2 rounded-md p-4 cursor-pointer hover:bg-gray-100"
                        data-aos="zoom-out"
                    >
                        <p>{category.name}</p>
                        <p className="banner-purple font-semibold">
                            {category.count}
                            <i className="bi bi-caret-right-fill text-gray-500"></i>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Talent;
