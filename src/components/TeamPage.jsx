import React from "react";
import "../styles/TeamPage.scss";
import Card from "./Card";

const developers = [
  {
    image: "/assets/slider/image2.png",
    name: "Sanchit Beniwal",
    designation: "Tech Lead",
    linkedinURL: "",
    instaURL: "",
    githubURL: "",
  },
  {
    image: "/assets/slider/image2.png",
    name: "Rahul Pant",
    designation: "Developer",
    linkedinURL: "",
    instaURL: "",
    githubURL: "",
  },
  {
    image: "/assets/slider/image2.png",
    name: "Suman",
    designation: "Developer",
    linkedinURL: "",
    instaURL: "",
    githubURL: "",
  },
  {
    image: "/assets/slider/image2.png",
    name: "Punit Garg",
    designation: "Developer",
    linkedinURL: "",
    instaURL: "",
    githubURL: "",
  },
  {
    image: "/assets/slider/image2.png",
    name: "Raghav Garg",
    designation: "Developer",
    linkedinURL: "",
    instaURL: "",
    githubURL: "",
  },
  {
    image: "/assets/slider/image2.png",
    name: "Keshav Garg",
    designation: "Developer",
    linkedinURL: "",
    instaURL: "",
    githubURL: "",
  },
  {
    image: "/assets/slider/image2.png",
    name: "Dinesh",
    designation: "Developer",
    linkedinURL: "",
    instaURL: "",
    githubURL: "",
  },
  {
    image: "/assets/slider/image2.png",
    name: "Himanshu",
    designation: "Developer",
    linkedinURL: "",
    instaURL: "",
    githubURL: "",
  },
  {
    image: "/assets/slider/image2.png",
    name: "Yujit",
    designation: "Developer",
    linkedinURL: "",
    instaURL: "",
    githubURL: "",
  },
  {
    image: "/assets/slider/image2.png",
    name: "Akshat",
    designation: "Developer",
    linkedinURL: "",
    instaURL: "",
    githubURL: "",
  },
  // Add more developers as needed
];

const designers = [
  {
    image: "/assets/slider/image2.png",
    name: "Shatakshi",
    designation: "Design Lead",
    linkedinURL: "",
    instaURL: "",
    githubURL: "",
  },
  {
    image: "/assets/slider/image2.png",
    name: "Mohit",
    designation: "Photography Lead",
    linkedinURL: "",
    instaURL: "",
    githubURL: "",
  },
  {
    image: "/assets/slider/image2.png",
    name: "Akhilesh",
    designation: "Designer",
    linkedinURL: "",
    instaURL: "",
    githubURL: "",
  },
  {
    image: "/assets/slider/image2.png",
    name: "Vidisha Nama",
    designation: "Designer",
    linkedinURL: "",
    instaURL: "",
    githubURL: "",
  },
  {
    image: "/assets/slider/image2.png",
    name: "Rishika",
    designation: "Designer",
    linkedinURL: "",
    instaURL: "",
    githubURL: "",
  },
  // Add more designers as needed
];

const sponsers = [
  {
    image: "/assets/slider/image2.png",
    name: "Ankit Yadav",
    designation: "Sponsy Lead",
    linkedinURL: "",
    instaURL: "",
    githubURL: "",
  },
  {
    image: "/assets/slider/image2.png",
    name: "Jane Doe",
    designation: "Designer",
    linkedinURL: "",
    instaURL: "",
    githubURL: "",
  },
  {
    image: "/assets/slider/image2.png",
    name: "Jane Doe",
    designation: "Designer",
    linkedinURL: "",
    instaURL: "",
    githubURL: "",
  },
  {
    image: "/assets/slider/image2.png",
    name: "Jane Doe",
    designation: "Designer",
    linkedinURL: "",
    instaURL: "",
    githubURL: "",
  },
  {
    image: "/assets/slider/image2.png",
    name: "Jane Doe",
    designation: "Designer",
    linkedinURL: "",
    instaURL: "",
    githubURL: "",
  },
  // Add more team members as needed
];

const TeamPage = () => {
  return (
    <div className="team">
      <h1>TEAMS</h1>
      <div className="team-container">
        <h3 className="heading1">Developers</h3>
        <div className="allCards">
          {developers.map((member, index) => (
            <Card
              key={index}
              image={member.image}
              name={member.name}
              designation={member.designation}
              linkedinURL={member.linkedinURL}
              instaURL={member.instaURL}
              githubURL={member.githubURL}
            />
          ))}
        </div>
      </div>
      <br />
      <br />
      <div className="team-container">
        <h3 className="heading1">Designers</h3>
        <div className="allCards">
          {designers.map((member, index) => (
            <Card
              key={index}
              image={member.image}
              name={member.name}
              designation={member.designation}
              linkedinURL={member.linkedinURL}
              instaURL={member.instaURL}
              githubURL={member.githubURL}
            />
          ))}
        </div>
      </div>
      <br />
      <br />
      <div className="team-container">
        <h3 className="heading1">Sponsy Team</h3>
        <div className="allCards">
          {sponsers.map((member, index) => (
            <Card
              key={index}
              image={member.image}
              name={member.name}
              designation={member.designation}
              linkedinURL={member.linkedinURL}
              instaURL={member.instaURL}
              githubURL={member.githubURL}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
