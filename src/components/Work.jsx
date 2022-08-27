import * as React from "react";
import "./work.css";
import Calculator from "../assets/images/Calculator.webp";
import Simon from "../assets/images/Simon.webp";
import todo from "../assets/images/todo.webp";
const works = [
  {
    url: Calculator,
    title: "Calculator",
    width: "32%",
    link: "https://mohit8820.github.io/Calculator-1/",
  },
  {
    url: Simon,
    title: "Simon-Game",
    width: "32%",
    link: "https://mohit8820.github.io/Simon-Game/",
  },
  {
    url: todo,
    title: "To-Do",
    width: "32%",
    link: "https://hitmo-todo-list.herokuapp.com/",
  },
];
function open(url) {
  const win = window.open(url, "_blank");
  if (win != null) {
    win.focus();
  }
}

export default function Work() {
  return (
    <div className="work" id="work">
      <h1>Work</h1>
      <div className="work-border">
        {works.map((work) => (
          <React.Fragment
            //focusRipple
            key={work.title}
            // style={{
            //   width: work.width,
            // }}
          >
            <div
              className="work-item"
              onClick={() => open(work.link)}
              style={{
                backgroundImage: `url(${work.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center 40%",
              }}
            >
              <div className="back-drop"></div>
              <span>{work.title}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
