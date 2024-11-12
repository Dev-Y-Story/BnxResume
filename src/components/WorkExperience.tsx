import React, { useEffect, useState } from "react";
import "../styles/WorkExperience.css";

interface Experience {
  position: string;
  company: string;
  duration: string;
  details: string[];
}

const WorkExperience: React.FC = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    fetch("/data/work_experience.json")
      .then((response) => response.json())
      .then((data) => setExperiences(data.experiences));
  }, []);

  return (
    <section className="work-experience container">
      <h2 className="section-title">Work History</h2>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div className="experience-item" key={index}>
            <div className="experience-header">
              <h3 className="position">{exp.position}</h3>
              <span className="duration">{exp.duration}</span>
            </div>
            <p className="company">{exp.company}</p>
            <ul className="details">
              {exp.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
