import React, { useEffect, useState } from "react";
import "../styles/Education.css";

interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  description: string;
}

const Education: React.FC = () => {
  const [educationList, setEducationList] = useState<EducationItem[]>([]);

  useEffect(() => {
    fetch("/data/education.json")
      .then((response) => response.json())
      .then((data) => setEducationList(data.education));
  }, []);

  return (
    <section className="education container">
      <h2 className="section-title">Education</h2>
      <div className="education-timeline">
        {educationList.map((edu, index) => (
          <div className="education-item" key={index}>
            <div className="education-header">
              <h3 className="degree">{edu.degree}</h3>
              <span className="duration">{edu.duration}</span>
            </div>
            <p className="institution">{edu.institution}</p>
            <p className="description">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
