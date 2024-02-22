import "../styling/footer.css";
import footerImage from "../images/footer.png";

import React from "react";

export default function footer() {
  const footerStyle = {
    backgroundImage: `url(${footerImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return <div className="footer" div style={footerStyle}></div>;
}
