// import React from "react";
import {
//   RiArrowRightUpLine,
  RiDownloadLine,
  RiLinkedinFill,
  RiGithubLine,
  RiCodeBoxFill,
} from "@remixicon/react";
import profile_img from "../../assets/images/about/ProfilePic.jpg";
import SlideUp from "../animations/slideUp";
const About = () => {
  return (
    <section id="about" className="about-area">
      <div className="container">
        <div className="row align-items-center ">
          {/*  START ABOUT IMAGE DESIGN AREA  */}
          <div className="col-lg-5">
            <SlideUp>
              <div className="about-image-part">
                <img src={profile_img} alt="About Me" />
                <h2>Pranjal Naman</h2>
                <div className="about-btn btn-one text-center">
                  <a href="#contact" smooth={true} offset={0} duration={500}><h6>Available for Work</h6></a>
                  <div className="circle pulse color-pulse"></div>
                </div>
                <div className="about-social text-center">
                  <ul>
                    <li>
                      <a href="https://www.linkedin.com/in/pranjal-naman-6b141329a/">
                        <i>
                          <RiLinkedinFill size={20} />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/Pranjal1128">
                        <i>
                          <RiGithubLine size={20} />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="https://leetcode.com/u/Cypherxyzz/">
                        <i>
                          <RiCodeBoxFill size={20} />
                        </i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </SlideUp>
          </div>
          {/*  END ABOUT IMAGE DESIGN AREA  */}
          {/*  START ABOUT TEXT DESIGN AREA  */}
          <div className="col-lg-7">
            <div className="about-content-part">
              <SlideUp>
                <h2>
                  Hello,
                  <br /> I’m Pranjal Naman,
                  <br /> <span>Web Developer</span>
                </h2>
                <p>
                  Dedicated engineering student at NIT Raipur with a strong
                  foundation in coding, problem-solving, and full-stack
                  development. Skilled in ReactJS, C++, JavaScript and TypeScript, with a
                  passion for building innovative web solutions. Proven
                  achievements in coding competitions and hands-on project
                  experience.
                </p>
                <div className="hero-btns">
                  <a 
                    href="/PRANJAL_RESUME_SDE.pdf" // Path to your resume file
                    download="PRANJAL_RESUME.pdf" // Name of the file when downloaded
                    className="theme-btn">
                    Download CV{" "}
                    <i>
                      <RiDownloadLine size={16} />
                    </i>
                  </a>
                </div>
                {/* <div className="hero-btns">
                  <div> 
                    <span style={{fontSize: '20px', fontWeight: '600'}}> Skills : </span>
                    <span>C++ , JavaScript, TypeScript, SQL, React JS, Next JS, Node JS, Express JS</span>
                  </div>
                </div> */}
              </SlideUp>
              {/* <SlideUp>
                                <ul className="list-style-one two-column">
                                    <li><i><RiArrowRightUpLine size={18} /></i> Logo Design</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> Social Marketing</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> Branding Identity</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> Digital Marketing</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> Web Design</li>
                                    <li><i><RiArrowRightUpLine size={18} /></i> Product Design</li>
                                </ul>
                  </SlideUp> */}
            </div>
          </div>
          {/*  END ABOUT TEXT DESIGN AREA  */}
        </div>
      </div>
    </section>
  );
};

export default About;
