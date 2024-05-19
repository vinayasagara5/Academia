import React from "react";
import "./About.css";
import about_image from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_image} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Narturing Tommorrow's Leaders Today</h2>
        <p>
          Emabark on a transformative educationl journey with our university's
          comprehensive edcation programs. Our cutting-edge curriculum is
          designed to empower students with the knowledge, skills, and
          experiences needed to excel in the dunamic field of education.
        </p>
        <p>
          With a focus on innovation,hands on learning, and personalized
          mentorship ,our programs prepare aspiring educators to make a
          meaningful impact in classrooms, schools, and communities.
        </p>
        <p>
          Whether you aspire to become a teacher, administrator, counselor, or
          education leader, our diverse range of programs offers the perfect
          pathway to acheive you goals and unlock your full potential in shaping
          the future of education
        </p>
      </div>
    </div>
  );
};

export default About;
