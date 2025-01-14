import React from 'react'
import ProjectCard from './ProjectCard'
import Footer from './Footer';

function ProjectList({projectsfilter}) {
    const projects = [
        {
          name: "Weather App",
          description: "A user-friendly app providing accurate and real-time weather updates, including temperature, humidity, wind speed, and forecasts for multiple locations. Ideal for planning daily activities or travel with detailed weather insights.",
          image:"https://plus.unsplash.com/premium_photo-1670076513880-f58e3c377903?q=80&w=2818&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          link: "https://example.com/weather-app",
        },
        {
          name: "To-Do List",
          description: "A task management app designed to help users organize their daily activities. Features include adding, editing, deleting, and prioritizing tasks with an intuitive interface. Stay productive and never miss a deadline.",
          link: "https://example.com/todo-list",
          image:"https://plus.unsplash.com/premium_photo-1670076513880-f58e3c377903?q=80&w=2818&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Personal Portfolio",
          description: "An elegant and professional personal website to showcase skills, projects, work experience, and contact information. Perfect for job seekers or freelancers looking to highlight their expertise to potential clients or employers.",
          link: "https://example.com/personal-portfolio",
          image:"https://plus.unsplash.com/premium_photo-1670076513880-f58e3c377903?q=80&w=2818&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Recipe Finder",
          description: "A handy app that helps users discover recipes based on available ingredients or dietary preferences. Includes detailed cooking instructions, preparation time, and nutritional information for a variety of cuisines.",
          link: "https://example.com/recipe-finder",
          image:"https://plus.unsplash.com/premium_photo-1670076513880-f58e3c377903?q=80&w=2818&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "E-Commerce App",
          description: "A comprehensive shopping platform that allows users to browse products, add items to a cart, and purchase them securely. Includes features like product search, filters, and a seamless checkout experience.",
          link: "https://example.com/ecommerce-app",
          image:"https://plus.unsplash.com/premium_photo-1670076513880-f58e3c377903?q=80&w=2818&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ];
      

  return (
    <>
    <div className="container">
    {projectsfilter.map((proj, index) => (
  <div 
    key={index} 
    className="row projectRow" 
    data-aos="fade-left" 
    data-aos-duration="1000" 
    data-aos-delay="100"
  >
    {/* Project Information */}
    <div className="col-md-6 projectContainer">
      <div 
        className="projectInfo" 
        data-aos="fade-in"  
        data-aos-duration="1000" 
        data-aos-delay="100"
      >
        <h3>{proj.title}</h3>
        <p>{proj.description}</p>
        <br />
        <a href={proj.link} target="_blank" rel="noopener noreferrer">Full Project</a>
      </div>
    </div>
    
    {/* Project Image */}
    <div className="col-md-6">
      <img 
        className="projectImage" 
        src={proj.image || "https://via.placeholder.com/400"} 
        alt={proj.title} 
      />
    </div>
  </div>
))}

    </div>
  
  







    {/* <div className="container">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div> */}
    <Footer />
    </>
  )
}

export default ProjectList