import React, { useState } from "react";

import "./skills.css";

const Skills = () => {
  let body = document.body;
  let tilted = false;

  let toggleTilt = function () {
    tilted = !tilted;

    if (tilted) body.classList.add("details");
    else body.classList.remove("details");
  };

  body.addEventListener("click", toggleTilt);
  body.addEventListener("touchstart", toggleTilt);
  //if (location.pathname.match(/fullcpgrid/i)) setTimeout(toggleTilt, 1000);
  return (
    <React.Fragment>
      <div class="background" id="background">
        <div class="card">
          <div class="photo"></div>
          <h2>STEPS</h2>
          <p>THIS WEEK</p>
          <div class="chart">
            <div class="bar bar1">
              <span>20,000</span>
            </div>
            <div class="bar bar2">
              <span>10,000</span>
            </div>
            <div class="bar bar3">
              <span>15,000</span>
            </div>
            <div class="bar bar4">
              <span>24,000</span>
            </div>
            <div class="bar bar5">
              <span>7,000</span>
            </div>
            <div class="bar bar6">
              <span>7,000</span>
            </div>
            <div class="bar bar7">
              <span>10,000</span>
            </div>
          </div>
          <h3>93,000</h3>
        </div>

        <div class="info">Click to toggle details view</div>
      </div>
    </React.Fragment>
  );
};

export default Skills;
