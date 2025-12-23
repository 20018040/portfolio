import React from "react";

interface Props {
  //   links?: string[];
  names: string[];
}
const Navbar = ({ names }: Props) => {
  return (
    <nav
      className="navbar navbar-expand-lg w-100 m-2 rounded-3"
      style={{ backgroundColor: "#130D1C" }}
    >
      <div className="container-fluid ">
        {/* remove side padding */}
        <ul className="navbar-nav me-auto w-100">
          {names.map((name, idx) => (
            <li className="nav-item" key={idx}>
              <a
                className="nav-link text-white "
                href="#"
                style={{ fontSize: "25px" }}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
