import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Services</span>
        <span></span>
        <spane>
        With my experience in 
        <span style={{ color: '#ff0000', fontSize: 15, fontWeight: 600 }}> AutoCad</span>
        , I can create accurate and precise 
        <br />
        2D and 3D drawings that meet your project specifications. 
        <br />
        From simple floor plans to complex engineering designs,
        <br />
        I can deliver quality work on time and within budget.

        <br />
        <br />
        As a
        <span style={{ color: '#0066ff', fontSize: 15, fontWeight: 600 }}> Revit </span>
        expert, I can help you with all aspects of
        <br />
        building information modeling (BIM) From creating detailed
        <br />
        architectural models to coordinating with engineers
        <br/>
        and contractors, I can provide you with customized solutions
        <br/>
        that improve your workflow and project outcomes.

        <br />
        <br />
        
        <span style={{ color: '#007399', fontSize: 15, fontWeight: 600 }}> 3ds Max </span>
        is my tool of choice for creating stunning
        <br />
        visualizations, animations, and 3D models.
        <br />
        Whether you need photorealistic renderings or interactive
        <br/>
        virtual reality experiences, I can provide you with
        <br/>
        high-quality deliverables that showcase your designs
        <br />
        in the best possible light.

        <br/>
        <br />
  
        <span style={{ color: '#ffcc00', fontSize: 15, fontWeight: 600 }}>Enscape </span>
        is a powerful real-time rendering tool that allows
        <br />
        me to create immersive 3D walkthroughs and visualizations.
        <br />
        With my proficiency in Enscape, I can bring your
        <br/>
        designs to life and help you communicate your vision
        <br/>
        effectively to clients and stakeholders.
        <br />
        <br />

        <span style={{ color: '#0033cc', fontSize: 15, fontWeight: 600 }}>V-Ray </span>
        is a popular rendering engine tshat I use to create high-quality and realistic 3D visuals.
        <br />
        With my skills in V-Ray, I can produce stunning renderings that showcase the
        <br />
        details, textures, and lighting of your designs in a way that captivates your audience.
        </spane>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Photoshop, Adobe Illustrator"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={" WordPress, Elementor, HTML5, CSS with Bootstrap, JavaScript"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
