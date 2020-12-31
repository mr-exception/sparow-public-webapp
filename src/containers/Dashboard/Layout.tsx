import React from "react";

import NavBar from './NavBar';
import Footer from './Footer';
import {IDashboardProps} from './props.interface';

const Component:React.FC<IDashboardProps> = ({children}:IDashboardProps) => {
  return (
    <>
      <NavBar/>
      {children}
      <Footer/>
    </>
  );
};

export default Component;
