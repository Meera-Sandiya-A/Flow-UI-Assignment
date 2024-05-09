import React from "react";
import SideNav from "./SideNav/SideNav";
import Form from "./Form/Form";
import Footer from "./Footer/Footer";
import "./style.css";
import Navbar from "./Navbar/Navbar";
import TrackDetails from "./TrackDetails/TrackDetails";

const FormDashboard = () => {
  return (
    <div className="dashboard-container">
      <Navbar />
      <TrackDetails />
      <div className="dashboard-grid">
        <SideNav />
        <Form />
      </div>
      <Footer />
    </div>
  );
};

export default FormDashboard;
