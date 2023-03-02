import React from "react";
import { workExp } from "../../utils/data";
import css from "./Work.module.scss";
import {motion} from 'framer-motion'
import { draw, fadeIn, slideIn, staggerChildren, textVariant2, zoomIn } from "../../utils/motion";

import AutoCad from "../../img/autocad.svg";
import ThreeDs from "../../img/3dsMax.png";
import Enscape from "../../img/enscape.svg";
import Revit from "../../img/revit.png";
import Vray from "../../img/v-ray.svg";


const Work = () => {
  return (

    <motion.section 
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
    <a className="anchor" id="work"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>
        {/* heading */}
        <span className="primaryText yPaddings">My Work Experience</span>

        <div className={`flexCenter ${css.experiences}`}>
          {workExp.map((exp, i) => {
            return (
              <motion.div variants={textVariant2} key={i} className={`flexCenter ${css.exp}`}>
                <div className={css.post}>
                  <h1>{exp.place}</h1>
                  <p>{exp.tenure}</p>
                </div>
                <div className={css.role}>
                  <h1>{exp.role}</h1>
                  <p>{exp.detail}</p>
                </div>
              </motion.div>
            );
          })}


          <motion.div variants={zoomIn(1, 1)} className={css.progressbar}>
            <motion.div variants={fadeIn("down", "tween", 2, 1.5)} className={css.line}></motion.div>
            <div><div className={css.circle} style={{background: "#286F6C"}}></div></div>
            <div><div className={css.circle} style={{background: "#F2704E"}}></div></div>
            <div><div className={css.circle} style={{background: "#EEC048"}}></div></div>
          </motion.div>

        </div>
      </div>    

      <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span>
            Worked with All these
          </span>
          <span>Tools & Programs</span>
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



    </motion.section>

    

    
  );
};

export default Work;
