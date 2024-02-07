import React from "react";
import "../styles/Sponser.scss";

const currentSponsers = [
    {
        name: "",
        imageURL: "/assets/slider/image2.png",
        contactURL: "",
    },
    {
        name: "",
        imageURL: "/assets/slider/image2.png",
        contactURL: "",
    },
    {
        name: "",
        imageURL: "/assets/slider/image2.png",
        contactURL: "",
    },
];

const previousSponsers = [
    {
        name: "",
        imageURL: "/assets/slider/image2.png",
        contactURL: "",
    },
    {
        name: "",
        imageURL: "/assets/slider/image2.png",
        contactURL: "",
    },
    {
        name: "",
        imageURL: "/assets/slider/image2.png",
        contactURL: "",
    },
];

const SponserCard = ({ name, imageURL, contactURL }) => {
    return (
        <div className="sponserCard">
            <a href={contactURL}>
                <img src={imageURL} alt={name} />
            </a>
        </div>
    )
};

export const SponserHome = () => {
    return(
        <div className="sponserContent">
            {currentSponsers.map((sponser, index) => (
                <SponserCard
                    key={index}
                    name={sponser.name}
                    imageURL={sponser.imageURL}
                    contactURL={sponser.contactURL}
                />
            ))}
        </div>
    );
};

const Sponser = () => {
  return (
    <div className="sponser">
        <div className="heading">
            <h1>OUR SPONSERS</h1>
        </div>
        <div className="sponserContainer">
            <div className="currentSponser">
                <div className="subHeading">
                    <h3>Current Sponser</h3>
                </div>
                <div className="sponserContent">
                    {currentSponsers.map((sponser, index) => (
                        <SponserCard
                            key={index}
                            name={sponser.name}
                            imageURL={sponser.imageURL}
                            contactURL={sponser.contactURL}
                        />
                    ))}
                </div>
            </div>
            <div className="previousSponser">
                <div className="subHeading">
                    <h3>Previous Sponser</h3>
                </div>
                <div className="sponserContent">
                    {previousSponsers.map((sponser, index) => (
                        <SponserCard
                            key={index}
                            name={sponser.name}
                            imageURL={sponser.imageURL}
                            contactURL={sponser.contactURL}
                        />
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
};

export default Sponser;