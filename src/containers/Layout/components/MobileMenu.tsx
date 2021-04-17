import React, { useState } from "react";
import Styles from "./MobileMenu.module.scss";
import { Link as RouteLink } from "react-router-dom";
import MenuBar from "./Menubar";
import { MdMenu, MdClose } from "react-icons/md";
interface IProps {
  list: Array<any>;
  onClick?: () => void;
}

const MobileMenu: React.FC<IProps> = ({ list }: IProps) => {
  const [visiblity, setVisiblity] = useState(false);
  let menuitem;
  let menuIcon = <MdMenu />;
  const toggleMenu = () =>
    !visiblity ? setVisiblity(true) : setVisiblity(false);

  if (visiblity) {
    menuitem = (
      <ul className={Styles.menuContainer}>
        {list.map((item, index) => {
          const content = (
            <li className={Styles.menuItem} key={index}>
              <div className={Styles.text}>{item.label}</div>
              {item.icon ? <div className={Styles.icon}>{item.icon}</div> : ""}
            </li>
          );
          if (item.url)
            return (
              <RouteLink
                key={index}
                to={item.url}
                style={{ color: "#8a8989", textDecoration: "none" }}
              >
                {content}
              </RouteLink>
            );
          if (item.onClick) {
            return (
              <div key={index} onClick={item.onClick}>
                {content}
              </div>
            );
          }
          return null;
        })}
      </ul>
    );
    menuIcon = <MdClose />;
  } else {
    menuitem = null;
    menuIcon = <MdMenu />;
  }

  return (
    <>
      <div onClick={toggleMenu} className="only-mobile">
        <MenuBar>{menuIcon}</MenuBar>
      </div>
      {menuitem}
    </>
  );
};
export default MobileMenu;
