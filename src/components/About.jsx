import React from "react";
//import ScriptTag from "react-script-tag";

import "./about.css";
import css from "../assets/images/css.webp";
import mohit from "../assets/images/MOHIT.webp";
import js from "../assets/images/js.webp";
import html from "../assets/images/html.webp";
import cssback from "../assets/images/cssback.webp";
import ExpandingDetails from "./subComponents/ExpandingDetails";

function About() {
  return (
    <div className="intro">
      <div className="hello">
        <div>
          <div className="name">
            -
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ico"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              />
            </svg>
            Mohit Prasad Sah
          </div>
          <h1 className="typed trans">
            Hello,
            <br />I am Mohit
            <span
              className="typer"
              id="main"
              data-words=" Mohit, Web Developer"
              data-delay="100"
              data-deletedelay="1000"
            ></span>
            <span className="cursor" data-owner="main"></span>
          </h1>
          {/* <ScriptTag
            type="text/javascript"
            async
            src="https://unpkg.com/typer-dot-js@0.1.0/typer.js"
          /> */}
        </div>
        <button
          className="Resume-btn"
          onClick={() => {
            window.open("/Mohit Resume(1).pdf");
            return true;
          }}
        >
          Resume
        </button>
      </div>
      <div className="img-container">
        <div className="img-box">
          <img className="trans front" src={css} alt="addd" />
          <img className="trans mohit" src={mohit} alt="" />

          <img className="trans back ijs" src={js} alt="" />
          <img className="trans back ihtml" src={html} alt="" />
          <img className="trans back icss" src={cssback} alt="" />
        </div>
      </div>
      <div className="more-details">
        <ExpandingDetails heading="Education">
          <div>
            <div>
              <p>
                <strong class="ql-font-comic-sans">B.Tech</strong> 2019-Present
              </p>
              <p>
                <strong class="ql-font-comic-sans">
                  Computer Science and Engineering{" "}
                </strong>{" "}
              </p>
              <p>
                <span class="ql-font-comic-sans">Sarala Birla University</span>
              </p>
              <p>
                <u class="ql-font-comic-sans">CGPA - 9.11/10.0</u>
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong class="ql-font-comic-sans">Intermediate</strong> (CBSE)
                2018
              </p>
              <p>
                <span class="ql-font-comic-sans">
                  Army Public School, Ranchi
                </span>
              </p>
              <p>
                <u class="ql-font-comic-sans">Percentage – 86.20%</u>
              </p>
              <p>
                <br />
              </p>
              <p>
                <strong class="ql-font-comic-sans">Matriculate</strong> (ICSE)
                2016
              </p>
              <p>
                <span class="ql-font-comic-sans">
                  St. Francis School, Ranchi
                </span>
              </p>
              <p>
                <u class="ql-font-comic-sans">Percentage – 90.80%</u>
              </p>
            </div>
            <hr />
          </div>
        </ExpandingDetails>
        <ExpandingDetails />
        <ExpandingDetails />
      </div>
    </div>
  );
}
export default About;
