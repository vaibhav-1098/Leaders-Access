import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import "./App.css";
import "./Marquee.css";
import Banner from "./components/Banner";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Heading from "./components/Heading";
import HeroSection1 from "./components/HeroSection1";
import HeroSection2 from "./components/HeroSection2";
import MarqueeImages from "./components/MarqueeImages";
import Numbers from "./components/Numbers";
import Recruitment from "./components/Recruitment";
import SectionPicture from "./components/SectionPicture";
import Talent from "./components/Talent";

export default function App() {
    useEffect(() => {
        AOS.init({});
    }, []);

    return (
        <section>
            <div className="mx-4">
                <Header />
            </div>
            <div className="mx-0">
                <Heading />
            </div>
            <div className="mx-0">
                <SectionPicture />
            </div>
            <div className="mx-0">
                <MarqueeImages />
            </div>
            <div className="mx-4">
                <Numbers />
            </div>
            <div className="mx-4">
                <Banner />
            </div>
            <div className="mx-4">
                <HeroSection1 />
            </div>
            <div className="mx-4">
                <HeroSection2 />
            </div>
            <div className="mx-4">
                <Recruitment />
            </div>
            <div className="mx-4">
                <Talent />
            </div>
            <div className="mx-4">
                <FAQs />
            </div>
            <div className="mx-4">
                <Form />
            </div>
            <div className="mx-0">
                <Footer />
            </div>
        </section>
    );
}
