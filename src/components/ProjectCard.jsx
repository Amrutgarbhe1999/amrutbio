import React from "react";

function ProjectCard({project}) {
  return (
    <>
     
     <div className="row projectRow" data-aos="fade-left"
      data-aos-duration="1000" data-aos-delay="100">
        <div className="col-md-6  projectContainer ">
            <div className="projectInfo" data-aos="fade-in"  data-aos-duration="1000" data-aos-delay="100" >
                <h3>{project.name}</h3>
                <p> {project.description}</p>
                <br />
                <a href="">Full Project</a>
            </div>
        </div>
        <div className="col-md-6">
            <img  className="projectImage" src="https://plus.unsplash.com/premium_photo-1670076513880-f58e3c377903?q=80&w=2818&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
     </div>
    </>
  );
}

export default ProjectCard;
