import React from "react";
import NavBar from './components/NavBar';
import BreadCrumb from './components/BreadCrumb'
import Styles from "./Layout.module.scss";
interface IProps {
  children: any;
}

const Layout:React.FC<IProps> = ({children}:IProps) => {
  return (
    <div className={Styles.main}>
      <NavBar/>
      <BreadCrumb url="/dashboard" label="Dashboard" />
      {children}
    </div>
  );
};

export default Layout;
