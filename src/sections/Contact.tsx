import React from "react";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
const Contact = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "100px",
        paddingLeft: "50px",
      }}
    >
      <div className={`p-6 rounded-lg shadow-lg bg-gray-800 text-white `}>
        Contact Me On
        <a
          href="https://github.com/20018040"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jeff-kim-572144309/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLinkedin />
        </a>
        <a href="mailto:JeffKim4800@gmail.com">
          JeffKim4800@gmail.com
          <SiGmail />
        </a>
      </div>
    </div>
  );
};

export default Contact;
