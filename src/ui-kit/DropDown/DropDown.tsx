import React, { useState } from "react";
import Styles from "./DropDown.module.scss";
import { Link as RouteLink } from "react-router-dom";

const DropDown: React.FC<IDropDownProps> = ({
  children,
  list,
  classNames = "",
}: IDropDownProps) => {
  const [visiblity, setVisiblity] = useState(false);
  let dropDownContainer;
  let overlay;

  const toggleDropDown = () =>
    !visiblity ? setVisiblity(true) : setVisiblity(false);
  const handleOutSideClick = () => setVisiblity(false);

  if (visiblity) {
    dropDownContainer = (
      <ul className={Styles.dropDownWrapper}>
        {list.map((item, index) => {
          const content = (
            <li className={Styles.dropDownItem} key={index}>
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
    overlay = (
      <div onClick={handleOutSideClick} className={Styles.overlay}></div>
    );
  } else {
    dropDownContainer = null;
    overlay = null;
  }

  // React.useEffect(() => {
  //   setVisiblity(false);
  // }, [location]);

  return (
    <>
      {overlay}
      <div style={{ position: "relative" }} className={classNames}>
        <div onClick={toggleDropDown}>{children}</div>
        {dropDownContainer}
      </div>
    </>
  );
};
export default DropDown;
