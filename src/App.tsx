// App.tsx
import React from "react";
import "./styles/App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Education from "./components/Education";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <AboutMe />
      <Skills />
      <WorkExperience />
      <Education />
    </div>
  );
};

export default App;
