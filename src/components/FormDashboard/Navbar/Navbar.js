import React from "react";
import "./style.css";
import { HiShoppingCart } from "react-icons/hi2";
import { MdAddLocationAlt } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li>
          <span>
            <HiShoppingCart />
          </span>
        </li>
        <li>
          <span>
            <MdAddLocationAlt />
          </span>
        </li>
        <li>
          <span>
            <CgProfile />
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
