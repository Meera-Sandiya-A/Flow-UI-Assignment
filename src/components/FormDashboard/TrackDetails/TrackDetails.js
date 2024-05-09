import React from "react";
import "./style.css";

const TrackDetails = () => {
  return (
    <nav className="track-details">
      <ul className="track-details-menu">
        <li>
          <p style={{ color: "blueviolet" }}>Fibe Application Form</p>
          <span style={{ color: "blueviolet", backgroundColor: "#fffff8" }}>
            1
          </span>
        </li>
        <li>
          <p>Debit Order Mandate</p>
          <span>2</span>
        </li>
        <li>
          <p>Shipping Address</p>
          <span>3</span>
        </li>
        <li>
          <p>FICA Documents</p>
          <span>4</span>
        </li>
        <li>
          <p>Switching ISP</p>
          <span>5</span>
        </li>
        <li>
          <p>Summary of charges</p>
          <span>6</span>
        </li>
      </ul>
    </nav>
  );
};

export default TrackDetails;
