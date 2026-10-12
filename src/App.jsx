import React from "react";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import About from "./components/About";
import SelectedProjects from "./components/SelectedProjects";
import Credentials from "./components/Credentials";
import Credits from "./components/Credits";
import NavBar from "./components/NavBar";
import "./App.css";
import "./styles/Global.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="content">
        <Intro />
        <About />
        <Experience />
        <SelectedProjects />
        <Credentials />
        <Credits />
      </div>
    </div>
  );
}

export default App;
