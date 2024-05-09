import React from "react";
import "./style.css";
import { FaHome, FaShippingFast } from "react-icons/fa";
import { IoIosChatboxes } from "react-icons/io";
import { MdOutlineNetworkCheck } from "react-icons/md";
import { TiSpanner } from "react-icons/ti";
import { FaShopify } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { RiBillLine } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";

const SideNav = () => {
  return (
    <ul className="sideNav">
      <li>
        <span>
          <FaHome />
        </span>
        Home
      </li>
      <li>
        <span>
          <IoIosChatboxes />
        </span>
        Support
      </li>
      <li>
        <span>
          <MdOutlineNetworkCheck />
        </span>
        Internet Account Details
      </li>
      <li>
        <span>
          <TiSpanner />
        </span>
        My Services
        <span><IoMdArrowDropdown /></span>
      </li>
      <li>
        <span>
          <FaShopify />
        </span>
        Shop
      </li>
      <li>
        <span><IoPerson /></span>
        My Account<span></span>
      </li>
      <li>
        <span><RiBillLine /></span>
        Billing Information</li>
      <li>
        <span><FaShippingFast /></span>
        Counter Tracking</li>
    </ul>
  );
};

export default SideNav;
