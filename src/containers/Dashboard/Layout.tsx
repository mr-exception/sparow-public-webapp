import React from "react";
import NavBar from './NavBar';
import BreadCrumb from './BreadCrumb'
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
