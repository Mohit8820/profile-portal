import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavLinks from "./components/LeftPanel";
import About from "./components/About";
import Work from "./components/Work";
import Skills from "./components/Skills";
import ExpandingDetails from "./components/subComponents/ExpandingDetails";
// import Header from "./Header";
// import About from "./About.jsx";
// import Work from "./Work";

function App() {
  return (
    <Router>
      <div className="App">
        <NavLinks />

        <div className="pages">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/works" element={<Work />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/mentor" element={<ExpandingDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
