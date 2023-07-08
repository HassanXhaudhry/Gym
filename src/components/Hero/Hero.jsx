import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import {motion} from "framer-motion";
import NumberCounter from "number-counter";

const Hero = () => {
  const transition={type:"spring", duration:2}
 const mobile=window.innerWidth<=768? true: false;
  return (
    <div className="hero" id="hero">
    <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        <div className="the-best-ad">
        <motion.div
        initial={{left: mobile?"165px": "238px"}}
        whileInView={{left:"7.5px"}}
        transition={{...transition, type:"tween"}}
        ></motion.div>
          
          <span>The Best Fitness Club In The Town</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            In here we will help you to shape your body and live up your life to
            fullest
          </div>
        </div>

        <div className="figures">
          <div>
            <span>
            <NumberCounter end={140} start={100} delay="4" preFix="+"/>
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
            <NumberCounter end={978} start={800} delay="4" preFix="+"/>
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
            <NumberCounter end={50} start={0} delay="1" preFix="+"/>
            </span>
            <span>fitness programs</span>
          </div>
        </div>

        <div className="hero-button">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>

        <motion.div 
        initial={{right:"-1rem"}}
        whileInView={{right:"4rem"}}
        transition={transition}
        className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
        initial={{right:"11rem"}}
        whileInView={{right:"20rem"}}
        transition={transition}
        src={hero_image_back} alt="" className="hero-image-back" />

        <div className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span><span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
