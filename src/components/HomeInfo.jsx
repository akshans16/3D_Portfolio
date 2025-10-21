import React from "react";
import {Link} from "react-router-dom";
import {arrow} from "../assets/icons";

const InfoBox = ({text, link, btnText}) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
    </div>
);
const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I am <span className="font-semibold">Akshansh</span> 👋
            <br />A Developer from India.
        </h1>
    ),
    2: (
        <InfoBox
            text="Computer science student driven by curiosity to build and learn."
            link="/about"
            btnText="Learn more"
        />
    ),
    3: <InfoBox text="I build projects that blend creativity with code." link="/projects" btnText="See my work" />,
    4: <InfoBox text="Let's connect — I'm just a few keystrokes away." link="/contact" btnText="Contact me" />,
};

const HomeInfo = ({currentStage}) => {
    return renderContent[currentStage] || null;
};

export default HomeInfo;
