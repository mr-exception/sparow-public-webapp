import React from "react";
import NavBar from './NavBar';
import BreadCrumb from './BreadCrumb'
import Footer from './Footer';
import {IDashboardProps} from './props.interface';
import Styles from "./Dashboard.module.scss";

const Component:React.FC<IDashboardProps> = ({children}:IDashboardProps) => {
  return (
    <div className={Styles.main}>
      <NavBar/>
      <BreadCrumb url="/dashboard" label="Dashboard" />
      {children}
      <Footer/>
    </div>
  );
};

export default Component;
