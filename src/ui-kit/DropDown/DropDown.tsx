import React, { useState } from "react";
import Styles from "./DropDown.module.scss";
import { Link as RouteLink, useLocation } from "react-router-dom";
interface IDropDownProps {
  children: any;
  list: IListItem[];
  onClick?: () => void;
}

const DropDown: React.FC<IDropDownProps> = ({
  children,
  list,
}: IDropDownProps) => {
  const [visiblity, setVisiblity] = useState(false);
  let dropDownContainer;
  let overlay;

  const location = useLocation();
  const toggleDropDown = () =>
    !visiblity ? setVisiblity(true) : setVisiblity(false);
  const handleOutSideClick = () => setVisiblity(false);

  if (visiblity) {
    dropDownContainer = (
      <ul className={Styles.dropDownWrapper}>
        {list.map((item, index) => (
          <RouteLink
            key={index}
            to={item.url}
            style={{ color: "#8a8989", textDecoration: "none" }}
          >
            <li className={Styles.dropDownItem} key={index}>
              <div className={Styles.text}>{item.label}</div>
              {item.icon ? <div className={Styles.icon}>{item.icon}</div> : ""}
            </li>
          </RouteLink>
        ))}
      </ul>
    );
    overlay = (
      <div onClick={handleOutSideClick} className={Styles.overlay}></div>
    );
  } else {
    dropDownContainer = null;
    overlay = null;
  }

  React.useEffect(() => {
    setVisiblity(false);
  }, [location]);

  return (
    <>
      {overlay}
      <div style={{ position: "relative" }}>
        <div onClick={toggleDropDown}>{children}</div>
        {dropDownContainer}
      </div>
    </>
  );
};
export default DropDown;
