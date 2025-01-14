import React from "react";
import Services from "./Services";
import About from "./About";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Experience from "./Experience";
// import amrut from '../Assests/images/amrut.png'
import secondimage from "../Assests/images/secondimg.png";
import Chooseme from "./Chooseme";

function Home() {
  return (
    <>
      <section className="overlay-section">
        <div className="overlay"></div>
        <div className="content">
          {/* <p>project will kickoff within 24 hours</p> */}
          <h1
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            
          >
           <span> AMR</span>UT <br />
            GA<span>RBHE</span>
          </h1>

          <br />
          <p className="type">I am Developer Expert In Frontend And Backend</p>
          <Link
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine "
            data-aos-duration="6000"
            className="nav-link active homelink"
            aria-current="page"
            to="/projects"
          >
            Projects
          </Link>
        </div>
      </section>
      <br />
      <br />
<div className="animate-conatainer">

      <h1 className="animate-text">
  <span>There</span>
  <span>are</span>
  <span>no</span>
  <span>limits</span>
  <span>to</span>
  <span>what</span>
  <span>you</span>
  <span>can</span>
  <span>accomplish,</span>
  <span>except</span>
  <span>the</span>
  <span>limits</span>
  <span>you</span>
  <span>place</span>
  <span>on</span>
  <span>your</span>
  <span>own</span>
  <span>thinking.</span>
</h1>
</div>


      <About />
      <Services />
      <br></br>
      <h4 className="text-center" style={{ color: "#afafaf" }}>
        [ LET ME SHOW YOU WHAT AND HOW I DO ]
      </h4>
      <h1 className="text-center" style={{ color: "#89715b" }}>
        DISCOVER THE METHOD I USE AND DELIVER TO YOU
      </h1>
      <h2 className="text-center" style={{ color: "#afafaf" }}>
        - Elevate the online persence with technology -
      </h2>
      <br />
      <br />
      <div class="scroll-section">
        <div class="image-container">
          <img
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            src={secondimage}
            alt="Sample Image"
          />
        </div>

        <div class="content-container bg-dark">
          <div
            class="scroll-content"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <div className="Way">
              <h2 style={{ color: "#fff" }}>[01]</h2>
              <div className="row way-head-content">
                <div className="col md-6">
                  <h3>Planning</h3>
                </div>
                <div className="col md-6">
                  <img
                    width="64"
                    height="64"
                    src="https://img.icons8.com/arcade/64/triangle-stroked.png"
                    alt="triangle-stroked"
                  />
                </div>
              </div>
              <p>
                Before we start, we determine if and how I can help you. What
                are your requirements for your new design? Why do you need a new
                design? What goals do you have in that, and what problem can we
                solve with a new design?
              </p>
              <br />
              <ul>
                <li>We get to know each other better</li>
                <li>hvcjDetermine how i can best assist youva</li>
                <li>Understand the goals you have for the work</li>
              </ul>
            </div>
            <hr />
            <div className="Way">
              <h2 style={{ color: "#fff" }}>[02]</h2>
              <div className="row way-head-content">
                <div className="col md-6">
                  <h3>Concept & Strategy</h3>
                </div>
                <div className="col md-6">
                  <img
                    width="50"
                    height="50"
                    src="https://img.icons8.com/isometric/50/circled.png"
                    alt="circled"
                  />
                </div>
              </div>
              <p>
                Once we have assessed your requirements and objectives, we move
                into the concept and strategy phase. Here, we define the overall
                vision and strategic approach for your designproject. What are
                the core ideas we want to develop?
              </p>
              <br />
              <ul>
                <li>UX/UI Design</li>
                <li>WireFrames</li>
                <li>nteractive Prototype</li>
              </ul>
            </div>
            <hr />
            <div className="Way">
              <h2 style={{ color: "#fff" }}>[03]</h2>
              <div className="row way-head-content">
                <div className="col md-6">
                  <h3>Design Onboarding</h3>
                </div>
                <div className="col md-6">
                  <img
                    width="50"
                    height="50"
                    src="https://img.icons8.com/?size=100&id=PvAkWGsNq7Ol&format=png&color=000000"
                    alt="circled"
                  />
                </div>
              </div>
              <p>
                I’m thrilled to embark on this creative journey with you. My
                mission is to bring your vision to life with a collaborativeand
                personalised design process.
              </p>
              <br />
              <ul>
                <li>Personal Workshop</li>
                <li>Revisit the site with you</li>
                <li>Changes as per you needed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Chooseme />
      <Experience />
      <Footer />
    </>
  );
}

export default Home;
