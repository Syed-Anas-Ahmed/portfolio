import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";

import portfolio1 from "../../img/donia/portfolio1.png";
import portfolio3 from "../../img/donia/portfolio3.png";
import portfolio4 from "../../img/donia/portfolio4.png";
import portfolio5 from "../../img/donia/portfolio5.png";
import portfolio6 from "../../img/donia/portfolio6.png";
import portfolio7 from "../../img/donia/portfolio7.png";
import portfolio8 from "../../img/donia/portfolio8.png";
import portfolio9 from "../../img/donia/portfolio9.png";
import portfolio10 from "../../img/donia/portfolio10.png";
import portfolio11 from "../../img/donia/portfolio11.png";
import portfolio13 from "../../img/donia/portfolio13.png";
import portfolio14 from "../../img/donia/portfolio14.png";
import portfolio15 from "../../img/donia/portfolio15.png";
import portfolio16 from "../../img/donia/portfolio16.png";
import portfolio17 from "../../img/donia/portfolio17.png";
import portfolio18 from "../../img/donia/portfolio18.png";

const Portfolio = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>


        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Latest Works</span>
            <p style={{marginTop: "5px"}}>Perfect solution for Architect Designs</p>
          </div>
          <span className="secondaryText">Explore More Works</span>
        </motion.div>


        <div className={`flexCenter ${css.showCase}`}>
            <motion.img variants={fadeIn("up", "tween", .5, .6)} src={portfolio1} alt="project" />
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src={portfolio3} alt="project" />
            <motion.img variants={fadeIn("up", "tween", .5, .6)} src={portfolio4} alt="project" />
            <motion.img variants={fadeIn("up", "tween", .7, .6)} src={portfolio5} alt="project" />
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src={portfolio6} alt="project" />
            <motion.img variants={fadeIn("up", "tween", .5, .6)} src={portfolio7} alt="project" />
            <motion.img variants={fadeIn("up", "tween", .7, .6)} src={portfolio8} alt="project" />
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src={portfolio9} alt="project" />
            <motion.img variants={fadeIn("up", "tween", .5, .6)} src={portfolio10} alt="project" />
            <motion.img variants={fadeIn("up", "tween", .7, .6)} src={portfolio11} alt="project" />
            <motion.img variants={fadeIn("up", "tween", .5, .6)} src={portfolio13} alt="project" />
            <motion.img variants={fadeIn("up", "tween", .7, .6)} src={portfolio14} alt="project" />
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src={portfolio15} alt="project" />
            <motion.img variants={fadeIn("up", "tween", .5, .6)} src={portfolio16} alt="project" />
            <motion.img variants={fadeIn("up", "tween", .7, .6)} src={portfolio17} alt="project" />
            <motion.img variants={fadeIn("up", "tween", .9, .6)} src={portfolio18} alt="project" />
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
