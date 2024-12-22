import React from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

const Numbers = () => {
    const items = [
        {
            title: "Clients Serviced",
            count: 576,
            imgSrc: "/numbers/1.jpg",
        },
        {
            title: "Talents hired",
            count: 1456,
            imgSrc: "/numbers/2.jpg",
        },
        {
            title: "Countries Touched",
            count: 33,
            imgSrc: "/numbers/3.jpg",
        },
        {
            title: "Projects Completed",
            count: 490,
            imgSrc: "/numbers/4.jpg",
        },
    ];

    return (
        <section className="my-10 sm:my-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
                {items.map((item, index) => (
                    <div key={index} className="number-section">
                        <div className="relative shadow p-2 border border-gray-300 text-gray-800">
                            <div className="flex justify-center">
                                <img
                                    src={item.imgSrc}
                                    className="rounded-full -mt-8 object-center object-cover h-24 w-24"
                                    draggable="false"
                                />
                            </div>
                            <div className="py-2 px-2">
                                <div className="font-title text-center text-xl sm:text-2xl">
                                    {item.title}
                                </div>
                                <div className="text-3xl sm:text-5xl text-center my-2 font-semibold">
                                    <InView
                                        triggerOnce
                                        threshold={0.5}
                                    >
                                        {({ inView, ref }) => (
                                            <div ref={ref}>
                                                {inView && (
                                                    <CountUp
                                                        start={0}
                                                        end={item.count}
                                                        duration={2.5}
                                                        separator=","
                                                    />
                                                )}
                                            </div>
                                        )}
                                    </InView>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Numbers;
