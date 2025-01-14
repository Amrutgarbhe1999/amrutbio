import React from "react";
import amrut from "../Assests/images/amrut.png";
import { saveAs } from 'file-saver';
// import sfa from '../Assests/files'

function About() {
    const handleDownload = () => {
        saveAs('../Assets/files/pdf.pdf', 'pdf.pdf'); // Corrected file path
    };
  return (
    <>
      <div className="about-container">
        <div className="row">
          <div
            className="col-md-5 "
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <img className="abtimage" src={amrut} alt="" />
          </div>
          <div
            className="col-md-6"
            
          >
            <div className="contents">
              <p data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100" style={{fontWeight:'600'}}>[About]</p>
              <h2 data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="100">Want To Know Who Am I?</h2>
              <p data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="100">
                I am a web developer based in Akola, India, with 2 years of
                experience in creating impactful websites and web applications.
                I specialize in turning ideas and visions into functional and
                user-friendly digital products. By staying updated with the
                latest development trends, I ensure my work is both modern and
                efficient. My keen attention to detail and focus on continuous
                improvement allow me to prioritize effectively, iterate quickly,
                and deliver high-quality solutions.
              </p>

              <div className="peronalContainer">
                <div className="row">
                  <div className="col-md-6 ">
                    <b>Name</b> - Amrut Garbhe
                  </div>
                  <div className="col-md-6">
                    <b>Professional</b> - Web Developer
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <b>Age</b> - 25
                  </div>
                  <div className="col-md-6">
                    <b>From</b> - Akola,MH
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-6">
                  <button className="btn btn-success" onClick={handleDownload}>Download</button>
                </div>
                <div className="col-md-6">
                  <div className="social">
                    <p>-----</p>
                    <a href="">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 256 256"
                    >
                      <g fill="none">
                        <rect
                          width={256}
                          height={256}
                          fill="url(#skillIconsInstagram0)"
                          rx={60}
                        ></rect>
                        <rect
                          width={256}
                          height={256}
                          fill="url(#skillIconsInstagram1)"
                          rx={60}
                        ></rect>
                        <path
                          fill="#fff"
                          d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334s-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"
                        ></path>
                        <defs>
                          <radialGradient
                            id="skillIconsInstagram0"
                            cx={0}
                            cy={0}
                            r={1}
                            gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#fd5"></stop>
                            <stop offset={0.1} stopColor="#fd5"></stop>
                            <stop offset={0.5} stopColor="#ff543e"></stop>
                            <stop offset={1} stopColor="#c837ab"></stop>
                          </radialGradient>
                          <radialGradient
                            id="skillIconsInstagram1"
                            cx={0}
                            cy={0}
                            r={1}
                            gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#3771c8"></stop>
                            <stop offset={0.128} stopColor="#3771c8"></stop>
                            <stop
                              offset={1}
                              stopColor="#60f"
                              stopOpacity={0}
                            ></stop>
                          </radialGradient>
                        </defs>
                      </g>
                    </svg>
                    </a>
                  

                  <a href="">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 128 128"
                    >
                      <defs>
                        <linearGradient
                          id="deviconGithubcodespaces0"
                          x1={11.622}
                          x2={11.622}
                          y1={7.023}
                          y2={13.825}
                          gradientTransform="translate(.5 .592)scale(7.9375)"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset={0} stopColor="#0196ca"></stop>
                          <stop offset={1} stopColor="#0065a9"></stop>
                        </linearGradient>
                        <linearGradient
                          id="deviconGithubcodespaces1"
                          x1={11.622}
                          x2={11.622}
                          y1={8.675}
                          y2={15.977}
                          gradientTransform="translate(.5 .592)scale(7.9375)"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset={0} stopColor="#01a7de"></stop>
                          <stop offset={1} stopColor="#007acc"></stop>
                        </linearGradient>
                        <linearGradient
                          id="deviconGithubcodespaces2"
                          x1={14.594}
                          x2={14.594}
                          y1={7.023}
                          y2={15.977}
                          gradientTransform="translate(.5 .592)scale(7.9375)"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset={0} stopColor="#2ec2f6"></stop>
                          <stop offset={1} stopColor="#1f9cf0"></stop>
                        </linearGradient>
                      </defs>
                      <path
                        fill="#fefeff"
                        d="M.5 64.092C.5 29.008 28.916.592 64 .592c29.601 0 54.457 20.23 61.501 47.625h-24.065a25.4 25.4 0 0 0-3.305-4.524c.635-1.588 2.857-8.097-.635-16.828c0 0-5.318-1.747-17.462 6.508c-5.08-1.428-10.478-2.143-15.875-2.143s-10.795.715-15.875 2.143c-12.144-8.175-17.462-6.508-17.462-6.508c-3.493 8.73-1.27 15.24-.635 16.828c-4.048 4.445-6.509 10.16-6.509 17.066c0 17.057 7.281 24.836 16.51 28.507v12.959c-3.492-.284-7.264-1.992-10.16-6.858c-1.19-1.905-4.762-6.588-9.763-6.51c-5.318.08-2.143 3.017.08 4.208c2.698 1.508 5.794 7.143 6.508 8.97c1.024 2.878 3.903 7.87 13.335 8.162v12.767C16.906 113.541.501 90.788.501 64.093z"
                      ></path>
                      <path
                        fill="url(#deviconGithubcodespaces0)"
                        d="m124.97 63.867l-14.719-7.087a4.45 4.45 0 0 0-5.077.863l-46.2 39.965a2.977 2.977 0 0 0 .003 4.402l7.904 7.547a2.98 2.98 0 0 0 3.801.169l40.941-31.744l9.647-10.638c.988-1.09 2.1-2.382 3.563-2.23c1.412.148 2.665 1.31 2.665 2.946v-.17a4.47 4.47 0 0 0-2.528-4.023"
                      ></path>
                      <path
                        fill="url(#deviconGithubcodespaces1)"
                        d="m124.97 119.88l-14.719 7.087a4.45 4.45 0 0 1-5.077-.863l-46.2-43.933a2.977 2.977 0 0 1 .003-4.403l7.904-7.546a2.98 2.98 0 0 1 3.801-.17l40.941 35.713l9.647 10.639c.988 1.09 2.1 2.382 3.563 2.23c1.413-.149 2.665-1.311 2.665-2.947v.171a4.47 4.47 0 0 1-2.528 4.023z"
                      ></path>
                      <path
                        fill="url(#deviconGithubcodespaces2)"
                        d="M110.25 126.97a4.45 4.45 0 0 1-5.078-.864c1.648 1.647 6.45.48 6.45-1.85V59.494c0-2.33-4.802-3.497-6.45-1.85a4.45 4.45 0 0 1 5.078-.863l14.717 5.093a4.47 4.47 0 0 1 2.53 4.023v51.956c0 1.716-.984 3.28-2.53 4.024z"
                      ></path>
                    </svg>
                  </a>
                  
                  <a href="">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 256 256"
                    >
                      <g fill="none">
                        <rect
                          width={256}
                          height={256}
                          fill="#fff"
                          rx={60}
                        ></rect>
                        <rect
                          width={256}
                          height={256}
                          fill="#0a66c2"
                          rx={60}
                        ></rect>
                        <path
                          fill="#fff"
                          d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4"
                        ></path>
                      </g>
                    </svg>
                  </a>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
