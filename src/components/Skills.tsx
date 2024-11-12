import React, { useEffect, useState } from "react";
import "../styles/Skills.css";

interface SkillCategory {
  category: string;
  items: string[];
}

const Skills: React.FC = () => {
  const [skills, setSkills] = useState<SkillCategory[]>([]);

  useEffect(() => {
    fetch("/data/skills.json")
      .then((response) => response.json())
      .then((data) => setSkills(data.skills));
  }, []);

  return (
    <section className="skills section container">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        {skills.map((skillGroup, index) => (
          <div className="skill-group" key={index}>
            <h3>{skillGroup.category}</h3>
            <p>{skillGroup.items.join(", ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
