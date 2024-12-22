import React from "react";

const MarqueeImages = () => {
    return (
        <section className=" my-10 sm:my-20">
            <h2 className="text-center font-semibold text-xl sm:text-3xl mb-5">
                Trusted by leading companies around the world
            </h2>
            <div className="wrapper bg-yellow-100 ">
                <div
                    className="item item1"
                    style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/logos/1.png)` }}
                ></div>
                <div
                    className="item item2"
                    style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/logos/2.png)` }}
                ></div>
                <div
                    className="item item3"
                    style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/logos/5.png)` }}
                ></div>
                <div
                    className="item item4"
                    style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/logos/4.png)` }}
                ></div>
                <div
                    className="item item5"
                    style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/logos/1.png)` }}
                ></div>
                <div
                    className="item item6"
                    style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/logos/2.png)` }}
                ></div>
                <div
                    className="item item7"
                    style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/logos/5.png)` }}
                ></div>
                <div
                    className="item item8"
                    style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/logos/4.png)` }}
                ></div>
            </div>
        </section>
    );
};

export default MarqueeImages;
