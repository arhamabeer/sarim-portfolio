import React from "react";
import aaa from "../assets/avat1.png";
import styles from "./component.module.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
import SideNav from "./sideNav";
import { useNavigate } from "react-router-dom";

const open = "<>  ";
const close = "  </>";
function LandingPage() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="overflow-hidden max-md:flex max-md:flex-col h-[100vh]">
        <div className={"max-md:hidden " + styles.curveBG} />
        <div
          className={
            styles.landingPic +
            " fixed w-2/6 max-md: flex self-center max-md:p-4"
          }
        >
          <img src={aaa} alt="avatarphoto" className="h-full" />
        </div>
        <div className="relative top-28 left-[40%] max-md:top-14 text-white max-md:left-0 max-md:items-center max-md:flex max-md:flex-col ">
          <span className="ml-[-40px] font-black  text-3xl hidden text-[#03388c]">
            {open}
          </span>
          <h1
            className={`font-black text-[#164ca1] text-5xl max-md:text-3xl ${styles.textStroke}`}
          >
            I'M SARIM NESAR.
          </h1>
          <h1 className="my-2  text-[#164ca1] text-4xl max-md:text-2xl font-black">
            GRAPHIC DESIGNER
          </h1>
          <span className="ml-[-40px] text-[#03388c] font-black  text-3xl hidden ">
            {close}
          </span>

          <p className="text-lg max-md:text-base mt-3 max-md:text-center w-2/4">
            <span className="text-[#164ca1] font-bold text-2xl max-md:text-lg">
              I’m a professional Graphics Designer, Video Editior, Social Media
              Platform Handler & Digital Marketer.
            </span>
            <br />
            In my Work Experience of 6 years, I've worked in Designing Engaging,
            Custom, Modern, and social media post designs for various kinds of
            businesses, Blogs, Education, Entertainment, Non-profit, Real
            Estate, Wedding, Portfolio Services, Legal, Saloon, Gym, Health &
            Fitness, E-commerce Stores & Printing work.{" "}
          </p>
          <div>
            <button
              onClick={() => navigate("/abt")}
              className={styles.landBtnAbt + " flex items-center mt-4"}
            >
              <span>ABOUT ME &nbsp;</span>
              <span className={styles.landBtnAbtSpan}>
                <AiOutlineArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
      <SideNav current={0} />
    </div>
  );
}

export default LandingPage;
