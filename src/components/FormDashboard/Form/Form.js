import React, { useState } from "react";
import "./style.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


  return (
    <div className="form-main">
      <div className="form-container">
        <form className="form-grid">
          <div>
            <input type="name" placeholder="Title" />
            <input
              type="name"
              placeholder="First Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input type="Date" placeholder="Date of Birth" />
            <input
              type="tel"
              placeholder="Primary Contact Number"
              name="contact"
            />
            <input
              type="tel"
              placeholder="Mobile No"
              name="mobile"
            />
            <input type="Address" placeholder="Address Line 1" />
          </div>

          <div>
            <div className="radioButton">
              <label>Gender</label>
              <input type="radio" placeholder="male" />
              <label>Male</label>
              <input type="radio" placeholder="female" />
              <label>Female</label>
            </div>

            <input type="name" placeholder="Last Name" />
            <input type="number" placeholder="ID/Passport Number" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input type="tel" placeholder="Landline(Optional)" />
            <input type="address" placeholder="Address Line2" />
          </div>
        </form>
      </div>
      <button className="form-button">
        Next
      </button>

      <div style={{display: "flex", gap: "30px"}}>
        <p>name: {name}</p>
        <p>email: {email}</p>
      </div>
    </div>
  );
};

export default Form;
