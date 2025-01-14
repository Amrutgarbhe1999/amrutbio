import React from "react";

function Experience() {
  return (
    <>
    

      <div className="container">
      <div className="experienceheading " data-aos="fade-down">
        <h1>EXPERIENCE</h1>
        <p className="text-light">SHOWCASING MY CODING JOURNEY</p>
      </div>
        <div className="row experienceRow">
        <div className="col-md-6 expcntRow" data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="100">
            <div className="row">
                <div className="col-md-2">
                    <img width={50} height={50} src="https://img.icons8.com/?size=100&id=v7Zmw12QgO9c&format=png&color=000000" alt="" />
                </div>
                <div className="col-md-6">
                    <h3>SpanDigitSocial</h3>
                    <h4>Web Developer</h4>
                    <p>I am a PHP web developer with experience in e-commerce websites, continuously learning and improving my skills in development.</p>
                </div>
                <div className="col-md-3">
                    
                    <p>[2023 - 2024]</p>
                    
                </div>
            </div>
        </div>
        <div className="col-md-6 expcntRow" data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100">
            <div className="row">
                <div className="col-md-2">
                    <img width={50} height={50} src="https://img.icons8.com/?size=100&id=v7Zmw12QgO9c&format=png&color=000000" alt="" />
                </div>
                <div className="col-md-6">
                    <h3>MicroWorld Solutions</h3>
                    <h4>Technical trainee</h4>
                    <p>I worked as a trainee electrical engineer, contributing to a GSM modem project and gaining experience in Arduino programming.</p>
                </div>
                <div className="col-md-3">
                    
                    <p>[2022 - 2023]</p>
                    
                </div>
            </div>
        </div>
       
       
          
        </div>
      </div>
    </>
  );
}

export default Experience;
