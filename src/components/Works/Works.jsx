import React from "react";
import "./Works.css";

import AutoCad from "../../img/autocad.svg";
import ThreeDs from "../../img/3dsMax.png";
import Enscape from "../../img/enscape.svg";
import Revit from "../../img/revit.png";
import Vray from "../../img/v-ray.svg";

import { motion } from "framer-motion";

const Works = () => {
  // context

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <spane>
            Have worked on the following Platform and Technologies
          </spane>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={AutoCad} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={ThreeDs} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Revit} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Enscape} style={{width: 170, height:170}} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Vray} style={{width: 144, height:144}} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
