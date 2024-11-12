import React, { useEffect, useState } from "react";
import "../styles/Header.css";

interface HeaderData {
  name: string;
  location: string;
  phone: string;
  email: string;
}

const Header: React.FC = () => {
  const [data, setData] = useState<HeaderData | null>(null);

  useEffect(() => {
    fetch("/data/header.json")
      .then((response) => response.json())
      .then((headerData) => setData(headerData));
  }, []);

  if (!data) return null;

  return (
    <header className="header container">
      <div className="header-content">
        <div className="header-title">
          <div className="header-initials">HY</div>
          <h1>{data.name}</h1>
        </div>
        <div className="contact-info">
          <p>
            <span role="img" aria-label="location">
              📍
            </span>{" "}
            {data.location}
          </p>
          <p>
            <span role="img" aria-label="phone">
              📞
            </span>{" "}
            {data.phone}
          </p>
          <p>
            <span role="img" aria-label="email">
              ✉️
            </span>{" "}
            {data.email}
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
