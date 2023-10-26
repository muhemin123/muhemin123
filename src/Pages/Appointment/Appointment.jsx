import React from 'react';
import AppointStyle from "./Appointment.module.css";
import UseableComponentbackground from '../../Components/UseableComponentbackground';

const Appointment = () => {
  return (
    <div className={AppointStyle.container}>
      <div className={AppointStyle.end_container}>
        <select className={AppointStyle.select}>
          <option value="selectclinic">Select Clinic</option>
          <option value="nic1">123456</option>
          <option value="nic2">123455</option>
        </select>
      </div>
      {/* use useable component here */}
      <UseableComponentbackground>
        <h3>Hello testing here</h3>
      </UseableComponentbackground>
    </div>
  )
}

export default Appointment
