import React from "react";
import Styles from "./NavBar.module.scss";
import Col from "ui-kit/Col";
import Row from "ui-kit/Row";
import Image from 'ui-kit/Image'
import Link from 'ui-kit/Link'
import DropDown from 'ui-kit/DropDown'
import Avatar from 'ui-kit/Avatar'
import {FaSignOutAlt} from 'react-icons/fa'
const Component:React.FC = () => {
  const listItems = [
    {"label":"profile","url":"/"},
    {"label":"settings","url":"/"},
    {"label":"developement","url":"/"},
    {"label":"logout","url":"/","icon":<FaSignOutAlt/>}
  ]
  return (
    <nav className={Styles.nav}>
      <Row align="center" verticalAlign="center" style={{'background':"white"}}>
        <Col lg={8} md={10} sm={12} xs={12}>
          <div className={Styles.navContainer}>
            <div className={Styles.logoContainer}>
              <div className={Styles.logo}>
                <Link url="dashboard">
                  <Image 
                  source="/assets/sparrow-logo.png"
                  alt="logo"
                  className={Styles.logoImage}></Image>
                </Link>
              </div>
            </div>
            <div className={Styles.navAvatar}>
              <DropDown list={listItems}>
                <Avatar size={45} round={true}>test</Avatar>
              </DropDown>
            </div>
          </div>
        </Col>
      </Row>
    </nav>
  );
};

export default Component;