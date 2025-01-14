import React, { useState } from "react";
// import ProjectCard from "./ProjectCard";
import ProjectList from "./ProjectList";
import dfurnImage from "../Assests/images/Dfurn.png";
import aerafan from "../Assests/images/AeraFan.png";
import shubhweds from "../Assests/images/Shubweds.png";
import merasamaj from "../Assests/images/meraSamaj.png";

function Project() {
  const projectsData = [
    {
      id: 1,
      title: "Dfurn",
      category: "React js",
      description:
        "DFurn is a modern eCommerce website specializing in high-quality furniture for homes and offices. Built using PHP, it offers a seamless shopping experience with features like product categorization, secure payments, and user-friendly navigation. DFurn combines functionality with aesthetics, providing customers with stylish and durable furniture for every space.",
      image: dfurnImage, // Use the imported image
      link: "https://aerafans.com/",
    },
    {
      id: 2,
      title: "AeraFans",
      category: "React js",
      description:
        "I worked on AeraFan, an eCommerce website focused on selling stylish and high-performance fans. I created an engaging design while implementing functionality to securely save user data and contact details in the database, ensuring a seamless and efficient shopping experience for customers.",
      image: aerafan,
      link: "https://aerafans.com/",
    },
    { id: 3, title: "Blog Website", category: "Php", description: "" },
    {
      id: 4,
      title: "ShubhWeds",
      category: "Php",
      description:
        "I developed a matrimony website where users can sign up, log in, and browse profiles. The platform allows users to send and accept connection requests, creating an interactive and user-friendly experience for finding potential matches.",
      image: shubhweds,
    },
    {
      id: 5,
      title: "Merasamaj",
      category: "React js",
      description:
        "I built MeraSamaj, a unique matrimony website where users can view profiles specific to their community. With advanced filters, users can easily sort and browse profiles exclusively within their Samaj, fostering a focused and personalized matchmaking experience.",
      image: merasamaj,
    },
  ];

  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  return (
    <>
      <div className="animationtextDiv">
        <h1 className="animationText">
          <span>Thrill To Show You My Work</span>
          <br />
          <span>Explore my work and get to know my skills. </span>
        </h1>
      </div>

      <div className="container projectheadings">
        <div className="projectheading">
          <div className="row">
            <div className="col-md-6">
              <h1
                style={{ color: "#89715b" }}
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                SELECTED WORK
              </h1>
            </div>
            <div className="col-md-6 projectheadingsecond">
              <h3 data-aos="fade-up" data-aos-duration="3000">
                View my projects and explore the work i made , showcasing my
                skills and my sumbmissions
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="filterbtn">
        <button className="btn" onClick={() => setFilter("All")}>
          All
        </button>
        <button className="btn" onClick={() => setFilter("React js")}>
          React js
        </button>
        <button className="btn" onClick={() => setFilter("Php")}>
          Php{" "}
        </button>
      </div>
      <ProjectList projectsfilter={filteredProjects} />
      {/* <ProjectCard/> */}
    </>
  );
}

export default Project;
