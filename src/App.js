import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './Components/Navbar/Navbar';
// import { Router, Route, Routes } from "react-router-dom";
// import Layout from './Components/Layout/Layout';
// import Appointment from './Pages/Appointment/Appointment';

function App() {
  return (
    <ChakraProvider>
      <Navbar />
     
    </ChakraProvider>
  );
}

export default App;
