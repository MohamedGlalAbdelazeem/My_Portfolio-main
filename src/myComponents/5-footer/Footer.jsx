import "./footer.css";
import { useState, useEffect } from "react";
const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  return (
    <footer>
      <img style={{ width: "15%" }} src="/animations/lamp.gif" />
      <h5 id="currentYear">
        Made With Love By Eng Mohamed Glal © {currentYear}
      </h5>
      <h5 className="ples">
        <img src="/animations/plestine.gif" alt="free plestine" />
        <br />
        <p>Free palestine</p>
      </h5>
    </footer>
  );
};

export default Footer;
