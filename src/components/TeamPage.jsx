import React from "react";
import "../styles/TeamPage.scss";
import Card from "./Card";

const developers = [
  // {
  //   image: "/assets/slider/image2.png",
  //   name: "Sanchit Beniwal",
  //   designation: "Tech Lead",
  //   linkedinURL: "",
  //   instaURL: "",
  //   githubURL: "",
  // },
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
    linkedinURL: "https://www.linkedin.com/in/raghav-garg-66356a220/",
    instaURL: "https://www.instagram.com/raghav_garg04/",
    githubURL: "https://github.com/Raghav0407",
  },
  {
    image: "/assets/slider/image2.png",
    name: "Keshav Garg",
    designation: "Developer",
    linkedinURL: "https://www.linkedin.com/in/keshav-garg-773026221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instaURL: "https://instagram.com/keshavgarg0407?igshid=NGVhN2U2NjQ0Yg==",
    githubURL: "https://github.com/KarGitH",
  },
  // {
  //   image: "/assets/slider/image2.png",
  //   name: "Dinesh",
  //   designation: "Developer",
  //   linkedinURL: "",
  //   instaURL: "",
  //   githubURL: "",
  // },
  // {
  //   image: "/assets/slider/image2.png",
  //   name: "Himanshu",
  //   designation: "Developer",
  //   linkedinURL: "",
  //   instaURL: "",
  //   githubURL: "",
  // },
  // {
  //   image: "/assets/slider/image2.png",
  //   name: "Yujit",
  //   designation: "Developer",
  //   linkedinURL: "",
  //   instaURL: "",
  //   githubURL: "",
  // },
  // {
  //   image: "/assets/slider/image2.png",
  //   name: "Akshat",
  //   designation: "Developer",
  //   linkedinURL: "https://www.linkedin.com/in/akshat-mangal-812aba223/",
  //   instaURL: "https://www.instagram.com/akshat209141/",
  //   githubURL: "https://github.com/akshat209141",
  // },
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
  {
    image: "/assets/slider/image2.png",
    name: "Akhilesh",
    designation: "Designer",
    linkedinURL: "https://www.linkedin.com/in/akhilesh-sangwan-2ab9b5232/",
    instaURL: "",
    githubURL: "https://github.com/Akhilesh8783",
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
      {/* <div className="team-container">
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
      </div> */}
      <br />
      <br />
      {/* <div className="team-container">
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
      </div> */}
    </div>
  );
};

export default TeamPage;
