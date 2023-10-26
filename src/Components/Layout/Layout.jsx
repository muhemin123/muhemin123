import React from 'react'
import LayoutStyle from "./Layout.module.css";
// import { useNavigate } from "react-router-dom";

const Layout = () => {
  return (
    <div className={LayoutStyle.LayoutContainer}>
      <div className={LayoutStyle.mainLayout}>
        <ul>
          <li>Appointments</li>
          <li>Add Members</li>
          <li>Add Clinic</li>
          <li>Clinic Information</li>
          <li>Member Information</li>
          <li>Patient Registeration</li>
          <li>Patient details</li>
          <li>Issue Appointment</li>
        </ul>
      </div>
    </div>
  )
}

export default Layout
