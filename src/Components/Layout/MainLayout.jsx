import React from 'react';
import MainLayoutStyle from "./MainLayout.module.css";
import Appointment from '../../Pages/Appointment/Appointment';

const MainLayout = () => {
  return (
    <div style={{width:"100%"}}>
      <Appointment/>
    </div>
  )
}

export default MainLayout
