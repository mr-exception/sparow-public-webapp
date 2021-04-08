import React from "react";
import NavBar from "./components/NavBar";
import BreadCrumb from "../../ui-kit/BreadCrumb/BreadCrumb";
import Styles from "./Layout.module.scss";
import Space from "ui-kit/Space";
interface IProps {
  children: any;
  location: { name: string; route: string }[];
}

const Layout: React.FC<IProps> = ({ children, location }: IProps) => {
  return (
    <div className={Styles.main}>
      <NavBar />
      <BreadCrumb location={location} />
      <Space height="45px" />
      {children}
    </div>
  );
};

export default Layout;
