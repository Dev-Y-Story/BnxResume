import React, { useEffect, useState } from "react";
import "../styles/AboutMe.css";

interface AboutMeData {
  about: string;
}

const AboutMe: React.FC = () => {
  const [data, setData] = useState<AboutMeData | null>(null);

  useEffect(() => {
    fetch("/data/aboutme.json")
      .then((response) => response.json())
      .then((aboutData) => setData(aboutData));
  }, []);

  if (!data) return null;

  return (
    <section className="about-me container">
      <h2>About Me</h2>
      <p>{data.about}</p>
    </section>
  );
};

export default AboutMe;
