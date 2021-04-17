import React, { useEffect, useState } from "react";
import Styles from "./DropDown.module.scss";
import { Link as RouteLink, useLocation } from "react-router-dom";

const DropDown: React.FC<IDropDownProps> = ({
  children,
  list,
  classNames = "",
}: IDropDownProps) => {
  const [visiblity, set_visibility] = useState(false);
  let dropDownContainer;
  let overlay;

  const location = useLocation();
  useEffect(() => {
    set_visibility(false);
  }, [location]);

  const toggleDropDown = () =>
    !visiblity ? set_visibility(true) : set_visibility(false);
  const handleOutSideClick = () => set_visibility(false);

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
  //   set_visibility(false);
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
